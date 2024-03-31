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
        ref={ref}
        href={`/jobs/${slug}`}
        className="border  border-indigo-200 bg-gradient-to-br from-violet-50 to-white relative p-4 rounded-xl hover:bg-gradient-to-br hover:from-indigo-100 hover:to-indigo-50 group  block"
      >
        <div className="flex justify-between">
          <h3 className="text-lg font-bold">
            {title}{" "}
            <span className="inline-block px-4 py-1 group-hover:transparent bg-indigo-600 text-white text-xs font-semibold rounded-full">
              {category}
            </span>
          </h3>
          <div>
            <span className="absolute -top-3 right-0  inline-flex items-center gap-x-1 px-4 py-1 bg-indigo-600 text-white text-xs font-semibold rounded-full">
              <PinIcon className="h-3 w-3" /> {address}
            </span>
          </div>
        </div>
        <p className="text-base text-neutral-600 leading-7 mt-2 mb-4">
          {subtitle}
        </p>
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
