import { Container } from "@/components/container";
import { StarIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { BlogCard2 } from "@/components/blog-card";
import CallToAction from "@/components/call-to-action";
import { SectionIntro } from "@/components/section-intro";
import Testimonials2 from "@/components/testimonials-2";
import { InfiniteMovingImageCards } from "@/components/ui/infinite-moveing-image-cards";
import Workflow from "@/components/work-flow";
import userImage2 from "@/images/testimonial_2.jpg";
import userImage1 from "@/images/testimonial_3.jpg";

const features = [
  {
    id: 1,
    icon: "/treadmill.png",
    title: "Track Your Workouts",
    description:
      "Log your exercises, set goals, and track your progress over time",
  },
  {
    id: 2,
    title: "Personalized Plans",
    icon: "/planning.png",
    description:
      "Receive customized workout and nutrition plans based on your goals and preferences",
  },
  {
    id: 3,
    title: "Activity Tracking",
    icon: "/time.png",
    description:
      "Monitor your daily activity levels, steps, and calories burned effortlessly",
  },
  {
    id: 4,
    title: "Insights & Analytics",
    icon: "/analysis.png",
    description:
      "Gain valuable insights into your fitness journey with detailed analytics and reports",
  },
];

export default function AppLanding() {
  return (
    <div>
      <div>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <h1 className="text-4xl pr-10 font-bold md:text-4xl/tight max-w-lg">
                Transform Your Fitness Journey with FitLife Tracker
              </h1>
              <p className="text-base leading-7 text-neutral-600 mt-3">
                Take Control of Your Health and Reach Your Goals Faster. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                omnis.
              </p>
              <div className="flex gap-x-3 mt-4">
                <Link href="" className={buttonVariants({ size: "lg" })}>
                  Download IOS
                </Link>
                <Link
                  href=""
                  className={buttonVariants({ size: "lg", variant: "outline" })}
                >
                  Download Android
                </Link>
              </div>
              <div className="flex gap-x-6 mt-8 items-center">
                <div className="border-r-2 flex gap-x-3 pr-6">
                  <div className="flex">
                    <Image
                      src={userImage1}
                      alt=""
                      className="h-14 w-14 border-4 border-white shadow-xl rounded-full object-cover object-center"
                    />
                    <Image
                      src={userImage2}
                      alt=""
                      className="h-14 w-14 border-4 border-white shadow-xl rounded-full object-cover object-center -ml-4"
                    />
                    <Image
                      src={userImage1}
                      alt=""
                      className="h-14 w-14 border-4 border-white shadow-xl rounded-full object-cover object-center -ml-4"
                    />
                  </div>
                  <div>
                    <span className="text-xl font-bold">4,353</span>
                    <span className="block text-base text-neutral-600">
                      Happy Clients
                    </span>
                  </div>
                </div>
                <div>
                  <span className="block font-bold text-xl">4.7 / 5</span>
                  <span className="flex gap-x-1">
                    <StarIcon className="h-4 w-4 fill-yellow-400" />
                    <StarIcon className="h-4 w-4 fill-yellow-400" />
                    <StarIcon className="h-4 w-4 fill-yellow-400" />
                    <StarIcon className="h-4 w-4 fill-yellow-400" />
                    <StarIcon className="h-4 w-4 fill-gray-300" />
                    <span className="text-neutral-600 text-sm">Rating</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image src="/device.png" height={700} width={400} alt="" />
            </div>
          </div>
        </Container>
      </div>
      <div className="my-32 py-20 bg-slate-100">
        <Container>
          <SectionIntro
            eyebrow="Our Features"
            title="Some excellent features for you"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis iusto impedit fugiat laboriosam odio dolore fuga quo
              natus nobis. Voluptates?
            </p>
          </SectionIntro>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.id} className="p-5 bg-white rounded-xl">
                <Image src={feature.icon} alt="" height={60} width={60} />
                <h3 className="font-bold text-lg text-neutral-950 mt-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-7 mt-2 text-base">
                  {feature.description}
                </p>
                <Link
                  href=""
                  className={buttonVariants({
                    variant: "link",
                    className: "!px-0 mt-3",
                  })}
                >
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <Container className="my-32">
        <Workflow />
      </Container>
      <div className="my-32 py-20 bg-slate-100">
        <Container>
          <SectionIntro
            eyebrow="Benefits"
            title="Some excellent features for you"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis iusto impedit fugiat laboriosam odio dolore fuga quo
              natus nobis. Voluptates?
            </p>
          </SectionIntro>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.id} className="p-5 bg-white rounded-xl">
                <Image src={feature.icon} alt="" height={60} width={60} />
                <h3 className="font-bold text-lg text-neutral-950 mt-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-7 mt-2 text-base">
                  {feature.description}
                </p>
                <Link
                  href=""
                  className={buttonVariants({
                    variant: "link",
                    className: "!px-0 mt-3",
                  })}
                >
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <Container className="my-32">
        <SectionIntro
          eyebrow="COOL & AMAZING DESIGN"
          className="mb-8"
          title="SLEEK & ELEGANT DESIGN"
        />
        <InfiniteMovingImageCards
          items={[
            "/cool-amazing-3.png",
            "/cool-amazing-4.png",
            "/cool-amazing-5.png",
            "/cool-amazing-3.png",
          ]}
        />
      </Container>
      <Container className="my-32">
        <SectionIntro
          eyebrow="Our Blogs"
          title="Our latest news and articles"
        />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BlogCard2 />
          <BlogCard2 />
          <BlogCard2 />
        </div>
      </Container>

      <Container className="my-32">
        <SectionIntro title="What Our Clients Says" className="mb-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            laboriosam earum possimus deserunt sapiente quod nihil voluptates
            voluptas dignissimos explicabo?
          </p>
        </SectionIntro>{" "}
        <Testimonials2 />
      </Container>

      <CallToAction
        title="This app is now available in play store."
        subtitle=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ab dolores tempore repudiandae libero dolorem autem distinctio aliquid. Repudiandae, labore."
        btnText="Download Now"
        link=""
      />
    </div>
  );
}
