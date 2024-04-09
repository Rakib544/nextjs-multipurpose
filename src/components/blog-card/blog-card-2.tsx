import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
export default function BlogCard2() {
  return (
    <article>
      <div className="aspect-video relative">
        <Image
          src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          className="object-cover rounded-sm"
        />
      </div>
      <p className=" mt-4 mb-2 text-sm text-gray-600 font-medium">
        {new Date().toDateString()}
      </p>

      <Link href="">
        <h2 className="text-lg font-bold tracking-tight text-indigo-950 line-clamp-2">
          The Future of Web Development: Our Predictions for 2023
        </h2>
      </Link>
      <p className="mt-2 text-base text-gray-600 line-clamp-2 leading-7 ">
        Let’s explore the latest trends in web development, and regurgitate some
        predictions we read on X for how they will shape the industry in the
        coming year.
      </p>
      <Link
        href=""
        className={buttonVariants({ variant: "link", className: "!px-0" })}
      >
        Read More &rarr;
      </Link>
    </article>
  );
}
