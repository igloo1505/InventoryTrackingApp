import React, { useState, useEffect } from "react";
import Preloader from "../layout/Preloader";
import LogItem from "./LogItem";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  const getLogs = async () => {
    setLoading(true);
    const res = await fetch("/Inventory");
    const data = await res.json();
    setLogs(data);
    setLoading(false);
  };

  if (loading) {
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
        logs.map(log => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

export default Logs;
