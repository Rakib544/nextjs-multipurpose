"use client";

import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import { portfoliosData } from "@/lib/data/portfolio-data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(1);
  return (
    <FadeIn>
      <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfoliosData.slice(0, currentIndex * 6).map((portfolio, index) => (
          <li key={index}>
            <Link
              href="/portfolio-details"
              className="block relative aspect-square border group rounded-2xl overflow-hidden"
            >
              <Image
                src={portfolio.image}
                fill
                alt=""
                className="object-cover object-center transition duration-500 motion-safe:group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end p-4 md:p-8 bg-gradient-to-t from-black/70 from-5%">
                <div>
                  <h2 className="font-semibold text-white text-lg md:text-xl ">
                    {portfolio.client}
                  </h2>
                  <p className="text-slate-200 text-sm mt-1">
                    {portfolio.category}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {currentIndex * 6 < portfoliosData.length && (
        <div
          className="mt-20 flex justify-center"
          onClick={() => setCurrentIndex((prev) => prev + 1)}
        >
          <Button size="lg">Load More</Button>
        </div>
      )}
    </FadeIn>
  );
}
