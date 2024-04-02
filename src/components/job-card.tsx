import Link from "next/link";
import React from "react";
import { ClockIcon, DollarCircleIcon, PinIcon } from "./icons";

interface JobCardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  title: string;
  category: string;
  address: string;
  subtitle: string;
  jobType: string;
  salary: string;
  slug: string;
}

const JobCard = React.forwardRef<HTMLAnchorElement, JobCardProps>(
  ({ title, category, address, subtitle, jobType, salary, slug }, ref) => {
    return (
      <Link
        href={`/jobs/${slug}`}
        className="border relative p-4 rounded-xl group block hover:bg-slate-50"
      >
        <div className="flex justify-between items-center mb-3">
          <span className="hidden sm:inline-block px-4 py-1 group-hover:transparent border bg-slate-100 text-neutral-950 text-xs font-semibold rounded-full">
            {category}
          </span>
          <span className="inline-flex border items-center gap-x-1 px-4 py-1 bg-gray-100 text-neutral-950 text-xs font-semibold rounded-full">
            <PinIcon className="h-3 w-3" /> {address}
          </span>
        </div>

        <h3 className="text-lg font-bold">{title}</h3>

        <p className="text-base text-neutral-600 leading-7 mb-4">{subtitle}</p>
        <div className="flex gap-x-4">
          <span className="flex gap-x-1 text-sm items-center font-medium text-neutral-600">
            <ClockIcon className="h-4 w-4" /> {jobType}
          </span>
          <span className="flex gap-x-1 text-sm items-center font-medium text-neutral-600">
            <DollarCircleIcon className="h-4 w-4" /> {salary}
          </span>
        </div>
      </Link>
    );
  }
);

JobCard.displayName = "JobCard";

export { JobCard };
