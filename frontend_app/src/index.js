import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './hooks/ThemeContext';

/**
 * ThemeProvider wraps our app and provides theme context (light/dark mode) across the component tree.
 * The provider also updates the document root [data-theme] attribute and loads user selections.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
