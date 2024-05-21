"use client";
import { useState } from "react";
import DocsSideNavigation from "./docs-side-navigation";
import { MobileNavIcon } from "./icons";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Sheet, SheetContent } from "./ui/sheet";

export default function DocsMobileNavigation() {
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

      <SheetContent side="left">
        <ScrollArea className="h-screen">
          <DocsSideNavigation />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
