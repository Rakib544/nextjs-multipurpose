import { Bell } from "lucide-react";
import Link from "next/link";
import { BriefcaseIcon } from "./icons";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";

export default function NotificationDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Bell className="size-5 text-gray-700" />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-0">
        <ScrollArea className="h-screen pb-10">
          <SheetTitle className="px-4 border-b pb-4 border-border/40">
            Notifications
          </SheetTitle>
          <div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <Link
                key={i}
                href=""
                className="flex gap-x-2 p-4 hover:bg-slate-50 border-b border-border/40"
              >
                <div className="h-10 shrink-0 w-10 flex items-center justify-center rounded-full bg-indigo-50">
                  <BriefcaseIcon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm text-indigo-950 leading-6">
                    <span className="font-semibold">Henry Wilson</span> applied
                    for a job{" "}
                    <span className="font-semibold">Product Designer</span>
                  </p>
                  <span className="text-xs text-gray-600">
                    {i} days ago - Job application
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
