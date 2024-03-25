import Image from "next/image";
import { Container } from "./container";
import { SectionIntro } from "./section-intro";

const awards = [
  {
    id: 1,
    icon: "https://fxotary.netlify.app/images/achivement_icon_1.png",
    title: "Awwwards Interior excellence.",
    winningYear: 2021,
  },
  {
    id: 2,
    icon: "https://fxotary.netlify.app/images/achivement_icon_2.png",
    title: "Best Site of the Year Awards.",
    winningYear: 2021,
  },
  {
    id: 3,
    icon: "https://fxotary.netlify.app/images/achivement_icon_3.png",
    title: "Template of the seasons in this month.",
    winningYear: 2021,
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
    <Container>
      <SectionIntro
        title="Recognizing Excellence Our Award Winning Work"
        eyebrow="Our Awards"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          deserunt earum commodi placeat assumenda repudiandae aliquid nulla
          similique eligendi debitis?
        </p>
      </SectionIntro>
      <div className="mt-20 grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-4 relative">
          <Image
            src="https://images.unsplash.com/photo-1642011626347-798d5a6684fc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            className="rounded-xl"
          />
        </div>
        <div className="col-span-12 lg:col-span-8">
          {awards.map((award) => (
            <div
              key={award.id}
              className="grid grid-cols-12 gap-x-4 py-4 border-b"
            >
              <div className="col-span-1">
                <Image
                  src={award.icon}
                  height={100}
                  width={100}
                  alt={award.title}
                />
              </div>
              <div className="col-span-8 ml-4">
                <h3 className="font-semibold text-lg">{award.title}</h3>
                <p className="text-sm mt-2 leading-6 text-neutral-600 font-medium">
                  Welcome to our digital agency We specialize in helping
                  business most like yours succeed online. From website design.
                </p>
              </div>
              <div className="col-span-1"></div>
              <div className="col-span-2 text-end font-bold">
                {award.winningYear}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
