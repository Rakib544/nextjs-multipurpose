import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import {
  ArrowRight,
  ChatIcon,
  NotificationIcon,
  PhoneIcon,
  TextUnderline,
} from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import { buttonVariants } from "@/components/ui/button";
import { Faq1 } from "@/sections/faq";
import Offices from "@/sections/offices";
import { Testimonial1 } from "@/sections/testimonial";
import { MapPin } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

const contactData = [
  {
    id: 1,
    title: "Chat to sales",
    subtitle: "Speak to our friendly teams",
    link: "",
    icon: <ChatIcon className="h-5 w-5 text-[#6666FF]" />,
    btnText: "Chat to sales",
  },
  {
    id: 2,
    title: "Chat to support",
    subtitle: "Write here to help",
    link: "",
    icon: <NotificationIcon className="h-5 w-5 text-[#6666FF]" />,
    btnText: "Chat to support",
  },
  {
    id: 3,
    title: "Visit us",
    subtitle: "Visit our office HQ",
    link: "",
    icon: <MapPin className="h-5 w-5 fill-white text-[#6666FF]" />,
    btnText: "Get Direction",
  },
  {
    id: 4,
    title: "Call us",
    subtitle: "Monday-Fri from 8am to 5pm",
    link: "",
    icon: <PhoneIcon className="h-5 w-5 text-[#6666FF]" />,
    btnText: "Call our team",
  },
];

export const metadata: Metadata = {
  title: "Contact",
  robots: {
    index: true,
    follow: true,
  },
};

export default function Contact1() {
  return (
    <div>
      <Container>
        <PageIntro
          eyebrow="Contact Us"
          className="max-w-3xl mx-auto mt-20 mb-10"
          centered
          pageTitle={
            <>
              Let&apos;s build an awesome project together for
              <span className="text-primary relative z-10 whitespace-nowrap inline-block sm:inline">
                {" "}
                <span className="relative">your business</span>{" "}
                <TextUnderline />
              </span>{" "}
            </>
          }
        >
          Transforming ideas into tangible success stories - together, every
          step counts towards achievement
        </PageIntro>
      </Container>

      <Container className=" mt-20">
        <FadeInStagger faster className="grid grid-cols-12 gap-4">
          {contactData.map((contactInfo) => (
            <FadeIn
              key={contactInfo.id}
              className="col-span-12 sm:col-span-6 lg:col-span-3 border rounded-xl p-6 hover:bg-slate-50"
            >
              <span className="border inline-block px-5 py-1.5 border-indigo-200 rounded-full mb-4">
                {contactInfo.icon}
              </span>
              <h2 className="text-xl font-bold text-foreground mb-1">
                {contactInfo.title}
              </h2>
              <p className="text-base text-muted-foreground mb-4">
                {contactInfo.subtitle}
              </p>
              <Link
                href={contactInfo.link}
                className={buttonVariants({
                  variant: "link",
                  className: "!px-0",
                })}
              >
                {contactInfo.btnText} <ArrowRight className="size-4 ml-1" />
              </Link>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
      <Offices />
      <Faq1 />
      <Testimonial1 centered />
    </div>
  );
}
