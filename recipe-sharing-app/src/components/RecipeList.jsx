import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import useRecipeStore from './recipeStore';

const RecipeList = () => {
    const recipes = useRecipeStore(state => state.filteredRecipes);
    const filterRecipes = useRecipeStore(state => state.filterRecipes);

    useEffect(() => {
        filterRecipes(); // Filter recipes whenever the component mounts or search term changes
    }, [filterRecipes]);

    return (
        <div>
            {recipes.length > 0 ? (
                recipes.map(recipe => (
                    <div key={recipe.id}>
                        <h3>
                            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link> {/* Link to recipe details */}
                        </h3>
                        <p>{recipe.description}</p>
                    </div>
                ))
            ) : (
                <p>No recipes found</p>
            )}
        </div>
    );
};

export default RecipeList;