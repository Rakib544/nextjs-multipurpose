import { generateBlurImageURL } from "@/lib/data/blur-image-data";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function PreviewCard({
  href,
  image,
  title,
}: {
  href: string;
  image: string | StaticImageData;
  title: string;
}) {
  return (
    <Link
      href={href}
      className=" group bg-slate-100 p-6 rounded-[30px] flex flex-col justify-between"
    >
      <div className="relative rounded-lg overflow-hidden">
        <Image
          placeholder="blur"
          blurDataURL={generateBlurImageURL()}
          src={image}
          alt={title}
          height={425}
          width={324}
          className="object-cover object-center w-full transition duration-500 motion-safe:group-hover:scale-105"
        />
      </div>
      <h3 className="text-sm mt-2 font-bold text-center group-hover:text-primary">
        {title}
      </h3>
    </Link>
  );
}
