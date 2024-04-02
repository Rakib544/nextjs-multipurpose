"use client";
import { jobs } from "@/lib/data/job-data";
import { useState } from "react";
import { ListFilterIcon } from "./icons";
import JobFilter from "./job-filter";
import { Button } from "./ui/button";
import { Sheet, SheetContent } from "./ui/sheet";

export default function MobileFilterDrawer() {
  const jobType = jobs.map((job) => job.jobType);
  const uniqueJobType = [...new Set(jobType)];

  const jobCategories = jobs.map((job) => job.category);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <Button
        aria-label="Open Filter"
        variant="outline"
        size="lg"
        onClick={() => setIsOpen(true)}
      >
        <ListFilterIcon className="h-5 mr-1 w-5" />
        Filter
      </Button>

      <SheetContent className="pt-12 px-0 overflow-y-auto">
        <JobFilter categories={jobCategories} jobTypes={uniqueJobType} />
      </SheetContent>
    </Sheet>
  );
}
