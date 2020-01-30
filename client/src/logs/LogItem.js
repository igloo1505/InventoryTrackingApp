import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";

const LogItem = ({ log }) => {
  return (
    <li className="collection-item">
      <div>
        <a href="#edit-log-modal" className="modal-trigger">
          {log.description}
        </a>
        <br />
        <span className="grey-text">
          <Moment format="MMMM Do YYYY, h:mm:ss a" />

          <span className="black-text right">{log.quantity}</span>
        </span>
        <a href="#">
          <i className="material-icons grey-text right">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired
};

export default LogItem;
