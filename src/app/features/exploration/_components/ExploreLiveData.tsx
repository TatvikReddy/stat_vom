"use client";

import { useState } from "react";
import { api } from "~/trpc/react";

export default function ExploreLiveData() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Use tRPC hooks to fetch data on the client side
  const { data: discoveries, isLoading: isLoadingDiscoveries } =
    api.exploration.getAlienDiscoveries.useQuery();
  const { data: locationDetail } =
    api.exploration.getExplorationLocationById.useQuery(
      { id: selectedId ?? 1 },
      { enabled: selectedId !== null },
    );

  if (isLoadingDiscoveries) {
    return <div className="p-4 text-white">Loading alien discoveries...</div>;
  }

  if (!discoveries) {
    return <div className="p-4 text-white">No data available</div>;
  }

  return (
    <div className="rounded-lg border border-white/10 bg-gray-900/50 p-6 backdrop-blur-sm">
      <h3 className="mb-4 text-xl font-bold text-white">
        Live Research Updates
      </h3>

      <div className="mb-6">
        <p className="mb-4 text-white/70">
          Select a location to view the latest research findings:
        </p>

        <div className="mb-4 grid grid-cols-2 gap-2">
          {discoveries.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`rounded px-3 py-2 text-left text-sm transition-colors ${
                selectedId === item.id
                  ? "border border-[#ff9966]/50 bg-[#ff9966]/20"
                  : "border border-white/10 bg-white/5 hover:bg-white/10"
              }`}
            >
              <div className="font-medium">{item.name}</div>
              <div className="text-xs text-white/50">{item.location}</div>
            </button>
          ))}
        </div>
      </div>

      {selectedId && locationDetail ? (
        <div className="rounded-lg bg-black/30 p-4">
          <h4 className="mb-2 font-semibold">{locationDetail.name} Details</h4>
          <p className="mb-3 text-sm text-white/70">
            {locationDetail.description}
          </p>
          <div className="text-xs">
            <span className="text-[#ff9966]">Difficulty:</span>{" "}
            <span className="text-white/70">{locationDetail.difficulty}</span>
          </div>
        </div>
      ) : (
        <div className="rounded-lg bg-black/30 p-4 text-sm text-white/50">
          Select a location to view details
        </div>
      )}
    </div>
  );
}
