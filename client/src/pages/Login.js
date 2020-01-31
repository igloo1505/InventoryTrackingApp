import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: ""
  });
  const { firstName, lastName, email, password, password2 } = user;
  const onChange = e => setUser({ ...user, [e.target.id]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log(
      "Data collected, script to push to mongo through express goes here"
    );
    // console.log({ user });
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
            <input id="email" type="email" value={email} onChange={onChange} />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          onClick={onSubmit}
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
