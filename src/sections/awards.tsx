import Image from "next/image";
import { Container } from "../components/container";
import { FadeIn } from "../components/fade-in";
import { SectionIntro } from "../components/section-intro";
import WorkFlowCard from "../components/workflow-card";

const awards = [
  {
    id: 1,
    icon: "https://fxotary.netlify.app/images/achivement_icon_1.png",
    title: "Awwwards Interior excellence.",
    winningYear: 2024,
  },
  {
    id: 2,
    icon: "https://fxotary.netlify.app/images/achivement_icon_2.png",
    title: "Best Site of the Year Awards.",
    winningYear: 2023,
  },
  {
    id: 3,
    icon: "https://fxotary.netlify.app/images/achivement_icon_3.png",
    title: "Template of the seasons in this month.",
    winningYear: 2022,
  },
  {
    id: 4,
    icon: "https://fxotary.netlify.app/images/achivement_icon_4.png",
    title: "Best Selling of this week & month.",
    winningYear: 2021,
  },
];

export default function OurAwards() {
  return (
    <Container className="mt-20 md:mt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        <div>
          <div className="sticky top-6">
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
                    />
                  </div>
                  <div>
                    <h3 className="font-bold mt-2 text-xl text-indigo-950">
                      {award.title}
                    </h3>
                    <p className="text-base mt-2 leading-7 text-gray-600">
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
