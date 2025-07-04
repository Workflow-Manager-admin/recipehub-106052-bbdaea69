import React from "react";

/**
 * Navbar component renders navigation, user actions, and a theme toggle button.
 * Props: user, onSignIn, onSignOut, theme, toggleTheme, currentPage, setPage
 */
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
      {/* Theme toggle switch (right side): switches between light/dark mode */}
      <button
        className="theme-toggle"
        aria-label={"Switch theme"}
        onClick={toggleTheme}
        title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </header>
  );
}

export default Navbar;
