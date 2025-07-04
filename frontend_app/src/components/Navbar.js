import React from "react";

// PUBLIC_INTERFACE
function Navbar({ user, onSignIn, onSignOut, theme, toggleTheme, currentPage, setPage }) {
  return (
    <header className="navbar">
      <span className="logo" onClick={() => setPage("browse")} style={{ cursor: "pointer" }}>RecipeHub</span>
      <nav className="nav-links">
        <a
          className={currentPage === "browse" ? "active" : ""}
          href="#browse"
          onClick={() => setPage("browse")}
        >
          Browse
        </a>
        <a
          className={currentPage === "favorites" ? "active" : ""}
          href="#favorites"
          onClick={() => setPage("favorites")}
        >
          Favorites
        </a>
        <a
          className={currentPage === "submit" ? "active" : ""}
          href="#submit"
          onClick={() => setPage("submit")}
        >
          Submit Recipe
        </a>
      </nav>
      {user ? (
        <div className="navbar-auth-row">
          <span className="user-greet">Hi, {user.name || "User"}</span>
          <button className="btn-small" onClick={onSignOut}>Sign Out</button>
        </div>
      ) : (
        <button className="btn-small" onClick={onSignIn}>Sign In</button>
      )}
      <button className="theme-toggle" aria-label={"Switch theme"} onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </header>
  );
}

export default Navbar;
