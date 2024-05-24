import { Container } from "@/components/container";
import { SectionIntro } from "@/components/section-intro";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction1() {
  return (
    <div className="bg-gray-100 mt-20 md:mt-32 rounded-tr-[40px] rounded-tl-[40px]">
      <Container className="py-20 py:my-32">
        <SectionIntro
          eyebrow="Let's hurry up now and"
          title="Create your agency with amazing site!"
          centered
        >
          One-time­ payment­ &­ get­ free­ life­ time­ license­ and­update
          <div>
            <Link
              href="mailto:md.rakib10122003@gmail.com"
              className={buttonVariants({ size: "lg", className: "mt-4" })}
            >
              Contact Now
            </Link>
          </div>
        </SectionIntro>
      </Container>
    </div>
  );
}
