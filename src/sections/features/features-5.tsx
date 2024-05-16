import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { SectionIntro } from "@/components/section-intro";
import Image from "next/image";

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
                src="https://assets-global.website-files.com/6207f5adfd8e615d3d70498b/6476d6c96421f487199b8408_Blink%20Copilot%20launch%20image-p-1080.png"
                alt=""
                fill
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
                src="/header1.png"
                alt=""
                fill
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
                src="/header1.png"
                alt=""
                fill
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
                src="https://assets-global.website-files.com/6207f5adfd8e615d3d70498b/6476d6c96421f487199b8408_Blink%20Copilot%20launch%20image-p-1080.png"
                alt=""
                fill
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
