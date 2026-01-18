import Link from "next/link";
import Image from "next/image";

export default function ChallengePage() {
  // Mock data for challenges
  const challenges = [
    {
      id: 1,
      title: "Dust Storms",
      description:
        "Massive dust storms can damage exposed equipment, reduce solar panel efficiency, and limit outside activities. Prepare with proper shelters and backup power systems.",
      icon: "🌪️",
      severity: "High",
    },
    {
      id: 2,
      title: "Famine",
      description:
        "Crop failures or supply chain disruptions can lead to food shortages. Maintain emergency rations and diversify your food production methods.",
      icon: "🍽️",
      severity: "Critical",
    },
    {
      id: 3,
      title: "Meteor Showers",
      description:
        "Periodic meteor showers can damage structures and pose threats to colonists. Build meteor detection systems and reinforced shelters.",
      icon: "☄️",
      severity: "Medium",
    },
    {
      id: 4,
      title: "Radiation Spikes",
      description:
        "Solar flares can cause dangerous radiation levels on the Martian surface. Develop underground facilities and radiation shielding.",
      icon: "☢️",
      severity: "High",
    },
  ];

  // Mock data for boons
  const boons = [
    {
      id: 1,
      title: "Baby Boom",
      description:
        "Periods of increased birth rates can rapidly grow your colony population. Ensure you have adequate housing and resources to accommodate the growth.",
      icon: "👶",
      impact: "Population +25%",
    },
    {
      id: 2,
      title: "Resource Discovery",
      description:
        "Explorers may discover rich veins of valuable minerals or underground water reserves. These discoveries can significantly boost your resource production.",
      icon: "💎",
      impact: "Resources +50%",
    },
    {
      id: 3,
      title: "Technological Breakthrough",
      description:
        "Your scientists might make unexpected breakthroughs, accelerating your research progress and unlocking new technologies ahead of schedule.",
      icon: "💡",
      impact: "Research +100%",
    },
    {
      id: 4,
      title: "Alien Technology",
      description:
        "Rare discoveries of alien artifacts can provide insights into advanced technologies beyond your current understanding.",
      icon: "👽",
      impact: "Special Technologies",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/img1.jpg"
            alt="Mars Challenges"
            fill
            className="object-cover"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Dynamic Challenges & Boons
            </h1>
            <p className="mb-8 text-xl text-white/80">
              Your Mars colony will face unpredictable events that can either
              threaten your survival or provide unexpected benefits. How you
              respond to these challenges and opportunities will determine your
              colony&apos;s fate.
            </p>
            <div className="flex justify-center">
              <Link
                href="/download"
                className="rounded-lg bg-[#ff9966] px-8 py-3 font-bold text-black transition-all hover:bg-[#ff8855]"
              >
                Download Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Colony Challenges
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {challenges.map((challenge) => (
              <div
                key={challenge.id}
                className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-[#ff9966]/50"
              >
                <div className="flex items-start">
                  <div className="mr-4 text-4xl">{challenge.icon}</div>
                  <div>
                    <div className="mb-2 flex items-center">
                      <h3 className="text-xl font-bold">{challenge.title}</h3>
                      <span
                        className={`ml-3 rounded-full px-2 py-1 text-xs ${
                          challenge.severity === "Critical"
                            ? "bg-red-500/20 text-red-300"
                            : challenge.severity === "High"
                              ? "bg-orange-500/20 text-orange-300"
                              : "bg-yellow-500/20 text-yellow-300"
                        }`}
                      >
                        {challenge.severity} Risk
                      </span>
                    </div>
                    <p className="text-white/70">{challenge.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h3 className="mb-4 text-2xl font-bold">Yearly Event System</h3>
            <p className="mb-6 text-white/80">
              In Vault On Mars, each turn represents one Martian year. At the
              end of each year, there&apos;s a chance for random events to
              occur. The probability and severity of these events are influenced
              by your colony&apos;s decisions, infrastructure, and research
              progress.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-black/30 p-4">
                <h4 className="mb-2 font-bold">Event Probability</h4>
                <p className="text-sm text-white/70">
                  Events have varying probabilities based on your colony&apos;s
                  development stage and previous decisions.
                </p>
              </div>
              <div className="rounded-lg bg-black/30 p-4">
                <h4 className="mb-2 font-bold">Mitigation Options</h4>
                <p className="text-sm text-white/70">
                  Research and build specific structures to reduce the impact of
                  negative events or increase the benefits of positive ones.
                </p>
              </div>
              <div className="rounded-lg bg-black/30 p-4">
                <h4 className="mb-2 font-bold">Cascading Effects</h4>
                <p className="text-sm text-white/70">
                  Events can trigger chain reactions. A dust storm might damage
                  power systems, which could then affect food production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Boons Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Colony Boons</h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {boons.map((boon) => (
              <div
                key={boon.id}
                className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-[#ff9966]/50"
              >
                <div className="flex items-start">
                  <div className="mr-4 text-4xl">{boon.icon}</div>
                  <div>
                    <div className="mb-2 flex items-center">
                      <h3 className="text-xl font-bold">{boon.title}</h3>
                      <span className="ml-3 rounded-full bg-green-500/20 px-2 py-1 text-xs text-green-300">
                        {boon.impact}
                      </span>
                    </div>
                    <p className="text-white/70">{boon.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Turn-Based Gameplay */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">
              Turn-Based Gameplay
            </h2>

            <div className="mb-8 rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold">Yearly Cycles</h3>
              <p className="mb-6 text-white/80">
                Each turn in Vault On Mars represents one Martian year
                (approximately 687 Earth days). During this time, your colony
                grows, constructions complete, research advances, and random
                events may occur.
              </p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-bold">What Happens Each Turn:</h4>
                  <ul className="list-disc space-y-2 pl-5 text-white/70">
                    <li>Resource collection and consumption</li>
                    <li>Population growth and needs</li>
                    <li>Construction progress</li>
                    <li>Research advancement</li>
                    <li>Random events (challenges or boons)</li>
                    <li>Colony status updates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-bold">Strategic Planning:</h4>
                  <ul className="list-disc space-y-2 pl-5 text-white/70">
                    <li>Prioritize construction projects</li>
                    <li>
                      Allocate resources between immediate needs and long-term
                      goals
                    </li>
                    <li>Balance expansion with sustainability</li>
                    <li>Prepare contingencies for potential challenges</li>
                    <li>Adapt to changing conditions and events</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/features"
                className="font-semibold text-[#ff9966] transition-colors hover:text-[#ff8855]"
              >
                ← Back to Features
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
