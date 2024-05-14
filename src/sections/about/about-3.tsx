import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function About3() {
  return (
    <div>
      <Container className="mt-20 text-center">
        <FadeIn>
          <p className="block font-display uppercase text-xs tracking-wider font-bold text-primary">
            Our journey story{" "}
          </p>
          <h2 className="text-3xl max-w-5xl leading-normal font-bold mb-6 mt-3 mx-auto">
            Leading digital agency with solid design and development expertise.
            We build ready made websites, mobile applications, and elaborate
            online business services.
          </h2>
          <Link
            href="/about-1"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Learn More
          </Link>
        </FadeIn>
      </Container>
    </div>
  );
}
