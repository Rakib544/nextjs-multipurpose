import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { CheckIcon } from "@/components/icons";
import { SectionIntro } from "@/components/section-intro";
import Image from "next/image";

export default function About4() {
  return (
    <Container className="mt-20 md:mt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <SectionIntro
            eyebrow="About Company"
            className="mb-12"
            title="Nubi was founded in 2015 by a group of passionate people who believed in the power of design."
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            quam natus, unde harum fugiat laudantium eligendi mollitia
            reprehenderit? Quasi, inventore!
          </SectionIntro>

          <FadeIn className="mt-6 grid grid-cols-2 gap-6 border-t pt-10">
            <div>
              <span className="h-6 w-6 inline-flex justify-center items-center rounded-full bg-indigo-600 ">
                <CheckIcon className="h-5 w-5 fill-white" />
              </span>
              <p className="text-xl font-bold mt-3">Expert Team Member</p>
              <p className="text-base text-gray-600 mt-2">
                An SEO Optimization agency is company that specializes
              </p>
            </div>
            <div>
              <span className="h-6 w-6 inline-flex justify-center items-center rounded-full bg-indigo-600 ">
                <CheckIcon className="h-5 w-5 fill-white" />
              </span>
              <p className="text-xl font-bold mt-3">Expert Team Member</p>
              <p className="text-base text-gray-600 mt-2">
                An SEO Optimization agency is company that specializes
              </p>
            </div>
          </FadeIn>
        </div>
        <FadeIn className="relative">
          <div className="absolute w-[210px] p-5 bottom-10 left-10 bg-indigo-600 text-white rounded-xl">
            <span className="block text-sm">We Have</span>
            <span className="text-lg font-bold mt-3 block leading-6">
              25+ Years of Experience
            </span>
          </div>
          <Image
            src="/about-intro.webp"
            alt=""
            height={300}
            width={400}
            className="block ml-auto w-full lg:w-[400px]"
          />
        </FadeIn>
      </div>
    </Container>
  );
}
