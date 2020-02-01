import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteLog, setCurrent } from "../reducers/actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log.id);
    M.toast({ html: "log deleted" });
  };
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className="modal-trigger"
          onClick={() => setCurrent(log)}
        >
          {log.description}
        </a>
        <br />
        <span className="black-text" style={{ marginRight: "5px" }}>
          Quantity: {log.quantity}
        </span>
        <a
          href="#sale-modal"
          className="modal-trigger"
          onClick={() => setCurrent(log)}
        >
          <i className="material-icons blue-text right">shopping_cart</i>
        </a>

        <a href="#" onClick={onDelete}>
          <i className="material-icons grey-text right">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
