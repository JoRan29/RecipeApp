import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const APP_ID = "1bc03387";
  const APP_KEY = "5ad9bfbd59e521055b37120a7a325bc2";

  useEffect(() => {
    console.log("Effect has been run!");
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <form action="" className="search-form">
        <input type="text" className="search-bar" />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
