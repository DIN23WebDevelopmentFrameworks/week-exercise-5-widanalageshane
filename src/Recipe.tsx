import React from 'react';

interface IRecipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
  }
  

interface IRecipeProps {
  recipeData: IRecipe;
}

const Recipe: React.FC<IRecipeProps> = ({ recipeData }) => {
  return (
    <li>
      <h3>{recipeData.name}</h3>
      <p>Ingredients: {recipeData.ingredients.join(', ')}</p>
      <p>Instructions: {recipeData.instructions.join(' ')}</p>
      <p>Prep Time: {recipeData.prepTimeMinutes} mins</p>
      <p>Cook Time: {recipeData.cookTimeMinutes} mins</p>
      <p>Servings: {recipeData.servings}</p>
      <p>Difficulty: {recipeData.difficulty}</p>
    </li>
  );
};


export default Recipe;