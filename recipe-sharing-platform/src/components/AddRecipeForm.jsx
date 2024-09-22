// src/components/AddRecipeForm.jsx
import React, { useState } from "react";

const AddRecipeForm = () => {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation: Check if all fields are filled
        if (!title || !ingredients || !steps) {
            setError("All fields are required");
            return;
        }

        // Check that there are at least 2 ingredients
        if (ingredients.split(",").length < 2) {
            setError("Please add at least two ingredients");
            return;
        }

        // Clear error and process the form
        setError("");
        const newRecipe = {
            title,
            ingredients: ingredients.split(",").map((ingredient) => ingredient.trim()), // Convert to array
            steps,
        };

        console.log(newRecipe); // Replace with actual logic for handling submission (API, state, etc.)

        // Reset form fields
        setTitle("");
        setIngredients("");
        setSteps("");
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-2xl font-bold mb-6 text-center">Add a New Recipe</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
                {error && <p className="text-red-500 mb-4">{error}</p>}

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Recipe Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter the recipe title"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Ingredients (separated by commas)</label>
                    <textarea
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        rows="3"
                        placeholder="E.g., Eggs, Bacon, Cheese"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Preparation Steps</label>
                    <textarea
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        rows="4"
                        placeholder="Describe the preparation steps"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 w-full"
                >
                    Add Recipe
                </button>
            </form>
        </div>
    );
};

export default AddRecipeForm;
