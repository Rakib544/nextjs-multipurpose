import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import TeamMemberEditForm from "./team-member-edit-form";

export default function EditTeamMember() {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
        Edit new member
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
          <BreadcrumbSeparator />
          <BreadcrumbItem className="text-sm">
            <BreadcrumbPage className="text-muted-foreground">
              Edit
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="py-10">
        <TeamMemberEditForm />
      </div>
    </div>
  );
}
