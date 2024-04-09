"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BriefcaseIcon, PencilIcon } from "./icons";
import { buttonVariants } from "./ui/button";

const userMenus = [
  {
    id: 1,
    href: "/dashboard/articles",
    label: "Articles",
    icon: <PencilIcon className="mr-2 h-4 w-4" />,
  },
  {
    id: 2,
    href: "/dashboard/jobs",
    label: "Jobs",
    icon: <BriefcaseIcon className="mr-2 h-4 w-4 text-indigo-600" />,
  },
];

export default function DashboardSidebar({
  className,
}: {
  className?: string;
}) {
  const pathname = usePathname();
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-1 py-2">
          <Link href="/" className="mb-8 block">
            Navbar
          </Link>
          <div className="space-y-1">
            {userMenus.map((menu) => (
              <Link
                key={menu.href}
                href={menu.href}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  pathname === menu.href
                    ? " !border-indigo-700 bg-muted hover:bg-muted"
                    : "hover:bg-muted",
                  "flex items-center justify-start !rounded-none border-l-4 border-transparent"
                )}
              >
                {menu.icon}
                {menu.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
