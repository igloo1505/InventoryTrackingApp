import React, { useEffect, useState } from "react";
import Preloader from "../../Preloader";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import moment from "moment";
import _ from "lodash";
import { getSales } from "../../../reducers/actions/logActions";
import SalesChart from "../SalesChart";

const Admin = ({
  log: { logs, loading, filtered, sales },
  employee: { user },
  getSales
}) => {
  useEffect(() => {
    getSales();
    // eslint-disable-next-line
  }, []);

  const { supervisor } = user;

  // Gets the sum quantity of sales, not individual sales
  var sumArr = 0;
  // returns an array of whole sales objects for day retrieved
  let sumToday = [];
  let x;
  let ArrByDate;
  let dateCount = [];

  const date = moment()
    .format()
    .split("T")[0];
  if (sales !== null && !loading) {
    const ret = sales.map(sale => sale.date.split("T")[0]);
    x = _.groupBy(ret);

    dateCount.push(ret);

    for (var i = 0; i < sales.length; i++) {
      const d = sales[i].date.split("T")[0];
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
        <SalesChart
          ArrByDate={ArrByDate}
          sumToday={sumToday}
          sales={sales}
          supervisor={supervisor}
        />
      ) : (
        <Preloader />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  log: state.log,
  employee: state.employee
});

Admin.propTypes = {
  log: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { getSales })(Admin);
