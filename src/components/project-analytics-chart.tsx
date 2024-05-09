"use client";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "",
    },
  },
};

const revenues = {
  Jan: 10,
  Feb: 20,
  Mar: 40,
  Apr: 90,
  May: 15,
  Jun: 15,
  Jul: 15,
  Aug: 15,
  Sep: 15,
  Oct: 15,
  Nov: 15,
  Dec: 15,
};

export default function ProjectAnalyticsChart() {
  const data = {
    labels: Object.keys(revenues),
    datasets: [
      {
        fill: true,
        label: "Completed projects",
        data: Object.values(revenues),
        borderColor: "#727EED",
        backgroundColor: "#E5E7FB",
      },
    ],
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-indigo-950">Projects Analytics</h3>
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
      <Line options={options} data={data} />
    </div>
  );
}
