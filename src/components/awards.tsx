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
      <div className="mt-20 grid grid-cols-12 lg:gap-x-10">
        <div className="col-span-12 lg:col-span-4 relative">
          <Image
            src="https://images.unsplash.com/photo-1642011626347-798d5a6684fc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            className="rounded-xl"
          />
        </div>
        <div className="col-span-12 lg:col-span-8 -mt-4">
          {awards.map((award) => (
            <div
              key={award.id}
              className="grid grid-cols-12 gap-4 py-4 border-b relative hover:bg-slate-50"
            >
              <div className="col-span-12 md:col-span-2 lg:col-span-1">
                <Image
                  src={award.icon}
                  height={90}
                  width={90}
                  alt={award.title}
                  className="h-16 md:h-auto w-16 md:w-auto shrink-0"
                />
              </div>
              <div className="col-span-12 md:col-span-8 md:ml-4">
                <h3 className="font-semibold text-xl md:text-lg">
                  {award.title}
                </h3>
                <p className="text-base md:text-sm mt-2 leading-6 text-neutral-600 font-medium">
                  Welcome to our digital agency We specialize in helping
                  business most like yours succeed online. From website design.
                </p>
              </div>
              <div className="col-span-0 md:col-span-1"></div>
              <div className="col-span-12 absolute right-3 top-8 md:col-span-2 text-start md:text-end font-bold">
                {award.winningYear}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
