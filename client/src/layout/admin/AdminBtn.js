import React from "react";

const AdminBtn = () => {
  return (
    <div className="fixed-action-btn" style={{ marginRight: "80px" }}>
      <a
        href="#add-emp-modal"
        className="btn-floating btn-large red darken-2 modal-trigger"
      >
        <i className="large material-icons">trending_up</i>
      </a>
      <ul>
        <li className="btn-floating green modal-trigger">
          <a href="#sale-modal" className="modal-trigger">
            <i className="material-icons">monetization_on</i>
          </a>
        </li>
        <li className="btn-floating grey">
          <a href="#employee-list-modal" className="modal-trigger">
            <i className="material-icons">call_received</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AdminBtn;
