import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import { FadeIn } from "./fade-in";
import { SectionIntro } from "./section-intro";
import { buttonVariants } from "./ui/button";

export default function WhyChooseUs() {
  return (
    <section className="my-32">
      <Container>
        <div className="grid grid-cols-12 gap-y-6 lg:gap-x-20 my-24 items-center">
          <FadeIn className="col-span-12 lg:col-span-6 relative">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              height={400}
              width={300}
              className="aspect-[16/14] object-cover rounded-xl w-full"
            />
          </FadeIn>
          <div className="col-span-12 lg:col-span-6 max-w-lg">
            <SectionIntro
              eyebrow="Why Choose Us"
              title="Unlock opportunities Maximizing Potentials"
            >
              <p>
                We are a digital and branding company that believes in the power
                of creative strategy and along with great design.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex gap-x-2">
                  <div className="font-semibold text-neutral-950">{">"}</div>
                  <div>
                    <h3 className="font-bold text-neutral-950">
                      Proven Track Record
                    </h3>
                    <p className="leading-7">
                      With 7 years of industry experience, it has a proven track
                      record of delivering innovative software solutions.
                    </p>
                  </div>
                </li>
                <li className="flex gap-x-2">
                  <div className="font-semibold text-neutral-950">{">"}</div>
                  <div>
                    <h3 className="font-bold text-neutral-950">
                      Proven Track Record
                    </h3>
                    <p className="leading-7">
                      With 7 years of industry experience, it has a proven track
                      record of delivering innovative software solutions.
                    </p>
                  </div>
                </li>
              </ul>
              <Link href="" className={buttonVariants({ className: "mt-4" })}>
                Learn More &rarr;
              </Link>
            </SectionIntro>
          </div>
        </div>
      </Container>
    </section>
  );
}
