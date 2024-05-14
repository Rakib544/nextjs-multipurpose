import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import { About3 } from "@/sections/about";
import OurAwards from "@/sections/awards";
import Blogs from "@/sections/blogs";
import { Features6 } from "@/sections/features";
import { Hero5 } from "@/sections/hero";
import OurPortfolios from "@/sections/our-portfolios";
import Team from "@/sections/team";
import { Testimonial1 } from "@/sections/testimonial";

export default function CreativeDigitalStudio() {
  return (
    <div>
      <Hero5 />
      <About3 />
      <Features6 />
      <OurAwards />
      <OurPortfolios />
      <Testimonial1 />
      <Team />
      <Container className="mt-20 md:mt-32">
        <Clients />
      </Container>
      <Blogs />
    </div>
  );
}
