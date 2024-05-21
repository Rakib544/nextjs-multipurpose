"use client";
import { docsNavigation } from "@/lib/data/docs-navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DocsSideNavigation() {
  const pathname = usePathname();
  return (
    <ul className="space-y-8">
      {docsNavigation.map((nav) => (
        <li key={nav.id}>
          <h3 className="mb-4 font-bold text-xs uppercase text-foreground">
            {nav.label}
          </h3>
          <ul className="border-l-[1.5px] space-y-3">
            {nav.menus.map((menu) => (
              <li
                key={menu.id}
                className={cn(
                  "text-sm border-l-2 pl-3 hover:text-primary font-medium",
                  pathname === menu.href
                    ? "text-primary border-primary"
                    : "text-muted-foreground border-white"
                )}
              >
                <Link href={menu.href}>{menu.label}</Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
