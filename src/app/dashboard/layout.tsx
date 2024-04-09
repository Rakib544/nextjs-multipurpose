import DashboardMobileNavigation from "@/components/dashboard-mobile-navigation";
import DashboardSidebar from "@/components/dashboard-sidebar";
import UserNav from "@/components/user-nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full ">
      <div className="flex min-h-screen flex-col rounded-md lg:flex-row">
        <div className=" fixed bottom-0 left-0 top-0 hidden max-h-screen w-1/5  overflow-y-auto border-r border-slate-200 bg-white px-3 lg:block">
          {" "}
          <DashboardSidebar />
        </div>
        <div className="ml-auto w-full lg:w-4/5">
          <div className="sticky top-0 z-30 mb-8 flex items-center justify-between bg-white px-4 py-3 lg:px-8">
            <div className="flex items-center gap-x-4 mt-2">
              <div className="block lg:hidden">
                <DashboardMobileNavigation />
              </div>
            </div>
            <UserNav />
          </div>
          <div className="px-4 pb-10 lg:px-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
