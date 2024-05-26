import { previewData } from "@/lib/data/preview-data";
import { CallToAction1 } from "@/sections/call-to-action";
import { DemoSlider1 } from "@/sections/demo-slider";
import { Features7, Features8 } from "@/sections/features";
import { Hero6 } from "@/sections/hero";
import PreviewDemos from "@/sections/preview-demos";

export default function Home() {
  return (
    <div>
      <Hero6 />
      <DemoSlider1 />
      <Features7 />
      <PreviewDemos
        id="demos"
        eyebrow="5 Pre-Built Demos"
        title="We carefully crafted all demos for your business needs"
        description=" Discover a range of ready-made pages to suit every need"
        pages={previewData.homepage}
      />
      <PreviewDemos
        id="inner-pages-demos"
        eyebrow={`${previewData.innerPages.length} Inner Pages`}
        title="Different layout inner pages"
        description=" Offer a wide range of inner pages to help businesses establish."
        pages={previewData.innerPages}
      />
      <PreviewDemos
        id="dashboard-pages-demos"
        eyebrow={`${previewData.dashboard.length} Dashboard Pages`}
        title="We also provided beautiful, modern and clean dashboard"
        description=" See the versatile and user-friendly dashboard in action, designed to
          cater to your business needs."
        pages={previewData.dashboard}
      />
      <Features8 />
      <CallToAction1 />
    </div>
  );
}
