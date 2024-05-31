import { FadeIn } from "@/components/fade-in";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Hero3() {
  return (
    <div
      className="w-full py-20 md:py-32 rounded-bl-[40px] rounded-br-[40px]"
      style={{
        backgroundImage: `linear-gradient(180deg,#6754E9 0%,#4534B8 100%)`,
      }}
    >
      <FadeIn className="container px-4 md:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-5xl/tight font-extrabold text-white leading-tight max-w-3xl mx-auto">
          Elevate Your Digital Presence with Our Expertise
        </h1>
        <p className="text-base md:text-[17px] leading-8 text-primary-foreground mt-6 max-w-2xl mx-auto">
          As a leading digital agency, we specialize in crafting captivating
          websites, developing powerful web applications, and delivering
          innovative digital solutions that drive your business forward.
        </p>
        <div className="mt-6">
          <Link
            className={buttonVariants({ variant: "outline", size: "lg" })}
            href="#"
          >
            Free consultation
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
