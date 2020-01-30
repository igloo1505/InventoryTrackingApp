import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const EditEmpModal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [supervisor, setSupervisor] = useState(false);
  const [email, setEmail] = useState("");

  const onSubmit = () => {
    if (firstName === "" || email === "" || lastName === "") {
      e.preventDefault();
      M.toast({ html: "Oh no. Please fill this out completely" });
    }
    console.log(description, quantity, location, received_date);
  };

  useEffect(() => setReceivedDate(Date.now()), []);

  return (
    <div id="edit-log-modal" className="modal" style={{ width: "80%" }}>
      <div className="modal-content">
        <h4>Edit Item</h4>
        <div className="row">
          <div className="col s12">
            <input
              type="text"
              name="description"
              value={description}
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
              onChange={e => setQuantity(e.target.value)}
            />
            <label htmlFor="quantity">Quantity</label>
          </div>
          <div className="col s12 m6">
            <input
              type="text"
              name="location"
              value={location}
              onChange={e => setLocation(e.target.value)}
            />
            <label htmlFor="location">Location ID</label>
          </div>
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

export default EditEmpModal;
