"use client";
import { navLinks } from "@/lib/data/navigation-data";
import Link from "next/link";
import { useState } from "react";
import { MobileNavIcon } from "./icons";
import { Button, buttonVariants } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Sheet, SheetContent } from "./ui/sheet";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <Button
        aria-label="Open Navigation"
        variant="ghost"
        onClick={() => setIsOpen(true)}
      >
        <MobileNavIcon />
      </Button>

      <SheetContent>
        <NavigationMenu className="block max-w-none">
          <NavigationMenuList className="flex-col items-start mt-8 w-full space-x-0 space-y-1">
            {navLinks.map((link) => (
              <NavigationMenuItem
                key={link.id}
                className="block w-full"
                onClick={() => setIsOpen(false)}
              >
                <Link
                  href={link.href}
                  legacyBehavior
                  passHref
                  className="w-full"
                >
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle({
                      className: "!w-full !flex-start ml-0 !justify-start",
                    })}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
            <li className="w-full">
              <Link
                href="/contact"
                className={buttonVariants({ className: "mt-1 w-full" })}
              >
                Contact
              </Link>
            </li>
          </NavigationMenuList>
        </NavigationMenu>
      </SheetContent>
    </Sheet>
  );
}
