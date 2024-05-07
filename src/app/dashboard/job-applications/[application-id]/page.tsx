import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { applications } from "../page";
export default function ApplicationDetails() {
  const application = applications[0];
  return (
    <div>
      <Link
        href="/dashboard/job-applications"
        className={buttonVariants({ variant: "ghost" })}
      >
        <ArrowLeft className="h-4 w-4 mr-1.5" /> Back
      </Link>

      <div className="mt-8 ">
        <SectionTitle title="Applicant Information" />
        <ApplicationInfoText
          option="Applicant Name"
          value={application.applicantName}
        />
        <ApplicationInfoText
          option="Email"
          value={application.applicantEmail}
        />
        <ApplicationInfoText option="Phone" value={application.phone} />
        <ApplicationInfoText
          option="Applied Date"
          value={new Date(application.appliedDate).toDateString()}
        />
        <ApplicationInfoText
          option="Applied Position"
          value={application.position}
        />
        <ApplicationInfoText option="Bio" value={application.bio} />
        <div className="relative overflow-x-auto">
          <table className="w-full border text-left text-sm text-[#66667E]">
            <thead className="border-b bg-slate-50 text-xs uppercase text-[#66667E]">
              <tr>
                <th
                  scope="col"
                  className="px-3 py-3 text-base text-indigo-950 capitalize  font-semibold"
                >
                  Applicant Documents
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-white hover:bg-slate-50">
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-[#66667E] dark:text-white"
                >
                  Resume/CV
                </th>
                <td className="px-6 py-4 text-right">
                  <Button variant="outline">View</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ApplicationInfoText({
  option,
  value,
}: {
  option: string;
  value: string;
}) {
  return (
    <div className="grid grid-cols-12 gap-x-2 border-b px-4 py-3 text-sm hover:bg-slate-50">
      <p className={`col-span-12 font-medium text-[#66667E] md:col-span-3`}>
        {option}
      </p>
      <p
        className={`col-span-12 mt-1 font-medium md:col-span-9 md:mt-0 ${
          ["email", "institution website link"].includes(option.toLowerCase())
            ? ""
            : "capitalize"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="rounded bg-slate-50 px-4 py-3 font-semibold text-indigo-950">
      {title}
    </h2>
  );
}
