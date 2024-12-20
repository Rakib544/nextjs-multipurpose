import { Border } from "@/components/border";
import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import {
  BriefcaseIcon,
  ClockIcon,
  DollarBagIcon,
  FileTextIcon,
} from "@/components/icons";
import JobApplicationForm from "@/components/job-application-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply",
  robots: {
    index: true,
    follow: true,
  },
};

export default function JobApply() {
  return (
    <div>
      <Container className="my-20">
        <FadeIn>
          <span className="block text-sm font-bold  text-primary uppercase  mb-4">
            You are applying for:
          </span>
          <Border position="top" className="mt-3 pb-4" />
        </FadeIn>
        <FadeIn className="mt-6">
          <h1 className="text-2xl md:text-3xl text-foreground font-extrabold">
            Senior WordPress Plugin Developer
          </h1>
          <p className="text-base font-medium text-muted-foreground mt-1">
            Dhaka, Bangladesh
          </p>
          <FadeInStagger
            faster
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6"
          >
            <FadeIn className="flex gap-x-3 mt-4">
              <span className="inline-flex justify-center items-center h-12 w-12 rounded-full bg-indigo-50 border">
                <DollarBagIcon className="h-5 w-5 text-primary" />
              </span>
              <div>
                <p className="font-bold text-foreground text-base">$185K</p>
                <p className="text-base text-muted-foreground">
                  {" "}
                  Average Salary
                </p>
              </div>
            </FadeIn>
            {/*  */}
            <FadeIn className="flex gap-x-3 mt-5">
              <span className="inline-flex justify-center items-center h-12 w-12 rounded-full bg-indigo-50 border">
                <BriefcaseIcon className="h-5 w-5 text-primary" />
              </span>
              <div>
                <p className="font-bold text-foreground text-base">Full Time</p>
                <p className="text-base text-muted-foreground">Job Type</p>
              </div>
            </FadeIn>
            {/*  */}
            <FadeIn className="flex gap-x-3 mt-5">
              <span className="inline-flex justify-center items-center h-12 w-12 rounded-full bg-indigo-50 border">
                <ClockIcon className="h-5 w-5 text-primary" />
              </span>
              <div>
                <p className="font-bold text-foreground text-base">
                  8 AM – 5 PM
                </p>
                <p className="text-base text-muted-foreground">Working Hours</p>
              </div>
            </FadeIn>
            {/*  */}
            <FadeIn className="flex gap-x-3 mt-5">
              <span className="inline-flex justify-center items-center h-12 w-12 rounded-full bg-indigo-50 border">
                <FileTextIcon className="h-5 w-5 text-primary" />
              </span>
              <div>
                <p className="font-bold text-foreground text-base">5 Years</p>
                <p className="text-base text-muted-foreground">Experience</p>
              </div>
            </FadeIn>
          </FadeInStagger>
        </FadeIn>
        <FadeIn className="mt-16">
          <h3 className="text-2xl font-bold tracking-tight">
            Want to be a part?
          </h3>
          <div className="max-w-2xl mt-12">
            <JobApplicationForm />
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}
