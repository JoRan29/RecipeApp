import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const APP_ID = "1bc03387";
  const APP_KEY = "5ad9bfbd59e521055b37120a7a325bc2";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <form action="">
        <input type="text" />
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default App;
