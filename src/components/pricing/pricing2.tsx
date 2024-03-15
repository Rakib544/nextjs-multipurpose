"use client";

import { pricingData } from "@/lib/data/pricing-data";
import { useState } from "react";
import { Switch } from "../ui/switch";
import { Plan } from "./plan";

export default function Pricing2() {
  const [pricingType, setPricingType] = useState<"monthly" | "yearly">(
    "monthly"
  );
  return (
    <section>
      <div className="flex justify-center item-center gap-x-1">
        <span
          className={
            pricingType === "monthly"
              ? "text-neutral-950 font-bold text-sm"
              : "text-neutral-700 font-bold text-sm"
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
              ? "text-neutral-950 font-bold text-sm"
              : "text-neutral-700 font-bold text-sm"
          }
        >
          Yearly
        </span>
      </div>
      <section id="pricing">
        <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
          {pricingData.map((price) => (
            <Plan
              pricingType={pricingType}
              key={price.id}
              name={price.name}
              price={
                pricingType === "monthly"
                  ? price.monthlyPrice
                  : price.yearlyPrice
              }
              description={price.description}
              href={price.href}
              features={price.features}
              featured={price.isFeatured}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
