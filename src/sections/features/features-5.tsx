import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { SectionIntro } from "@/components/section-intro";
import Image from "next/image";

import featureImage1 from "@/images/demo-4/feature-1.webp";
import featureImage2 from "@/images/demo-4/feature-2.webp";
import featureImage3 from "@/images/demo-4/feature-3.webp";
import featureImage4 from "@/images/demo-4/feature-4.webp";
import { generateBlurImageURL } from "@/lib/data/blur-image-data";

export default function Features5() {
  return (
    <div className="my-20 md:my-32">
      <Container>
        <SectionIntro
          eyebrow="Our Features"
          title="Experience your product as you create it."
          className="mb-12"
        ></SectionIntro>
        <FadeInStagger faster className="grid grid-cols-12 gap-6">
          <FadeIn className="col-span-12 md:col-span-8 p-10 bg-slate-100 rounded-[40px]">
            <div className="relative aspect-[16/7]">
              <Image
                src={featureImage1}
                alt=""
                fill
                placeholder="blur"
                blurDataURL={generateBlurImageURL()}
                className="rounded-xl block object-cover"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold text-foreground mt-8">
              Secure & Convenient
            </h3>
            <p className="text-base leading-8 text-muted-foreground">
              Enjoy peace of mind with advanced security features and
              easy-to-use interface.
            </p>
          </FadeIn>
          <FadeIn className="col-span-12 md:col-span-4 p-10 bg-slate-100 rounded-[40px]">
            <div className="relative aspect-video">
              <Image
                src={featureImage2}
                alt=""
                fill
                placeholder="blur"
                blurDataURL={generateBlurImageURL()}
                className="rounded-xl block object-cover"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold text-foreground mt-8">
              Real-Time Transactions
            </h3>
            <p className="text-base leading-8 text-muted-foreground">
              Stay updated with real-time transaction alerts and balance
              notifications.
            </p>
          </FadeIn>
          <FadeIn className="col-span-12 md:col-span-4 p-10 bg-slate-100 rounded-[40px]">
            <div className="relative aspect-video">
              <Image
                src={featureImage3}
                alt=""
                fill
                placeholder="blur"
                blurDataURL={generateBlurImageURL()}
                className="rounded-xl block object-cover"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold text-foreground mt-8">
              Real-Time Transactions
            </h3>
            <p className="text-base leading-8 text-muted-foreground">
              Stay updated with real-time transaction alerts and balance
              notifications.
            </p>
          </FadeIn>
          <FadeIn className="col-span-12 md:col-span-8 p-10 bg-slate-100 rounded-[40px]">
            <div className="relative aspect-[16/7]">
              <Image
                src={featureImage4}
                alt=""
                fill
                placeholder="blur"
                blurDataURL={generateBlurImageURL()}
                className="rounded-xl block object-cover"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold text-foreground mt-8">
              Secure & Convenient
            </h3>
            <p className="text-base leading-8 text-muted-foreground">
              Enjoy peace of mind with advanced security features and
              easy-to-use interface.
            </p>
          </FadeIn>
        </FadeInStagger>
      </Container>
    </div>
  );
}
