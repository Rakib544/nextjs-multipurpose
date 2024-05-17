import { Suspense } from "react";

import dynamic from "next/dynamic";

const ApexChart = dynamic(() => import("@/components/website-visitor-chart"), {
  ssr: false,
});

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground">
        Welcome Back, Author!
      </h1>
      <p className="text-base text-[#4B5563] mb-12 mt-1">
        Here is what happening with your agency today
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-sky-100 px-4 py-6 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm text-foreground font-medium">
              Total revenues
            </p>
          </div>
          <h3 className="text-3xl font-bold text-foreground mb-1">$30.58K</h3>

          <p className="text-xs text-muted-foreground">
            <span className="font-medium text-[#10B981]">+10%</span> from last
            month
          </p>
        </div>
        <div className="bg-teal-100 px-4 py-6 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm text-foreground font-medium">Total deals</p>
          </div>
          <h3 className="text-3xl font-bold text-foreground mb-1">2.48K</h3>

          <p className="text-xs text-muted-foreground">
            <span className="font-medium text-[#10B981]">+23%</span> this month
          </p>
        </div>
        <div className="bg-cyan-100 px-4 py-6 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm text-foreground font-medium">Applied jobs</p>
          </div>
          <h3 className="text-3xl font-bold text-foreground mb-1">1.5K</h3>

          <p className="text-xs text-muted-foreground">
            <span className="font-medium text-[#10B981]">+10%</span> this month
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7 bg-white border border-border/50 py-5 rounded-lg">
          <Suspense fallback={<p></p>}>
            <ApexChart />
          </Suspense>
        </div>
        <div className="col-span-12 md:col-span-5 bg-white border border-border/50 p-5 rounded-lg">
          {/* <ProjectProgressChart /> */}
        </div>
      </div>
    </div>
  );
}
