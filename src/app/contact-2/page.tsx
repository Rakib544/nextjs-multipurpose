import ContactForm from "@/components/contact-form";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { GridPattern } from "@/components/grid-pattern";
import { PhoneIcon, PinIcon } from "@/components/icons";
import { SectionIntro } from "@/components/section-intro";

export default function Contact2() {
  return (
    <div>
      <Container className="grid grid-cols-12 gap-6 mt-16">
        <div className="absolute inset-0 z-[-1] top-0 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
          <GridPattern />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <SectionIntro title="Talk to our product analysis experts">
            <p className="text-base leading-7 text-neutral-700">
              Have any questions about pricing, plans or Growth? Fill out the
              form and our product analysis experts will be in touch directly.
            </p>
          </SectionIntro>
          <FadeIn>
            <h2 className="text-2xl font-bold text-neutral-950 mt-6 mb-4">
              Our Office
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-6">
                <h3 className="font-bold">United Kingdom</h3>
                <div className="flex gap-x-2 mt-2">
                  <PinIcon />
                  <span className="text-base text-neutral-700">
                    Gazipur, Dhaka, Bangladesh
                  </span>
                </div>
                <div className="flex gap-x-2 mt-2">
                  <PhoneIcon className="h-5 w-5" />
                  <span className="text-base text-neutral-700">
                    +8801786542643
                  </span>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <h3 className="font-bold">United Kingdom</h3>
                <div className="flex gap-x-2 mt-2">
                  <PinIcon />
                  <span className="text-base text-neutral-700">
                    Gazipur, Dhaka, Bangladesh
                  </span>
                </div>
                <div className="flex gap-x-2 mt-2">
                  <PhoneIcon className="h-5 w-5" />
                  <span className="text-base text-neutral-700">
                    +8801786542643
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
        <div className="col-span-12 lg:col-span-6 bg-white p-6 shadow-lg rounded-xl">
          <ContactForm />
        </div>
      </Container>
    </div>
  );
}
