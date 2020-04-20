import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "1bc03387";
  const APP_KEY = "5ad9bfbd59e521055b37120a7a325bc2";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    ).catch((err) => {
      console.log(err);
    });
    const data = await response.json();
    // console.log(data.hits);
    setRecipes(data.hits);
  };

  return (
    <div className="App">
      <form action="" className="search-form">
        <input type="text" className="search-bar" />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      {recipes.map((recipe) => (
        <Recipe />
      ))}
    </div>
  );
};

export default App;
