import React from "react";
import Card from "./Card"; // Import the Card component

const Homepage = ({ recipes }) => {
    return (
        <div className="homepage container mx-auto p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Recipe List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {recipes.map((recipe) => (
                    <Card key={recipe.id} recipe={recipe} /> // Pass recipe data including image
                ))}
            </div>
        </div>
    );
};

export default Homepage;