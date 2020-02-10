import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getEmployees,
  getClockedIn,
  clockIn
} from "../../reducers/actions/employeeActions";
import TechItem from "./TechItem";

const TechListModal = ({
  getEmployees,
  getClockedIn,
  clockIn,
  employee: { employees, loading, authenticated, clockedIn, user }
}) => {
  const { _id } = user;
  console.log(_id);
  useEffect(() => {
    if (authenticated) {
      getEmployees();
    }
    // eslint-disable-next-line
  }, [authenticated]);
  useEffect(() => {
    if (authenticated) {
      getClockedIn();
    }
    // eslint-disable-next-line
  }, [authenticated]);
  useEffect(() => {
    if (authenticated) {
      clockIn({ _id });
    }
    // eslint-disable-next-line
  }, [authenticated]);

  let inNow = [];

  if (employees !== null && clockedIn !== null) {
    for (var i = 0; i < clockedIn.length; i++) {
      for (var z = 0; z < employees.length; z++) {
        if (clockedIn[i]._id == employees[z]._id) {
          inNow.push(employees[z]);
        }
      }
    }
  }
  console.log(inNow);

  return (
    <div id="employee-list-modal" className="modal">
      <div className="modal-content">
        <h4>Employees</h4>
        <ul className="collection">
          {!loading &&
            inNow !== null &&
            inNow.map(employee => (
              <TechItem tech={employee} key={employee._id} />
            ))}
        </ul>
      </div>
    </div>
  );
};
TechListModal.prototypes = {
  tech: PropTypes.object.isRequired,
  getEmployees: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  employee: state.employee
});
export default connect(mapStateToProps, {
  getEmployees,
  getClockedIn,
  clockIn
})(TechListModal);
