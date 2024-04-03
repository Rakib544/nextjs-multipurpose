import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { FaqCard1 } from "@/components/faq-card";
import {
  ChatIcon,
  NotificationIcon,
  PhoneIcon,
  PinIcon,
} from "@/components/icons";
import { SectionIntro } from "@/components/section-intro";
import { TestimonialCard } from "@/components/testimonial-card";
import { Accordion } from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import {
  InfiniteMoving,
  InfiniteMovingItem,
} from "@/components/ui/infinite-moving";
import { faqData } from "@/lib/data/faq-data";
import { testimonials } from "@/lib/data/testimonials-data";
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
    icon: <PinIcon className="h-5 w-5 fill-[#6666FF] text-[#6666FF]" />,
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

export default function Contact1() {
  return (
    <div>
      <FadeIn className="max-w-3xl mx-auto text-center z-10 mt-20 mb-10 px-4">
        <span className="font-medium items-center gap-x-2 mb-4 px-6 inline-flex py-2 rounded-full bg-indigo-50 text-sm text-indigo-700">
          Contact Us
        </span>
        <h1 className="text-3xl font-black md:text-4xl/tight text-neutral-950">
          Don’t hesitate to
          <span className="text-indigo-600 relative z-10 whitespace-nowrap inline-block sm:inline">
            {" "}
            <span className="relative">Contact Us</span>{" "}
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute left-0 top-2/3 h-[0.58em] w-full z-[-1] fill-indigo-300/70"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
          </span>{" "}
        </h1>
        <p className="mt-3 text-base text-neutral-600 leading-8">
          Ready to help your company grow faster? Let&apos;s chat about how we
          can help.
        </p>
      </FadeIn>

      <Container className="grid grid-cols-12 gap-6 mt-20">
        {contactData.map((contactInfo) => (
          <div
            key={contactInfo.id}
            className="col-span-12 sm:col-span-6 lg:col-span-3 border rounded-xl p-6 hover:bg-gradient-to-b from-indigo-50 hover:border-indigo-200 to-white transition hover:bg-neutral-50"
          >
            <span className="border inline-block px-5 py-1.5 border-indigo-200 rounded-full mb-4">
              {contactInfo.icon}
            </span>
            <h2 className="text-lg font-bold text-neutral-950 mb-1">
              {contactInfo.title}
            </h2>
            <p className="text-sm text-neutral-700 mb-4">
              {contactInfo.subtitle}
            </p>
            <Link
              href={contactInfo.link}
              className={buttonVariants({
                variant: "link",
                className: "!px-0",
              })}
            >
              {contactInfo.btnText} <span className="ml-2">&rarr;</span>
            </Link>
          </div>
        ))}
      </Container>

      <div className="bg-indigo-600 py-20 mt-32">
        <Container>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-5">
              <SectionIntro
                eyebrow="Our Locations"
                title="Visit our offices"
                invert
              >
                <p>Find us on these locations</p>
              </SectionIntro>
            </div>
            <div className="col-span-12 md:col-span-7 grid grid-cols-1  sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-bold text-base">Copenhagen</h4>
                <p className="text-sm mt-1 text-slate-200">1 Carlsberg Gate</p>
                <p className="text-sm text-slate-200">
                  1260, København, Denmark
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold text-base">London</h4>
                <p className="text-sm mt-1 text-slate-200">1 Carlsberg Gate</p>
                <p className="text-sm text-slate-200">
                  1260, København, Denmark
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold text-base">Sydney</h4>
                <p className="text-sm mt-1 text-slate-200">1 Carlsberg Gate</p>
                <p className="text-sm text-slate-200">
                  1260, København, Denmark
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold text-base">New York</h4>
                <p className="text-sm mt-1 text-slate-200">1 Carlsberg Gate</p>
                <p className="text-sm text-slate-200">
                  1260, København, Denmark
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="mt-16 lg:mt-32">
        <SectionIntro
          title="Got questions? We’ve got answers"
          eyebrow="Our FAQ"
          className="max-w-2xl mx-auto text-center"
        >
          <p>
            In order to make sure your website is user friendly and optimized
            for Google’s algorithm, our on-site optimization experts clean up
            the code and copy.
          </p>
        </SectionIntro>
        <div className="max-w-2xl mx-auto mt-16">
          <FadeInStagger faster>
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="mt-6"
            >
              {faqData.splice(0, 8).map((faq) => (
                <FaqCard1
                  key={faq.id}
                  id={faq.id.toString()}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </Accordion>
          </FadeInStagger>
        </div>
      </Container>
      <Container className="mb-32">
        <SectionIntro
          eyebrow="Reviews"
          title="Clients feedback"
          className="max-w-2xl mx-auto mb-6 text-center"
        ></SectionIntro>
        <InfiniteMoving>
          {testimonials.map((testimonial) => (
            <InfiniteMovingItem
              key={testimonial.id}
              className="md:w-[350px] bg-gradient-to-br from-indigo-50 to-white"
            >
              <TestimonialCard
                image={testimonial.image}
                quote={testimonial.quote}
                name={testimonial.name}
                rating={testimonial.rating}
                role={testimonial.role}
              />
            </InfiniteMovingItem>
          ))}
        </InfiniteMoving>
      </Container>
    </div>
  );
}
