import { Container } from "@/components/container";
import { SectionIntro } from "@/components/section-intro";
import {
  InfiniteMoving,
  InfiniteMovingItem,
} from "@/components/ui/infinite-moving";
import uiImage5 from "@/images/demo-4/hero-app.png";
import uiImage1 from "@/images/demo-4/ui-1.png";
import uiImage2 from "@/images/demo-4/ui-2.png";
import uiImage3 from "@/images/demo-4/ui-3.png";
import uiImage4 from "@/images/demo-4/ui-4.png";
import Image from "next/image";

export default function DemoSlider2() {
  return (
    <Container className="mt-20 md:mt-32">
      <SectionIntro
        eyebrow="COOL & AMAZING DESIGN"
        className="mb-8"
        title="Experience Financial.io"
      >
        Take a closer look at our app&apos;s user-friendly interface and
        powerful features.
      </SectionIntro>
      <InfiniteMoving>
        {[uiImage1, uiImage2, uiImage3, uiImage5, uiImage4].map(
          (image, index) => (
            <InfiniteMovingItem key={index} className="w-[150px] md:w-[200px]">
              <Image
                src={image}
                alt=""
                width={200}
                height={200}
                className="w-full h-auto sm:h-auto object-cover rounded-xl"
              />
            </InfiniteMovingItem>
          )
        )}
      </InfiniteMoving>
    </Container>
  );
}
