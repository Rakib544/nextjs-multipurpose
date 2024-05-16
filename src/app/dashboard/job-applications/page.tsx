import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Application, columns } from "./columns";
import { DataTable } from "./data-table";

export const applications: Application[] = [
  {
    id: 1,
    applicantName: "John Doe",
    applicantEmail: "john.doe@example.com",
    jobTitle: "Software Engineer",
    appliedDate: "2024-04-25",
    position: "Backend Developer",
    status: "Under Review",
    phone: "0174738493482392",
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ab, tempora inventore doloribus ea amet!",
  },
  {
    id: 2,
    applicantName: "Jane Smith",
    applicantEmail: "jane.smith@example.com",
    jobTitle: "Data Analyst",
    appliedDate: "2024-04-27",
    position: "Data Analytics Specialist",
    status: "Shortlisted",
    phone: "0174738493482392",
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ab, tempora inventore doloribus ea amet!",
  },
  {
    id: 3,
    applicantName: "Alice Johnson",
    applicantEmail: "alice.johnson@example.com",
    jobTitle: "Marketing Manager",
    appliedDate: "2024-04-30",
    position: "Marketing Manager",
    status: "Rejected",
    phone: "0174738493482392",
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ab, tempora inventore doloribus ea amet!",
  },
  {
    id: 4,
    applicantName: "Bob Williams",
    applicantEmail: "bob.williams@example.com",
    jobTitle: "Graphic Designer",
    appliedDate: "2024-05-02",
    position: "Graphic Designer",
    status: "Applied",
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ab, tempora inventore doloribus ea amet!",
    phone: "0174738493482392",
  },
  {
    id: 5,
    applicantName: "Emily Brown",
    applicantEmail: "emily.brown@example.com",
    jobTitle: "Sales Representative",
    appliedDate: "2024-05-03",
    position: "Sales Representative",
    status: "Under Review",
    phone: "0174738493482392",
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ab, tempora inventore doloribus ea amet!",
  },
  {
    id: 6,
    applicantName: "Michael Wilson",
    applicantEmail: "michael.wilson@example.com",
    jobTitle: "Customer Service Representative",
    appliedDate: "2024-05-04",
    position: "Customer Service Representative",
    status: "Shortlisted",
    phone: "0174738493482392",
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ab, tempora inventore doloribus ea amet!",
  },
  {
    id: 7,
    applicantName: "Sarah Lee",
    applicantEmail: "sarah.lee@example.com",
    jobTitle: "Product Manager",
    appliedDate: "2024-05-05",
    position: "Product Manager",
    status: "Applied",
    phone: "0174738493482392",
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ab, tempora inventore doloribus ea amet!",
  },
  {
    id: 8,
    applicantName: "David Garcia",
    applicantEmail: "david.garcia@example.com",
    jobTitle: "Frontend Developer",
    appliedDate: "2024-05-07",
    position: "Frontend Developer",
    status: "Rejected",
    phone: "0174738493482392",
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ab, tempora inventore doloribus ea amet!",
  },
  {
    id: 9,
    applicantName: "Olivia Martinez",
    applicantEmail: "olivia.martinez@example.com",
    jobTitle: "HR Coordinator",
    appliedDate: "2024-05-08",
    position: "HR Coordinator",
    status: "Under Review",
    phone: "0174738493482392",
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ab, tempora inventore doloribus ea amet!",
  },
  {
    id: 10,
    applicantName: "Daniel Taylor",
    applicantEmail: "daniel.taylor@example.com",
    jobTitle: "Accountant",
    appliedDate: "2024-05-10",
    position: "Accountant",
    status: "Applied",
    phone: "0174738493482392",
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ab, tempora inventore doloribus ea amet!",
  },
  {
    id: 11,
    applicantName: "Sophia Rodriguez",
    applicantEmail: "sophia.rodriguez@example.com",
    jobTitle: "Business Analyst",
    appliedDate: "2024-05-11",
    position: "Business Analyst",
    status: "Shortlisted",
    phone: "0174738493482392",
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ab, tempora inventore doloribus ea amet!",
  },
];

export default async function Jobs() {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold mb-2">
        Manage applications
      </h2>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="text-sm text-foreground font-medium">
            <BreadcrumbLink asChild>
              <Link href="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="text-sm">
            <BreadcrumbPage className="text-muted-foreground">
              Applications
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mx-auto w-full overflow-x-auto py-6">
        <DataTable columns={columns} data={applications} />
      </div>
    </div>
  );
}
