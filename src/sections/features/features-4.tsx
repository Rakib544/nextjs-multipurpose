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
    title: "Search engine optimization",
    description: {
      title:
        "Boost your website's visibility and ranking on search engines with our comprehensive SEO strategies, ensuring you reach your target audience effectively and efficiently.",
      features: [
        "Keyword research and analysis",
        "On-page optimization",
        "Technical SEO audits",
        "Backlink building strategies",
        "Content optimization",
        "Performance tracking and reporting",
      ],
    },
  },
  {
    title: "Paid search marketing",
    description: {
      title:
        "Leverage paid search marketing to reach potential customers instantly. Our expert management ensures you get the best return on investment for your advertising spend.",
      features: [
        "Google Ads campaign setup",
        "Bing Ads management",
        "Keyword bid optimization",
        "Ad copy creation",
        "Performance analysis and reporting",
        "Remarketing strategies",
      ],
    },
  },
  {
    title: "Conversion rate optimization",
    description: {
      title:
        "Enhance your website's ability to convert visitors into customers through our data-driven conversion rate optimization techniques, ensuring higher revenue and business growth.",
      features: [
        "A/B testing",
        "Landing page optimization",
        "User behavior analysis",
        "Funnel optimization",
        "Heatmap and click tracking",
        "Conversion tracking and analysis",
      ],
    },
  },
  {
    title: "Social media marketing",
    description: {
      title:
        "Expand your brand's presence and engage with your audience on social media platforms using our tailored social media marketing strategies and expert content creation services.",
      features: [
        "Social media strategy development",
        "Content creation and curation",
        "Community management",
        "Paid social media campaigns",
        "Influencer partnerships",
        "Performance tracking and analytics",
      ],
    },
  },
];

export default function Features4() {
  return (
    <Container className="mt-20 md:mt-32">
      <SectionIntro
        eyebrow="Services"
        title="Driving a better way of doing marketing"
        className="mb-12"
      >
        We deliver business impact through PR & marketing with a combination of
        intellectual curiosity, industry experience, urgency, and precision.
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
