import { useState } from "react";
import images from "../assets/imageAssets";

// Demo dataset with images pre-matched, can read from localStorage for persistence.
import { demoRecipes } from "../data/recipes";

// PUBLIC_INTERFACE
export function useRecipeHubAppState() {
  // State: user, navigation, recipe data, favorites, modals
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("browse"); // 'browse', 'favorites', 'submit', 'detail'
  const [recipes, setRecipes] = useState(demoRecipes);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState(() => {
    // Optionally, persist in localStorage
    if (window.localStorage) {
      const favs = window.localStorage.getItem("favoriteRecipes");
      return favs ? new Set(JSON.parse(favs)) : new Set();
    }
    return new Set();
  });
  const [showAuth, setShowAuth] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [detailKey, setDetailKey] = useState(null);

  // Essential: save favorites to localStorage for persistence
  const updateFavorites = (newFavs) => {
    setFavorites(newFavs);
    if (window.localStorage) {
      window.localStorage.setItem("favoriteRecipes", JSON.stringify(Array.from(newFavs)));
    }
  };

  // PUBLIC_INTERFACE
  const signIn = () => setShowAuth(true);
  const completeSignIn = (userObj) => {
    setUser(userObj);
    setShowAuth(false);
  };
  const signOut = () => setUser(null);

  // PUBLIC_INTERFACE
  const openAddForm = () => setShowForm(true);
  const closeAddForm = () => setShowForm(false);

  // PUBLIC_INTERFACE
  const addRecipe = (r) => {
    // Insert new recipe
    setRecipes((old) => [{...r, image: images[r.imageKey] }, ...old]);
    setShowForm(false);
    setPage("browse");
  };

  // PUBLIC_INTERFACE
  const toggleFavorite = (key) => {
    updateFavorites((oldFavs) => {
      const next = new Set(oldFavs);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  // PUBLIC_INTERFACE
  const handleSearch = (val) => setSearch(val);

  // PUBLIC_INTERFACE
  const viewRecipeDetail = (key) => {
    setDetailKey(key);
    setPage("detail");
  };

  // PUBLIC_INTERFACE
  const closeRecipeDetail = () => {
    setDetailKey(null);
    setPage("browse");
  };

  return {
    user, signIn, completeSignIn, signOut,
    page, setPage,
    showAuth, showForm, openAddForm, closeAddForm,
    search, setSearch: handleSearch,
    recipes, addRecipe,
    favorites, toggleFavorite,
    detailKey, viewRecipeDetail, closeRecipeDetail
  };
}

export default useRecipeHubAppState;
