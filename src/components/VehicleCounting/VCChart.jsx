import React from "react";
import Chart from "react-apexcharts";

function VCChart({ state }) {
  let series = [
    {
      name: "Sepeda",
      data: state.sepeda,
    },
    {
      name: "Motor",
      data: state.motor,
    },
    {
      name: "Mobil",
      data: state.mobil,
    },
    {
      name: "Bus",
      data: state.bus,
    },
    {
      name: "Truk",
      data: state.truk,
    },
  ];
  let options = {
    colors: ["#F44336", "#E91E63", "#9C27B0"],
    chart: {
      type: "bar",
      height: 500,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        barHeight: "100%",
        horizontal: true,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    xaxis: {
      categories: state.date,
      labels: {
        style: {
          colors: "#000",
          fontSize: "13px",
          fontFamily: "inherit",
          fontWeight: 300,
        },
      },
    },
    yaxis: {
      labels: {
        maxWidth: 200,
        style: {
          colors: "#000",
          fontFamily: "sans-serif",
          fontSize: "13px",
          fontFamily: "inherit",
          fontWeight: 300,
        },
      },
    },
  };
  return (
    <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <Chart options={options} series={series} type="bar" height={600} />
    </div>
  );
}

export default VCChart;
