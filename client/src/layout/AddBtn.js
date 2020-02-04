import React from "react";

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#add-log-modal"
        className="btn-floating btn-large blue darken-2 modal-trigger"
      >
        <i className="large material-icons">add</i>
      </a>
      <ul>
        <li className="btn-floating green modal-trigger">
          <a href="#sale-modal" className="modal-trigger">
            <i className="material-icons">monetization_on</i>
          </a>
        </li>
        <li className="btn-floating grey">
          <a href="#receiving-modal" className="modal-trigger">
            <i className="material-icons">call_received</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
