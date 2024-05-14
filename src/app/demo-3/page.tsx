import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import { seoRevenueEarningProcess } from "@/lib/data/seo-agency";
import { About2 } from "@/sections/about";
import Blogs from "@/sections/blogs";
import { Features4 } from "@/sections/features";
import { Hero3 } from "@/sections/hero";
import { Process1 } from "@/sections/process";
import { Testimonial3 } from "@/sections/testimonial";

export default function Demo3() {
  return (
    <div>
      <Hero3 />
      <section>
        <Container className="mt-20">
          <p className="max-w-xs text-base font-medium text-gray-800 leading-7">
            Worked with 100+ clients around the world including:
          </p>
          <Clients />
        </Container>
      </section>
      <About2 />
      <Features4 />
      <Process1
        eyebrow="Our process"
        title="A systematic approach to digital marketing"
        subtitle="We start by conducting in-depth SEO audits to identify
                opportunities and areas for improvement. Our team analyzes your
                website's current performance, content, and technical setup
                to create a tailored strategy."
        processes={seoRevenueEarningProcess}
      />

      <Testimonial3 />
      <Blogs />
    </div>
  );
}
