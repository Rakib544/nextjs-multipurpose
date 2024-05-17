import { ArrowRight } from "@/components/icons";
import { socialMediaProfiles } from "@/components/social-media-profiles";

export const footerNavigation = [
  {
    title: "Solutions",
    links: [
      { title: "Paid search marketing", href: "/service-details" },
      { title: "Email marketing", href: "/service-details" },
      { title: "Social media marketing", href: "/service-details" },
      {
        title: (
          <p className="flex items-center">
            See all{" "}
            <span aria-hidden="true">
              <ArrowRight className="size-4 ml-1" />
            </span>
          </p>
        ),
        href: "/services-1",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Process", href: "/process" },
      { title: "Blog", href: "/blog" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: socialMediaProfiles,
  },
];
