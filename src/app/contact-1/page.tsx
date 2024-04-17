import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { FaqCard1 } from "@/components/faq-card";
import {
  ChatIcon,
  NotificationIcon,
  PhoneIcon,
  PinIcon,
  TextUnderline,
} from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
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
      <Container>
        <PageIntro
          eyebrow="Contact Us"
          className="max-w-3xl mx-auto mt-20 mb-10"
          centered
          pageTitle={
            <>
              Don’t hesitate to
              <span className="text-indigo-600 relative z-10 whitespace-nowrap inline-block sm:inline">
                {" "}
                <span className="relative">contact us</span> <TextUnderline />
              </span>{" "}
            </>
          }
        >
          Ready to help your company grow faster? Let&apos;s chat about how we
          can help.
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
              <h2 className="text-xl font-bold text-indigo-950 mb-1">
                {contactInfo.title}
              </h2>
              <p className="text-base text-gray-600 mb-4">
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
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>

      <div className="bg-indigo-600 py-20 md:py-32 mt-20 md:mt-32">
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
            <FadeInStagger
              faster
              className="col-span-12 md:col-span-7 grid grid-cols-1  sm:grid-cols-2 gap-6"
            >
              <FadeIn>
                <h4 className="text-white font-bold text-base md:text-lg ">
                  Copenhagen
                </h4>
                <p className="text-base mt-1 text-slate-200">
                  1 Carlsberg Gate
                </p>
                <p className="text-base text-slate-200">
                  1260, København, Denmark
                </p>
              </FadeIn>
              <FadeIn>
                <h4 className="text-white font-bold text-base md:text-lg ">
                  London
                </h4>
                <p className="text-base mt-1 text-slate-200">
                  1 Carlsberg Gate
                </p>
                <p className="text-base text-slate-200">
                  1260, København, Denmark
                </p>
              </FadeIn>
              <FadeIn>
                <h4 className="text-white font-bold text-base md:text-lg ">
                  Sydney
                </h4>
                <p className="text-base mt-1 text-slate-200">
                  1 Carlsberg Gate
                </p>
                <p className="text-base text-slate-200">
                  1260, København, Denmark
                </p>
              </FadeIn>
              <FadeIn>
                <h4 className="text-white font-bold text-base md:text-lg ">
                  New York
                </h4>
                <p className="text-base mt-1 text-slate-200">
                  1 Carlsberg Gate
                </p>
                <p className="text-base text-slate-200">
                  1260, København, Denmark
                </p>
              </FadeIn>
            </FadeInStagger>
          </div>
        </Container>
      </div>

      <Container className="mt-20 lg:mt-32">
        <SectionIntro
          title="Got questions? We’ve got answers"
          eyebrow="Our FAQ"
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <p>
            In order to make sure your website is user friendly and optimized
            for Google’s algorithm, our on-site optimization experts clean up
            the code and copy.
          </p>
        </SectionIntro>
        <div className="max-w-2xl mx-auto">
          <FadeInStagger faster>
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="mt-6"
            >
              {faqData.slice(0, 8).map((faq) => (
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
      <Container className="my-20 md:my-32 ">
        <SectionIntro
          eyebrow="Reviews"
          title="Clients feedback"
          className="max-w-2xl mx-auto mb-12 text-center"
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
