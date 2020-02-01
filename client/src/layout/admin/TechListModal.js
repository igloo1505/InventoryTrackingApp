import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getEmployees } from "../../reducers/actions/employeeActions";
import TechItem from "./TechItem";

const TechListModal = ({ getEmployees, employee: { employees, loading } }) => {
  useEffect(() => {
    getEmployees();
    // eslint-disable-next-line
  }, []);

  return (
    <div id="employee-list-modal" className="modal">
      <div className="modal-content">
        <h4>Employees</h4>
        <ul className="collection">
          {!loading &&
            employees !== null &&
            employees.map(employee => (
              <TechItem tech={employee} key={employee.id} />
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
export default connect(mapStateToProps, { getEmployees })(TechListModal);
