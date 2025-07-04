import React, { useState, useEffect } from "react";
import "./App.css";
import "./RecipeCards.css";

// List of imported assets: these images have been copied to src/assets by pre-process.
const imageAssets = {
  "old-fashioned-potato-cakes": require("./assets/20250704_094658_AR-223597-old-fashioned-potato-cakes-DDMFS-044-2x1-651634faa2d146709f3886c5e19aeed4.jpg"),
  "ratatouille-500": require("./assets/20250704_094659_Ratatouille-recipe-500x500.jpg"),
  "shakshuka": require("./assets/20250704_094700_opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__09__20160926-shakshuka-17-a2b1d35f5ce146d1b8f5e2851e73b487.jpg"),
  "garlic-steak-bites": require("./assets/20250704_094701_garlic-steak-bites-potatoes-recipe-3-edited.jpg"),
  "meatballs": require("./assets/20250704_094701_meatballs-21.jpg"),
  "honey-garlic-chicken": require("./assets/20250704_094702_30-Minute-Honey-Garlic-Chicken-1.jpg"),
  "japanese-turnips": require("./assets/20250704_094703_opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__05__20160520-japanese-turnips-vicky-wasik-8-be3cea98515349f1a0fd4e713a109ed2.jpg"),
  "rigatoni-pasta": require("./assets/20250704_094704_k_Photo_Recipes_2024-11-rigatoni-pasta_rigatoni-pasta-098.jpeg"),
  "ceviche": require("./assets/20250704_094705_Ceviche-Recipe.jpg"),
  "easy-dinner-no-cooking": require("./assets/20250704_094706_easy-dinner-recipes-no-cooking-the-everygirl-feature.jpg"),
  "dum-aloo": require("./assets/20250704_094707_Dum-Aloo-e163632.jpg"),
  "cowboy-pie": require("./assets/20250704_094708_Cowboy-pie-cef67be.jpg"),
  "american-goulash": require("./assets/20250704_094709_American-Goulash-Recipe.jpg"),
  "butter-chicken": require("./assets/20250704_094710_AR-141169-Easy-Indian-Butter-Chicken-DDMFS-4x3-beauty-588ff54d1e0f4a0788906e851e27d540.jpg"),
  "pakora": require("./assets/20250704_094712_ND-Pakorarex-clfq-mediumSquareAt3X.jpg"),
  "felafel": require("./assets/20250704_094714_10Felafel-wqbp-mediumSquareAt3X.jpg"),
  "bowl-1490645935967": require("./assets/20250704_094715_photo-1490645935967-10de6ba17061.jpeg"),
  "fish-tacos": require("./assets/20250704_094716_Fish-Tacos-1337495.jpg"),
  "pizza-dough": require("./assets/20250704_094717_Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg"),
  "broccoli-chicken-fry": require("./assets/20250704_094718_2400-240708-broccoli-and-chicken-stir-fry-3x4-186-b7f290a400134ae9910f2e67ff50d9f2.jpg"),
  "ratatouille": require("./assets/20250704_094718_ratatouille.jpg"),
  "chickpea-curry": require("./assets/20250704_094719_chickpea-curry-chhole-1x1-41ea4d53c7df4fddabd83caa5b57718e.jpg"),
  "pasta-mustard": require("./assets/20250704_094720_FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg"),
  "chorizo-gnocchi": require("./assets/20250704_094721_chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"),
  "berry-smoothie-bowl-2": require("./assets/20250704_094721_Berry_Smoothie_Bowl_2.jpg"),
  "vegetarian-pizza": require("./assets/20250704_094722_Vegetarian_Pizza.jpg"),
  "salmon-teriyaki": require("./assets/20250704_094722_Salmon_Teriyaki.jpg"),
  "berry-smoothie-bowl": require("./assets/20250704_094723_Berry_Smoothie_Bowl.jpg"),
  "vegetable-curry": require("./assets/20250704_094724_Vegetable_Curry.jpg"),
  "margherita-pizza": require("./assets/20250704_094724_Margherita_Pizza.jpg"),
  "chocolate-cake": require("./assets/20250704_094725_Chocolate_Cake.jpg"),
  "chicken-stir-fry": require("./assets/20250704_094726_Chicken_Stir_Fry.jpg"),
  "spaghetti-carbonara": require("./assets/20250704_094726_Spaghetti_Carbonara.jpg"),
};

