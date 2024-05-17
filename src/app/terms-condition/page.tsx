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
import { termsConditionData } from "@/lib/data/terms-condition-data";
import { Metadata } from "next";
import Link from "next/link";

const sideMenus = [
  {
    label: "Acceptance of Terms",
    href: "acceptance-of-terms",
  },
  {
    label: "User Conduct",
    href: "user-conduct",
  },
  {
    label: "Intellectual Property",
    href: "intellectual-property",
  },
  {
    label: "Limitation of Liability",
    href: "limitation-of-liability",
  },
  {
    label: "Dispute Resolution",
    href: "dispute-resolution",
  },
  {
    label: "Changes to Terms",
    href: "changes-to-terms",
  },
];

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
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-3 sticky top-0 h-screen hidden lg:block">
            <h2 className="font-extrabold text-xl mb-4">Table Of Contents</h2>
            <ul className="space-y-3 text-foreground">
              {sideMenus.map((menu) => (
                <li key={menu.href} className="">
                  <Link
                    href={`#${menu.href}`}
                    className=" font-medium  text-base text-muted-foreground hover:text-primary"
                  >
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Description description={termsConditionData} />
          </div>
        </div>
      </Container>
    </div>
  );
}
