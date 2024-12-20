import { generateBlurImageURL } from "@/lib/data/blur-image-data";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { StarIcon } from "./icons";

interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  quote: string;
  rating: number | string;
  name: string;
  role: string;
  image: string | StaticImageData;
}

const TestimonialCard = React.forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ quote, rating, name, role, image, className, ...props }, ref) => {
    return (
      <figure
        className={cn(
          "px-2 py-6 md:px-4 mb-4 lg:mb-0 flex flex-col gap-0",
          className
        )}
        ref={ref}
        {...props}
      >
        <div
          aria-hidden="true"
          className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
        ></div>
        <blockquote className="order-2 relative z-20 text-[15px] font-medium leading-7 text-foreground block mt-2">
          &quot;{quote}&quot;
        </blockquote>
        <figcaption className="order-1 flex justify-between mb-4">
          <div className="flex gap-x-3 items-center">
            <Image
              src={image}
              alt=""
              placeholder="blur"
              blurDataURL={generateBlurImageURL()}
              className="h-12 w-12 rounded-full object-center object-cover"
            />
            <div>
              <span className="block text-base font-semibold leading-[1.6] text-foreground">
                {name}
              </span>
              <span className="block text-sm  text-muted-foreground font-medium">
                {role}
              </span>
            </div>
          </div>
          <span className="flex items-center font-medium text-foreground text-sm gap-x-1">
            {rating} <StarIcon className="h-4 w-4 fill-yellow-500" />
          </span>
        </figcaption>
      </figure>
    );
  }
);

TestimonialCard.displayName = "TestimonialCard";

export { TestimonialCard };
