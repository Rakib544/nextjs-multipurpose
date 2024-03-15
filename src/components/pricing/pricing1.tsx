import { pricingData } from "@/lib/data/pricing-data";
import { Plan } from "./plan";

export default function Pricing1() {
  return (
    <section>
      <section id="pricing">
        <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
          {pricingData.map((price) => (
            <Plan
              pricingType="yearly"
              key={price.id}
              name={price.name}
              price={price.yearlyPrice}
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
