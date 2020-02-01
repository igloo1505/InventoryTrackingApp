import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLog } from "../../reducers/actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddLogModal = ({ addLog }) => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [location, setLocation] = useState(null);

  const onSubmit = () => {
    if (description === "" || quantity === 0 || location === null) {
      M.toast({ html: "Oh no. Please fill this out completely" });
    } else {
      const newLog = {
        description,
        quantity,
        location,
        category,
        purchase_price: null,
        sale_price: null,
        reorder_at: null,
        date: new Date()
      };
      console.log(newLog);
      addLog(newLog);
      M.toast({ html: "New item received" });
    }
  };

  return (
    <div id="add-log-modal" className="modal" style={{ width: "80%" }}>
      <div className="modal-content">
        <h4>Enter Item Data</h4>
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
          <div className="col s12 m6">
            <input
              type="number"
              name="quantity"
              value={quantity}
              required
              onChange={e => setQuantity(e.target.value)}
            />
            <label htmlFor="quantity">Quantity</label>
          </div>
          <div className="col s12 m6">
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

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired
};

export default connect(null, { addLog })(AddLogModal);
