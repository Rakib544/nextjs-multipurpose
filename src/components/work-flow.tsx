import Image from "next/image";
import { FadeIn, FadeInStagger } from "./fade-in";

const data = [
  {
    id: 1,
    title: "Set disbursement Instructions",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 2,
    title: "Assembly retrieves funds from your account",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 3,
    title: "Assembly initiates disbursement",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 4,
    title: "Customer receives funds payment",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
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
                    ? "absolute right-0 top-4 hidden lg:block"
                    : "absolute right-0 -top-1 hidden lg:block"
                }
                height={10}
              />
            )}
            <span className="h-14 w-14 rounded-2xl mb-3 bg-[#0A2540] text-white inline-flex justify-center items-center text-xl font-bold">
              0{d.id}
            </span>
            <h3 className="font-semibold text-lg mt-3 text-neutral-950">
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
