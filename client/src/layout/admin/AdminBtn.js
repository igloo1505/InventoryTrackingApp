import React from "react";
import { Link } from "react-router-dom";

const AdminBtn = () => {
  return (
    <div className="fixed-action-btn" style={{ marginRight: "80px" }}>
      <Link to="/admin" className="btn-floating btn-large red darken-2">
        <i className="large material-icons">trending_up</i>
      </Link>
      <ul>
        <li className="btn-floating green modal-trigger">
          <a href="#add-emp-modal" className="modal-trigger">
            <i className="material-icons">person_add</i>
          </a>
        </li>
        <li className="btn-floating grey">
          <a href="#employee-list-modal" className="modal-trigger">
            <i className="material-icons">person</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AdminBtn;
