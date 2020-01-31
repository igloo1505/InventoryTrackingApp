import React from "react";
import Logs from "../logs/Logs";
import Login from "./Login";

const Home = ({ loggedIn }) => {
  return <div>{loggedIn ? <Logs /> : <Login />}</div>;
};

export default Home;
