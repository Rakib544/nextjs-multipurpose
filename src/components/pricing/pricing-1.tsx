"use client";
import { pricingData } from "@/lib/data/pricing-data";
import { useState } from "react";
import { FadeIn } from "../fade-in";
import { Switch } from "../ui/switch";
import { PlanCard2 } from "./plan-card-2";

export function Pricing1() {
  const [pricingType, setPricingType] = useState<"yearly" | "monthly">(
    "monthly"
  );
  return (
    <FadeIn>
      <div className="flex justify-end item-center gap-x-1">
        <span
          className={
            pricingType === "monthly"
              ? "text-foreground font-bold text-sm"
              : "text-muted-foreground font-bold text-sm"
          }
        >
          Monthly
        </span>
        <Switch
          onCheckedChange={(checked) =>
            setPricingType(checked ? "yearly" : "monthly")
          }
        />
        <span
          className={
            pricingType === "yearly"
              ? "text-foreground font-bold text-sm"
              : "text-muted-foreground font-bold text-sm"
          }
        >
          Yearly
        </span>
      </div>
      <section id="pricing">
        <div className="-mx-4 mt-8 grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-8 md:gap-x-8 sm:mx-auto lg:-mx-8 lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
          {pricingData.map((price) => (
            <PlanCard2
              pricingType={pricingType}
              key={price.id}
              name={price.name}
              price={
                pricingType === "yearly"
                  ? price.yearlyPrice
                  : price.monthlyPrice
              }
              description={price.description}
              href={price.href}
              features={price.features}
              featured={price.isFeatured}
            />
          ))}
        </div>
      </section>
    </FadeIn>
  );
}
