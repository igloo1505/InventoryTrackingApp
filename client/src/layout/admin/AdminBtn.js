import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AdminBtn = ({ employee: { user }, loggedIn }) => {
  const adminToggle = () => {
    let p = window.location.pathname;
    if (p == "/") {
      return "/admin";
    } else if (p == "/admin") {
      return "/";
    }
  };
  const { supervisor } = user;

  return (
    <Fragment>
      {supervisor ? (
        <div className="fixed-action-btn" style={{ marginRight: "80px" }}>
          <Link
            to={adminToggle}
            className="btn-floating btn-large red darken-2"
          >
            <i className="large material-icons">trending_up</i>
          </Link>
          <ul>
            <li className="btn-floating green modal-trigger">
              <a href="#add-emp-modal" className="modal-trigger">
                <i className="material-icons">person_add</i>
              </a>
            </li>
            <li className="btn-floating grey">
              <a href="#employee-list-modal" className="modal-trigger">
                <i className="material-icons">person</i>
              </a>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  employee: state.employee
});

AdminBtn.propTypes = {
  employee: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(AdminBtn);
