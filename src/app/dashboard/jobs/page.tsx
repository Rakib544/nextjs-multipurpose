import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Job, columns } from "./columns";
import { DataTable } from "./data-table";

const jobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    candidates: 10,
    createdAt: "2024-04-01",
    jobType: "Full-time",
    role: "Frontend Engineer",
    status: "Active",
  },
  {
    id: 2,
    title: "Backend Developer",
    candidates: 8,
    createdAt: "2024-04-02",
    jobType: "Full-time",
    role: "Backend Engineer",
    status: "Active",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    candidates: 5,
    createdAt: "2024-04-03",
    jobType: "Contract",
    role: "UI/UX Designer",
    status: "Active",
  },
  {
    id: 4,
    title: "Data Scientist",
    candidates: 12,
    createdAt: "2024-04-04",
    jobType: "Full-time",
    role: "Data Scientist",
    status: "Active",
  },
  {
    id: 5,
    title: "Marketing Manager",
    candidates: 6,
    createdAt: "2024-04-05",
    jobType: "Full-time",
    role: "Marketing Manager",
    status: "Active",
  },
  {
    id: 6,
    title: "Product Manager",
    candidates: 7,
    createdAt: "2024-04-06",
    jobType: "Full-time",
    role: "Product Manager",
    status: "Active",
  },
  {
    id: 7,
    title: "Software Engineer",
    candidates: 9,
    createdAt: "2024-04-07",
    jobType: "Full-time",
    role: "Software Engineer",
    status: "Active",
  },
  {
    id: 8,
    title: "DevOps Engineer",
    candidates: 4,
    createdAt: "2024-04-08",
    jobType: "Contract",
    role: "DevOps Engineer",
    status: "Active",
  },
  {
    id: 9,
    title: "Sales Representative",
    candidates: 11,
    createdAt: "2024-04-09",
    jobType: "Full-time",
    role: "Sales Representative",
    status: "Active",
  },
  {
    id: 10,
    title: "Customer Support Specialist",
    candidates: 6,
    createdAt: "2024-04-10",
    jobType: "Contract",
    role: "Customer Support Specialist",
    status: "Active",
  },
  {
    id: 11,
    title: "Graphic Designer",
    candidates: 3,
    createdAt: "2024-04-11",
    jobType: "Full-time",
    role: "Graphic Designer",
    status: "Active",
  },
  {
    id: 12,
    title: "HR Manager",
    candidates: 8,
    createdAt: "2024-04-12",
    jobType: "Full-time",
    role: "HR Manager",
    status: "Active",
  },
  {
    id: 13,
    title: "Content Writer",
    candidates: 5,
    createdAt: "2024-04-13",
    jobType: "Contract",
    role: "Content Writer",
    status: "Active",
  },
  {
    id: 14,
    title: "Network Administrator",
    candidates: 7,
    createdAt: "2024-04-14",
    jobType: "Full-time",
    role: "Network Administrator",
    status: "Active",
  },
  {
    id: 15,
    title: "Accountant",
    candidates: 4,
    createdAt: "2024-04-15",
    jobType: "Full-time",
    role: "Accountant",
    status: "Active",
  },
  {
    id: 16,
    title: "Business Analyst",
    candidates: 9,
    createdAt: "2024-04-16",
    jobType: "Full-time",
    role: "Business Analyst",
    status: "Active",
  },
  {
    id: 17,
    title: "Quality Assurance Engineer",
    candidates: 6,
    createdAt: "2024-04-17",
    jobType: "Full-time",
    role: "Quality Assurance Engineer",
    status: "Active",
  },
  {
    id: 18,
    title: "Project Manager",
    candidates: 12,
    createdAt: "2024-04-18",
    jobType: "Full-time",
    role: "Project Manager",
    status: "Active",
  },
  {
    id: 19,
    title: "IT Support Specialist",
    candidates: 8,
    createdAt: "2024-04-19",
    jobType: "Contract",
    role: "IT Support Specialist",
    status: "Active",
  },
  {
    id: 20,
    title: "Research Analyst",
    candidates: 5,
    createdAt: "2024-04-20",
    jobType: "Full-time",
    role: "Research Analyst",
    status: "Active",
  },
];

export default async function Jobs() {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold mb-2">Manage jobs</h2>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="text-sm text-gray-800 font-medium">
            <BreadcrumbLink asChild>
              <Link href="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="text-sm">
            <BreadcrumbPage className="text-muted-foreground">
              Jobs
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mx-auto w-full overflow-x-auto py-6">
        <DataTable columns={columns} data={jobs} />
      </div>
    </div>
  );
}