// Recipe metadata to showcase in cards. (Demo, each entry can be improved as more recipe info is available.)
const recipes = [
  {
    key: "chicken-stir-fry",
    image: imageAssets["chicken-stir-fry"],
    title: "Chicken Stir Fry",
    desc: "Chunky vegetables, chicken breast, simple stir fry sauce.",
    meta: "25 min · Easy",
  },
  {
    key: "spaghetti-carbonara",
    image: imageAssets["spaghetti-carbonara"],
    title: "Spaghetti Carbonara",
    desc: "Classic Italian pasta with pancetta and creamy egg sauce.",
    meta: "30 min · Italian",
  },
  {
    key: "chocolate-cake",
    image: imageAssets["chocolate-cake"],
    title: "Chocolate Cake",
    desc: "Rich chocolate layers, silky chocolate frosting.",
    meta: "1 hour · Dessert",
  },
  {
    key: "vegetable-curry",
    image: imageAssets["vegetable-curry"],
    title: "Vegetable Curry",
    desc: "Hearty vegetarian curry packed with fresh veggies and spices.",
    meta: "40 min · Vegan",
  },
  {
    key: "margherita-pizza",
    image: imageAssets["margherita-pizza"],
    title: "Margherita Pizza",
    desc: "Classic pizza with fresh mozzarella, tomato sauce, and basil.",
    meta: "45 min · Vegetarian",
  },
  {
    key: "broccoli-chicken-fry",
    image: imageAssets["broccoli-chicken-fry"],
    title: "Broccoli & Chicken Stir Fry",
    desc: "Quick and healthy, perfect for weeknight dinners.",
    meta: "30 min · Easy",
  },
  {
    key: "honey-garlic-chicken",
    image: imageAssets["honey-garlic-chicken"],
    title: "Honey Garlic Chicken",
    desc: "Sweet and savory chicken bites glazed with garlic honey sauce.",
    meta: "30 min · Easy",
  },
  {
    key: "garlic-steak-bites",
    image: imageAssets["garlic-steak-bites"],
    title: "Garlic Steak Bites & Potatoes",
    desc: "Juicy steak bites with golden potatoes and garlic butter.",
    meta: "35 min · One-pan",
  },
  {
    key: "meatballs",
    image: imageAssets["meatballs"],
    title: "Meatballs & Spaghetti",
    desc: "Classic meatballs, spaghetti, marinara sauce.",
    meta: "45 min · Comfort",
  },
  {
    key: "shakshuka",
    image: imageAssets["shakshuka"],
    title: "Shakshuka",
    desc: "Eggs poached in spicy tomato sauce, topped with herbs.",
    meta: "35 min · Mediterranean",
  },
  {
    key: "american-goulash",
    image: imageAssets["american-goulash"],
    title: "American Goulash",
    desc: "One-pot ground beef, macaroni, savory tomato sauce.",
    meta: "40 min · Classic",
  },
  {
    key: "butter-chicken",
    image: imageAssets["butter-chicken"],
    title: "Indian Butter Chicken",
    desc: "Succulent chicken in creamy butter sauce.",
    meta: "55 min · Indian",
  },
  {
    key: "dum-aloo",
    image: imageAssets["dum-aloo"],
    title: "Dum Aloo",
    desc: "Potato curry simmered in aromatic, spiced gravy.",
    meta: "50 min · Indian",
  },
  {
    key: "cowboy-pie",
    image: imageAssets["cowboy-pie"],
    title: "Cowboy Pie",
    desc: "Hearty baked casserole with beans, beef, and cheddar.",
    meta: "1 hr · Comfort",
  },
  {
    key: "ceviche",
    image: imageAssets["ceviche"],
    title: "Ceviche",
    desc: "Lime-marinated seafood with onions, tomato, cilantro.",
    meta: "25 min · Latin",
  },
  {
    key: "pakora",
    image: imageAssets["pakora"],
    title: "Pakora",
    desc: "Crispy fried fritters, classic Indian street snack.",
    meta: "30 min · Snack",
  },
  {
    key: "felafel",
    image: imageAssets["felafel"],
    title: "Falafel",
    desc: "Fried chickpea patties, served in pita with veggies.",
    meta: "40 min · Vegan",
  },
  {
    key: "fish-tacos",
    image: imageAssets["fish-tacos"],
    title: "Fish Tacos",
    desc: "Crispy fish in tortillas with tangy slaw and lime.",
    meta: "25 min · Seafood",
  },
  {
    key: "easy-dinner-no-cooking",
    image: imageAssets["easy-dinner-no-cooking"],
    title: "No-Cook Dinner",
    desc: "Refreshing and easy-to-assemble meal, no stove needed.",
    meta: "10 min · Easy",
  },
  {
    key: "ratatouille-500",
    image: imageAssets["ratatouille-500"],
    title: "Ratatouille (Classic)",
    desc: "French dish, assorted vegetables baked in sauce.",
    meta: "1 hr · Vegetarian",
  },
  {
    key: "ratatouille",
    image: imageAssets["ratatouille"],
    title: "Ratatouille (Modern Photo)",
    desc: "Vibrant vegetables baked in rustic tomato sauce.",
    meta: "1 hr · French",
  },
  {
    key: "bowl-1490645935967",
    image: imageAssets["bowl-1490645935967"],
    title: "Acai Berry Bowl",
    desc: "Frozen acai, berries, granola—a healthy breakfast.",
    meta: "15 min · Vegan",
  },
  {
    key: "berry-smoothie-bowl-2",
    image: imageAssets["berry-smoothie-bowl-2"],
    title: "Berry Smoothie Bowl",
    desc: "Mixed berries with yogurt and seeds, energy-packed.",
    meta: "12 min · Vegetarian",
  },
  {
    key: "berry-smoothie-bowl",
    image: imageAssets["berry-smoothie-bowl"],
    title: "Berry Smoothie Bowl Variation",
    desc: "Colorful fruit, nuts, fresh mint and honey.",
    meta: "14 min · Breakfast",
  },
  {
    key: "pizza-dough",
    image: imageAssets["pizza-dough"],
    title: "Homemade Pizza Dough",
    desc: "Crispy crust, perfect for any pizza topping.",
    meta: "80 min · Baking",
  },
  {
    key: "salmon-teriyaki",
    image: imageAssets["salmon-teriyaki"],
    title: "Salmon Teriyaki",
    desc: "Glazed salmon, savory-sweet Japanese flavor.",
    meta: "35 min · Asian",
  },
  {
    key: "vegetarian-pizza",
    image: imageAssets["vegetarian-pizza"],
    title: "Vegetarian Pizza",
    desc: "Loaded with garden-fresh vegetables.",
    meta: "45 min · Vegetarian",
  },
  {
    key: "chickpea-curry",
    image: imageAssets["chickpea-curry"],
    title: "Chickpea Curry (Chhole)",
    desc: "Indian-style chickpeas in a rich, spicy sauce.",
    meta: "40 min · Vegan",
  },
  {
    key: "pasta-mustard",
    image: imageAssets["pasta-mustard"],
    title: "Sausage & Mustard Pasta",
    desc: "Savory sausage, cream, fresh basil, tangy mustard.",
    meta: "30 min · Italian",
  },
  {
    key: "chorizo-gnocchi",
    image: imageAssets["chorizo-gnocchi"],
    title: "Chorizo Mozzarella Gnocchi Bake",
    desc: "Baked gnocchi with chorizo, tomatoes, cheese.",
    meta: "50 min · Comfort",
  },
  {
    key: "rigatoni-pasta",
    image: imageAssets["rigatoni-pasta"],
    title: "Rigatoni Pasta",
    desc: "Hearty pasta in tomato sauce with parmesan.",
    meta: "45 min · Italian",
  },
  {
    key: "old-fashioned-potato-cakes",
    image: imageAssets["old-fashioned-potato-cakes"],
    title: "Potato Cakes (Old Fashioned)",
    desc: "Golden, crispy potato patties, family classic.",
    meta: "35 min · Snack",
  },
  {
    key: "japanese-turnips",
    image: imageAssets["japanese-turnips"],
    title: "Japanese Turnips",
    desc: "Pan-seared with miso and fresh greens.",
    meta: "25 min · Vegan",
  },
];

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState("light");
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState(new Set());

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  // PUBLIC_INTERFACE
  const handleFavorite = (key) => {
    setFavorites((prevFavs) => {
      const next = new Set(prevFavs);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  // PUBLIC_INTERFACE
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  // Filter recipes by title and description (case-insensitive)
  const visibleRecipes = recipes.filter(
    (r) =>
      r.title.toLowerCase().includes(query.toLowerCase()) ||
      r.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="app-bg">
      <header className="navbar">
        <span className="logo">RecipeHub</span>
        <nav className="nav-links">
          <a href="/" className="active">
            Browse
          </a>
          <a href="/favorites" tabIndex="-1" aria-disabled="true" style={{ opacity: 0.5 }}>
            Favorites
          </a>
          <a href="/submit" tabIndex="-1" aria-disabled="true" style={{ opacity: 0.5 }}>
            Submit Recipe
          </a>
        </nav>
        <button className="theme-toggle" aria-label={"Switch theme"} onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </header>
      <div className="container">
        <div className="search-row">
          <input
            className="search-input"
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search for recipes..."
          />
        </div>
        <main className="recipe-grid">
          {visibleRecipes.length === 0 ? (
            <div className="no-results">No recipes found.</div>
          ) : (
            visibleRecipes.map((r) => (
              <div className="recipe-card" key={r.key} tabIndex={0}>
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
                <div className="card-actions">
                  <button className="btn-primary" tabIndex={0}>
                    View Recipe
                  </button>
                  <button
                    className={`btn-fav ${favorites.has(r.key) ? "fav-on" : ""}`}
                    aria-label={favorites.has(r.key) ? "Remove from favorites" : "Add to favorites"}
                    onClick={() => handleFavorite(r.key)}
                  >
                    {favorites.has(r.key) ? "♥" : "♡"}
                  </button>
                </div>
              </div>
            ))
          )}
        </main>
      </div>
      <footer className="footer">
        © {new Date().getFullYear()} RecipeHub. Imagery for demo purposes.
      </footer>
    </div>
  );
}

export default App;
