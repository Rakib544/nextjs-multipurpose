import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "../icons";
import { Button } from "../ui/button";
interface JobCardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  title: string;
  address: string;
  slug: string;
}

export default function JobCard2({
  title,
  address,
  slug = "/jobs/1",
  className,
}: JobCardProps) {
  return (
    <Link
      href={slug}
      className={cn(
        "flex justify-between items-center p-6 rounded-xl hover:bg-muted border border-border/50 bg-slate-50 group",
        className
      )}
    >
      <div>
        <h3 className="font-bold text-lg md:text-xl">{title}</h3>
        <p className="text-sm mt-1 text-muted-foreground">{address}</p>
      </div>
      <Button size="icon" variant="ghost">
        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
      </Button>
    </Link>
  );
}
