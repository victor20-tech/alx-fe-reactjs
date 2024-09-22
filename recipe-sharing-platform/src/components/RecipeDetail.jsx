// src/components/RecipeDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import recipeData from "../data.json"; // Import the data from the src directory

const RecipeDetail = () => {
    const { id } = useParams(); // Get the recipe ID from the route parameters
    const [recipe, setRecipe] = useState(null); // State to hold the recipe data

    useEffect(() => {
        // Find the recipe by ID from the data.json file
        const selectedRecipe = recipeData.find((recipe) => recipe.id === parseInt(id));

        if (selectedRecipe) {
            setRecipe(selectedRecipe); // Set the recipe in the state if found
        }
    }, [id]); // Runs every time the ID changes

    // If no recipe is found, show a message
    if (!recipe) {
        return <p className="text-center mt-10">Recipe not found...</p>;
    }

    return (
        <div className="recipe-detail container mx-auto p-8">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-64 object-cover mb-8 rounded-lg shadow-lg"
                />
                <div className="max-w-3xl text-left">
                    <h2 className="text-xl font-bold mb-2">Summary</h2>
                    <p className="text-gray-700 mb-4">{recipe.summary}</p>

                    <h2 className="text-xl font-bold mb-2">Ingredients</h2>
                    <ul className="list-disc ml-5 mb-4">
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index} className="text-gray-700">{ingredient}</li>
                        ))}
                    </ul>

                    <h2 className="text-xl font-bold mb-2">Instructions</h2>
                    <p className="text-gray-700">{recipe.instructions}</p>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetail;
