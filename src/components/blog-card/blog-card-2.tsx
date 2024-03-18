import blogCardImage from "@/images/office.jpg";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
export default function BlogCard2() {
  return (
    <article>
      <div className="aspect-[16/9] relative">
        <Image
          src={blogCardImage}
          alt=""
          fill
          className="rounded-lg object-cover"
        />
      </div>

      <Link href="">
        <h2 className="text-xl tracking-tight font-bold mt-3 text-neutral-950">
          Secure you business finalcial future today
        </h2>
      </Link>
      <p className="text-base mt-2  leading-8 line-clamp-2 text-neutral-600">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas quo
        inventore omnis error soluta iusto, nobis adipisci quis exercitationem
        vitae.
      </p>
      <Link
        href=""
        className={buttonVariants({
          variant: "outline",
          className: "mt-4",
        })}
      >
        Read More &rarr;
      </Link>
    </article>
  );
}
