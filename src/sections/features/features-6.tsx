import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { ArrowRight } from "@/components/icons";
import { SectionIntro } from "@/components/section-intro";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "Expand functionality effortlessly with versatile plugins and extensions tailored to enhance your analytics experience",
    image: "/ui-ux.webp",
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Expand functionality effortlessly with versatile plugins and extensions tailored to enhance your analytics experience",
    image: "/web-development.webp",
  },
  {
    id: 4,
    title: "App Development",
    description:
      "Expand functionality effortlessly with versatile plugins and extensions tailored to enhance your analytics experience",
    image: "/app-development.webp",
  },
];

export default function Features6() {
  return (
    <div className="bg-indigo-600 py-20 md:py-32 rounded-[40px] mt-20 md:mt-32 ">
      <Container className="relative">
        <SectionIntro
          className="mb-12"
          eyebrow="Services"
          invert
          title="Our comprehensive digital strategy transformation"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          officiis ipsa veniam perspiciatis harum facere.
        </SectionIntro>
        <FadeInStagger faster className="space-y-4">
          {services.map((service, index) => (
            <FadeIn key={service.id}>
              <Link
                href="/service-details"
                className="block group border-t border-indigo-500"
              >
                <div className="grid grid-cols-12 gap-6 items-end py-4">
                  <div className="col-span-12 md:col-span-4">
                    <span className="text-xl font-bold text-white/80">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      {service.title}
                    </h3>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <p className="text-base leading-7 text-white/80">
                      {service.description}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-4 flex justify-end md:justify-center">
                    <span
                      className={buttonVariants({
                        size: "icon",
                        className:
                          "border-[1.5px] group-hover:bg-white group-hover:text-primary",
                      })}
                    >
                      {" "}
                      <ArrowRight className="size-5" />
                    </span>
                    {/* <Button
                      size="icon"
                      className="border-[1.5px] group-hover:bg-white group-hover:text-primary"
                    >
                      <ArrowRight className="size-5 ml-1" />
                    </Button> */}
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  );
}
