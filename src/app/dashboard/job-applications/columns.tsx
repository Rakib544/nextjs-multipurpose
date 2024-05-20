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

export type Application = {
  id: number;
  applicantName: string;
  applicantEmail: string;
  jobTitle: string;
  appliedDate: string;
  position: string;
  status: "under review" | "shortlisted" | "rejected";
  phone: string;
  bio: string;
};

function statusBadge(status: Application["status"]) {
  if (status === "rejected") {
    return "bg-red-400/10 text-red-500 hover:bg-red-400/20";
  }

  if (status === "shortlisted") {
    return "bg-green-400/10 text-green-500 hover:bg-green-400/20";
  }
  if (status === "under review") {
    return "bg-yellow-400/10 text-yellow-500 hover:bg-yellow-400/20";
  }
}

export const columns: ColumnDef<Application>[] = [
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
    accessorKey: "applicantEmail",
    header: "Applicant",
    cell: ({ row }) => {
      const { applicantName, applicantEmail } = row.original;
      return (
        <div>
          <h3 className="font-bold">{applicantName}</h3>
          <p>{applicantEmail}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "appliedDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-0 font-semibold"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Applied Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "position",
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
              <Link href="/dashboard/job-applications/1">View</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Approve</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
