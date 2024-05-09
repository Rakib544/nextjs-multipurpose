import ProjectAnalyticsChart from "@/components/project-analytics-chart";
import ProjectProgressChart from "@/components/projects-progress-chart";

export default function Dashboard() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        <div className="shadow-custom px-4 py-6 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <p className="text-[15px] text-[#4B5563]">Total revenues</p>
          </div>
          <h3 className="text-3xl font-bold text-indigo-950 mb-1">$30.58K</h3>

          <p className="text-xs text-muted-foreground">
            <span className="font-medium text-[#10B981]">+10%</span> from last
            month
          </p>
        </div>
        <div className="shadow-custom px-4 py-6 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <p className="text-[15px] text-[#4B5563]">Total deals</p>
          </div>
          <h3 className="text-3xl font-bold text-indigo-950 mb-1">2.48K</h3>

          <p className="text-xs text-muted-foreground">
            <span className="font-medium text-[#10B981]">+23%</span> this month
          </p>
        </div>
        <div className="shadow-custom px-4 py-6 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <p className="text-[15px] text-[#4B5563]">Applied jobs</p>
          </div>
          <h3 className="text-3xl font-bold text-indigo-950 mb-1">1.5K</h3>

          <p className="text-xs text-muted-foreground">
            <span className="font-medium text-[#10B981]">+10%</span> this month
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7 shadow-custom p-5 rounded-lg">
          <ProjectAnalyticsChart />
        </div>
        <div className="col-span-12 md:col-span-5 shadow-custom p-5 rounded-lg">
          <ProjectProgressChart />
        </div>
      </div>
    </div>
  );
}
