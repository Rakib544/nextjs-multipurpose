import { awards } from "@/lib/data/award-data";
import { generateBlurImageURL } from "@/lib/data/blur-image-data";
import Image from "next/image";
import { Container } from "../components/container";
import { FadeIn } from "../components/fade-in";
import { SectionIntro } from "../components/section-intro";
import WorkFlowCard from "../components/workflow-card";

export default function OurAwards() {
  return (
    <Container className="mt-20 md:mt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        <div>
          <div className="sticky top-24">
            <SectionIntro
              title="Recognizing excellence our award winning work"
              eyebrow="Our Awards"
              className="mb-12"
            >
              Discover the industry recognition and accolades that highlight our
              commitment to excellence and innovation.
            </SectionIntro>
          </div>
        </div>
        <div>
          <FadeIn>
            {awards.map((award, index) => (
              <WorkFlowCard key={award.id} id={(index + 1).toString()}>
                <div className="pb-10">
                  <div>
                    <Image
                      src={award.icon}
                      height={50}
                      width={50}
                      alt={award.title}
                      className="size-14 shrink-0"
                      placeholder="blur"
                      blurDataURL={generateBlurImageURL()}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold mt-2 text-xl text-foreground">
                      {award.title}
                    </h3>
                    <p className="text-base mt-2 leading-7 text-muted-foreground">
                      Welcome to our digital agency We specialize in helping
                      business most like yours succeed online. From website
                      design.
                    </p>
                  </div>
                  <div className="col-span-0 md:col-span-1"></div>
                  <div className="col-span-12 absolute right-3 top-8 md:col-span-2 text-start md:text-end font-bold">
                    {award.winningYear}
                  </div>
                </div>
              </WorkFlowCard>
            ))}
          </FadeIn>
        </div>
      </div>
    </Container>
  );
}
