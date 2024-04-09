import { BlogCard2 } from "@/components/blog-card/index";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { buttonVariants } from "@/components/ui/button";
import Pagination from "@/components/ui/pagination";
import officeImage from "@/images/office.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Blogs3() {
  return (
    <div>
      <PageIntro title="Our Blogs">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure vel
          deserunt doloribus! Natus eius sint praesentium debitis blanditiis ut.
        </p>
      </PageIntro>
      <Container className="my-20">
        <div className="grid grid-cols-12 gap-x-12">
          <div className="col-span-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 gap-y-8">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <BlogCard2 key={i} />
              ))}
            </div>
            <div className="flex justify-center mt-20">
              <Pagination perPageItems={5} totalItems={100} />
            </div>
          </div>
          <div className="col-span-4 space-y-8">
            <div className="bg-white pr-5 rounded-lg">
              <h2 className="font-bold text-indigo-950 mb-2">Search Here</h2>

              <input
                type="search"
                required
                placeholder="Search"
                className="px-4 py-3 rounded-full focus:outline-none text-sm border block w-full"
              />
            </div>

            <div className="bg-white pr-5 rounded-lg">
              <h2 className="font-bold text-indigo-950 mb-2">Popular Posts</h2>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div className="grid grid-cols-12 gap-x-2" key={i}>
                    <Image
                      src={officeImage}
                      alt=""
                      className="col-span-4 aspect-video object-cover rounded"
                    />
                    <div className="col-span-8">
                      <time className="text-xs font-medium text-gray-600">
                        19 October, 2023
                      </time>
                      <h3 className="font-semibold text-sm text-indigo-950 line-clamp-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id, ad.
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white pr-5 rounded-lg">
              <h2 className="font-bold text-indigo-950 mb-2">Categories</h2>
              <ul className="list-disc list-inside text-base space-y-2 font-medium text-gray-600">
                <li>
                  <Link href="">Team Work (21)</Link>
                </li>
                <li>
                  <Link href="">Ideas (12)</Link>
                </li>
                <li>
                  <Link href="">Coding (34)</Link>
                </li>
              </ul>
            </div>
            <div className="bg-white pr-5 rounded-lg">
              <h2 className="font-bold text-indigo-950 mb-2">Tags</h2>
              <ul className="flex flex-wrap gap-2">
                <li>
                  <Link
                    href=""
                    className={buttonVariants({ variant: "secondary" })}
                  >
                    #Skill Life
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className={buttonVariants({ variant: "secondary" })}
                  >
                    #Urban
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className={buttonVariants({ variant: "secondary" })}
                  >
                    #Nature
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className={buttonVariants({ variant: "secondary" })}
                  >
                    #Travel
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className={buttonVariants({ variant: "secondary" })}
                  >
                    #Marketing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
