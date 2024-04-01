import ContactForm from "@/components/contact-form";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { SectionIntro } from "@/components/section-intro";
import { TestimonialCard } from "@/components/testimonial-card";
import {
  InfiniteMoving,
  InfiniteMovingItem,
} from "@/components/ui/infinite-moving";
import { testimonials } from "@/lib/data/testimonials-data";

export default function Contact2() {
  return (
    <div>
      <PageIntro
        eyebrow="Contact Us"
        title="We would like to hear from you"
        centered
      >
        <p>We have offices and teams all over the world!</p>
      </PageIntro>
      <Container className="mt-2 relative">
        <iframe
          title="our offices"
          src="https://www.google.com/maps/d/embed?mid=1FGXZRfuQRbOC5x54jZCbnh6JthDRzPE&ehbc=2E312F&noprof=1"
          width="100%"
          className="aspect-video md:aspect-[16/7]"
        ></iframe>
        <div className="absolute top-0 z-10 w-full left-0 h-12 bg-white"></div>
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
      <Container className="my-32 !max-w-3xl mx-auto shadow-sm py-10 rounded-2xl shadow-slate-300">
        <SectionIntro
          title="Find the Perfect Solution for Your Business"
          className="text-center mb-12"
        >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusantium, eaque autem! Iusto laborum dolorum id?
          </p>
        </SectionIntro>

        <ContactForm />
      </Container>
      <Container className="my-32">
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
