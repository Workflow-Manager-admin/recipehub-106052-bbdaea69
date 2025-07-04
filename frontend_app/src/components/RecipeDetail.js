import React from "react";

// PUBLIC_INTERFACE
function RecipeDetail({ recipe, isFavorite, onFavorite, onBack }) {
  if (!recipe) return null;
  return (
    <div className="recipe-detail-container">
      <button className="btn-link" onClick={onBack}>&larr; Back to Browse</button>
      <div className="recipe-detail-card">
        <img
          className="detail-img"
          src={recipe.image}
          alt={recipe.title}
          draggable={false}
        />
        <div className="detail-content">
          <h1 className="detail-title">{recipe.title}</h1>
          <div className="detail-meta">{recipe.meta}</div>
          <div className="detail-desc">{recipe.desc}</div>
          {recipe.ingredients && recipe.ingredients.length > 0 && (
            <div className="detail-section">
              <h2>Ingredients</h2>
              <ul>
                {recipe.ingredients.map((ing, idx) => (
                  <li key={idx}>{ing}</li>
                ))}
              </ul>
            </div>
          )}
          {recipe.steps && recipe.steps.length > 0 && (
            <div className="detail-section">
              <h2>Preparation</h2>
              <ol>
                {recipe.steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>
          )}
          {/* Action Bar */}
          <div className="detail-actions">
            <button
              className={`btn-fav ${isFavorite ? "fav-on" : ""}`}
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              onClick={() => onFavorite(recipe.key)}
            >
              {isFavorite ? "♥" : "♡"} Favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
