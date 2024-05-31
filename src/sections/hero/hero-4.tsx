import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { StarIcon, TextUnderline } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import userImage2 from "@/images/testimonials/testimonial_2.jpeg";
import userImage1 from "@/images/testimonials/testimonial_3.jpeg";
import Image from "next/image";
import Link from "next/link";

import heroMobileDesign from "@/images/demo-4/hero-app.png";

export default function Hero4() {
  return (
    <div>
      <Container>
        <FadeInStagger
          faster
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mt-12 md:mt-20"
        >
          <FadeIn className="order-2 lg:order-1">
            <h1 className="text-3xl md:pr-10 font-black md:text-4xl/tight text-foreground">
              Fastest way to manage payment anytime you want with{" "}
              <span className="text-primary relative z-10 whitespace-nowrap inline-block sm:inline">
                {" "}
                <span className="relative">Financial.io</span> <TextUnderline />
              </span>{" "}
            </h1>
            <p className="text-lg leading-8 text-muted-foreground mt-3">
              Effortlessly manage and streamline your payments anytime you want
              with Financial.io, providing you with the fastest, most convenient
              payment solutions available.
            </p>
            <div className="flex flex-col sm:flex-row gap-y-3 gap-x-3 mt-4">
              <Link href="" className={buttonVariants({ size: "lg" })}>
                Download IOS
              </Link>
              <Link
                href=""
                className={buttonVariants({ size: "lg", variant: "outline" })}
              >
                Download Android
              </Link>
            </div>
            <div className=" hidden md:flex gap-x-6 mt-8 items-center">
              <div className="border-r-2 flex gap-x-3 pr-6">
                <div className="flex">
                  <Image
                    src={userImage1}
                    alt=""
                    className="h-14 w-14 border-4 border-white shadow-xl rounded-full object-cover object-center"
                    priority
                  />
                  <Image
                    src={userImage2}
                    alt=""
                    className="h-14 w-14 border-4 border-white shadow-xl rounded-full object-cover object-center -ml-4"
                    priority
                  />
                  <Image
                    src={userImage1}
                    alt=""
                    className="h-14 w-14 border-4 border-white shadow-xl rounded-full object-cover object-center -ml-4"
                    priority
                  />
                </div>
                <div>
                  <span className="text-xl font-bold">4,353</span>
                  <span className="block text-base text-muted-foreground">
                    Happy Clients
                  </span>
                </div>
              </div>
              <div>
                <span className="block font-bold text-xl">4.7 / 5</span>
                <span className="flex gap-x-1">
                  <StarIcon className="h-4 w-4 fill-yellow-400" />
                  <StarIcon className="h-4 w-4 fill-yellow-400" />
                  <StarIcon className="h-4 w-4 fill-yellow-400" />
                  <StarIcon className="h-4 w-4 fill-yellow-400" />
                  <StarIcon className="h-4 w-4 fill-gray-300" />
                  <span className="text-muted-foreground text-sm">Rating</span>
                </span>
              </div>
            </div>
          </FadeIn>
          <FadeIn className="flex justify-center order-1 lg:order-2">
            <Image
              src={heroMobileDesign}
              height={400}
              width={270}
              className="w-[150px] md:w-[250px]"
              alt=""
              priority
            />
          </FadeIn>
        </FadeInStagger>
      </Container>
    </div>
  );
}
