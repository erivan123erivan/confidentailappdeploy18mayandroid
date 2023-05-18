import React, { useState, useContext, useEffect } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
} from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import { authContext } from "../context/authContext";

ChartJS.register(CategoryScale, LinearScale, LineElement);

const Chart = () => {
  const { loading, transactions, dataa, type, transAmount } =
    useContext(authContext);

  // useEffect(() => {
  //   dataa();
  // }, [transactions]);

  const data = {
    labels: type,

    datasets: [
      {
        label: ["Transactions"],
        data: transAmount.reverse(),

        fill: false,
        borderColor: "black",
        tension: 0.1,
      },
    ],
  };

  var options = {
    maintainAspectRatio: false,

    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  const config = {
    type: "line",
    data: data,
  };

  return (
    <div className="chartWrapeprDiv">
      <Line data={data} />
    </div>
  );
};

export default Chart;
