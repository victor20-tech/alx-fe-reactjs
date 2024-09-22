// src/components/Homepage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import recipeData from "../data.json"; // Import the data from the src directory

const Homepage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(recipeData);
    }, []);

    return (
        <div className="homepage container mx-auto p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Recipe List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {recipes.map((recipe) => (
                    <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
                        <div className="card bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <img
                                src={recipe.image}
                                alt={recipe.title}
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-bold text-gray-800">{recipe.title}</h2>
                                <p className="text-gray-600">{recipe.summary}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Homepage;
