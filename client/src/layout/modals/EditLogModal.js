import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateLog } from "../../reducers/actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const EditLogModal = ({ current, updateLog }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [received_date, setReceivedDate] = useState(null);
  const [location, setLocation] = useState("");
  const [reorder, setReorder] = useState(false);

  useEffect(() => {
    if (current) {
      setDescription(current.description);
      setQuantity(current.quantity);
      setLocation(current.location);
    }
  }, [current]);

  const onSubmit = () => {
    if (description === "" || quantity === 0 || location === null) {
      M.toast({ html: "Oh no. Please fill this out completely" });
    }
    const upLog = {
      id: current.id,
      description,
      quantity,
      location
    };
    updateLog(upLog);
    M.toast({ html: "log updated" });
  };

  useEffect(() => setReceivedDate(Date.now()), []);

  return (
    <div id="edit-log-modal" className="modal" style={{ width: "80%" }}>
      <div className="modal-content">
        <h4>Edit Item</h4>
        <div className="row">
          <div className="col s12">
            <input
              type="text"
              name="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <label htmlFor="description" className="active">
              Description
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <input
              type="number"
              name="quantity"
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
            />
            <label htmlFor="quantity">Quantity</label>
          </div>
          <div className="col s12 m6">
            <input
              type="text"
              name="location"
              value={location}
              onChange={e => setLocation(e.target.value)}
            />
            <label htmlFor="location">Location ID</label>
          </div>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            onClick={onSubmit}
            className="modal-close waves-effect waves-green btn "
          >
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  current: state.log.current
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
