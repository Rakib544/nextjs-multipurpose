import Link from "next/link";

export default function ServiceCard1({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <Link
      href="/service-details"
      className="block border focus:ring-0 focus:bg-primary focus:outline-none focus:border-primary group rounded-xl p-6 hover:border-primary hover:bg-primary transition duration-300"
    >
      <span className="border inline-block px-5 py-1.5 group-hover:border-indigo-500 border-indigo-200 rounded-full transition-all duration-300 group-focus:border-indigo-500">
        {icon}
      </span>
      <h3 className="text-lg font-bold mt-8 group-focus:text-white group-hover:text-white transition duration-300">
        {title}
      </h3>
      <p className="text-base leading-7 group-focus:text-primary-foreground mt-3 group-hover:text-primary-foreground text-muted-foreground transition-all duration-300">
        {description}
      </p>
    </Link>
  );
}
