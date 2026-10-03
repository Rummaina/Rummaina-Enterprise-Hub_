"use client";
import React, { useState } from "react";
import { Activity, Server } from "lucide-react";

export function LoadBalancerSim() {
  const [nodes, setNodes] = useState([
    { id: 1, load: 45, status: "Optimal" },
    { id: 2, load: 62, status: "Optimal" },
    { id: 3, load: 38, status: "Optimal" },
  ]);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Activity className="h-5 w-5 text-blue-400" />
          <span>Load Balancer Simulation</span>
        </h3>
        <span className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded-full font-medium">Active Routing</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {nodes.map((node) => (
          <div key={node.id} className="bg-slate-950 border border-slate-800 rounded-lg p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <Server className="h-4 w-4 text-slate-400" /> Node 0{node.id}
              </span>
              <span className="text-xs text-emerald-400 font-medium">{node.status}</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-2">
              <div className="bg-blue-500 h-full transition-all duration-500" style={{ width: `${node.load}%` }} />
            </div>
            <span className="text-xs text-slate-400 mt-2">Current Load: {node.load}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
