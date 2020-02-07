import React, { useEffect, useState } from "react";
import Preloader from "../../Preloader";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import moment from "moment";
import _ from "lodash";
import { getSales } from "../../../reducers/actions/logActions";
import SalesChart from "../SalesChart";

const Admin = ({ log: { logs, loading, filtered, sales }, getSales }) => {
  useEffect(() => {
    getSales();
    // eslint-disable-next-line
  }, []);

  // Gets the sum quantity of sales, not individual sales
  // !!Need to get this working again
  var sumArr = 0;
  // returns an array of whole sales objects for day retrieved
  let sumToday = [];
  let x;
  let ArrByDate;
  let dateCount = [];
  const date = moment().format("MMMM Do YYYY");
  if (sales !== null && !loading) {
    const ret = sales.map(sale => sale.sale_date.split(",")[0]);
    x = _.groupBy(ret);

    dateCount.push(x);

    for (var i = 0; i < sales.length; i++) {
      const d = sales[i].sale_date.split(",")[0];
      if (d == date) {
        sumToday.push(sales[i]);
      }
      sumArr += sales[i].quantity;
    }
    ArrByDate = Object.values(x);
  }

  return (
    <div style={{ maxHeight: "300px" }}>
      {sales !== null ? (
        <SalesChart ArrByDate={ArrByDate} sumToday={sumToday} sales={sales} />
      ) : (
        <Preloader />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  log: state.log
});

Admin.propTypes = {
  log: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { getSales })(Admin);
