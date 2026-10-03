import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { MetricCards } from "@/components/dashboard/metric-cards";
import { TrafficChart } from "@/components/dashboard/traffic-chart";
import { ServerHealth } from "@/components/dashboard/server-health";
import { SecurityHealth } from "@/components/dashboard/security-health";
import { RegionLatencyChart } from "@/components/dashboard/region-latency-chart";
import { WorkflowLogs } from "@/components/dashboard/workflow-logs";
import { LiveClock } from "@/components/dashboard/live-clock";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <DashboardSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-900/50">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-tight">Enterprise Overview</h1>
            <LiveClock />
          </div>
          <MetricCards />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TrafficChart />
            <RegionLatencyChart />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ServerHealth />
            <SecurityHealth />
          </div>
          <WorkflowLogs />
        </main>
      </div>
    </div>
  );
}
