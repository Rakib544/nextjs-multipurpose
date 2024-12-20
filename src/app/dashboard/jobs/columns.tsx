"use client";

import { ArrowUpDown, Ellips } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { type ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export type Job = {
  id: number;
  title: string;
  candidates: number;
  createdAt: string;
  jobType: string;
  role: string;
  status: "active" | "expired" | "draft";
};

function statusBadge(status: Job["status"]) {
  if (status === "expired") {
    return "bg-red-400/10 text-red-500 hover:bg-red-400/20";
  }

  if (status === "active") {
    return "bg-green-400/10 text-green-500 hover:bg-green-400/20";
  }
  if (status === "draft") {
    return "bg-gray-200 text-muted-foreground";
  }
}

export const columns: ColumnDef<Job>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: "Job Title",
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-0 font-semibold"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Posted Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "candidates",
    header: "Candidates",
  },
  {
    accessorKey: "jobType",
    header: "Position",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const { status } = row.original;
      return (
        <span
          className={cn(
            "capitalize inline-block rounded-full  px-3 py-1 text-center text-xs font-semibold leading-5",
            statusBadge(status)
          )}
        >
          {status}
        </span>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <Ellips className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/dashboard/jobs/1">View</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/dashboard/jobs/1/edit">Edit</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
