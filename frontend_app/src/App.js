import React from "react";
import "./App.css";
import "./RecipeCards.css";
import Navbar from "./components/Navbar";
import RecipeDetail from "./components/RecipeDetail";
import AuthModal from "./components/AuthModal";
import RecipeForm from "./components/RecipeForm";
import useRecipeHubAppState from "./hooks/useRecipeHubAppState";
import images from "./assets/imageAssets";
import { useTheme } from "./hooks/ThemeContext";

// PUBLIC_INTERFACE
function App() {
  const { theme, toggleTheme } = useTheme();

  // Centralized app state (all logic, favorites, recipes, etc.)
  const {
    user, signIn, completeSignIn, signOut,
    page, setPage,
    showAuth, showForm, openAddForm, closeAddForm,
    search, setSearch,
    recipes, addRecipe,
    favorites, toggleFavorite,
    detailKey, viewRecipeDetail, closeRecipeDetail,
  } = useRecipeHubAppState();

  // If viewing a specific recipe, locate object
  const detailRecipe = detailKey ? recipes.find(r => r.key === detailKey) : null;

  // Compute visible recipes (+search) for 'browse', or just favorites for 'favorites'
  const recipeList = (page === "favorites")
    ? recipes.filter(r => favorites.has(r.key))
    : recipes.filter(r =>
        r.title.toLowerCase().includes(search?.toLowerCase() || "") ||
        r.desc?.toLowerCase().includes(search?.toLowerCase() || "")
      );

  // Keys of all loaded image assets (for add form image selection)
  const allAssetKeys = Object.keys(images);

  return (
    <div className="app-bg">
      <Navbar
        user={user}
        onSignIn={signIn}
        onSignOut={signOut}
        theme={theme}
        toggleTheme={toggleTheme}
        currentPage={page}
        setPage={setPage}
      />
      <div className="container">
        {page !== "detail" && (
          <div className="search-row">
            <input
              className="search-input"
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search for recipes..."
            />
            {user && page === "submit" ? null :
              page === "submit"
                ? <div className="submit-message">Sign in to submit a recipe.</div>
                : <button className="btn-primary" style={{marginLeft:18}} onClick={openAddForm} disabled={!user}>
                  + Add Recipe
                </button>
            }
          </div>
        )}
        {/* Modal routes */}
        {showAuth && <AuthModal onAuth={completeSignIn} onCancel={() => setPage("browse")} />}
        {showForm && (
          <RecipeForm
            onSubmit={addRecipe}
            onCancel={closeAddForm}
            assetKeys={allAssetKeys}
          />
        )}
        {/* Detail modal/page */}
        {page === "detail" && detailRecipe && (
          <RecipeDetail
            recipe={detailRecipe}
            isFavorite={favorites.has(detailRecipe.key)}
            onFavorite={toggleFavorite}
            onBack={closeRecipeDetail}
          />
        )}
        {/* Main recipe grid/list */}
        {page !== "detail" && (
          <main className="recipe-grid">
            {recipeList.length === 0 ? (
              <div className="no-results">No recipes found.</div>
            ) : (
              recipeList.map((r) => (
                <div className="recipe-card" key={r.key} tabIndex={0} onClick={() => viewRecipeDetail(r.key)}>
                  <img
                    className="card-img"
                    src={r.image}
                    alt={r.title}
                    draggable={false}
                    loading="lazy"
                  />
                  <h2 className="card-title">{r.title}</h2>
                  <div className="card-meta">{r.meta}</div>
                  <div className="card-desc">{r.desc}</div>
                  <div className="card-actions" onClick={e => e.stopPropagation()}>
                    <button className="btn-primary"
                      tabIndex={-1}
                      onClick={() => viewRecipeDetail(r.key)}
                    >
                      View Recipe
                    </button>
                    <button
                      className={`btn-fav ${favorites.has(r.key) ? "fav-on" : ""}`}
                      aria-label={favorites.has(r.key) ? "Remove from favorites" : "Add to favorites"}
                      onClick={() => toggleFavorite(r.key)}
                      tabIndex={-1}
                    >
                      {favorites.has(r.key) ? "♥" : "♡"}
                    </button>
                  </div>
                </div>
              ))
            )}
          </main>
        )}
      </div>
      <footer className="footer">
        © {new Date().getFullYear()} RecipeHub. Imagery for demo purposes.
      </footer>
    </div>
  );
}

export default App;
