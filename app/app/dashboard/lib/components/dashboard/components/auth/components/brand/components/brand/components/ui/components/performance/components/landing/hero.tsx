import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative px-6 pt-24 pb-16 text-center max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
        <Shield className="h-3.5 w-3.5" />
        <span>Rummaina Enterprise Hub v1.0</span>
      </div>
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
        Next-Gen Enterprise Control & <span className="text-blue-500">Simulation</span>
      </h1>
      <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
        Monitor real-time infrastructure metrics, edge performance, and multi-layered security protocols from a single glass pane.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/dashboard" className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-xl transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/20">
          <span>Launch Dashboard</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/login" className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-medium px-6 py-3 rounded-xl transition-colors">
          Secure Login
        </Link>
      </div>
    </section>
  );
}
