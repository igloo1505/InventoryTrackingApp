import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddEmpModal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [supervisor, setSupervisor] = useState(false);
  const [email, setEmail] = useState("");

  const onSubmit = () => {
    if (firstName === "" || email === "" || lastName === "") {
      M.toast({ html: "Oh no. Please fill this out completely" });
    }
    console.log(firstName, lastName, email, supervisor);
    setFirstName("");
    setLastName("");
    setSupervisor(false);
    setEmail("");
  };

  return (
    <div id="add-emp-modal" className="modal" style={{ width: "80%" }}>
      <div className="modal-content">
        <h4>Add Employee</h4>
        <div className="row">
          <div className="col s12">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <input
              type="text"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <label htmlFor="email" className="active">
              Email
            </label>
          </div>
        </div>
        <div className="row">
          <p>
            <label>
              <input
                type="checkbox"
                className="filled-in"
                value={supervisor}
                onChange={e => setSupervisor(!supervisor)}
                checked={supervisor}
              />
              <span>Supervisor access</span>
            </label>
          </p>
        </div>

        <div className="modal-footer">
          <a
            href="#!"
            onClick={onSubmit}
            className="modal-close waves-effect waves-green btn "
          >
            Add Employee
          </a>
        </div>
      </div>
    </div>
  );
};

export default AddEmpModal;
