import React from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { deleteEmployee } from "../../reducers/actions/employeeActions";
import PropTypes from "prop-types";

const TechItem = ({ tech, deleteEmployee }) => {
  const onDelete = () => {
    deleteEmployee(tech.id);
    M.toast({ html: "Employee Removed" });
  };

  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteEmployee: PropTypes.func
};

export default connect(null, { deleteEmployee })(TechItem);
