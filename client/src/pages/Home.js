import React, { Fragment, useEffect } from "react";
import Logs from "../logs/Logs";
import { connect } from "react-redux";
import { setToken } from "../reducers/actions/employeeActions";
import Login from "./Login";

const Home = ({ employee: { authenticated } }) => {
  console.log(authenticated);

  return <Fragment>{authenticated ? <Logs /> : <Login />}</Fragment>;
};

const mapStateToProps = state => ({
  employee: state.employee
});
export default connect(mapStateToProps)(Home);
