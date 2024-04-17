import { Container } from "@/components/container";
import { TextUnderline } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import Projects from "./projects";

export default function Portfolios() {
  return (
    <div>
      <Container className="mb-32">
        <PageIntro
          eyebrow="Portfolios"
          className="max-w-4xl mx-auto z-10 mt-20 mb-10"
          centered
          pageTitle={
            <>
              We bring a wealth of
              <span className="text-indigo-600 relative z-10 whitespace-nowrap inline-block sm:inline">
                {" "}
                <span className="relative">experience</span> <TextUnderline />
              </span>{" "}
              from the wide range of backgrounds.
            </>
          }
        >
          Our philosophy is simple; hire great people and give them the
          resources and support to do their best work.
        </PageIntro>

        <Projects />
      </Container>
    </div>
  );
}
