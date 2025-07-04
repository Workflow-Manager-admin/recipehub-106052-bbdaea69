import imageAssets from "../assets/imageAssets";

// Note: Some recipes have detailed ingredients/steps, expand as needed.
export const demoRecipes = [
  {
    key: "chicken-stir-fry",
    image: imageAssets["chicken-stir-fry"],
    title: "Chicken Stir Fry",
    desc: "Chunky vegetables, chicken breast, simple stir fry sauce.",
    meta: "25 min · Easy",
    ingredients: [
      "1 lb chicken breast, sliced",
      "2 cups mixed vegetables (broccoli, carrots, peppers)",
      "2 tbsp soy sauce",
      "1 tbsp olive oil",
      "2 cloves garlic, minced",
      "Salt and pepper to taste"
    ],
    steps: [
      "Heat olive oil in a pan over high heat.",
      "Add chicken; cook until browned.",
      "Add garlic and vegetables; stir-fry 3min.",
      "Stir in soy sauce; cook 2min. Serve hot."
    ],
  },
  {
    key: "spaghetti-carbonara",
    image: imageAssets["spaghetti-carbonara"],
    title: "Spaghetti Carbonara",
    desc: "Classic Italian pasta with pancetta and creamy egg sauce.",
    meta: "30 min · Italian",
    ingredients: [
      "12 oz spaghetti",
      "4 oz pancetta or bacon",
      "2 eggs",
      "1/2 cup grated Parmesan",
      "Salt and pepper"
    ],
    steps: [
      "Cook spaghetti and reserve some pasta water.",
      "Sauté pancetta until crisp.",
      "Whisk eggs and cheese; add to drained pasta.",
      "Toss with pancetta, thin with pasta water. Serve."
    ],
  },
  {
    key: "chocolate-cake",
    image: imageAssets["chocolate-cake"],
    title: "Chocolate Cake",
    desc: "Rich chocolate layers, silky chocolate frosting.",
    meta: "1 hour · Dessert",
    // No details (demo)
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
  // ... All other asset keys follow the same way ...
];

export default demoRecipes;
