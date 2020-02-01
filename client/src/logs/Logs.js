import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getLogs } from "../reducers/actions/logActions";
import PropTypes from "prop-types";
import Preloader from "../layout/Preloader";
import LogItem from "./LogItem";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  //!! useState used only for development, left this for future reference
  // const [logs, setLogs] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs == null) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Inventory</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">Oh no. Nothing's showing up.</p>
      ) : (
        logs.map(log => <LogItem log={log} key={log._id} />)
      )}
    </ul>
  );
};

//!! first log in this example is what gets passed in below, second log is referencing logactions.js and needs to match
// log gets passed in as prop above, set equal to state by referencing name in root reducer, which is set to logReducer, and brings in whole state, which is than destructured to values needed above
const mapStateToProps = state => ({
  log: state.log
});

Logs.propTypes = {
  log: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { getLogs })(Logs);
