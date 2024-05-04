import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { privacyPolicyData } from "@/lib/data/privacy-policy-data";
import Link from "next/link";
import PrivacyPolicyForm from "./privacy-policy-form";

export default function PrivacyPolicyPage() {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold mb-2">Privacy and policy</h2>
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
              Privacy & Policy
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-12">
        <PrivacyPolicyForm initialValue={privacyPolicyData} />
      </div>
    </div>
  );
}
