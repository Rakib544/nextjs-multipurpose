import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import { SectionIntro } from "./section-intro";
import { buttonVariants } from "./ui/button";

const caseStudies = [
  {
    id: 1,
    title: "Software Project Analysis",
    category: "App Design",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1638&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Software Project Analysis",
    category: "App Design",
    image:
      "https://images.unsplash.com/photo-1710949864909-021517c6fead?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Software Project Analysis",
    category: "App Design",
    image:
      "https://images.unsplash.com/photo-1710244182004-1c708b3f146d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Software Project Analysis",
    category: "App Design",
    image:
      "https://images.unsplash.com/photo-1598883841374-046783bfcf4d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function CaseStudies1() {
  return (
    <Container className="mt-32">
      <SectionIntro
        eyebrow="Case Studies"
        title="Some Recent Case Study We Successfully Done"
      />
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 gap-4 mt-12">
        {caseStudies.map((caseStudy) => (
          <div
            key={caseStudy.id}
            className="relative min-h-96 group overflow-hidden rounded-xl"
          >
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              fill
              className="rounded-xl object-cover object-center transition duration-500 motion-safe:group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
              <div className="translate-y-3 opacity-0 group-hover:translate-y-0 transition-all group-hover:opacity-100 duration-700">
                <Link
                  href=""
                  className="font-display text-base/6 font-semibold tracking-wide text-white hover:underline"
                >
                  {caseStudy.title}
                </Link>
                <p className="mt-2 text-sm text-white">
                  Design Studio / {caseStudy.category}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-20">
        <Link href="/case-studies" className={buttonVariants()}>
          View All Case Study &rarr;
        </Link>
      </div>
    </Container>
  );
}
