import PortfolioCard from "@/components/portfolio-card";
import { portfoliosData } from "@/lib/data/portfolio-data";
import { Container } from "../components/container";
import { FadeIn } from "../components/fade-in";
import { SectionIntro } from "../components/section-intro";
import {
  InfiniteMoving,
  InfiniteMovingItem,
} from "../components/ui/infinite-moving";

export default function OurPortfolios() {
  return (
    <Container className="mt-20 md:mt-32">
      <SectionIntro
        eyebrow="Portfolios"
        className="mb-12"
        title="Explore our award-winning portfolio solutions"
      >
        Diversify your investments and grow your wealth with our tailored
        portfolio management services.
      </SectionIntro>
      <FadeIn>
        <InfiniteMoving>
          {portfoliosData.slice(0, 4).map((portfolio, index) => (
            <InfiniteMovingItem key={index} className="bg-red-500 !w-[300px]">
              <PortfolioCard
                category={portfolio.category}
                client={portfolio.client}
                image={portfolio.image}
              />
            </InfiniteMovingItem>
          ))}
        </InfiniteMoving>
      </FadeIn>
      <FadeIn>
        <InfiniteMoving direction="right">
          {portfoliosData.slice(4, 8).map((portfolio, index) => (
            <InfiniteMovingItem key={index} className="!w-[300px]">
              <PortfolioCard
                category={portfolio.category}
                client={portfolio.client}
                image={portfolio.image}
              />
            </InfiniteMovingItem>
          ))}
        </InfiniteMoving>
      </FadeIn>
    </Container>
  );
}
