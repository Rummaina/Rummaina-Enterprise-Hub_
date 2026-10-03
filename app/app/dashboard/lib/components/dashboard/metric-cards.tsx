import { Activity, Server, ShieldAlert, Cpu } from "lucide-react";

export function MetricCards() {
  const metrics = [
    { title: "Active Traffic", value: "48.2 GB/s", change: "+12.3%", icon: Activity, trend: "up" },
    { title: "Healthy Nodes", value: "1,024 / 1,024", change: "100%", icon: Server, trend: "stable" },
    { title: "Threats Blocked", value: "3,840", change: "-4.1%", icon: ShieldAlert, trend: "down" },
    { title: "Avg CPU Load", value: "34.8%", change: "+2.5%", icon: Cpu, trend: "up" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index} className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-400">{item.title}</span>
              <div className="p-2 rounded-lg bg-slate-800/60 text-blue-400">
                <Icon className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <h3 className="text-2xl font-bold text-white">{item.value}</h3>
              <span className="text-xs font-medium text-emerald-400">{item.change}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
