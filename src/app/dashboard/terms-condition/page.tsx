import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { termsConditionData } from "@/lib/data/terms-condition-data";
import Link from "next/link";
import TermsConditionForm from "./terms-condition-form";

export default function PrivacyPolicyPage() {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold mb-2">
        Terms and condition
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
              Terms & condition
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-12">
        <TermsConditionForm initialValue={termsConditionData} />
      </div>
    </div>
  );
}
