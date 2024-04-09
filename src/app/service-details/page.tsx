import { Border } from "@/components/border";
import ConsultationForm from "@/components/consultation-form";
import { Container } from "@/components/container";
import { List, ListItem } from "@/components/list";
import { StatList, StatListItem } from "@/components/stat-list";
import { buttonVariants } from "@/components/ui/button";
import {
  CallToAction,
  CallToActionHeading,
  CallToActionMenus,
  CallToActionSubHeading,
} from "@/components/ui/call-to-action";
import coverImage from "@/images/hero.jpg";
import Image from "next/image";
import Link from "next/link";

const serviceProcess = [
  {
    id: 1,
    title: "Creative Analysis",
    description:
      "We delve deep into your project's essence, dissecting your vision, audience, and competition. This insightful analysis lays the groundwork for a design strategy that resonates with your target market.",
  },
  {
    id: 2,
    title: "Design & Sketches",
    description:
      "Armed with creativity and innovation, our designers sketch visions into reality, infusing each pixel with purpose. Every design element is meticulously crafted to evoke emotion and drive engagement.",
  },
  {
    id: 3,
    title: "Prototype & Wireframing",
    description:
      "We sculpt prototypes and wireframes, sculpting the digital journey with precision. This iterative process allows for seamless refinement and ensures alignment with your goals.",
  },
  {
    id: 4,
    title: "Delivery & Deployment",
    description:
      "With designs polished to perfection, we deliver assets ready for deployment. Our team stands by your side, ensuring a smooth transition from concept to reality.",
  },
];

export default function ServiceDetails() {
  return (
    <div>
      <Container className="my-20">
        <div className="grid grid-cols-12 gap-6 lg:gap-x-12">
          <div className="col-span-12 lg:col-span-8">
            <div>
              <h1 className="text-3xl font-extrabold md:text-4xl/tight text-indigo-950 pr-6">
                Digital Product Design
              </h1>
              <p className="text-base text-neutral-800 leading-9 mt-6">
                In the dynamic digital landscape, crafting remarkable user
                experiences is paramount. User Experience (UX) design and User
                Interface (UI) design are the twin pillars that shape the
                digital realm. While UX focuses on enhancing usability and
                satisfaction, UI ensures an intuitive and visually captivating
                interface. At [Your Company Name], we blend artistry with
                functionality to create digital products that resonate with
                users on a profound level.
              </p>
              <Image
                src={coverImage}
                alt=""
                className="aspect-[16/9] block rounded-xl mt-8"
              />
              <div className="mt-12">
                <h2 className="text-2xl font-extrabold mb-4">
                  Service Process
                </h2>
                <Border />
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {serviceProcess.map((process) => (
                    <div key={process.id}>
                      <span className="h-10 w-10 rounded-full bg-indigo-600 text-white text-sm font-bold inline-flex justify-center items-center">
                        {process.id.toString().padStart(2, "0")}
                      </span>
                      <h3 className="text-lg font-bold mt-6 mb-2">
                        {process.title}
                      </h3>
                      <p className="text-base leading-8 text-gray-600">
                        {process.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-12">
                <h2 className="text-2xl font-extrabold mb-4">
                  Service Outcome
                </h2>

                <List>
                  <ListItem>
                    Leaving a lasting impression on your audience.
                  </ListItem>
                  <ListItem>
                    Immerse your audience in an enchanting digital realm.
                  </ListItem>
                  <ListItem>
                    Experience a flourishing digital ecosystem.
                  </ListItem>
                  <ListItem>Our designs bring your vision to life.</ListItem>
                  <ListItem>
                    Experience a 90% surge in product sales month over month.
                  </ListItem>
                </List>
              </div>
              <div className="mt-12">
                <h2 className="text-2xl font-extrabold mb-8">Result</h2>
                <StatList>
                  <StatListItem
                    label="Product Sales Growth Per Month"
                    value="90%"
                  />
                  <StatListItem
                    label="Product Sales Growth Per Month"
                    value="90%"
                  />
                  <StatListItem
                    label="Product Sales Growth Per Month"
                    value="90%"
                  />
                </StatList>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 space-y-12">
            <div className="p-5 rounded-xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-50">
              <h2 className="text-lg font-bold">Services Category</h2>
              <ul className="mt-8 space-y-4">
                <li>
                  <Link
                    href="/service-details"
                    className="font-medium hover:text-indigo-600 text-gray-600"
                  >
                    01. Digital Marketing Solution
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service-details"
                    className="font-medium hover:text-indigo-600 text-gray-600"
                  >
                    02. Web design and development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service-details"
                    className="font-medium hover:text-indigo-600 text-gray-600"
                  >
                    03. UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service-details"
                    className="font-medium hover:text-indigo-600 text-gray-600"
                  >
                    04. App Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service-details"
                    className="font-medium hover:text-indigo-600 text-gray-600"
                  >
                    05. IT solution
                  </Link>
                </li>
              </ul>
            </div>
            <div className="p-5 rounded-xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-50">
              <h2 className="text-lg font-bold mb-8">Get Consultation</h2>
              <ConsultationForm />
            </div>
          </div>
        </div>
      </Container>
      <CallToAction>
        <CallToActionHeading>
          Ready to elevate your digital product?
        </CallToActionHeading>
        <CallToActionSubHeading>
          Contact us today to learn more about our digital product design
          services and how we can help bring your vision to life.
        </CallToActionSubHeading>
        <CallToActionMenus>
          <Link
            href="/contact-1"
            className={buttonVariants({ variant: "secondary", size: "lg" })}
          >
            Contact us
          </Link>
        </CallToActionMenus>
      </CallToAction>
    </div>
  );
}
