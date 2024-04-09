import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { GridPattern } from "@/components/grid-pattern";
import { PhoneIcon } from "@/components/icons";
import { SectionIntro } from "@/components/section-intro";
import { buttonVariants } from "@/components/ui/button";
import Workflow from "@/components/work-flow";
import officeImage from "@/images/office.jpg";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "24/7 Support",
    description:
      "Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.",
    icon: <PhoneIcon className="h-4 w-4" />,
  },
  {
    id: 2,
    title: "24/7 Support",
    description:
      "Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.",
    icon: <PhoneIcon className="h-4 w-4" />,
  },
  {
    id: 3,
    title: "24/7 Support",
    description:
      "Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.",
    icon: <PhoneIcon className="h-4 w-4" />,
  },
  {
    id: 4,
    title: "24/7 Support",
    description:
      "Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.",
    icon: <PhoneIcon className="h-4 w-4" />,
  },
];

export default function Demo5() {
  return (
    <div>
      <Container className="mt-16 lg:mt-24">
        <div className="absolute inset-0 top-0 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
          <GridPattern />
        </div>
        <FadeIn className="max-w-4xl mx-auto col-span-12 text-center order-2 lg:order-1 z-10">
          <h1 className="text-3xl font-bold tracking-tighter md:text-5xl/tight">
            Experience the workflow the best frontend teams love.
          </h1>
          <p className="mt-3 text-lg text-gray-600 leading-8">
            We are developer studio working at the intersection of design and
            technology. It’s a really busy intersection though — a lot of our
            staff have been involved in hit and runs.
          </p>
          <div className="flex gap-4 mt-7 justify-center flex-col sm:flex-row">
            <Link
              href="/about-us"
              className={buttonVariants({
                size: "lg",
              })}
            >
              Get Started
            </Link>
          </div>
        </FadeIn>
      </Container>
      <div className="mt-96 bg-neutral-950 py-12">
        <Container>
          <div className="flex justify-center text-center relative">
            <div className="absolute h-[450px] w-full -top-1/2 -translate-y-1/2">
              <Image src={officeImage} alt="" fill className="rounded-2xl" />
            </div>
            <SectionIntro
              className="max-w-2xl pt-44"
              title="The service we offer is specifically designed to meet your needs."
              invert
            />
          </div>
          <div className="grid grid-cols-12 gap-4 text-white my-16">
            {services.map((service) => (
              <div
                className="col-span-12 md:col-span-6 lg:col-span-3"
                key={service.id}
              >
                <span className="bg-slate-900 h-12 w-12 rounded-full inline-flex justify-center items-center">
                  {service.icon}
                </span>
                <h3 className="text-lg font-bold mt-4">{service.title}</h3>
                <p className="text-base leading-7 text-neutral-200">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <div className="mt-24">
        <Container className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6">
            <SectionIntro title="We make spending stress free so you have the perfect control.">
              <p className="text-base leading-7 text-neutral-700">
                Etiam porta sem malesuada magna mollis euismod. Donec
                ullamcorper nulla non metus auctor fringilla. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
                tellus ac cursus commodo.
              </p>
              <ul className="text-base mt-6 text-neutral-700 list-disc list-inside space-y-1">
                <li>Aenean quam ornare curabitur blandit consectetur.</li>
                <li>Nullam quis risus eget urna mollis ornare aenean leo.</li>
                <li>Etiam porta euismod malesuada mollis nisl ornare.</li>
                <li>Vivamus sagittis lacus augue rutrum maecenas odio.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </SectionIntro>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <Image
              src={officeImage}
              alt=""
              height={800}
              width={400}
              className="h-full w-full object-cover rounded"
            />
          </div>
        </Container>
      </div>
      <div className="mt-24">
        <Container className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6">
            <Image
              src={officeImage}
              alt=""
              height={800}
              width={400}
              className="h-full w-full object-cover rounded"
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <SectionIntro title="We bring solutions to manage your finance the way works best.">
              <p className="text-base leading-7 text-neutral-700">
                Etiam porta sem malesuada magna mollis euismod. Donec
                ullamcorper nulla non metus auctor fringilla. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
                tellus ac cursus commodo.
              </p>
              <ul className="text-base mt-6 text-neutral-700 list-disc list-inside space-y-1">
                <li>Aenean quam ornare curabitur blandit consectetur.</li>
                <li>Nullam quis risus eget urna mollis ornare aenean leo.</li>
                <li>Etiam porta euismod malesuada mollis nisl ornare.</li>
                <li>Vivamus sagittis lacus augue rutrum maecenas odio.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </SectionIntro>
          </div>
        </Container>
      </div>
      <Workflow />
      <Clients />
    </div>
  );
}
