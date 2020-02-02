import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateLog } from "../../reducers/actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const DetailLogModal = ({ current, updateLog }) => {
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [reorderAt, setReorderAt] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("");
  const [received_date, setReceivedDate] = useState("");
  const [location, setLocation] = useState("");
  const [reorder, setReorder] = useState(false);

  useEffect(() => {
    if (current) {
      setId(current._id);
      setDescription(current.description);
      setQuantity(current.quantity);
      setLocation(current.location);
      setCategory(current.category);
      setSalePrice(current.sale_price);
      setReorderAt(current.reorder_at);
    }
  }, [current]);

  return (
    <div id="detail-log-modal" className="modal" style={{ width: "80%" }}>
      <div className="modal-content">
        <div className="row">
          <div className="col s6">
            <p style={{ fontWeight: "bold", fontSize: "1.2em" }}>
              Item:
              {description}
            </p>
          </div>
          <div className="col s6">
            <p style={{ fontWeight: "bold", fontSize: "1.2em" }}>
              ID:
              {id}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col s6">
            <p style={{ fontWeight: "bold", fontSize: "1.2em" }}>
              In Stock: {quantity}
            </p>
          </div>
          <div className="col s6">
            <p style={{ fontWeight: "bold", fontSize: "1.2em" }}>
              Location: {location}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col s6">
            <p style={{ fontWeight: "bold", fontSize: "1.2em" }}>
              Category: {category}
            </p>
          </div>
          <div className="col s6">
            <p style={{ fontWeight: "bold", fontSize: "1.2em" }}>
              Price:
              {salePrice}
            </p>
          </div>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect red accent-2 btn ">
            Close
          </a>
        </div>
      </div>
    </div>
  );
};

DetailLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func
};

const mapStateToProps = state => ({
  current: state.log.current
});

export default connect(mapStateToProps, { updateLog })(DetailLogModal);
