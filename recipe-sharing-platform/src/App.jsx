import React, { useState, useEffect } from 'react';
import HomePage from './components/Homepage';
import recipeData from "./data.json"; // Import the data from the src directory

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData); // Load the JSON data
  }, []);

  return (
    <HomePage recipes={recipes} />
  );
}

export default App;
