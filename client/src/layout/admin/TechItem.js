import React from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import {
  deleteEmployee,
  clockOut
} from "../../reducers/actions/employeeActions";
import PropTypes from "prop-types";

const TechItem = ({ tech, deleteEmployee, clockOut }) => {
  const onClockOut = () => {
    // deleteEmployee(tech.id);
    clockOut(tech._id);
    M.toast({ html: `${tech.firstName} clocked out` });
  };

  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a href="#!" className="secondary-content" onClick={onClockOut}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteEmployee: PropTypes.func,
  clockOut: PropTypes.func
};

export default connect(null, { deleteEmployee, clockOut })(TechItem);
