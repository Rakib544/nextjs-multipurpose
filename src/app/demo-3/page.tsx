import { seoRevenueEarningProcess } from "@/lib/data/seo-agency";
import { About2 } from "@/sections/about";
import Blogs from "@/sections/blogs";
import { Clients2 } from "@/sections/clients";
import { Features4 } from "@/sections/features";
import { Hero3 } from "@/sections/hero";
import { Process1 } from "@/sections/process";
import { Testimonial3 } from "@/sections/testimonial";

export default function Demo3() {
  return (
    <div>
      <Hero3 />
      <Clients2 />
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
