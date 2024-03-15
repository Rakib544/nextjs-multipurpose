import ContactForm from "@/components/contact-form";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { GridPattern } from "@/components/grid-pattern";
import {
  ChatIcon,
  NotificationIcon,
  PhoneIcon,
  PinIcon,
} from "@/components/icons";
import { SectionIntro } from "@/components/section-intro";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const contactData = [
  {
    id: 1,
    title: "Chat to sales",
    subtitle: "Speak to our friendly teams",
    link: "",
    icon: <ChatIcon className="h-4 w-4" />,
    btnText: "Chat to sales",
  },
  {
    id: 2,
    title: "Chat to support",
    subtitle: "Write here to help",
    link: "",
    icon: <NotificationIcon className="h-4 w-4" />,
    btnText: "Chat to support",
  },
  {
    id: 3,
    title: "Visit us",
    subtitle: "Visit our office HQ",
    link: "",
    icon: <PinIcon className="h-4 w-4" />,
    btnText: "Get Direction",
  },
  {
    id: 4,
    title: "Call us",
    subtitle: "Monday-Fri from 8am to 5pm",
    link: "",
    icon: <PhoneIcon className="h-4 w-4" />,
    btnText: "Call our team",
  },
];

export default function Contact1() {
  return (
    <div>
      <Container className="mt-16 lg:mt-24">
        <div className="absolute inset-0 z-[-1] top-0 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
          <GridPattern />
        </div>
        <FadeIn className="max-w-xl mx-auto col-span-12 text-center order-2 lg:order-1 z-10">
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Get In Touch With our Team
          </h1>
          <p className="mt-3 text-lg text-neutral-600 leading-8 px-3">
            Ready to help your company grow faster? Let&apos;s chat about how we
            can help.
          </p>
        </FadeIn>
      </Container>
      <Container className="grid grid-cols-12 gap-6 mt-16">
        {contactData.map((contactInfo) => (
          <div
            key={contactInfo.id}
            className="col-span-12 lg:col-span-3 rounded-lg p-4 bg-white ring-1 ring-neutral-950/10 transition hover:bg-neutral-50"
          >
            <span className="h-10 w-10 rounded-full ring-1 ring-neutral-950/10  flex justify-center items-center mb-4">
              {contactInfo.icon}
            </span>
            <h2 className="text-lg font-bold text-neutral-950 mb-1">
              {contactInfo.title}
            </h2>
            <p className="text-sm text-neutral-700 mb-4">
              {contactInfo.subtitle}
            </p>
            <Link href={contactInfo.link} className={buttonVariants({})}>
              Chat to sales
            </Link>
          </div>
        ))}
      </Container>
      <Container className="mt-32">
        <SectionIntro title="Message Us">
          <p className="text-base text-neutral-700 -mt-4">
            We Will be back to you within 24 hours.
          </p>
        </SectionIntro>
        <div className="max-w-3xl mt-12">
          <ContactForm />
        </div>
      </Container>
    </div>
  );
}
