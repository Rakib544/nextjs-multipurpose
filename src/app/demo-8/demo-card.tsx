"use client";

import { buttonVariants } from "@/components/ui/button";
import { useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function DemoCard({
  title,
  description,
  id,
  handleManageCurrentElement,
}: {
  title: string;
  description: string;
  id: number;
  handleManageCurrentElement: (id: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isView) {
      handleManageCurrentElement(id);
    }
  }, [handleManageCurrentElement, id, isView]);
  return (
    <div
      ref={ref}
      className={`${
        isView
          ? "p-5 opacity-100  transition-all"
          : "opacity-100  transition-all p-5"
      }`}
    >
      <span className="text-6xl block mb-3 font-extrabold">
        {id.toString().padStart(2, "0")}
      </span>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="leading-8 mt-4 text-base text-gray-600">{description}</p>
      <Link
        href=""
        className={buttonVariants({ size: "sm", className: "mt-6 px-4" })}
      >
        Learn more &rarr;
      </Link>
    </div>
  );
}
