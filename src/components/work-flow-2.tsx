import { cn } from "@/lib/utils";
import Image from "next/image";
import { FadeIn, FadeInStagger } from "./fade-in";
import { UsersIcon } from "./icons";

const data = [
  {
    id: 1,
    title: "Sign Up",
    text: "Create your account and choose your subscription plan.",
    image: "https://vue.hibotheme.com/prag/img/hw-img-1.52d1609a.webp",
  },
  {
    id: 2,
    title: "Set Up",
    text: "Customize your settings and preferences.",
    image: "https://vue.hibotheme.com/prag/img/hw-img-2.8af06fe9.webp",
  },
  {
    id: 3,
    title: "Start Using",
    text: "Explore features, import data, and start using the software.",
    image: "https://vue.hibotheme.com/prag/img/hw-img-1.52d1609a.webp",
  },
  {
    id: 4,
    title: "Get Results",
    text: "Experience increased efficiency and productivity in your workflow.",
    image: "https://vue.hibotheme.com/prag/img/hw-img-2.8af06fe9.webp",
  },
];
export default function Workflow2() {
  return (
    <section>
      <FadeInStagger faster className="space-y-8">
        {data.map((d, index) => (
          <FadeIn className="relative grid grid-cols-12" key={d.id}>
            <div
              className={cn(
                "col-span-12  md:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-6 bg-indigo-50 p-4 md:p-6 rounded-2xl",
                index % 2 === 0 ? "order-1" : "order-2"
              )}
            >
              <div
                className={cn(
                  "bg-indigo-100 rounded-2xl relative overflow-hidden mx-auto order-1",
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                )}
              >
                <Image src={d.image} alt="" height={400} width={400} />
              </div>
              <div
                className={cn(
                  "md:pl-5 flex items-center order-2",
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                )}
              >
                <div>
                  <div className="flex justify-between items-center">
                    <span className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-indigo-600 text-white flex justify-center items-center">
                      <UsersIcon />
                    </span>
                    <span className="text-2xl font-extrabold">
                      {d.id.toString().padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold mt-4">{d.title}</h3>
                  <p className="text-base leading-7 text-neutral-600 font-medium mt-2 pb-2">
                    {d.text} Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Voluptate optio nulla voluptas itaque?
                  </p>
                </div>
              </div>
            </div>
            <div
              className={cn(
                "col-span-12  md:col-span-2 relative hidden md:block",
                index % 2 === 0 ? "order-2" : "order-1"
              )}
            >
              {index < data.length - 1 && (
                <Image
                  src={
                    index % 2 === 0
                      ? "/right-arrow-down.webp"
                      : "/left-arrow-down.webp"
                  }
                  alt=""
                  width={100}
                  height={200}
                  className={cn(
                    "absolute top-1/2",
                    index % 2 === 0 ? "left-0" : "right-0"
                  )}
                />
              )}
            </div>
          </FadeIn>
        ))}
      </FadeInStagger>
    </section>
  );
}
