"use client";
import { navLinks } from "@/lib/data/navigation-data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./container";
import { TextUnderline } from "./icons";
import MobileNavigation from "./mobile-navigation";
import { buttonVariants } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

export default function Navbar() {
  const pathname = usePathname();
  const isAuthRoute = pathname.startsWith("/auth/");
  const isDashboardRoute = pathname.startsWith("/dashboard");
  const isDocsRoute = pathname.startsWith("/docs");

  const isNavHidden = isAuthRoute || isDashboardRoute || isDocsRoute;

  return (
    <NavigationMenu
      className={`py-4 max-w-none z-50  !w-full ${
        isNavHidden ? "hidden" : "block"
      }`}
    >
      <Container className="flex w-full !px-0 justify-between items-center">
        <Link
          aria-label="Home"
          href="/"
          className="text-2xl font-extrabold text-primary relative"
        >
          Agenify
          <TextUnderline />
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="hidden lg:flex !relative">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.id} className="relative">
                {link?.submenus.length > 0 ? (
                  <>
                    <NavigationMenuTrigger>{link.label}</NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white border shadow-xl rounded p-2">
                      <ul
                        className={
                          link.submenus.some(
                            (subLink) => subLink.submenus.length > 0
                          )
                            ? "grid grid-cols-5 gap-x-4 w-[720px]"
                            : "!text-left"
                        }
                      >
                        {link.submenus.map((subLink) => (
                          <li key={subLink.id} className="text-left">
                            {subLink.submenus.length > 0 ? (
                              <div className="py-4">
                                <p className="px-4 text-xs mb-1 text-primary font-bold tracking-wider uppercase">
                                  {subLink.label}
                                </p>
                                <ul className="w-full">
                                  {subLink.submenus.map((menu) => (
                                    <li key={menu.id} className="w-full">
                                      <Link
                                        href={menu?.href || ""}
                                        legacyBehavior
                                        passHref
                                      >
                                        <NavigationMenuLink
                                          className={navigationMenuTriggerStyle(
                                            {
                                              className:
                                                "!w-full !justify-start text-nowrap shrink-0",
                                            }
                                          )}
                                        >
                                          {menu.label}
                                        </NavigationMenuLink>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ) : (
                              <Link
                                href={subLink?.href || ""}
                                legacyBehavior
                                passHref
                              >
                                <NavigationMenuLink
                                  className={navigationMenuTriggerStyle({
                                    className:
                                      "!w-full !justify-start text-nowrap shrink-0",
                                  })}
                                >
                                  {subLink.label}
                                </NavigationMenuLink>
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link href={link?.href || ""} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <Link
          href="/contact-1"
          className={buttonVariants({
            size: "lg",
            className: "hidden lg:inline-flex",
          })}
        >
          Contact
        </Link>
        <div className="lg:hidden">
          <MobileNavigation navLinks={navLinks} />
        </div>
      </Container>
    </NavigationMenu>
  );
}
