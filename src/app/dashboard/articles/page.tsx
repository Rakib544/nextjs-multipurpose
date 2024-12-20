import { ArrowRight } from "@/components/icons";
const SearchField = dynamic(() => import("@/components/search-field"), {
  ssr: false,
});

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Pagination from "@/components/ui/pagination";
import { blogsData } from "@/lib/data/blog-data";
import { generateBlurImageURL } from "@/lib/data/blur-image-data";
import { Ellipsis, PlusCircle } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

export default async function Jobs() {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold mb-2">Manage articles</h2>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="text-sm text-foreground font-medium">
            <BreadcrumbLink asChild>
              <Link href="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="text-sm">
            <BreadcrumbPage className="text-muted-foreground">
              Articles
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-12">
        <div className="flex flex-col sm:flex-row justify-end sm:justify-between mb-10 items-end gap-y-4 sm:items-center">
          <div className="w-full order-2 sm:order-1">
            <SearchField
              className="rounded-full max-w-md"
              placeholder="Search articles"
            />
          </div>
          <Link
            href="/dashboard/articles/new"
            className={buttonVariants({ className: "order-1 sm:order-2" })}
          >
            <PlusCircle className="h-4 w-4 mr-1" />
            Add New
          </Link>
        </div>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {blogsData.map((blog, index) => (
              <div
                className="grid grid-cols-12 gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 relative"
                key={index}
              >
                <div className="col-span-12 md:col-span-7 order-2 md:order-1 max-w-xl">
                  <p className=" mt-4 mb-2 text-sm text-muted-foreground font-medium">
                    {new Date(blog.createdAt).toDateString()}
                  </p>
                  <Link href="/dashboard/articles/1" className="">
                    <h2 className="text-lg mt-4 font-extrabold tracking-tight transition duration-300 text-foreground line-clamp-2 hover:text-primary">
                      {blog.title}
                    </h2>
                  </Link>
                  <p className="mt-2 text-base text-muted-foreground line-clamp-2 leading-7">
                    {blog.subtitle}
                  </p>
                  <Link
                    href="/dashboard/articles/1"
                    className={buttonVariants({
                      variant: "link",
                      className: "!px-0 mt-2",
                    })}
                  >
                    Read More <ArrowRight className="size-4 ml-1" />
                  </Link>
                  <div className="absolute top-4 right-6 z-20">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild className="mt-4">
                        <Button variant="outline" size="icon">
                          <Ellipsis className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem asChild>
                          <Link href="/dashboard/articles/1/edit">Edit</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-5 order-1 md:order-2">
                  <div className="aspect-square relative rounded-2xl overflow-hidden">
                    <Image
                      src={blog.thumbnail}
                      alt={blog.title}
                      fill
                      placeholder="blur"
                      blurDataURL={generateBlurImageURL()}
                      className="object-cover h-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <Pagination perPageItems={5} totalItems={100} />
      </div>
    </div>
  );
}
