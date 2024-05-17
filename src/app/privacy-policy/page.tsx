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
import Link from "next/link";

const sideMenus = [
  {
    label: "Information We Collect",
    href: "information-we-collect",
  },
  {
    label: "How We Use Your Information",
    href: "how-we-use-your-information",
  },
  {
    label: "Information Sharing",
    href: "information-sharing",
  },
  {
    label: "Your Choices",
    href: "your-choices",
  },
];

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
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-3 sticky top-0 h-screen hidden md:block">
            <h2 className="font-bold text-xl mb-4">Table Of Contents</h2>
            <ul className="space-y-3 text-foreground">
              {sideMenus.map((menu) => (
                <li key={menu.href} className="">
                  <Link
                    href={`#${menu.href}`}
                    className="hover:text-primary font-medium text-muted-foreground"
                  >
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Description description={privacyPolicyData} />
          </div>
        </div>
      </Container>
    </div>
  );
}
