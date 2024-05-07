import { FadeIn } from "@/components/fade-in";
import {
  BriefcaseIcon,
  CalenderIcon,
  ClockIcon,
  FileTextIcon,
  MailIcon,
  PinIcon,
} from "@/components/icons";

import Description from "@/components/description";
import { buttonVariants } from "@/components/ui/button";
import { jobDescription } from "@/lib/data/job-data";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function JobDetails() {
  return (
    <div>
      <Link
        href="/dashboard/jobs"
        className={buttonVariants({ variant: "ghost" })}
      >
        <ArrowLeft className="h-4 w-4 mr-1.5" /> Back
      </Link>
      <FadeIn className="mt-12 mb-6">
        <h1 className="font-extrabold text-2xl md:text-3xl">
          Senior Software Engineer
        </h1>
      </FadeIn>
      <FadeIn className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <Description description={jobDescription} />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div className="border border-indigo-950/5 bg-white rounded-xl p-6">
            <div className="flex gap-x-2 text-base text-indigo-950 font-semibold">
              <PinIcon className="h-5 w-5" /> Dhaka, Bangladesh
            </div>
            <p className="text-base text-gray-600 leading-6 mt-2">
              Please send us your details CV to apply for this post.
            </p>
            <p className="font-bold text-2xl text-indigo-950 mt-4">$185,000</p>
            <span className="text-sm text-neutral-800 font-medium">
              Average Salary
            </span>
            <div className="flex gap-x-2 mt-4">
              <span className="inline-flex justify-center items-center h-10 w-10 rounded-full bg-indigo-50 border">
                <MailIcon className="h-4 w-4 text-indigo-500" />
              </span>
              <div>
                <p className="font-bold text-indigo-950 text-sm">
                  Career@example.com
                </p>
                <p className="text-sm text-gray-600">Contact Email</p>
              </div>
            </div>
            <div className="flex gap-x-2 mt-4">
              <span className="inline-flex justify-center items-center h-10 w-10 rounded-full bg-indigo-50 border">
                <BriefcaseIcon className="h-4 w-4 text-indigo-500" />
              </span>
              <div>
                <p className="font-bold text-indigo-950 text-sm">Full Time</p>
                <p className="text-sm text-gray-600">Job Type</p>
              </div>
            </div>
            <div className="flex gap-x-2 mt-4">
              <span className="inline-flex justify-center items-center h-10 w-10 rounded-full bg-indigo-50 border">
                <CalenderIcon className="h-4 w-4 text-indigo-500" />
              </span>
              <div>
                <p className="font-bold text-indigo-950 text-sm">
                  19 October, 2023
                </p>
                <p className="text-sm text-gray-600">Posted</p>
              </div>
            </div>
            <div className="flex gap-x-2 mt-4">
              <span className="inline-flex justify-center items-center h-10 w-10 rounded-full bg-indigo-50 border">
                <ClockIcon className="h-4 w-4 text-indigo-500" />
              </span>
              <div>
                <p className="font-bold text-indigo-950 text-sm">8 AM – 5 PM</p>
                <p className="text-sm text-gray-600 ">Working Hours</p>
              </div>
            </div>
            <div className="flex gap-x-2 mt-4">
              <span className="inline-flex justify-center items-center h-10 w-10 rounded-full bg-indigo-50 border">
                <FileTextIcon className="h-4 w-4 text-indigo-500" />
              </span>
              <div>
                <p className="font-bold text-indigo-950 text-sm">5 Years</p>
                <p className="text-sm text-gray-600">Experience</p>
              </div>
            </div>
            <Link
              href="/jobs/1/apply"
              className={buttonVariants({ className: "w-full mt-8" })}
            >
              Apply for this job
            </Link>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
