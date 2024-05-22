import { generateBlurImageURL } from "@/lib/data/blur-image-data";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface PortfolioCardProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string;
  image: string | StaticImageData;
  client: string;
  category: string;
}

export default function PortfolioCard({
  image,
  client,
  category,
  href = "/portfolio-details",
}: PortfolioCardProps) {
  return (
    <Link
      href={href}
      className="block relative aspect-square border group rounded-2xl overflow-hidden"
    >
      <Image
        src={image}
        fill
        alt=""
        placeholder="blur"
        blurDataURL={generateBlurImageURL()}
        className="object-cover object-center transition duration-500 motion-safe:group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-end p-4 md:p-8 bg-gradient-to-t from-black/70 from-5%">
        <div>
          <h2 className="font-semibold text-white text-lg md:text-xl ">
            {client}
          </h2>
          <p className="text-primary-foreground text-sm mt-1">{category}</p>
        </div>
      </div>
    </Link>
  );
}
