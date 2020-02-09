import React, { Fragment, useEffect } from "react";
import Logs from "../logs/Logs";
import { connect } from "react-redux";

import Login from "./Login";

const Home = ({ employee: { authenticated } }, setLoggedIn) => {
  console.log(Date.now());
  if (authenticated) {
    setLoggedIn(true);
  }
  return <Fragment>{authenticated ? <Logs /> : <Login />}</Fragment>;
};

const mapStateToProps = state => ({
  employee: state.employee
});
export default connect(mapStateToProps)(Home);
