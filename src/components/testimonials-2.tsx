import userImage from "@/images/testimonial_3.jpg";
import Image from "next/image";
import { StarIcon } from "./icons";
import {
  Carousel,
  CarouselContent,
  CarouselDotButton,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function Testimonials2() {
  return (
    <div>
      <Carousel>
        <CarouselContent className="gap-x-4">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <CarouselItem
              key={i}
              className="bg-slate-50  md:basis-1/2 lg:basis-1/3 rounded-xl"
            >
              <blockquote className="px-2 py-6 md:px-4 mb-4 lg:mb-0">
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <div className="flex justify-between mb-4">
                  <div className="flex gap-x-3 items-center">
                    <Image
                      src={userImage}
                      alt=""
                      className="h-12 w-12 rounded-full object-center object-cover"
                    />
                    <div>
                      <span className="block text-base font-semibold leading-[1.6] text-neutral-950">
                        Md Rakib
                      </span>
                      <span className="block text-sm  text-neutral-600 font-medium">
                        Software Engineer
                      </span>
                    </div>
                  </div>
                  <span className="flex items-center font-medium text-neutral-950 text-sm gap-x-1">
                    4.8 <StarIcon className="h-4 w-4 fill-yellow-500" />
                  </span>
                </div>
                <span className=" relative z-20 text-[15px] font-medium leading-7 text-neutral-700 block mt-6">
                  &quot;Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Libero assumenda eaque sint perspiciatis laboriosam,
                  labore in distinctio repudiandae neque deleniti qui et?&quot;
                </span>
              </blockquote>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-end mt-10">
          <CarouselDotButton />
        </div>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
