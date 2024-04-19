import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";

export default function Home() {
  return (
    <main>
      <Container>
        <PageIntro centered pageTitle="This is page title" className="mb-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          incidunt possimus maiores at asperiores cum totam sunt sit quas
          consectetur.
        </PageIntro>
      </Container>
    </main>
  );
}
