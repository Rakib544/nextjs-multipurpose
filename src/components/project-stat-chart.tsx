"use client";
import ReactApexChart from "react-apexcharts";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const series = [
  {
    name: "Completed",
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    color: "rgba(79, 70, 229,1)",
  },
  {
    name: "Pending",
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    color: "rgba(79, 70, 229,0.5)",
  },
];

const options = {
  chart: {
    type: "bar",
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
  plotOptions: {
    bar: {
      borderRadiusApplication: "end",
      borderRadius: 10,
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: "top",
  },
};

export default function ProjectStatChart() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8 px-5">
        <h3 className="font-bold text-foreground">Project Stats</h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Filter</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>This Month</DropdownMenuItem>
            <DropdownMenuItem>Last 3 Months</DropdownMenuItem>
            <DropdownMenuItem>Last Year</DropdownMenuItem>
            <DropdownMenuItem>Last 5 Year</DropdownMenuItem>
            <DropdownMenuItem>All Times</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div id="chart">
        <ReactApexChart
          options={options as any}
          series={series as any}
          type="bar"
        />
      </div>
    </div>
  );
}
