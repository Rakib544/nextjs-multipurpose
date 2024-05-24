import { Container } from "@/components/container";
import { ArrowRight } from "@/components/icons";
import { List, ListItem } from "@/components/list";
import { SectionIntro } from "@/components/section-intro";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    title: "Engineering Team",
    description: {
      title:
        "Our Engineering Team excels in developing robust, scalable, and innovative solutions to meet your technical needs, ensuring high performance and reliability for your projects.",
      features: [
        "Custom software development",
        "System architecture design",
        "Code review and quality assurance",
        "Integration with third-party services",
        "Continuous deployment and monitoring",
        "Technical support and maintenance",
      ],
    },
  },
  {
    title: "Digital Marketing Team",
    description: {
      title:
        "Harness the power of online marketing with our Digital Marketing Team. We specialize in strategies that boost your brand's visibility and drive targeted traffic to your site.",
      features: [
        "Search engine optimization (SEO)",
        "Pay-per-click advertising (PPC)",
        "Content marketing",
        "Email marketing campaigns",
        "Social media management",
        "Performance analytics and reporting",
      ],
    },
  },
  {
    title: "UI/UX Design Team",
    description: {
      title:
        "Create user-centric designs that offer seamless experiences with our UI/UX Design Team. We focus on usability and aesthetics to enhance user satisfaction and engagement.",
      features: [
        "User research and personas",
        "Wireframing and prototyping",
        "Visual design",
        "Interaction design",
        "Usability testing",
        "Design system creation",
      ],
    },
  },
  {
    title: "Project Management Team",
    description: {
      title:
        "Ensure your projects are delivered on time and within budget with our Project Management Team. We bring expertise in planning, executing, and closing projects effectively.",
      features: [
        "Project planning and scheduling",
        "Resource allocation",
        "Risk management",
        "Stakeholder communication",
        "Progress tracking and reporting",
        "Post-project evaluation",
      ],
    },
  },
];

export default function Features4() {
  return (
    <Container className="mt-20 md:mt-32">
      <SectionIntro
        eyebrow="use cases"
        title="Software was designed for many use cases"
        className="mb-12"
      >
        Well everything you need if you aren’t that picky about minor details
        like tax compliance.
      </SectionIntro>
      <div>
        <Tabs
          defaultValue="tab-1"
          className="hidden lg:grid grid-cols-12 bg-[#F7F7FA] rounded-[40px]"
        >
          <TabsList className="flex flex-col gap-y-4 items-start col-span-4 bg-black h-full px-8 py-10 rounded-[40px]">
            {services.map((service, i) => (
              <TabsTrigger
                key={i}
                value={`tab-${i + 1}`}
                className="border-none data-[state=active]:bg-primary w-full text-lg pl-10 pr-3 py-4 rounded-full !text-white font-bold flex justify-between group"
              >
                <p className="text-wrap text-left">{service.title}</p>
                <span className="inline-flex opacity-0 group-data-[state=active]:opacity-100  justify-center items-center size-14 rounded-full shrink-0 bg-black">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
          {services.map((service, index) => (
            <TabsContent
              value={`tab-${index + 1}`}
              className="col-span-8 p-10"
              key={index}
            >
              <h3 className="text-xl mb-4 font-bold leading-8">
                {service.description.title}
              </h3>
              <List>
                {service.description.features.map((feature, index) => (
                  <ListItem key={index + 10}>{feature}</ListItem>
                ))}
              </List>
            </TabsContent>
          ))}
        </Tabs>
        <Accordion
          type="single"
          defaultValue="tab-1"
          className="bg-black rounded-[30px] p-4 sm:p-6 space-y-4 lg:hidden"
        >
          {services.map((service, i) => (
            <AccordionItem
              value={`tab-${i + 1}`}
              key={i}
              className="border-none"
            >
              <AccordionTrigger className="bg-black text-white data-[state=open]:bg-primary px-4 rounded-full text-[17px] font-semibold text-left">
                {service.title}
              </AccordionTrigger>
              <AccordionContent className="bg-white p-4 rounded-[30px] mt-2">
                <h3 className="text-lg mb-4 font-bold">
                  {service.description.title}
                </h3>
                <List className="space-y-1">
                  {service.description.features.map((feature, index) => (
                    <ListItem key={index + 10}>{feature}</ListItem>
                  ))}
                </List>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
}
