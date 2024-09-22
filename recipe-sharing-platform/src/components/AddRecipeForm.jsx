// src/components/AddRecipeForm.jsx
import React, { useState } from "react";

const AddRecipeForm = () => {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [errors, setErrors] = useState({});

    // Validate the form inputs
    const validate = () => {
        const errors = {};

        if (!title) errors.title = "Title is required";
        if (!ingredients) errors.ingredients = "Ingredients are required";
        if (ingredients && ingredients.split(",").length < 2) {
            errors.ingredients = "At least two ingredients are required";
        }
        if (!steps) errors.steps = "Preparation steps are required";

        return errors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);

        // If no errors, submit the form
        if (Object.keys(validationErrors).length === 0) {
            const newRecipe = { title, ingredients, steps };

            // You can handle form submission logic here, like updating state or posting to an API
            console.log("New Recipe Submitted:", newRecipe);

            // Reset form fields after submission
            setTitle("");
            setIngredients("");
            setSteps("");
            setErrors({});
        }
    };

    return (
        <div className="container mx-auto p-8">
            <h2 className="text-3xl font-bold mb-4 text-center">Add a New Recipe</h2>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                {/* Title Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Recipe Title
                    </label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.title ? 'border-red-500' : ''}`}
                        placeholder="Enter the recipe title"
                    />
                    {errors.title && <p className="text-red-500 text-xs italic">{errors.title}</p>}
                </div>

                {/* Ingredients Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
                        Ingredients (separated by commas)
                    </label>
                    <textarea
                        id="ingredients"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.ingredients ? 'border-red-500' : ''}`}
                        placeholder="Enter ingredients separated by commas"
                    />
                    {errors.ingredients && <p className="text-red-500 text-xs italic">{errors.ingredients}</p>}
                </div>

                {/* Preparation Steps Field */}
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="steps">
                        Preparation Steps
                    </label>
                    <textarea
                        id="steps"
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.steps ? 'border-red-500' : ''}`}
                        placeholder="Enter preparation steps"
                    />
                    {errors.steps && <p className="text-red-500 text-xs italic">{errors.steps}</p>}
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Add Recipe
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddRecipeForm;
