import React, { useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchLogs } from "../reducers/actions/logActions";

const SearchBar = ({ searchLogs }) => {
  const text = useRef("");
  const onChange = e => {
    searchLogs(e.target.value);
    // searchLogs(text.current.value);
  };
  return (
    <nav style={{ marginBottom: "30px" }}>
      <div className="nav-wrapper">
        <form>
          <div className="input-field blue ">
            <input
              id="search"
              type="search"
              placeholder="Search Logs"
              ref={text}
              onChange={onChange}
              required
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.prototypes = {
  searchLogs: PropTypes.func.isRequired
};

export default connect(null, { searchLogs })(SearchBar);
