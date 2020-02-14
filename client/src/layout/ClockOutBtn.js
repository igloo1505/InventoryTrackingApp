import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getClockedIn } from "../reducers/actions/employeeActions";

const ClockOutBtn = ({ employee: { user, authenticated } }) => {
  const { _id, firstName, lastName } = user;

  return (
    <Fragment>
      <div
        className="fixed-action-btn"
        style={{ marginRight: "auto", marginLeft: "0px" }}
      >
        <a
          href="#clockOut-modal"
          className="btn-floating btn-large grey modal-trigger"
        >
          <i className="large material-icons">add</i>
        </a>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  employee: state.employee,
  log: state.log
});

export default connect(mapStateToProps, { getClockedIn })(ClockOutBtn);
