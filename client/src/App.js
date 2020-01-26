import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div className="App">
      <div className="container">
        <h1 className="center">Inventory Tracking Front-end here</h1>
      </div>
    </div>
  );
};

export default App;
