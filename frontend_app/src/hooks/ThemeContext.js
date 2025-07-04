import React, { useState, useEffect, createContext, useContext } from "react";

// Context to hold theme state and toggler
const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

/**
 * Provider component for theme context.
 * Sets up theme switching logic and update to CSS variables via data-theme.
 */
// PUBLIC_INTERFACE
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Persist last choice in localStorage
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem("theme");
      if (stored === "dark" || stored === "light") return stored;
      // Try to use prefers-color-scheme if no manual override
      if (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) return "dark";
    }
    return "light";
  });

  // Toggle theme and persist to localStorage
  const toggleTheme = () => {
    setTheme((t) => {
      const next = t === "light" ? "dark" : "light";
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.setItem("theme", next);
      }
      return next;
    });
  };

  // Update :root attribute when theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// PUBLIC_INTERFACE
export function useTheme() {
  /** Access current theme and toggle function from context. */
  return useContext(ThemeContext);
}
