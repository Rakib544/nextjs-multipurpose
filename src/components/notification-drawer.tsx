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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="h-6 w-6"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.794 25.794 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.393 4.393 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7"
              opacity=".5"
            ></path>
            <path
              fill="currentColor"
              d="M12.75 6a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zM7.243 18.545a5.002 5.002 0 0 0 9.513 0c-3.145.59-6.367.59-9.513 0"
            ></path>
          </svg>
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
                <div className="h-10 shrink-0 w-10 flex items-center justify-center rounded-full bg-slate-100">
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
