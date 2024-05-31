import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { HomeIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import header1Image from "@/images/demo-2/header1.png";
import header2Image from "@/images/demo-2/header2.png";
import Image from "next/image";
import Link from "next/link";

export default function Hero2() {
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(180deg,#6754E9 0%,#4534B8 100%)`,
        }}
        className="rounded-bl-[40px] rounded-br-[40px] z-20 relative"
      >
        <Container className="py-16 md:py-20">
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="col-span-12 lg:col-span-7">
              <FadeIn className="order-2 lg:order-1 z-10">
                <span className="inline-flex px-5 py-1 text-sm rounded-full border border-indigo-400 mb-2 bg-[#6754E9] text-white">
                  <HomeIcon className="h-4 w-4 mr-1 fill-white" /> Most trusted
                  seo agency
                </span>
                <h1 className="text-3xl max-w-xl text-white pr-10 font-extrabold md:text-4xl/tight">
                  Increase your online visibility and drive more traffic
                </h1>
                <p className="mt-3 text-base text-white leading-8 max-w-lg">
                  Elevating your online presence: our strategies drive traffic,
                  boost rankings, and enhance visibility in search engine
                  results.
                </p>
                <div className="flex gap-4 mt-6">
                  <Link
                    href="/about-1"
                    className={buttonVariants({
                      size: "lg",
                      variant: "secondary",
                    })}
                  >
                    Get A Free Audit
                  </Link>
                </div>
              </FadeIn>
            </div>
            <FadeInStagger
              faster
              className="col-span-12 lg:col-span-5 relative hidden lg:block"
            >
              <FadeIn>
                <Image
                  src={header1Image}
                  alt=""
                  height={254}
                  width={300}
                  priority
                  className="object-cover object-center bg-white shadow-xl block mx-auto rounded-xl"
                />
              </FadeIn>

              <FadeIn>
                <Image
                  src={header2Image}
                  alt=""
                  height={107}
                  width={300}
                  priority
                  className="object-cover object-center bg-white shadow-xl block mx-auto rounded-xl mt-4 lg:ml-4"
                />
              </FadeIn>
            </FadeInStagger>
          </div>
        </Container>
      </div>
      <div className="bg-[#F7F7FA] -mt-10 z-[-1] rounded-bl-[40px] rounded-br-[40px] pt-12 pb-2">
        <Container>
          <Clients />
        </Container>
      </div>
    </>
  );
}
