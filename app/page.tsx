import { HeroSection } from "@/components/landing/hero";
import { HeroConsole } from "@/components/landing/hero-console";
import { PerformanceSection } from "@/components/landing/performance-section";
import { SecuritySection } from "@/components/landing/security-section";
import { ControlCTA } from "@/components/landing/control-cta";
import { SiteNav } from "@/components/landing/site-nav";
import { SiteFooter } from "@/components/landing/site-footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col">
      <SiteNav />
      <HeroSection />
      <HeroConsole />
      <PerformanceSection />
      <SecuritySection />
      <ControlCTA />
      <SiteFooter />
    </main>
  );
}
