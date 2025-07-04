import React, { useState } from "react";

// PUBLIC_INTERFACE
function RecipeForm({ onSubmit, onCancel, assetKeys }) {
  const [data, setData] = useState({
    title: "",
    desc: "",
    meta: "",
    imageKey: assetKeys[0],
    ingredients: "",
    steps: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((old) => ({ ...old, [name]: value }));
  };

  // PUBLIC_INTERFACE
  const handleSubmit = (e) => {
    e.preventDefault();
    // Split ingredients and steps
    const safeIng = data.ingredients.split("\n").map(t => t.trim()).filter(Boolean);
    const safeSteps = data.steps.split("\n").map(t => t.trim()).filter(Boolean);
    onSubmit({
      ...data,
      key: data.title.trim().toLowerCase().replace(/\W+/g, "-") + "-" + Date.now(),
      ingredients: safeIng,
      steps: safeSteps,
    });
  };

  return (
    <div className="modal">
      <form className="form-card" onSubmit={handleSubmit}>
        <h2>Add New Recipe</h2>
        <label>
          Recipe Title
          <input name="title" value={data.title} onChange={handleChange} required />
        </label>
        <label>
          Description (short summary)
          <input name="desc" value={data.desc} onChange={handleChange} required maxLength={80} />
        </label>
        <label>
          Meta (time, cuisine)
          <input name="meta" value={data.meta} onChange={handleChange} maxLength={40} placeholder="e.g. 25 min · Easy" />
        </label>
        <label>
          Select Image
          <select name="imageKey" value={data.imageKey} onChange={handleChange}>
            {assetKeys.map(key => <option key={key} value={key}>{key}</option>)}
          </select>
        </label>
        <label>
          Ingredients <span className="label-helper">(one per line)</span>
          <textarea name="ingredients" value={data.ingredients} onChange={handleChange} />
        </label>
        <label>
          Preparation Steps <span className="label-helper">(one per line)</span>
          <textarea name="steps" value={data.steps} onChange={handleChange} />
        </label>
        <div className="form-actions">
          <button type="submit" className="btn-primary">Save</button>
          <button type="button" className="btn-secondary" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default RecipeForm;
