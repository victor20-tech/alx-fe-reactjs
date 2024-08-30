import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>
          <h1>Recipe Sharing Application</h1>
          <SearchBar />
          <AddRecipeForm />
          <RecipeList />
        </div>} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
};

export default App;