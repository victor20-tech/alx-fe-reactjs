import React, { useState, useEffect } from "react";
import Card from "./Card"; // Import the Card component
import recipeData from "../data.json"; // Import the data from the src directory

const Homepage = () => {
    const [recipes, setRecipes] = useState([]); // Initialize state for recipes

    useEffect(() => {
        // Simulating data fetch from JSON
        setRecipes(recipeData); // Load the JSON data into state
    }, []); // Run only once on component mount

    // Check if recipes is not empty or undefined
    if (!recipes || recipes.length === 0) {
        return <p>Loading recipes...</p>; // Show loading message
    }

    return (
        <div className="homepage container mx-auto p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Recipe List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {recipes.map((recipe) => (
                    <Card key={recipe.id} recipe={recipe} /> // Pass each recipe to Card
                ))}
            </div>
        </div>
    );
};

export default Homepage;