"use client";

import { useState } from "react";
import { api } from "~/trpc/react";

export default function ExploreLiveData() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  
  // Use tRPC hooks to fetch data on the client side
  const { data: discoveries, isLoading: isLoadingDiscoveries } = api.exploration.getAlienDiscoveries.useQuery();
  const { data: locationDetail } = 
    api.exploration.getExplorationLocationById.useQuery(
      { id: selectedId ?? 1 },
      { enabled: selectedId !== null }
    );
  
  if (isLoadingDiscoveries) {
    return <div className="text-white p-4">Loading alien discoveries...</div>;
  }

  if (!discoveries) {
    return <div className="text-white p-4">No data available</div>;
  }

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-white/10">
      <h3 className="text-xl font-bold text-white mb-4">Live Research Updates</h3>
      
      <div className="mb-6">
        <p className="text-white/70 mb-4">
          Select a location to view the latest research findings:
        </p>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          {discoveries.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`px-3 py-2 rounded text-sm text-left transition-colors ${
                selectedId === item.id
                  ? "bg-[#ff9966]/20 border border-[#ff9966]/50"
                  : "bg-white/5 border border-white/10 hover:bg-white/10"
              }`}
            >
              <div className="font-medium">{item.name}</div>
              <div className="text-xs text-white/50">{item.location}</div>
            </button>
          ))}
        </div>
      </div>
      
      {selectedId && locationDetail ? (
        <div className="bg-black/30 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">{locationDetail.name} Details</h4>
          <p className="text-white/70 text-sm mb-3">{locationDetail.description}</p>
          <div className="text-xs">
            <span className="text-[#ff9966]">Difficulty:</span>{" "}
            <span className="text-white/70">{locationDetail.difficulty}</span>
          </div>
        </div>
      ) : (
        <div className="bg-black/30 p-4 rounded-lg text-white/50 text-sm">
          Select a location to view details
        </div>
      )}
    </div>
  );
}
