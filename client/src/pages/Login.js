import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const Login = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    password: "",
    password2: "",
    email: ""
  });
  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    debugger;
    if (user.password !== user.password2) {
      M.toast({ html: "Oh no. These passwords do not match" });
    }
    console.log(user);
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
              className="validate"
            />
          </div>
          <div className="input-field col s6">
            <input
              id="lastName"
              value={user.lastName}
              type="text"
              placeholder="Last Name"
              className="validate"
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="password"
              value={user.password}
              type="password"
              minLength="8"
              className="validate"
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="password2"
              type="password"
              value={user.password2}
              className="validate"
            />
            <label htmlFor="password2">Confirm Password</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="email"
              type="email"
              value={user.email}
              className="validate"
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Register
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
};
export default Login;
