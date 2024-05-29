"use client";

import { FadeIn } from "@/components/fade-in";
import PortfolioCard from "@/components/portfolio-card";
import { Button } from "@/components/ui/button";
import { portfoliosData } from "@/lib/data/portfolio-data";
import { PlusCircle } from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(1);
  return (
    <FadeIn>
      <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {portfoliosData.slice(0, currentIndex * 6).map((portfolio, index) => (
          <li key={index}>
            <PortfolioCard
              category={portfolio.category}
              client={portfolio.client}
              image={portfolio.image}
            />
          </li>
        ))}
      </ul>
      {currentIndex * 6 < portfoliosData.length && (
        <div
          className="mt-20 flex justify-center"
          onClick={() => setCurrentIndex((prev) => prev + 1)}
        >
          <Button size="lg">
            <PlusCircle className="size-4 mr-1" /> Load More
          </Button>
        </div>
      )}
    </FadeIn>
  );
}
