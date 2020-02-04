import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLog } from "../../reducers/actions/logActions";
import AddLogModal from "./AddLogModal";
import M from "materialize-css/dist/js/materialize.min.js";

const ReceivingModal = () => {
  const [exists, setExists] = useState(false);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [location, setLocation] = useState(null);

  const onSubmit = () => {
    console.log("Submit goes here");
  };

  return (
    <div id="add-log-modal" className="modal" style={{ width: "80%" }}>
      <div className="modal-content">
        <h4>Receiving</h4>
        <div className="row">
          <div className="col s12">
            <input
              type="text"
              name="description"
              value={description}
              required
              onChange={e => setDescription(e.target.value)}
            />
            <label htmlFor="description" className="active">
              Description
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col s6 m3">
            <input
              type="number"
              name="quantity"
              value={quantity}
              required
              onChange={e => setQuantity(e.target.value)}
            />
            <label htmlFor="quantity">Quantity</label>
          </div>
          <div className="col s6 m3">
            <input
              type="text"
              name="location"
              value={location}
              required
              onChange={e => setLocation(e.target.value)}
            />
            <label htmlFor="location">Location ID</label>
          </div>
        </div>
        <div className="col s12 m6">
          <input
            type="text"
            name="category"
            value={category}
            onChange={e => setCategory(e.target.value)}
          />
          <label htmlFor="category">Category</label>
        </div>

        <div className="modal-footer">
          <a
            href="#!"
            onClick={onSubmit}
            className="modal-close waves-effect waves-green btn "
          >
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { addLog })(ReceivingModal);
