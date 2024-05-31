import { FadeIn } from "@/components/fade-in";
import {
  InfiniteMoving,
  InfiniteMovingItem,
} from "@/components/ui/infinite-moving";
import { previewData } from "@/lib/data/preview-data";
import Image from "next/image";

export default function DemoSlider1() {
  return (
    <FadeIn>
      <InfiniteMoving>
        {previewData.homepage.map((item, index) => (
          <InfiniteMovingItem key={index} className="md:w-[324px] relative">
            <Image
              priority
              src={item.image}
              alt=""
              height={425}
              width={324}
              className="border object-cover object-center rounded-lg border-border/50 "
            />
          </InfiniteMovingItem>
        ))}
      </InfiniteMoving>
    </FadeIn>
  );
}
