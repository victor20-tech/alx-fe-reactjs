import React from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
    const navigate = useNavigate();  // Initialize the useNavigate hook

    const handleClick = () => {
        deleteRecipe(recipeId);
        navigate('/');  // Redirect to the home page or recipe list after deletion
    };

    return (
        <button onClick={handleClick}>Delete Recipe</button>
    );
};

export default DeleteRecipeButton;