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
    name: "Engineering Team",
  },
  {
    name: "Digital Marketing Team",
  },
  {
    name: "UI/UX Design Team",
  },
  {
    name: "Project Management Team",
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
                <p className="text-wrap text-left">{service.name}</p>
                <span className="inline-flex opacity-0 group-data-[state=active]:opacity-100  justify-center items-center size-14 rounded-full shrink-0 bg-black">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="tab-1" className="col-span-8 p-10">
            <h3 className="text-xl mb-4 font-bold leading-8">
              Increase your organic traffic by ranking high on search engines
              and AI discovery tools like ChatGPT
            </h3>
            <List>
              <ListItem>Keyword and competitor research</ListItem>
              <ListItem>SKAGS (single keyword ad groups)</ListItem>
              <ListItem>Negative keyword pruning</ListItem>
              <ListItem>Ad copy optimization</ListItem>
              <ListItem>Backlink Generation</ListItem>
            </List>
          </TabsContent>
          <TabsContent value="tab-2" className="col-span-8 p-10">
            <h3 className="text-xl mb-4 font-bold leading-8">
              Increase your organic traffic by ranking high on search engines
              and AI discovery tools like ChatGPT
            </h3>
            <List>
              <ListItem>Keyword and competitor research</ListItem>
              <ListItem>SKAGS (single keyword ad groups)</ListItem>
              <ListItem>Negative keyword pruning</ListItem>
              <ListItem>Ad copy optimization</ListItem>
              <ListItem>Backlink Generation</ListItem>
            </List>
          </TabsContent>
          <TabsContent value="tab-3" className="col-span-8 p-10">
            <h3 className="text-xl mb-4 font-bold leading-8">
              Increase your organic traffic by ranking high on search engines
              and AI discovery tools like ChatGPT
            </h3>
            <List>
              <ListItem>Keyword and competitor research</ListItem>
              <ListItem>SKAGS (single keyword ad groups)</ListItem>
              <ListItem>Negative keyword pruning</ListItem>
              <ListItem>Ad copy optimization</ListItem>
              <ListItem>Backlink Generation</ListItem>
            </List>
          </TabsContent>
          <TabsContent value="tab-4" className="col-span-8 p-10">
            <h3 className="text-xl mb-4 font-bold leading-8">
              Increase your organic traffic by ranking high on search engines
              and AI discovery tools like ChatGPT
            </h3>
            <List>
              <ListItem>Keyword and competitor research</ListItem>
              <ListItem>SKAGS (single keyword ad groups)</ListItem>
              <ListItem>Negative keyword pruning</ListItem>
              <ListItem>Ad copy optimization</ListItem>
              <ListItem>Backlink Generation</ListItem>
            </List>
          </TabsContent>
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
                {service.name}
              </AccordionTrigger>
              <AccordionContent className="bg-white p-4 rounded-[30px] mt-2">
                <h3 className="text-lg mb-4 font-bold">
                  Increase your organic traffic by ranking high on search
                  engines and AI discovery tools like ChatGPT
                </h3>
                <List className="space-y-1">
                  <ListItem>Keyword and competitor research</ListItem>
                  <ListItem>SKAGS (single keyword ad groups)</ListItem>
                  <ListItem>Negative keyword pruning</ListItem>
                  <ListItem>Ad copy optimization</ListItem>
                  <ListItem>Backlink Generation</ListItem>
                </List>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
}
