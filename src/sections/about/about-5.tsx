import { Container } from "@/components/container";
import { SectionIntro } from "@/components/section-intro";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import aboutImage from "@/images/about/about-4.jpg";
import Image from "next/image";

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

export default function About5() {
  return (
    <section className="mt-20 md:mt-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
          <div className="relative aspect-square">
            <Image
              src={aboutImage}
              alt=""
              fill
              className="block mx-auto object-cover object-center rounded-xl w-full"
            />
          </div>
          <div>
            <SectionIntro
              eyebrow="Why choose us"
              title="We bring solutions to make life easier for our customers."
            >
              <p>
                We upholds the highest ethical standards in all our dealings and
                embrace creativity and strive for improvement.
              </p>
            </SectionIntro>
            <Accordion
              type="single"
              defaultValue="item-1"
              className="mt-8 space-y-3"
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
                  <AccordionContent className="text-primary-foreground leading-8 text-base">
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
