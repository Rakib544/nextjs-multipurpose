"use client";

import ReactApexChart from "react-apexcharts";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const series = [44, 55, 13, 43];
const options = {
  chart: {
    type: "pie",
  },
  legend: {
    position: "top",
  },
  colors: ["#00A76F", "#FFAB00", "#00B8D9", "#FF5630"],
  labels: ["Asia", "America", "Europe", "Africa"],
};

export default function ContinentVisitChart() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8 px-5">
        <h3 className="font-bold text-foreground">Continent Visits</h3>
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
          type="pie"
        />
      </div>
    </div>
  );
}
