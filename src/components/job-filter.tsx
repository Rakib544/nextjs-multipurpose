"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Border } from "./border";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export default function JobFilter({
  categories,
  jobTypes,
}: {
  categories: string[];
  jobTypes: string[];
}) {
  return (
    <div className="space-y-8">
      <div className="border shadow-sm bg-white p-5 rounded-xl">
        <h2 className="text-sm font-bold mb-3">Category</h2>
        <Border position="top" className="pb-4" />
        <JobCategoryFilter categories={categories} />
      </div>
      <div className="border shadow-sm bg-white p-5 rounded-xl">
        <h2 className="text-sm font-bold mb-3">Job Type</h2>
        <Border position="top" className="pb-4" />
        <JobTypeFilter jobTypes={jobTypes} />
      </div>
    </div>
  );
}

function JobCategoryFilter({ categories }: { categories: string[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const onSelect = (value: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (!value) {
      current.delete("category");
    } else {
      current.set("category", value);
      current.set("page", "1");
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
  };

  return (
    <RadioGroup
      defaultValue={searchParams.get("category") || ""}
      value={searchParams.get("category") || ""}
      onValueChange={(value) => onSelect(value)}
    >
      {categories.map((category) => (
        <div className="flex items-center space-x-2" key={category}>
          <Label
            htmlFor={category}
            className="flex font-medium cursor-pointer items-center gap-x-2  py-1 capitalize"
          >
            <RadioGroupItem value={category} id={category} />
            {category}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}

function JobTypeFilter({ jobTypes }: { jobTypes: string[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const onSelect = (value: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (!value) {
      current.delete("jobType");
    } else {
      current.set("jobType", value);
      current.set("page", "1");
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
  };

  return (
    <RadioGroup
      defaultValue={searchParams.get("jobType") || ""}
      value={searchParams.get("jobType") || ""}
      onValueChange={(value) => onSelect(value)}
    >
      {jobTypes.map((jobType) => (
        <div className="flex items-center space-x-2" key={jobType}>
          <Label
            htmlFor={jobType}
            className="flex font-medium cursor-pointer items-center gap-x-2 py-1 capitalize"
          >
            <RadioGroupItem value={jobType} id={jobType} />
            {jobType}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
