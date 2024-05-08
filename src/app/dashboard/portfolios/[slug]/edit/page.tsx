import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import PortfoliosEditForm from "./portfolios-edit-form";

export default function ArticleEditPage() {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-indigo-950 mb-3">
        Edit Portfolio
      </h2>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="text-sm text-gray-800 font-medium">
            <BreadcrumbLink asChild>
              <Link href="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="text-sm text-gray-800 font-medium">
            <BreadcrumbLink asChild>
              <Link href="/dashboard/portfolios">Portfolios</Link>
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
        <PortfoliosEditForm />
      </div>
    </div>
  );
}
