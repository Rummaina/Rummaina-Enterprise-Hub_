import { ShieldCheck } from "lucide-react";

export function SecurityBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-full text-xs font-semibold">
      <ShieldCheck className="h-4 w-4" />
      <span>Enterprise Grade Security</span>
    </div>
  );
}
