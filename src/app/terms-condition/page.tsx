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
import { termsConditionData } from "@/lib/data/terms-condition-data";
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

export default function TermsAndCondition() {
  return (
    <div>
      <div className="absolute z-[-1] inset-0 top-0 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
        <GridPattern />
      </div>
      <PageIntro title="Terms and Conditions" centered>
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
            <h2 className="font-extrabold text-lg mb-4">Table Of Contents</h2>
            <ul className="space-y-3 text-neutral-950">
              {sideMenus.map((menu) => (
                <li key={menu.href} className="">
                  <Link
                    href={`#${menu.href}`}
                    className=" font-medium  text-base text-neutral-600 hover:text-indigo-600"
                  >
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-9">
            <div
              dangerouslySetInnerHTML={{ __html: termsConditionData }}
              className="prose prose-slate max-w-none prose-base  prose-h3:font-bold prose-h3:text-lg"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
