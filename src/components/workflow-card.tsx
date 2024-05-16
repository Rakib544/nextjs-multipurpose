"use client";

import { cn } from "@/lib/utils";
import { motion, useInView, useScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface WorkflowCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function WorkFlowCard({
  children,
  id,
  className,
}: WorkflowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
    axis: "y",
    smooth: 1,
  });

  useEffect(() => {
    scrollYProgress.on("change", (latestValue) => setScrollY(latestValue));

    return () => scrollYProgress.clearListeners();
  }, [scrollYProgress]);

  return (
    <div
      className={cn(
        "grid grid-cols-12 gap-6 pl-2 md:pl-0 items-center relative",
        className
      )}
      ref={ref}
    >
      <div className="relative h-full col-span-1 md:col-span-2">
        <span
          className={cn(
            "border-subtle absolute top-[3px] z-10 grid h-6 w-6 -translate-x-3 scale-[var(--scale,1)] transition duration-500 place-items-center rounded-full border text-xs font-medium shadow-[0px_0px_0px_3px_#e0e7ff] md:left-1/2",
            isView ? "bg-indigo-600 text-white" : "bg-white text-foreground"
          )}
        >
          {id}
        </span>
        <div className="relative flex h-full items-start overflow-clip md:justify-center">
          <div className="flex h-[calc(100%+170px)] flex-col items-center">
            <motion.hr
              className="-mt-[170px] w-px shrink-0 bg-indigo-600"
              style={{
                height: `${scrollY * 100}%`,
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="170"
              fill="none"
            >
              <path
                fill="url(#a)"
                d="M.5 169a.5.5 0 0 0 1 0h-1ZM.5 0v169h1V0h-1Z"
              ></path>
              <defs>
                <linearGradient
                  id="a"
                  x1="1.5"
                  x2="1.5"
                  y1="0"
                  y2="169"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4f46e5"></stop>
                  <stop offset="1" stopColor="#4f46e5" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="col-span-11 md:col-span-10">{children}</div>
    </div>
  );
}
