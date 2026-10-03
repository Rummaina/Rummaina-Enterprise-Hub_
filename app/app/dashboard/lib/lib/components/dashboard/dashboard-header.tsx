import { Search, Bell, Shield, User } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-900/40 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4 w-96">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search resources, logs, or metrics..."
            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-4 py-1.5 text-sm text-slate-200 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-medium">
          <Shield className="h-3.5 w-3.5" />
          <span>System Secured</span>
        </div>
        <button className="relative p-2 text-slate-400 hover:text-slate-200 transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-blue-500 rounded-full"></span>
        </button>
        <div className="h-8 w-px bg-slate-800"></div>
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
            <User className="h-4 w-4 text-slate-300" />
          </div>
          <div className="hidden md:block text-left">
            <p className="text-sm font-medium text-slate-200">Rummaina</p>
            <p className="text-xs text-slate-400">Enterprise Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
