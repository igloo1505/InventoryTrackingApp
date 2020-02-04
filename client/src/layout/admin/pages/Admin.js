import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSales } from "../../../reducers/actions/logActions";

const Admin = ({ getSales }) => {
  useEffect(() => {
    getSales();
    // eslint-disable-next-line
  }, []);

  return <h1>Admin stuff here:</h1>;
};

export default connect(null, { getSales })(Admin);
