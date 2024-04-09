import { Container } from "@/components/container";
import { List, ListItem } from "@/components/list";
import { StatList, StatListItem } from "@/components/stat-list";
import { TestimonialCard } from "@/components/testimonial-card";
import { buttonVariants } from "@/components/ui/button";
import coverImage from "@/images/hero.jpg";
import userImage from "@/images/testimonial_1.jpg";
import Image from "next/image";

const serviceProcess = [
  {
    id: 1,
    title: "Discovery & Research",
    description:
      "Conducted thorough research to understand ABC Clothing Co.'s target audience, competitors, and industry trends.",
  },
  {
    id: 2,
    title: "Design & Development",
    description:
      "Created wireframes and mockups based on the research findings, then developed the website using HTML, CSS, and JavaScript.",
  },
  {
    id: 3,
    title: "Testing & Optimization",
    description:
      "Conducted usability testing and implemented iterative improvements to optimize the website for performance and user experience.",
  },
  {
    id: 4,
    title: "Launch & Deployment",
    description:
      "Launched the redesigned website and monitored its performance post-launch to ensure seamless operation and functionality.",
  },
];

export default function PortfolioDetails() {
  return (
    <div>
      <Container className="my-20 !max-w-5xl">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight lg:text-4xl/tight max-w-2xl">
          E-commerce Website Redesign for ABC Clothing Co.
        </h1>
        <p className="text-lg leading-8 text-gray-600 mt-4">
          Redesigned the existing e-commerce website for ABC Clothing Co. to
          enhance user experience, improve conversion rates, and align with
          modern design trends.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-12 gap-6">
          <div>
            <span className="text-sm font-medium text-gray-600 ">Client</span>
            <p className="text-base font-medium mt-1">
              Faulsk Company Inc Canada
            </p>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-600">Date</span>
            <p className="text-base font-medium mt-1">
              05 Dec 2022 - 01 Jan 2023
            </p>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-600">Services</span>
            <p className="text-base font-medium mt-1">
              UX Research, Wireframing, UI Design
            </p>
          </div>
        </div>
        <Image
          src={coverImage}
          alt=""
          className="aspect-[16/9] block rounded-xl mt-8"
        />
        <div className="mt-12">
          <h2 className="text-xl font-extrabold mb-4">Background</h2>
          <p className="text-base leading-8 font-medium text-gray-600">
            ABC Clothing Co. is a leading fashion retailer specializing in
            high-quality apparel and accessories for men and women.
          </p>
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-extrabold mb-4">Challenges</h2>
          <List>
            <ListItem>
              <span className="font-bold">Outdated Design:</span> The existing
              website had an outdated design and lacked mobile responsiveness,
              resulting in poor user experience.
            </ListItem>
            <ListItem>
              <span className="font-bold">Low Conversion Rates:</span> The
              website suffered from low conversion rates due to a complex
              checkout process and unclear product navigation.
            </ListItem>
            <ListItem>
              <span className="font-bold">Brand Alignment:</span> The website
              design did not align with ABC Clothing Co.&apos;s brand identity
              and values, leading to inconsistency in branding.
            </ListItem>
          </List>
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-extrabold mb-4">Solution & Result</h2>
          <List>
            <ListItem>
              Redesigned the website with a modern and visually appealing
              layout, optimized for mobile devices to improve accessibility and
              user engagement.
            </ListItem>
            <ListItem>
              Streamlined the checkout process and implemented clear
              call-to-action buttons to facilitate seamless navigation and
              improve conversion rates.
            </ListItem>
            <ListItem>
              Incorporated ABC Clothing Co.&apos;s brand colors, typography, and
              imagery throughout the website to maintain brand consistency and
              enhance brand recognition.
            </ListItem>
          </List>
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-extrabold mb-4">Process</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceProcess.map((process) => (
              <div key={process.id}>
                <span className="h-10 w-10 rounded-full bg-indigo-600 text-white text-sm font-bold inline-flex justify-center items-center">
                  {process.id.toString().padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold mt-6 mb-2">{process.title}</h3>
                <p className="text-base leading-8 font-medium text-gray-600">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-extrabold mb-4">Technology Used</h2>
          <ul className="flex flex-wrap gap-4">
            <li>
              <span
                className={buttonVariants({
                  variant: "secondary",
                  size: "sm",
                  className: "px-6",
                })}
              >
                HTML5
              </span>
            </li>
            <li>
              <span
                className={buttonVariants({
                  variant: "secondary",
                  size: "sm",
                  className: "px-6",
                })}
              >
                Nextjs
              </span>
            </li>
            <li>
              <span
                className={buttonVariants({
                  variant: "secondary",
                  size: "sm",
                  className: "px-6",
                })}
              >
                Tailwindcss
              </span>
            </li>
            <li>
              <span
                className={buttonVariants({
                  variant: "secondary",
                  size: "sm",
                  className: "px-6",
                })}
              >
                Framer Motion
              </span>
            </li>
          </ul>
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-extrabold mb-4">Key Features</h2>
          <List>
            <ListItem>
              Responsive design for seamless browsing on all devices
            </ListItem>
            <ListItem>
              Simplified checkout process with one-page checkout and guest
              checkout options
            </ListItem>
            <ListItem>
              Product filtering and sorting options for enhanced navigation
            </ListItem>
            <ListItem>
              Integration of customer reviews and ratings for social proof
            </ListItem>
            <ListItem>
              Secure payment gateway integration for safe transactions
            </ListItem>
          </List>
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-extrabold mb-4">Results</h2>
          <List>
            <ListItem>
              Increased mobile traffic by 40% within the first month of launch
            </ListItem>
            <ListItem>
              Improved conversion rates by 25% due to the streamlined checkout
              process
            </ListItem>
            <ListItem>
              Enhanced brand recognition and consistency resulting in a 30%
              increase in repeat purchases
            </ListItem>
            <ListItem>
              Positive feedback from customers regarding the improved user
              experience and modern design
            </ListItem>
          </List>
        </div>
        <div className="mt-12">
          <StatList>
            <StatListItem value="25%" label="More traffic" />
            <StatListItem value="10x" label="Page loads" />
            <StatListItem value="10%" label="Less infra costs" />
          </StatList>
        </div>
        <div className="mt-20">
          <div className="max-w-3xl rounded-xl border border-indigo-50 bg-gradient-to-br from-indigo-50 to-white p-10">
            <TestimonialCard
              image={userImage}
              quote="Working with [Your Company Name] was a game-changer for our business. Their expertise in website design and development helped us transform our online presence and drive significant growth in sales."
              name="John Doe"
              rating="5"
              role="CEO of ABC Clothing Co."
            />
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-extrabold mb-4">Next Step</h2>
          <p className="text-base leading-8 font-medium text-gray-600">
            Offering ongoing maintenance and support to ensure the continued
            success and performance of the website.
          </p>
        </div>
        <div className="my-32">
          <h3 className="text-2xl font-extrabold">More Portfolios</h3>
        </div>
      </Container>
    </div>
  );
}
