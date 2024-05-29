import { generateBlurImageURL } from "@/lib/data/blur-image-data";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BlogCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  createdAt: string;
  thumbnail: string | StaticImageData;
}

export default function BlogCard2({
  title,
  createdAt,
  thumbnail,
  className,
}: BlogCardProps) {
  return (
    <Link
      href="/blog-details"
      className={cn("grid grid-cols-12 gap-x-2 group", className)}
    >
      <div className="col-span-4 aspect-video relative overflow-hidden rounded">
        <Image
          src={thumbnail}
          alt={title}
          className="object-cover transition duration-500 motion-safe:group-hover:scale-105"
          fill
          placeholder="blur"
          blurDataURL={generateBlurImageURL()}
        />
      </div>
      <div className="col-span-8">
        <time className="text-xs font-medium text-muted-foreground">
          {new Date(createdAt).toDateString()}
        </time>
        <h3 className="font-bold hover:text-primary text-sm text-foreground line-clamp-2">
          {title}
        </h3>
      </div>
    </Link>
  );
}
