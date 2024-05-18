import { Container } from "@/components/container";
import { List, ListItem } from "@/components/list";
import { SocialMediaProfiles } from "@/components/social-media-profiles";
import userImage from "@/images/team/team-2.jpeg";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Team Details",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TeamDetails() {
  return (
    <div>
      <Container className="mb-20 !max-w-5xl">
        <div className="relative">
          <div className="h-[200px] sm:h-[280px] bg-gradient-to-r from-indigo-300 to-violet-300 rounded-lg w-full"></div>
          <div className="flex flex-col md:flex-row w-full absolute gap-x-3 sm:gap-x-6 -bottom-32 md:-bottom-24  items-center md:items-end sm:px-5">
            <Image
              src={userImage}
              alt=""
              height={150}
              width={150}
              className="rounded-full shrink-0 border-4 border-white"
            />
            <div className="mb-4 text-center md:text-left w-full">
              <h1 className="text-xl sm:text-2xl font-extrabold">John Smith</h1>
              <p className="text-base text-muted-foreground">
                Senior Software Engineer
              </p>
            </div>
          </div>
        </div>
        <div className="mt-36 lg:mt-32">
          <p className="text-base leading-8 text-foreground">
            John Smith is a seasoned software engineer with over 10 years of
            experience in developing innovative software solutions. He holds a
            Bachelor&apos;s degree in Computer Science from XYZ University and
            has a proven track record of delivering high-quality projects on
            time and within budget. John is passionate about leveraging
            technology to solve complex problems and enjoys collaborating with
            cross-functional teams to bring ideas to life.
          </p>
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">Responsibilities:</h2>
          <p className="text-base leading-8 text-foreground">
            As a Senior Software Engineer, John is responsible for leading the
            development of key software projects, from initial concept to final
            implementation. He works closely with product managers and designers
            to translate requirements into technical specifications and
            collaborates with other developers to ensure the successful delivery
            of projects. John also mentors junior team members, providing
            guidance and support to help them grow their skills and expertise.
          </p>
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">
            Expertise and Specializations:
          </h2>
          <List>
            <ListItem>Full-stack development</ListItem>
            <ListItem>Web application development</ListItem>
            <ListItem>JavaScript frameworks (React, Angular)</ListItem>
            <ListItem>Backend technologies (Node.js, Python)</ListItem>
            <ListItem>Database management (MySQL, MongoDB)</ListItem>
            <ListItem>Agile development methodologies</ListItem>
          </List>
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">Career Highlights:</h2>
          <List>
            <ListItem>
              Received &quot;Employee of the Year&quot; award for outstanding
              contributions to project success and team collaboration.
            </ListItem>
            <ListItem>
              Presented at industry conferences on topics related to web
              development and software engineering best practices.
            </ListItem>
          </List>
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">Social Links:</h2>
          <SocialMediaProfiles />
        </div>
      </Container>
    </div>
  );
}
