import { Container } from "@/components/container";
import { GridPattern } from "@/components/grid-pattern";
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

export default function privacyAndPolicy() {
  return (
    <div>
      <div className="absolute z-[-1] inset-0 top-0 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
        <GridPattern />
      </div>
      <PageIntro title="Privacy and Policy" centered>
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
      <Container className="mt-20 ">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-3 sticky top-0 h-screen hidden md:block">
            <h2 className="font-bold text-lg mb-4">Table Of Contents</h2>
            <ul className="space-y-3 text-neutral-950">
              {sideMenus.map((menu) => (
                <li key={menu.href} className="">
                  <Link
                    href={`#${menu.href}`}
                    className="hover:text-indigo-600 font-medium text-neutral-600"
                  >
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-9">
            <div
              dangerouslySetInnerHTML={{ __html: privacyPolicyData }}
              className="prose prose-slate max-w-none prose-base"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
