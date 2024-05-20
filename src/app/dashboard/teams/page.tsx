import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import teamImage1 from "@/images/team/team-1.jpeg";
import teamImage10 from "@/images/team/team-10.jpeg";
import teamImage2 from "@/images/team/team-2.jpeg";
import teamImage3 from "@/images/team/team-3.jpeg";
import teamImage4 from "@/images/team/team-4.jpeg";
import teamImage5 from "@/images/team/team-5.jpeg";
import teamImage6 from "@/images/team/team-6.jpeg";
import teamImage7 from "@/images/team/team-7.jpeg";
import teamImage8 from "@/images/team/team-8.jpeg";
import teamImage9 from "@/images/team/team-9.jpeg";
import Link from "next/link";
import { Team, columns } from "./columns";
import { DataTable } from "./data-table";

const users: Team[] = [
  {
    id: "1",
    user: {
      name: "John Doe",
      image: teamImage1,
    },
    phone: "+1234567890",
    status: "active",
    email: "john@example.com",
    country: "United States",
  },
  {
    id: "2",
    user: {
      name: "Alice Smith",
      image: teamImage2,
    },
    phone: "+9876543210",
    status: "suspended",
    email: "alice@example.com",
    country: "Canada",
  },
  {
    id: "3",
    user: {
      name: "Bob Johnson",
      image: teamImage3,
    },
    phone: "+1122334455",
    status: "active",
    email: "bob@example.com",
    country: "United Kingdom",
  },
  {
    id: "4",
    user: {
      name: "Carol White",
      image: teamImage4,
    },
    phone: "+6677889900",
    status: "suspended",
    email: "carol@example.com",
    country: "Australia",
  },
  {
    id: "5",
    user: {
      name: "David Brown",
      image: teamImage5,
    },
    phone: "+9988776655",
    status: "active",
    email: "david@example.com",
    country: "Germany",
  },
  {
    id: "6",
    user: {
      name: "Emma Wilson",
      image: teamImage6,
    },
    phone: "+4433221100",
    status: "suspended",
    email: "emma@example.com",
    country: "France",
  },
  {
    id: "7",
    user: {
      name: "Frank Miller",
      image: teamImage7,
    },
    phone: "+5544332211",
    status: "active",
    email: "frank@example.com",
    country: "Italy",
  },
  {
    id: "8",
    user: {
      name: "Grace Lee",
      image: teamImage8,
    },
    phone: "+6677008899",
    status: "suspended",
    email: "grace@example.com",
    country: "Spain",
  },
  {
    id: "9",
    user: {
      name: "Henry Walker",
      image: teamImage9,
    },
    phone: "+7788990011",
    status: "active",
    email: "henry@example.com",
    country: "Netherlands",
  },
  {
    id: "10",
    user: {
      name: "Ivy Davis",
      image: teamImage10,
    },
    phone: "+8899001122",
    status: "suspended",
    email: "ivy@example.com",
    country: "Sweden",
  },
];

export default async function Students() {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
        Manage team members
      </h2>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="text-sm text-foreground font-medium">
            <BreadcrumbLink asChild>
              <Link href="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="text-sm text-foreground font-medium">
            <BreadcrumbLink asChild>
              <Link href="/dashboard/teams">Teams</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mx-auto w-full overflow-x-auto py-10">
        <DataTable columns={columns} data={users} />
      </div>
    </div>
  );
}
