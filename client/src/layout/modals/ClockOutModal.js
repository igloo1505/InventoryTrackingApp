import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";

const ClockOutModal = ({ signIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const { email, password } = employee;
  //   const onChange = e => setUser({ ...user, [e.target.id]: e.target.value });
  const employee = { email, password };
  const onSubmit = e => {
    if (email === "" || password === "") {
      M.toast({ html: "Please fill this out completely" });
    } else {
      signIn({ employee });

      setEmail("");
      setPassword("");
    }
  };
  return (
    <div id="ClockOut-modal" className="modal">
      <div className="modal-content">
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Email"
              id="email"
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Password"
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button
          className="btn waves-effect waves-light modal-close"
          type="submit"
          style={{ width: "100%" }}
          onClick={onSubmit}
          name="action"
        >
          Sign In
          <i
            className="material-icons"
            style={{
              paddingLeft: "10px"
            }}
          >
            send
          </i>
        </button>
      </div>
    </div>
  );
};

export default connect(null)(ClockOutModal);
