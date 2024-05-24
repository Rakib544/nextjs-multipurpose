import { Container } from "@/components/container";
import Description from "@/components/description";
import { PageIntro } from "@/components/page-intro";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { privacyPolicyData } from "@/lib/data/privacy-policy-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy and policy",
  robots: {
    index: true,
    follow: true,
  },
};

export default function privacyAndPolicy() {
  return (
    <div>
      <PageIntro pageTitle="Privacy and Policy" centered>
        <Breadcrumb className="flex justify-center">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Privacy and policy</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </PageIntro>
      <Container className="my-20 ">
        <div className="max-w-3xl mx-auto">
          <Description description={privacyPolicyData} />
        </div>
      </Container>
    </div>
  );
}
