import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import Image from "next/image";
import Link from "next/link";

export default function Portfolios() {
  return (
    <div>
      <Container className="mb-32">
        <FadeIn className="max-w-3xl mx-auto text-center z-10 mt-20 mb-10">
          <h1 className="text-3xl font-black md:text-4xl/tight text-indigo-950">
            We bring a wealth of
            <span className="text-indigo-600 relative z-10 whitespace-nowrap inline-block sm:inline">
              {" "}
              <span className="relative">experience</span>{" "}
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute left-0 top-2/3 h-[0.58em] w-full z-[-1] fill-indigo-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>
            </span>{" "}
            from the wide range of backgrounds.
          </h1>
          <p className="mt-3 text-base text-gray-600 leading-8 max-w-xl mx-auto">
            Our philosophy is simple; hire great people and give them the
            resources and support to do their best work.
          </p>
        </FadeIn>
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <Link
              href="/portfolio-details"
              className="block relative aspect-[16/11] border group rounded-md overflow-hidden"
              key={i}
            >
              <Image
                src="/app-landing-page.jpg"
                fill
                alt=""
                className="object-cover object-center"
              />
              <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t group-hover:  from-black/70 from-5%">
                <h2 className="font-semibold text-white">Dropbox</h2>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
