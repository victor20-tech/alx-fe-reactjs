// Card.jsx
import React from "react";

const Card = ({ recipe }) => {
    return (
        <div className="card bg-white rounded-lg shadow-md overflow-hidden max-w-sm mx-auto hover:shadow-xl transition-shadow duration-300">
            <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">{recipe.name}</h2>
                <p className="text-gray-600">Ingredients: {recipe.summary}</p>
            </div>
        </div>
    );
};

export default Card;