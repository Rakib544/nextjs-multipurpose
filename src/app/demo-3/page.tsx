import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { buttonVariants } from "@/components/ui/button";
import heroImage from "@/images/office.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Demo3() {
  return (
    <div>
      <div className="h-full relative">
        <Image src={heroImage} alt="" fill />
        <div className="absolute inset-0 bg-slate-800/50 " />
        <Container className="py-32 grid grid-cols-12 gap-x-4 items-center">
          <FadeIn className="col-span-12 lg:col-span-6 z-10">
            <h1 className="text-3xl font-bold md:text-5xl/tight text-white">
              We bring solutions to make life easier
            </h1>
            <p className="mt-3 text-lg leading-8 text-white">
              We are a creative company that focuses on long term relationships
              with customers.
            </p>
            <div className="mt-7">
              <Link
                href="/about-us"
                className={buttonVariants({
                  size: "lg",
                })}
              >
                Get Started
              </Link>
            </div>
          </FadeIn>
        </Container>
      </div>
    </div>
  );
}
