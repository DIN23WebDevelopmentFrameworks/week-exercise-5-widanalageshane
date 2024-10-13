import React, { useState, useEffect } from "react";

const App = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [recipes, setRecipes] = useState<any[]>([]);


  useEffect(() => {
    fetch("https://dummyjson.com/recipes/tags")
      .then((response) => response.json())
      .then((data) => setTags(data));
  }, []);

 
  useEffect(() => {
    if (selectedTag) {
      fetch(`https://dummyjson.com/recipes/tag/${selectedTag}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched recipes data: ", data);  
          setRecipes(data.recipes || []); 
        })
        .catch((error) => {
          console.error("Error fetching recipes:", error);
        });
    }
  }, [selectedTag]);

  return (
    <div>
      <h1>ACME Recipe O'Master</h1>
      {!selectedTag ? (
        <div>
          <h2>Recipe Tags</h2>
          <ul>
            {tags.map((tag) => (
              <li key={tag} onClick={() => setSelectedTag(tag)}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h2>Recipes for {selectedTag}</h2>
          <button onClick={() => setSelectedTag(null)}>Back to Tags</button>
          <ul>
            {recipes.map((recipe, index) => (
              <li key={index}>
                <h3>{recipe.name}</h3>
                <p>{recipe.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;