import { portfoliosData } from "@/lib/data/portfolio-data";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import { FadeIn } from "./fade-in";
import { SectionIntro } from "./section-intro";
import { buttonVariants } from "./ui/button";

export default function Portfolios() {
  return (
    <Container className="mt-20 md:mt-32">
      <SectionIntro
        eyebrow="Portfolios"
        className="mb-12"
        title="Some recent project we successfully done"
      />
      <FadeIn>
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfoliosData.slice(0, 3).map((portfolio, index) => (
            <li key={index}>
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
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <Link href="/portfolios" className={buttonVariants({ size: "lg" })}>
            View More &rarr;
          </Link>
        </div>
      </FadeIn>
    </Container>
  );
}
