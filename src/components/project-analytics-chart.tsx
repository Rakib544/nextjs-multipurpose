"use client";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { Line } from "react-chartjs-2";

import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement, // x axis
  LinearScale, // y axis
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

const salesData = [
  { month: "January", sales: 100 },
  { month: "February", sales: 150 },
  { month: "March", sales: 200 },
  { month: "April", sales: 120 },
  { month: "May", sales: 180 },
  { month: "June", sales: 250 },
];

export default function ProjectAnalyticsChart() {
  const data = {
    labels: salesData.map((data) => data.month),
    datasets: [
      {
        label: "Revenue",
        data: salesData.map((data) => data.sales),
        borderColor: "#4f46e5",
        borderWidth: 3,
        pointBorderColor: "#4f46e5",
        pointBorderWidth: 3,
        tension: 0.5,
        fill: true,
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "#818cf8");
          gradient.addColorStop(1, "white");
          return gradient;
        },
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    responsive: true,

    scales: {
      y: {
        grid: {
          drawBorder: false,
        },
        ticks: {
          font: {
            size: 14,
            weight: "medium",
          },
        },
        min: 50,
      },
      x: {
        grid: {
          drawBorder: false,
          color: () => "transparent",
        },
        ticks: {
          font: {
            size: 14,
            weight: "medium",
          },
        },
      },
    },
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex justify-between items-center mb-8">
        <h3 className="font-bold text-foreground">Projects Analytics</h3>
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
      <div
        style={{
          cursor: "pointer",
        }}
      >
        <Line data={data} options={options as any}></Line>
      </div>
    </div>
  );
}
