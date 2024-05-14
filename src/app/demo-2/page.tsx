import { Container } from "@/components/container";
import { SectionIntro } from "@/components/section-intro";
import { StatList, StatListItem } from "@/components/stat-list";
import { About1 } from "@/sections/about";
import Blogs from "@/sections/blogs";
import { Features2, Features3 } from "@/sections/features";
import { Hero2 } from "@/sections/hero";
import { Testimonial2 } from "@/sections/testimonial";

export default function Demo2() {
  return (
    <main>
      <Hero2 />
      <Features2 />
      <Features3 />
      <About1 />
      <Container className="mt-20 md:mt-32">
        <SectionIntro
          className="mb-12"
          title="We are the best online seo marketing agency in the world."
        >
          <p>
            You can help customer in real time across all of your channels from
            email, social, website, IOS and android apps.
          </p>
        </SectionIntro>
        <StatList>
          <StatListItem value="2B" label="Related keywords" />
          <StatListItem value="100M" label="Competitors keywords" />
          <StatListItem value="2K" label="Supported locations" />
          <StatListItem value="2011" label="Year founded" />
        </StatList>
      </Container>

      <Testimonial2 />
      <Blogs />
    </main>
  );
}
