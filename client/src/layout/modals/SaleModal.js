import React, { useState, useEffect } from "react";
import { CLEAR_CURRENT } from "../../reducers/actions/Types";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { moment } from "moment";
import { sale } from "../../reducers/actions/logActions";

const SaleModal = ({ sale, current }) => {
  const [id, setId] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [saleQuantity, setSaleQuantity] = useState(0);
  const [description, setDescription] = useState("");

  const [price, setPrice] = useState("");
  const [value, setValue] = useState(null);

  useEffect(() => {
    if (current) {
      setId(current._id);
      setDescription(current.description);
      setValue(current.sale_price);
      setQuantity(current.quantity);
    }
  }, [current]);
  const quantFunc = val => {
    setQuantity(current.quantity - val);
    setSaleQuantity(val);
    console.log(`Sale Quantity: ${val}`);
    console.log(`Value : ${current.quantity * value}`);
  };

  const onSubmit = () => {
    const log = {
      id: id,
      quantity: quantity,
      sale_quantity: saleQuantity,
      description: current.description,
      purchase_price: current.purchase_value,
      sale_price: current.sale_price,
      reorder_at: current.reorder_at,
      received_date: current.received_date,
      location: current.location,
      scannable: current.scannable,
      amount: quantity * current.sale_price
    };
    sale(log);
    console.log(log);
  };

  return (
    <div id="sale-modal" className="modal" style={{ width: "80%" }}>
      <div className="modal-content">
        <h4>Item Sale</h4>
        <h2 className="blue-text">{description}</h2>
        {price !== "" ? <h3>{price}</h3> : ""}
        <div className="row">
          <div className="col s12">
            <input
              type="text"
              name="id"
              value={id}
              required
              onChange={e => setId(e.target.value)}
            />
            <label htmlFor="description" className="active">
              Item ID
            </label>
          </div>
        </div>
        <div className="row"></div>
        <div className="row">
          <div className="col s12 m6">
            <input
              type="number"
              name="quantity"
              defaultValue="0"
              required
              onChange={e => quantFunc(e.target.value)}
            />
            <label htmlFor="quantity">Quantity</label>
          </div>
          <div className="col s12 m3">
            <span>Remaining inStock: </span>
            <br />
            {quantity > 0 ? (
              quantity
            ) : (
              <h2
                className="material-icons red-text "
                style={{ fontSize: "40px" }}
              >
                error_outline
              </h2>
            )}
          </div>
          <div className="col s12 m3">
            <span>Remaining inStock: </span> <br />
            {value == null ? <h3>Null</h3> : <h2>sale</h2>}
            <p>{value}</p>
          </div>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            onClick={onSubmit}
            className="modal-close waves-effect waves-green btn "
          >
            Sale
          </a>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  current: state.log.current
});

export default connect(mapStateToProps, { sale })(SaleModal);
