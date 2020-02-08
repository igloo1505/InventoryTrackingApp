import React, { Component } from "react";
import _ from "lodash";
import Chart from "react-apexcharts";

const SalesChart = ({ ArrByDate, sumToday, sales }) => {
  console.log(sumToday);

  //   Array of sales quantity, not individual per day

  //   Array of dates as whole day
  let x = [];
  //   Array of INDIVIDUAL sales for day in array x
  let y = [];

  for (var i = 0; i < ArrByDate.length; i++) {
    y.push(ArrByDate[i].length);
    let z = ArrByDate[i][0].split("-");
    // let z = ArrByDate[i][0].slice(0, 3);
    // let q = ArrByDate[i][0].split(" ")[1];
    x.push(z[1] + "-" + z[2]);
  }
  console.log(x, y);
  let uniq = [];
  let E2 = [];
  let byQuan = [];
  let totalQuantity = [];
  let totalDate = [];
  if (sales !== null && sales !== 0) {
    for (var U = 0; U < ArrByDate.length; U++) {
      if (uniq.indexOf(ArrByDate[U][0] == -1)) {
        uniq.push(ArrByDate[U][0]);
      } else if (uniq.includes(ArrByDate[U][0])) {
        uniq.concat(ArrByDate[U][0]);
      }
    }
    for (var i = 0; i < sales.length; i++) {
      let E = {};
      E = { ...sales[i], date: sales[i].date.split("T")[0] };
      E2.push(E);
    }

    console.log(E2);
    var grouped = _.groupBy(E2, "date");
    console.log(grouped);
    let keys = Object.keys(grouped);
    let vals = Object.values(grouped);
    console.log(vals);

    // let sum = 0;
    for (var v = 0; v < keys.length; v++) {
      let sum = 0;
      let gx = keys[v];
      for (var e = 0; e < vals[v].length; e++) {
        sum += vals[v][e].quantity;
      }
      totalQuantity.push(sum);
      totalDate.push(gx);
      console.log(`${gx} sum: ${sum}`);
      console.log(totalQuantity);
      console.log(totalDate);
    }
  }

  console.log(uniq);

  console.log(byQuan);
  console.log(E2);

  let options = {
    chart: {
      id: "lineChart"
    },
    grid: {
      show: true
    },
    title: {
      text: "Individual Sales by day",
      align: "left"
    },
    chart: {
      toolbar: {
        show: false,
        tools: {
          download: true
        },
        autoSelected: "zoom"
      },
      height: "300px"
    },
    yaxis: {
      lines: {
        show: false
      },
      min: 0
      // labels: {
      //   formatter: function(val) {
      //     return Math.round(val);
      //   }
      // }
    },
    annotations: {
      yaxis: [
        {
          y: sumToday.length,
          borderColor: "#00E396",
          label: {
            borderColor: "#00E396",
            style: {
              color: "#fff",
              background: "#00E396"
            },
            text: "Today"
          }
        }
      ]
    },
    xaxis: {
      type: "category",
      categories: x,
      labels: {
        rotateAlways: true,
        show: true,
        rotate: -45
      },
      lines: {
        show: false
      }
    }

    // xaxis: {
    //   labels: {
    //     datetimeFormatter: {
    //       year: "yyyy",
    //       month: "MMM 'yy",
    //       day: "dd MMM",
    //       hour: "HH:mm"
    //     }
    //   }
    // }
  };
  let series = [
    {
      name: "Individual Sales",
      data: y
    },
    {
      name: "Total Quantity",
      data: totalQuantity
    }
  ];

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="line"
        height="300px"
        width="100%"
        style={{ padding: "20px", overflow: "show" }}
      />
    </div>
  );
};

export default SalesChart;
