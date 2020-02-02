import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import M, { AutoInit } from "materialize-css/dist/js/materialize.min.js";
import { addEmployee } from "../reducers/actions/employeeActions";

const Login = ({ addEmployee }) => {
  const [supervisor, setSupervisor] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
    supervisorPassword: ""
  });
  const {
    firstName,
    lastName,
    email,
    password,
    password2,
    supervisorPassword
  } = user;
  const onChange = e => setUser({ ...user, [e.target.id]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (firstName === "" || lastName === "" || email === "") {
      M.toast({ html: "Please fill out the form completely" });
    } else if (password !== password2) {
      M.toast({ html: "Oh no. These passwords do not match" });
    } else if (supervisorPassword == null) {
      M.toast({ html: "Please Contact your supervisor to gain access" });
    } else {
      addEmployee({
        firstName,
        lastName,
        email,
        password,
        password2,
        supervisor,
        supervisorPassword
      });
      M.toast({ html: `Congratulations. ${firstName} was added` });
      setUser({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password2: "",
        supervisor: false,
        supervisorPassword: ""
      });
    }
  };

  return (
    <div className="row">
      <form className="col s12" onSubmit={onSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="First Name"
              id="firstName"
              type="text"
              value={firstName}
              className="validate"
              onChange={onChange}
            />
          </div>
          <div className="input-field col s6">
            <input
              id="lastName"
              value={lastName}
              type="text"
              placeholder="Last Name"
              className="validate"
              onChange={onChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="password"
              value={password}
              type="password"
              minLength="8"
              className="validate"
              onChange={onChange}
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <input
              id="password2"
              type="password"
              defaultValue={password2}
              className="validate"
              onChange={onChange}
            />
            <label htmlFor="password2">Confirm Password</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="supervisorPassword"
              type="password"
              value={supervisorPassword}
              className="validate"
              onChange={onChange}
            />
            <label htmlFor="supervisorPassword">Supervisor Permissions</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="email" type="email" value={email} onChange={onChange} />
            <label htmlFor="email">Email</label>
          </div>

          <p className="col s6">
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
        <div className="row">
          <div className="col s12 m6">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              style={{ width: "100%" }}
              onClick={onSubmit}
              name="action"
            >
              {" "}
              Register
            </button>
          </div>
          <div className="col s12 m6">
            <button
              className="btn waves-effect waves-light modal-trigger"
              style={{ width: "100%" }}
              name="action"
              href="#sign-in-modal"
            >
              Sign In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  addEmployee: PropTypes.func.isRequired
};

export default connect(null, { addEmployee })(Login);
