import { Border } from "@/components/border";
// import { ContactSection } from "@/components/contact-us-section";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { PageIntro } from "@/components/page-intro";
import userImage from "@/images/team/angela-fisher.jpeg";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description:
    "Stay up-to-date with the latest industry news as our marketing teams finds new ways to re-purpose old CSS tricks articles.",
};

export default async function Blog() {
  const articles = [
    {
      href: "hello-world",
      title: "The Future of Web Development: Our Predictions for 2023",
      description:
        "Let’s explore the latest trends in web development, and regurgitate some predictions we read on X for how they will shape the industry in the coming year.",
      date: "2023-12-21",
      author: {
        name: "Rakib",
        role: "Senior Software Engineer.",
        image: userImage,
      },
    },
    {
      href: "hello-world",
      title: "The Future of Web Development: Our Predictions for 2023",
      description:
        "Let’s explore the latest trends in web development, and regurgitate some predictions we read on X for how they will shape the industry in the coming year.",
      date: "2023-12-21",
      author: {
        name: "Rakib",
        role: "Senior Software Engineer.",
        image: userImage,
      },
    },
    {
      href: "hello-world",
      title: "The Future of Web Development: Our Predictions for 2023",
      description:
        "Let’s explore the latest trends in web development, and regurgitate some predictions we read on X for how they will shape the industry in the coming year.",
      date: "2023-12-21",
      author: {
        name: "Rakib",
        role: "Senior Software Engineer.",
        image: userImage,
      },
    },
  ];

  return (
    <>
      <PageIntro eyebrow="Blog" pageTitle="The latest articles and news">
        <p>
          Stay up-to-date with the latest industry news as our marketing teams
          finds new ways to re-purpose old CSS tricks articles.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-12 gap-y-20 lg:gap-20">
          {articles?.map((article) => (
            <FadeIn key={article.href} className="col-span-12 lg:col-span-6 ">
              <article>
                <Border className="pl-6 lg:pl-16" position="left">
                  <div className="relative lg:-mx-4">
                    <div className="">
                      <dl>
                        <dt className="sr-only">Published</dt>
                        <dd className="text-sm text-foreground ">
                          <time dateTime={article.date}>{article.date}</time>
                        </dd>
                      </dl>
                      <h2 className="font-display text-xl mt-4 font-semibold text-foreground">
                        <Link href={article.href}>{article.title}</Link>
                      </h2>
                      <p className="mt-4 max-w-2xl text-base text-muted-foreground">
                        {article.description}
                      </p>
                      <dl className="">
                        <dt className="sr-only">Author</dt>
                        <dd className="mt-6 flex gap-x-4">
                          <div className="flex-none overflow-hidden rounded-xl bg-neutral-100">
                            <Image
                              alt=""
                              src={article.author.image}
                              className="h-12 w-12 object-cover grayscale"
                            />
                          </div>
                          <div className="text-sm text-foreground">
                            <div className="font-semibold">
                              {article.author.name}
                            </div>
                            <div>{article.author.role}</div>
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </Border>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>

      {/* <ContactSection /> */}
    </>
  );
}
