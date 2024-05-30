"use client";
import { pricingComparison } from "@/lib/data/price-comparison-data";
import Link from "next/link";
import { useState } from "react";
import { buttonVariants } from "../ui/button";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const formatFeatureTitle = (title: string) => {
  const words = title.split(/(?=[A-Z])/);
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default function PriceComparisonTable() {
  const [pricingType, setPricingType] = useState<"monthly" | "yearly">(
    "monthly"
  );
  return (
    <Table className="rounded">
      <TableHeader className="">
        <TableRow className="!bg-white border-none">
          <TableHead>
            <div className="flex items-end h-full">
              <div className="w-full pb-8 min-w-[230px]">
                <p className="font-semibold mb-3">Pick Your Plan</p>
                <div className="border shadow-sm rounded-xl p-4">
                  <RadioGroup
                    defaultValue="monthly"
                    onValueChange={(value) =>
                      setPricingType(value as "monthly" | "yearly")
                    }
                  >
                    <div className="flex items-center gap-x-2">
                      <RadioGroupItem id="monthly" value="monthly" />
                      <Label htmlFor="monthly" className="text-foreground">
                        Monthly Billing
                      </Label>
                    </div>

                    <div className="flex items-center gap-x-2 ">
                      <RadioGroupItem id="yearly" value="yearly" />
                      <Label htmlFor="yearly" className="text-foreground">
                        Yearly Billing
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </TableHead>
          <TableHead className="pb-8 min-w-[230px]">
            <div className="text-center w-full py-8 ">
              <p className="text-foreground">Free Plan</p>
              <p className="font-display mt-4 text-4xl font-bold tracking-tight text-foreground">
                {pricingComparison.free.pricing[pricingType]}
              </p>
              <p className="mt-2 text-muted-foreground mb-6">
                {pricingType === "monthly" ? "Per Month" : "Per Year"}
              </p>
              <div>
                <Link
                  href=""
                  className={buttonVariants({
                    variant: "outline",
                    className: "w-full block",
                  })}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </TableHead>
          <TableHead className="min-w-[260px]">
            <div className="text-center w-full py-8 bg-indigo-600 px-6 rounded-xl">
              <p className="text-white">Premium Plan</p>
              <p className="font-display mt-4 text-4xl font-bold tracking-tight text-white">
                {pricingComparison.standard.pricing[pricingType]}
              </p>
              <p className="mt-2 text-primary-foreground mb-6">
                {pricingType === "monthly" ? "Per Month" : "Per Year"}
              </p>
              <div>
                <Link
                  href=""
                  className={buttonVariants({
                    variant: "secondary",
                    className: "w-full block",
                  })}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </TableHead>
          <TableHead className="min-w-[230px]">
            <div className="text-center w-full py-8 ">
              <p className="text-foreground">Enterprise Plan</p>
              <p className="font-display mt-4 text-4xl font-bold tracking-tight text-foreground">
                {pricingComparison.premium.pricing[pricingType]}
              </p>
              <p className="mt-2 text-muted-foreground mb-6">
                {pricingType === "monthly" ? "Per Month" : "Per Year"}
              </p>
              <div>
                <Link
                  href=""
                  className={buttonVariants({
                    variant: "outline",
                    className: "w-full block",
                  })}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.keys(pricingComparison.free.features).map((feature, index) => (
          <TableRow key={index}>
            <TableCell className="font-semibold">
              {formatFeatureTitle(feature)}
            </TableCell>
            <TableCell>{pricingComparison.free.features[feature]}</TableCell>
            <TableCell>{pricingComparison.free.features[feature]}</TableCell>
            <TableCell>{pricingComparison.free.features[feature]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
