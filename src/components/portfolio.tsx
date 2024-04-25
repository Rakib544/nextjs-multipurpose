import { portfoliosData } from "@/lib/data/portfolio-data";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import { FadeIn } from "./fade-in";
import { SectionIntro } from "./section-intro";
import { InfiniteMoving, InfiniteMovingItem } from "./ui/infinite-moving";

export default function Portfolios() {
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
              <Link
                href="/portfolio-details"
                className="block relative aspect-square border group rounded-2xl overflow-hidden"
              >
                <Image
                  src={portfolio.image}
                  fill
                  alt=""
                  className="object-cover object-center transition duration-500 motion-safe:group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end p-4 md:p-8 bg-gradient-to-t from-black/70 from-5%">
                  <div>
                    <h2 className="font-semibold text-white text-lg md:text-xl ">
                      {portfolio.client}
                    </h2>
                    <p className="text-slate-200 text-sm mt-1">
                      {portfolio.category}
                    </p>
                  </div>
                </div>
              </Link>
            </InfiniteMovingItem>
          ))}
        </InfiniteMoving>
      </FadeIn>
      <FadeIn>
        <InfiniteMoving direction="right">
          {portfoliosData.slice(4, 8).map((portfolio, index) => (
            <InfiniteMovingItem key={index} className="!w-[300px]">
              <Link
                href="/portfolio-details"
                className="block relative aspect-square border group rounded-2xl overflow-hidden"
              >
                <Image
                  src={portfolio.image}
                  fill
                  alt=""
                  className="object-cover object-center transition duration-500 motion-safe:group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end p-4 md:p-8 bg-gradient-to-t from-black/70 from-5%">
                  <div>
                    <h2 className="font-semibold text-white text-lg md:text-xl ">
                      {portfolio.client}
                    </h2>
                    <p className="text-slate-200 text-sm mt-1">
                      {portfolio.category}
                    </p>
                  </div>
                </div>
              </Link>
            </InfiniteMovingItem>
          ))}
        </InfiniteMoving>
      </FadeIn>
    </Container>
  );
}
