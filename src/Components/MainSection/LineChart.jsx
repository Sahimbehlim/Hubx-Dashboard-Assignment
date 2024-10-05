import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

const LineChart = () => {
  const data = {
    labels: [
      "2021-02-03",
      "2021-02-04",
      "2021-02-05",
      "2021-02-06",
      "2021-02-07",
      "2021-02-08",
      "2021-02-09",
      "",
    ],
    datasets: [
      {
        data: [0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.8],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          color: "transparent",
        },
      },
      y: {
        grid: {
          display: false,
        },
        border: {
          color: "transparent",
        },
        ticks: {
          callback: (value) => value.toFixed(2),
          autoSkip: false,
          stepSize: 0.25,
        },
        min: 0,
        max: 1,
      },
    },
  };

  return (
    <div className="w-full h-full box-border">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
