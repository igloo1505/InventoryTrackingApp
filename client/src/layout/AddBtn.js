import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getClockedIn } from "../reducers/actions/employeeActions";

const AddBtn = ({
  employee: { user, authenticated },
  log: { loading },
  getClockedIn
}) => {
  // const { authenticated, supervisor } = user;
  let conditionalStyle;

  if (authenticated) {
    conditionalStyle = { display: "inline-block" };
  } else if (!authenticated) {
    conditionalStyle = { display: "none" };
  }

  return (
    <Fragment>
      <div className="fixed-action-btn " style={conditionalStyle}>
        <a
          href="#add-log-modal"
          className="btn-floating btn-large blue darken-2 modal-trigger"
        >
          <i className="large material-icons">add</i>
        </a>
        <ul>
          <li className="btn-floating  green modal-trigger">
            <a href="#sale-modal" className="modal-trigger">
              <i className="material-icons">monetization_on</i>
            </a>
          </li>
          <li className="btn-floating grey">
            <a href="#receiving-modal" className="modal-trigger">
              <i className="material-icons">call_received</i>
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  employee: state.employee,
  log: state.log
});
AddBtn.propTypes = {
  employee: PropTypes.object.isRequired,
  log: PropTypes.object,
  getClockedIn: PropTypes.func
};

export default connect(mapStateToProps, { getClockedIn })(AddBtn);
