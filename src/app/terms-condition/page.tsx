import { Container } from "@/components/container";
import Description from "@/components/description";
import { FadeIn } from "@/components/fade-in";
import { PageIntro } from "@/components/page-intro";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { termsConditionData } from "@/lib/data/terms-condition-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and condition",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndCondition() {
  return (
    <div>
      <PageIntro pageTitle="Terms and Conditions" centered>
        <Breadcrumb className="flex justify-center">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Terms and condition</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </PageIntro>
      <Container className="my-20 ">
        <FadeIn className="max-w-3xl mx-auto">
          <Description description={termsConditionData} />
        </FadeIn>
      </Container>
    </div>
  );
}
