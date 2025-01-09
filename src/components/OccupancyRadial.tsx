"use client";

import Chart from "react-apexcharts";

const data = [
  {
    name: "Occupancy",
    count: 68,
    fill: "#FAE27C",
  },
];

const OccupancyRadial = () => {
  const series = data.map((item) => item.count);
  const options = {
    chart: {
      type: "radialBar" as "radialBar",
    },
    labels: data.map((item) => item.name),
    colors: data.map((item) => item.fill),
    dataLabels: {
      showOn: "always",
      name: {
        offsetY: -10,
        show: true,
        color: "#888",
        fontSize: "13px",
      },
      value: {
        color: "#111",
        fontSize: "30px",
        show: true,
      },
    },
    legend: {
      show: false,
    },
  };

  return (
    <div className="bg-white p-4 rounded-md">
      <Chart options={options} series={series} type="radialBar" width="100%" />
    </div>
  );
};

export default OccupancyRadial;
