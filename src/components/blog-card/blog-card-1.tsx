import blogCardImage from "@/images/office.jpg";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
export default function BlogCard1() {
  return (
    <article className="aspect-[16/12] md:aspect-[16/9] relative rounded-xl group overflow-hidden transition duration-500">
      <Image
        src={blogCardImage}
        alt=""
        className="rounded-xl object-cover transition duration-500 motion-safe:group-hover:scale-105"
        fill
      />
      <div className="absolute inset-0 p-5 flex items-end h-full bg-gradient-to-b from-[rgba(0,9,75,0.3)] to-[rgba(0,9,75,0.9)] rounded-xl">
        <div className="translate-y-12 group-hover:translate-y-0 transition duration-500">
          <Link href="">
            <h2 className="text-2xl font-bold text-white">
              {" "}
              Secure you business finalcial future today
            </h2>
          </Link>
          <p className="text- mt-2 leading-7 line-clamp-2 text-slate-200">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas quo
            inventore omnis error soluta iusto, nobis adipisci quis
            exercitationem vitae.
          </p>
          <Link
            href=""
            className={buttonVariants({
              variant: "link",
              className: "text-white !px-0",
            })}
          >
            Read More &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}
