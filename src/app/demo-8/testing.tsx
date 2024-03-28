"use client";
import Image from "next/image";
import { useState } from "react";
import DemoCard from "./demo-card";

const gradientColors = [
  "from-indigo-500 to-indigo-300",
  "from-emerald-500 to-emerald-300",
  "from-indigo-500 to-pink-300",
  "from-violet-500 to-violet-300",
];

const services = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ea eveniet repellat quasi! Fugit, ullam. Fuga modi, ipsam necessitatibus unde asperiores iure eius possimus. Vero commodi nesciunt quos nemo.",
    image: "/ui-ux.gif",
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ea eveniet repellat quasi! Fugit, ullam. Fuga modi, ipsam necessitatibus unde asperiores iure eius possimus. Vero commodi nesciunt quos nemo.",
    image: "/development.svg",
  },
  {
    id: 4,
    title: "Digital Product Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ea eveniet repellat quasi! Fugit, ullam. Fuga modi, ipsam necessitatibus unde asperiores iure eius possimus. Vero commodi nesciunt quos nemo.",
    image: "/digital-marketing.gif",
  },
];

export default function TestingSection() {
  const [currentElement, setCurrentElement] = useState<number>(1);
  function handleManageCurrentElement(id: number) {
    setCurrentElement(id);
  }
  return (
    <div className="grid grid-cols-12 gap-x-20 relative h-full pb-20">
      <div className="col-span-6 space-y-32">
        {services.map((service) => (
          <DemoCard
            title={service.title}
            id={service.id}
            key={service.id}
            description={service.description}
            handleManageCurrentElement={handleManageCurrentElement}
          />
        ))}
      </div>
      <div className="col-span-6 ">
        <div className="sticky top-14 aspect-square m-10">
          <div className="h-full w-full relative">
            {services.map((service) => (
              <div
                key={service.id}
                className={`absolute rounded-xl transition-opacity inset-0 bg-gradient-to-t flex justify-center items-center ${
                  gradientColors[currentElement - 1]
                } ${
                  service.id === currentElement ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  height={250}
                  width={250}
                  className="object-cover py-6 object-center block mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
