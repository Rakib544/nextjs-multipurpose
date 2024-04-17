import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import {
  BriefcaseIcon,
  CalenderIcon,
  ClockIcon,
  FileTextIcon,
  MailIcon,
  PinIcon,
} from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import { buttonVariants } from "@/components/ui/button";
import { jobDescription } from "@/lib/data/job-description";
import Link from "next/link";

export default function JobDetails() {
  return (
    <div>
      <Container>
        <PageIntro pageTitle="Senior WordPress Plugin Developer">
          <p>
            We are looking for Senior WordPress Plugin Developers with 5+ years
            of experience. You must have excellent capabilities and experience
            of WordPress Plugin Development.
          </p>
        </PageIntro>
      </Container>
      <Container className="mt-12 mb-32">
        <FadeIn className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8">
            <div
              className="prose prose-slate prose-base prose-h3:font-bold prose-h3:text-lg"
              dangerouslySetInnerHTML={{ __html: jobDescription }}
            />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="border border-indigo-950/5 bg-white rounded-xl p-6">
              <div className="flex gap-x-2 text-base text-indigo-950 font-semibold">
                <PinIcon className="h-5 w-5" /> Dhaka, Bangladesh
              </div>
              <p className="text-base text-gray-600 leading-6 mt-2">
                Please send us your details CV to apply for this post.
              </p>
              <p className="font-bold text-2xl text-indigo-950 mt-4">
                $185,000
              </p>
              <span className="text-sm text-neutral-800 font-medium">
                Average Salary
              </span>
              <div className="flex gap-x-2 mt-4">
                <span className="inline-flex justify-center items-center h-10 w-10 rounded-full bg-slate-100 border">
                  <MailIcon className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-bold text-indigo-950 text-sm">
                    Career@example.com
                  </p>
                  <p className="text-sm text-gray-600">Contact Email</p>
                </div>
              </div>
              <div className="flex gap-x-2 mt-4">
                <span className="inline-flex justify-center items-center h-10 w-10 rounded-full bg-slate-100 border">
                  <BriefcaseIcon className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-bold text-indigo-950 text-sm">Full Time</p>
                  <p className="text-sm text-gray-600">Job Type</p>
                </div>
              </div>
              <div className="flex gap-x-2 mt-4">
                <span className="inline-flex justify-center items-center h-10 w-10 rounded-full bg-slate-100 border">
                  <CalenderIcon className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-bold text-indigo-950 text-sm">
                    19 October, 2023
                  </p>
                  <p className="text-sm text-gray-600">Posted</p>
                </div>
              </div>
              <div className="flex gap-x-2 mt-4">
                <span className="inline-flex justify-center items-center h-10 w-10 rounded-full bg-slate-100 border">
                  <ClockIcon className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-bold text-indigo-950 text-sm">
                    8 AM – 5 PM
                  </p>
                  <p className="text-sm text-gray-600">Working Hours</p>
                </div>
              </div>
              <div className="flex gap-x-2 mt-4">
                <span className="inline-flex justify-center items-center h-10 w-10 rounded-full bg-slate-100 border">
                  <FileTextIcon className="h-4 w-4" />
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
      </Container>
    </div>
  );
}
