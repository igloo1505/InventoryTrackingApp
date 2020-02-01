import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addEmployee } from "../../reducers/actions/employeeActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddEmpModal = ({ addEmployee }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [supervisor, setSupervisor] = useState(false);
  const [email, setEmail] = useState("");

  const onSubmit = () => {
    if (
      firstName === "" ||
      email === "" ||
      lastName === "" ||
      password !== password2
    ) {
      M.toast({
        html:
          "Oh no. Please fill this out completely and make sure passwords match"
      });
    } else {
      addEmployee({ firstName, lastName, email, password, supervisor });
      M.toast({ html: `${firstName} was added` });
      setFirstName("");
      setLastName("");
      setSupervisor(false);
      setPassword("");
      setPassword2("");
      setEmail("");
    }
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
          <div className="col s6">
            <input
              type="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <label htmlFor="password" className="active">
              Password
            </label>
          </div>
          <div className="col s6">
            <input
              type="password"
              name="password2"
              value={password2}
              onChange={e => setPassword2(e.target.value)}
            />
            <label htmlFor="password2" className="active">
              Confirm Password
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
AddEmpModal.propTypes = {
  addEmployee: PropTypes.func.isRequired
};

export default connect(null, { addEmployee })(AddEmpModal);
