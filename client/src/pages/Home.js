import React, { Fragment } from "react";
import Logs from "../logs/Logs";
import Login from "./Login";

const Home = ({ loggedIn }) => {
  return <Fragment>{loggedIn ? <Logs /> : <Login />}</Fragment>;
};

export default Home;
