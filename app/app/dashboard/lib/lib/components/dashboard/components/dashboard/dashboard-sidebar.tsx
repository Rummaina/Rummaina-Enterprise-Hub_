import Link from "next/link";
import { LayoutDashboard, Server, ShieldCheck, Activity, Terminal, Settings } from "lucide-react";

export function DashboardSidebar() {
  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-950 flex flex-col">
      <div className="h-16 border-b border-slate-800 px-6 flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white">
          R
        </div>
        <span className="font-semibold tracking-tight text-white">Enterprise Hub</span>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-600/10 text-blue-400 text-sm font-medium">
          <LayoutDashboard className="h-4 w-4" />
          <span>Overview</span>
        </Link>
        <Link href="/dashboard/infrastructure" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-900 text-sm font-medium transition-colors">
          <Server className="h-4 w-4" />
          <span>Infrastructure</span>
        </Link>
        <Link href="/dashboard/security" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-900 text-sm font-medium transition-colors">
          <ShieldCheck className="h-4 w-4" />
          <span>Security & MFA</span>
        </Link>
        <Link href="/dashboard/performance" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-900 text-sm font-medium transition-colors">
          <Activity className="h-4 w-4" />
          <span>Edge Performance</span>
        </Link>
        <Link href="/dashboard/logs" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-900 text-sm font-medium transition-colors">
          <Terminal className="h-4 w-4" />
          <span>Workflow Logs</span>
        </Link>
      </nav>
      <div className="p-4 border-t border-slate-800">
        <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-900 text-sm font-medium transition-colors">
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </Link>
      </div>
    </aside>
  );
}
