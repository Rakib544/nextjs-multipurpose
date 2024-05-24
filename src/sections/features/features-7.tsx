import { Container } from "@/components/container";
import { SectionIntro } from "@/components/section-intro";
import { StatList, StatListItem } from "@/components/stat-list";

export default function Features7() {
  return (
    <Container className="mt-20 md:mt-32">
      <SectionIntro
        eyebrow="Features"
        centered
        title="Optimize Your Development with Agenify"
        className="mb-12"
      >
        Discover the extensive selection of home pages, inner pages, dashboard
        layouts, and customizable blocks we offer to streamline your website
        development.
      </SectionIntro>
      <div className="max-w-4xl mx-auto">
        <StatList>
          <StatListItem label="Neatly coded pages" value="65+" />
          <StatListItem label="Pre-made blocks" value="45+" />
          <StatListItem label="Components" value="161+" />
          <StatListItem label="Dashboard pages" value="22+" />
        </StatList>
      </div>
    </Container>
  );
}
