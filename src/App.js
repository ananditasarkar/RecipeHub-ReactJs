import React from 'react';
import { Routes , Route } from 'react-router-dom';
import CategoryRecipes from './pages/CategoryPage/Category';
import Home from './pages/HomePage/Home';
import RecipeDetails from './pages/RecipeDetails/RecipeDetails';
import AllCategories from './pages/AllCategories/AllCategories';
import Searches from './pages/Searches/Searches';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" Component={AllCategories} />
        <Route path="/search" Component={Searches} />
        <Route path="/categories/:categoryName" Component={CategoryRecipes} />
        <Route path="/recipes/:recipeId" Component={RecipeDetails} />
      </Routes>
    </div>
  )
}

export default App
