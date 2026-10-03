import React from "react";

export function RummainaLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 font-bold text-white ${className}`}>
      <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
        <span className="text-white text-lg">R</span>
      </div>
      <span className="tracking-tight text-lg">Rummaina</span>
    </div>
  );
}
