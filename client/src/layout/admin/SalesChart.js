import React, { Component } from "react";
import Chart from "react-apexcharts";

const SalesChart = ({ ArrByDate, sumToday }) => {
  console.log(ArrByDate);
  let x = [];
  let y = [];
  for (var i = 0; i < ArrByDate.length; i++) {
    y.push(ArrByDate[i].length);
    let z = ArrByDate[i][0].slice(0, 3);
    let q = ArrByDate[i][0].split(" ")[1];
    x.push(z + " " + q);

    // x.push(ArrByDate[i][0]);
  }
  console.log(x);
  console.log(y);
  let options = {
    chart: {
      id: "lineChart"
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
      }
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
      }
    }
  };
  let series = [
    {
      name: "Individual Sales",
      data: y
    }
  ];

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="line"
        width="100%"
        style={{ padding: "20px", overflow: "show" }}
      />
    </div>
  );
};

export default SalesChart;
