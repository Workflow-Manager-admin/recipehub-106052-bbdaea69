import React, { useState } from "react";

// PUBLIC_INTERFACE
function AuthModal({ onAuth, onCancel }) {
  const [input, setInput] = useState({ email: "", name: "" });
  const [error, setError] = useState("");
  // PUBLIC_INTERFACE
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.email || !/^[\w.+-]+@\w+\.\w{2,}$/.test(input.email)) {
      setError("Enter a valid email");
      return;
    }
    if (!input.name.trim()) {
      setError("Name required");
      return;
    }
    setError("");
    // "Authenticate"
    onAuth({ id: input.email, name: input.name.split(" ")[0] });
  };
  return (
    <div className="modal">
      <form className="form-card" onSubmit={handleSubmit} style={{ minWidth: 300 }}>
        <h2>Sign In</h2>
        <label>
          Name
          <input
            autoFocus
            type="text"
            value={input.name}
            onChange={e => setInput(i => ({ ...i, name: e.target.value }))}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={input.email}
            required
            onChange={e => setInput(i => ({ ...i, email: e.target.value }))}
          />
        </label>
        {error && <div className="form-error">{error}</div>}
        <div className="form-actions">
          <button className="btn-primary" type="submit">Continue</button>
          <button className="btn-secondary" type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AuthModal;
