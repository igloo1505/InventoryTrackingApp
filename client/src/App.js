import React, { useEffect, Fragment, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./layout/SearchBar";
import Login from "./pages/Login";
import Logs from "./logs/Logs";
import "./App.css";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <div className="container">{loggedIn ? <Logs /> : <Login />}</div>
    </Fragment>
  );
};

export default App;
