import React, { useState, useEffect } from 'react';
import RecipeTagList from './RecipeTagList';
import RecipeList from './RecipeList';
import { IRecipe } from './Recipe';

const App: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    // Fetch recipe tags when the app loads
    fetch('https://dummyjson.com/recipes/tags')
      .then(response => response.json())
      .then(data => setTags(data));
  }, []);

  useEffect(() => {
    if (selectedTag) {
      // Fetch recipes for the selected tag
      fetch(`https://dummyjson.com/recipes/tag/${selectedTag}`)
        .then(response => response.json())
        .then(data => setRecipes(data.recipes));
    }
  }, [selectedTag]);

  const handleTagSelect = (tag: string) => {
    setSelectedTag(tag);
  };

  const handleBackToTags = () => {
    setSelectedTag(null);
    setRecipes([]);
  };

  return (
    <div>
      <h1>ACME Recipe O'Master</h1>
      {selectedTag ? (
        <>
          <button onClick={handleBackToTags}>Back to Tag List</button>
          <RecipeList recipes={recipes} />
        </>
      ) : (
        <RecipeTagList tagList={tags} onSelectTag={handleTagSelect} />
      )}
    </div>
  );
};

export default App;