import { Container } from "@/components/container";
import { SectionIntro } from "@/components/section-intro";
import { StatList, StatListItem } from "@/components/stat-list";

export default function Fact1() {
  return (
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
  );
}
