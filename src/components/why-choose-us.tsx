import Image from "next/image";
import { Container } from "./container";
import { CheckIcon } from "./icons";
import { SectionIntro } from "./section-intro";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const whyChooseData = [
  {
    id: 1,
    title: "Digital Comprehensive Analytics",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero expedita maiores et velit quae sequi iure alias beatae magnam aliquam?",
  },
  {
    id: 2,
    title: "Personalized Plans",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero expedita maiores et velit quae sequi iure alias beatae magnam aliquam?",
  },
  {
    id: 3,
    title: "Community Feedbacks",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero expedita maiores et velit quae sequi iure alias beatae magnam aliquam?",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="mt-20 md:mt-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative">
            <Image
              src="https://vue.hibotheme.com/prag/img/about-img.df163752.webp"
              alt=""
              height={500}
              width={400}
              className="block mx-auto rounded-xl"
            />
            <div className="absolute bottom-10 bg-indigo-600 text-white p-4 rounded-xl shadow-xl">
              <span className="text-base font-semibold flex">
                <CheckIcon className="h-7 w-7  text-white fill-white shrink-0" />{" "}
                24/7 Community Support
              </span>
              <span className="text-sm font-medium leading-7 text-slate-200">
                We’re servicing 24/7 support for all
              </span>
            </div>
            <div className="absolute top-10 bg-indigo-600 text-white p-4 rounded-xl shadow-xl">
              <span className="text-base font-semibold flex">
                <CheckIcon className="h-7 w-7 fill-white shrink-0" />{" "}
                Personalized Plan
              </span>
            </div>
            <div className="absolute right-0 bottom-32 bg-indigo-600 text-white p-4 rounded-xl shadow-xl">
              <span className="text-base font-semibold flex">
                <CheckIcon className="h-7 w-7 fill-white shrink-0" /> Analytics
              </span>
              <span className="text-sm font-medium leading-7 text-slate-200">
                Lorem ipsum dolor sit amet.
              </span>
            </div>
          </div>
          <div>
            <SectionIntro
              eyebrow="Why choose us"
              title="Why FitLife Is THe Right Choice For You"
            >
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
                expedita, culpa enim praesentium amet necessitatibus.
              </p>
            </SectionIntro>
            <Accordion
              type="single"
              defaultValue="item-1"
              className="mt-12 space-y-3"
            >
              {whyChooseData.map((data) => (
                <AccordionItem
                  key={data.id}
                  value={`item-${data.id}`}
                  className="border rounded-xl text-base py-1 px-4 data-[state=open]:bg-indigo-600 data-[state=open]:text-white"
                >
                  <AccordionTrigger className="font-semibold">
                    {data.id.toString().padStart(2, "0")}. {data.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-200 leading-8 text-base">
                    {data.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
}
