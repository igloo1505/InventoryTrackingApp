import React, { useState } from "react";
import Logs from "../logs/Logs";
import Login from "./Login";

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  return <div>{loggedIn ? <Logs /> : <Login />}</div>;
};

export default Home;
