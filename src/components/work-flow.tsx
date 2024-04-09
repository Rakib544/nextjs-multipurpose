import Image from "next/image";
import { FadeIn, FadeInStagger } from "./fade-in";

const data = [
  {
    id: 1,
    title: "Sign Up",
    text: "Create your account and choose your subscription plan.",
  },
  {
    id: 2,
    title: "Set Up",
    text: "Customize your settings and preferences.",
  },
  {
    id: 3,
    title: "Start Using",
    text: "Explore features, import data, and start using the software.",
  },
  {
    id: 4,
    title: "Get Results",
    text: "Experience increased efficiency and productivity in your workflow.",
  },
];
export default function Workflow() {
  return (
    <section>
      <FadeInStagger faster className="grid grid-cols-12 gap-6 relative pb-10">
        {data.map((d) => (
          <FadeIn className="col-span-12 lg:col-span-3 relative" key={d.id}>
            {d.id < 4 && (
              <Image
                src={d.id % 2 === 0 ? "/arrowEven.svg" : "/arrowOdd.svg"}
                alt=""
                width={220}
                className={
                  d.id % 2 === 0
                    ? "absolute -right-2 top-4 hidden lg:block"
                    : "absolute -right-2 -top-1 hidden lg:block"
                }
                height={10}
              />
            )}
            <span className="h-14 w-14 rounded-2xl mb-3  border text-indigo-600 border-indigo-200 inline-flex justify-center items-center text-xl font-bold">
              0{d.id}
            </span>
            <h3 className="font-extrabold text-lg mt-3 text-indigo-950">
              {d.title}
            </h3>
            <p className="text-base mt-3 text-neutral-700 leading-7">
              {d.text}
            </p>
          </FadeIn>
        ))}
      </FadeInStagger>
    </section>
  );
}
