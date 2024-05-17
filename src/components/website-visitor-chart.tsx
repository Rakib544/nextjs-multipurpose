"use client";
import ReactApexChart from "react-apexcharts";

const series = [
  {
    name: "TEAM A",
    type: "column",
    color: "rgba(0, 167, 111, 1)",
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
  },
  {
    name: "TEAM B",
    type: "area",
    color: "rgba(79, 70, 229, 0.7)",
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
  },
  {
    name: "TEAM C",
    type: "line",
    color: "rgba(52, 152, 219, 1)",
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
  },
];

const options = {
  chart: {
    redrawOnWindowResize: true,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  grid: {
    borderColor: "#e5e7eb",
    strokeDashArray: 4,
  },

  stroke: {
    width: [0, 2, 5],
    curve: "smooth",
    colors: [
      "rgba(0, 167, 111, 1)",
      "rgba(79, 70, 229, 0.7)",
      "rgba(52, 152, 219, 1)",
    ],
  },
  legend: {
    position: "top",
    colors: [
      "rgba(0, 167, 111, 1)",
      "rgba(79, 70, 229, 0.7)",
      "rgba(52, 152, 219, 1)",
    ],
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      borderRadiusApplication: "end",
      columnWidth: "20%",
    },
  },
  fill: {
    type: ["solid", "gradient", "solid"],
    colors: [
      "rgba(0, 167, 111, 1)",
      "rgba(79, 70, 229, 0.7)",
      "rgba(52, 152, 219, 1)",
    ],
    gradient: {
      shade: "light",
      type: "vertical",
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 0,
      stops: [0, 100, 100, 100],
      colorStops: [],
    },
  },
  labels: [
    "01/01/2003",
    "02/01/2003",
    "03/01/2003",
    "04/01/2003",
    "05/01/2003",
    "06/01/2003",
    "07/01/2003",
    "08/01/2003",
    "09/01/2003",
    "10/01/2003",
    "11/01/2003",
  ],
  markers: {
    size: 0,
  },
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    title: {
      text: "Points",
    },
    min: 0,
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y: any) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " points";
        }
        return y;
      },
    },
  },
  responsive: [
    {
      breakpoint: 1400, // Extra large devices
      options: {
        chart: {
          width: "100%",
        },
      },
    },
    {
      breakpoint: 1200, // Large devices
      options: {
        chart: {
          width: "100%",
        },
      },
    },
    {
      breakpoint: 992, // Medium devices
      options: {
        chart: {
          width: "100%",
        },
      },
    },
    {
      breakpoint: 768, // Small devices
      options: {
        chart: {
          width: "100%",
        },
      },
    },
    {
      breakpoint: 576, // Extra small devices
      options: {
        chart: {
          width: "100%",
          height: "auto",
        },

        yaxis: {
          show: false, // Hide y-axis for very small screens
        },
        xaxis: {
          labels: {
            show: false, // Hide x-axis labels for very small screens
          },
        },
      },
    },
  ],
};

const ApexChart = () => {
  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options as any}
          series={series}
          type="line"
          height={350}
        />
      </div>
    </div>
  );
};

export default ApexChart;
