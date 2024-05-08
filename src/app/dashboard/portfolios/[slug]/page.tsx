import coverImage from "@/images/hero.jpg";

import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { List, ListItem } from "@/components/list";
import { StatList, StatListItem } from "@/components/stat-list";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioDetails() {
  return (
    <div>
      <Link
        href="/dashboard/portfolios"
        className={buttonVariants({ variant: "ghost" })}
      >
        <ArrowLeft className="h-4 w-4 mr-1.5" /> Back
      </Link>
      <div className="max-w-3xl mx-auto text-left mt-12">
        <h1 className="text-3xl max-w-full font-extrabold tracking-tight lg:text-4.5xl/tight text-indigo-950">
          The Future of Web Development: Our Predictions for 2023
        </h1>
        <FadeInStagger
          faster
          className="grid grid-cols-1 md:grid-cols-3 mt-12 gap-6"
        >
          <FadeIn>
            <span className="text-xs uppercase text-indigo-600 font-bold tracking-wider ">
              Client
            </span>
            <p className="text-base font-medium mt-1">
              Faulsk Company Inc Canada
            </p>
          </FadeIn>
          <FadeIn>
            <span className="text-xs uppercase text-indigo-600 font-bold tracking-wider ">
              Date
            </span>
            <p className="text-base font-medium mt-1">
              05 Dec 2022 - 01 Jan 2023
            </p>
          </FadeIn>
          <FadeIn>
            <span className="text-xs uppercase text-indigo-600 font-bold tracking-wider ">
              Services
            </span>
            <p className="text-base font-medium mt-1">
              UX Research, Wireframing, UI Design
            </p>
          </FadeIn>
        </FadeInStagger>
        <FadeIn>
          <Image
            src={coverImage}
            alt=""
            className="aspect-[16/9] block rounded-xl mt-12 object-cover"
          />
        </FadeIn>
        <div className="mt-12 md:mt-20">
          <h2 className="text-xl font-extrabold mb-4">Background</h2>
          <p className="text-base leading-8 font-medium text-gray-600">
            XYZ Corporation, a leading provider of innovative software
            solutions, approached our agency with the goal of revamping their
            outdated website. Their existing site lacked visual appeal,
            user-friendly navigation, and did not effectively showcase their
            products and services. Additionally, they sought to improve their
            search engine visibility and overall online performance.
          </p>
        </div>
        <div className="mt-12 md:mt-20">
          <h2 className="text-xl font-extrabold mb-4">Objectives</h2>
          <List>
            <ListItem>
              Design and develop a modern, user-centric website that reflects
              XYZ Corporation&apos;s brand identity and values.
            </ListItem>
            <ListItem>
              Optimize the website for improved search engine ranking and
              visibility.
            </ListItem>
            <ListItem>
              Enhance user experience and engagement to increase conversions and
              lead generation.
            </ListItem>
          </List>
        </div>
        <div className="mt-12 md:mt-20">
          <h2 className="text-xl font-extrabold mb-4">Challenges</h2>
          <List>
            <ListItem>
              <span className="font-bold">
                Outdated Design and Functionality:
              </span>{" "}
              XYZ Corporation&apos;s existing website was built on outdated
              technology and lacked modern design elements, making it
              unappealing to users and difficult to navigate.
            </ListItem>
            <ListItem>
              <span className="font-bold">
                Limited Search Engine Visibility:
              </span>{" "}
              The website was not optimized for search engines, resulting in
              poor visibility and low organic traffic.
            </ListItem>
            <ListItem>
              <span className="font-bold">Complex Content Management:</span> The
              client struggled with managing and updating content on their
              website due to a cumbersome content management system (CMS).
            </ListItem>
            <ListItem>
              <span className="font-bold">Competitive Landscape:</span>
              XYZ Corporation operated in a highly competitive industry, making
              it challenging to stand out and attract attention online.
            </ListItem>
          </List>
        </div>
        <div className="mt-12 md:mt-20">
          <h2 className="text-xl font-extrabold mb-4">Solution & Result</h2>
          <List>
            <ListItem>
              Following the launch of the new website, XYZ Corporation
              experienced a significant increase in online visibility and
              organic traffic.
            </ListItem>
            <ListItem>
              The website&apos;s user-friendly design and optimized content led
              to improved user engagement and lower bounce rates.
            </ListItem>
            <ListItem>
              Enhanced SEO efforts resulted in higher search engine rankings for
              targeted keywords, driving qualified traffic and leads.
            </ListItem>
            <ListItem>
              XYZ Corporation received positive feedback from clients and
              stakeholders, praising the website&apos;s modern look, intuitive
              navigation, and informative content.
            </ListItem>
          </List>
        </div>
        <div className="mt-12 md:mt-20">
          <StatList>
            <StatListItem value="25%" label="More traffic" />
            <StatListItem value="10x" label="Page loads" />
            <StatListItem value="10%" label="Less infra costs" />
          </StatList>
        </div>
        <div className="mt-12 md:mt-20">
          <h2 className="text-xl font-extrabold mb-4">Conclusion</h2>
          <p className="text-base leading-8 text-gray-600">
            By partnering with our agency to redesign and optimize their
            website, XYZ Corporation was able to overcome various challenges and
            enhance their online presence, attract more visitors, and generate
            valuable leads. The successful outcome of this project demonstrates
            the importance of strategic planning, user-centric design, and
            ongoing optimization in achieving digital success.
          </p>
        </div>
      </div>
    </div>
  );
}
