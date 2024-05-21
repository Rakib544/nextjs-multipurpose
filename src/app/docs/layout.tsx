import DocsMobileNavigation from "@/components/docs-mobile-navigation";
import DocsSideNavigation from "@/components/docs-side-navigation";
import { TextUnderline } from "@/components/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="p-4 lg:hidden">
        <nav className="flex justify-between items-center">
          <Link
            aria-label="Home"
            href="/"
            className="text-2xl font-extrabold text-primary relative inline-block"
          >
            Agenify
            <TextUnderline />
          </Link>
          <DocsMobileNavigation />
        </nav>
      </header>
      <div className="min-h-full flex flex-column lg:flex-row">
        <aside className="shrink-0 hidden lg:block lg:w-[280px]">
          <div className="flex flex-col h-full w-[280px] fixed border-r border-dotted">
            <ScrollArea className="h-full p-8">
              <Link
                aria-label="Home"
                href="/"
                className="text-2xl font-extrabold text-primary relative mb-6 inline-block"
              >
                Agenify
                <TextUnderline />
              </Link>
              <DocsSideNavigation />
            </ScrollArea>
          </div>
        </aside>

        <main className="flex-grow min-h-full flex flex-col w-full lg:width-[calc(100%-280px)] pb-12 px-4">
          <div className="w-full prose-base max-w-3xl block lg:px-6 prose prose-gray prose-headings:mt-8 prose-headings:font-bold">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
