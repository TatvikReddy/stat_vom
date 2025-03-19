import Link from "next/link";
import Image from "next/image";

export default function ChallengePage() {
  // Mock data for challenges
  const challenges = [
    {
      id: 1,
      title: "Dust Storms",
      description: "Massive dust storms can damage exposed equipment, reduce solar panel efficiency, and limit outside activities. Prepare with proper shelters and backup power systems.",
      icon: "🌪️",
      severity: "High"
    },
    {
      id: 2,
      title: "Famine",
      description: "Crop failures or supply chain disruptions can lead to food shortages. Maintain emergency rations and diversify your food production methods.",
      icon: "🍽️",
      severity: "Critical"
    },
    {
      id: 3,
      title: "Meteor Showers",
      description: "Periodic meteor showers can damage structures and pose threats to colonists. Build meteor detection systems and reinforced shelters.",
      icon: "☄️",
      severity: "Medium"
    },
    {
      id: 4,
      title: "Radiation Spikes",
      description: "Solar flares can cause dangerous radiation levels on the Martian surface. Develop underground facilities and radiation shielding.",
      icon: "☢️",
      severity: "High"
    }
  ];

  // Mock data for boons
  const boons = [
    {
      id: 1,
      title: "Baby Boom",
      description: "Periods of increased birth rates can rapidly grow your colony population. Ensure you have adequate housing and resources to accommodate the growth.",
      icon: "👶",
      impact: "Population +25%"
    },
    {
      id: 2,
      title: "Resource Discovery",
      description: "Explorers may discover rich veins of valuable minerals or underground water reserves. These discoveries can significantly boost your resource production.",
      icon: "💎",
      impact: "Resources +50%"
    },
    {
      id: 3,
      title: "Technological Breakthrough",
      description: "Your scientists might make unexpected breakthroughs, accelerating your research progress and unlocking new technologies ahead of schedule.",
      icon: "💡",
      impact: "Research +100%"
    },
    {
      id: 4,
      title: "Alien Technology",
      description: "Rare discoveries of alien artifacts can provide insights into advanced technologies beyond your current understanding.",
      icon: "👽",
      impact: "Special Technologies"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
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
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Dynamic Challenges & Boons</h1>
            <p className="text-xl text-white/80 mb-8">
              Your Mars colony will face unpredictable events that can either threaten your survival or provide unexpected benefits. How you respond to these challenges and opportunities will determine your colony&apos;s fate.
            </p>
            <div className="flex justify-center">
              <Link href="/download" className="px-8 py-3 bg-[#ff9966] text-black font-bold rounded-lg hover:bg-[#ff8855] transition-all">
                Download Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Challenges Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Colony Challenges</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge) => (
              <div key={challenge.id} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-[#ff9966]/50 transition-all">
                <div className="flex items-start">
                  <div className="text-4xl mr-4">{challenge.icon}</div>
                  <div>
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-bold">{challenge.title}</h3>
                      <span className={`ml-3 px-2 py-1 text-xs rounded-full ${
                        challenge.severity === "Critical" ? "bg-red-500/20 text-red-300" :
                        challenge.severity === "High" ? "bg-orange-500/20 text-orange-300" :
                        "bg-yellow-500/20 text-yellow-300"
                      }`}>
                        {challenge.severity} Risk
                      </span>
                    </div>
                    <p className="text-white/70">{challenge.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-4">Yearly Event System</h3>
            <p className="text-white/80 mb-6">
              In Vault On Mars, each turn represents one Martian year. At the end of each year, there&apos;s a chance for random events to occur. The probability and severity of these events are influenced by your colony&apos;s decisions, infrastructure, and research progress.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-black/30 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Event Probability</h4>
                <p className="text-white/70 text-sm">Events have varying probabilities based on your colony&apos;s development stage and previous decisions.</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Mitigation Options</h4>
                <p className="text-white/70 text-sm">Research and build specific structures to reduce the impact of negative events or increase the benefits of positive ones.</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Cascading Effects</h4>
                <p className="text-white/70 text-sm">Events can trigger chain reactions. A dust storm might damage power systems, which could then affect food production.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Boons Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Colony Boons</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {boons.map((boon) => (
              <div key={boon.id} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-[#ff9966]/50 transition-all">
                <div className="flex items-start">
                  <div className="text-4xl mr-4">{boon.icon}</div>
                  <div>
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-bold">{boon.title}</h3>
                      <span className="ml-3 px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-300">
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
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Turn-Based Gameplay</h2>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 mb-8">
              <h3 className="text-xl font-bold mb-4">Yearly Cycles</h3>
              <p className="text-white/80 mb-6">
                Each turn in Vault On Mars represents one Martian year (approximately 687 Earth days). During this time, your colony grows, constructions complete, research advances, and random events may occur.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2">What Happens Each Turn:</h4>
                  <ul className="list-disc pl-5 text-white/70 space-y-2">
                    <li>Resource collection and consumption</li>
                    <li>Population growth and needs</li>
                    <li>Construction progress</li>
                    <li>Research advancement</li>
                    <li>Random events (challenges or boons)</li>
                    <li>Colony status updates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Strategic Planning:</h4>
                  <ul className="list-disc pl-5 text-white/70 space-y-2">
                    <li>Prioritize construction projects</li>
                    <li>Allocate resources between immediate needs and long-term goals</li>
                    <li>Balance expansion with sustainability</li>
                    <li>Prepare contingencies for potential challenges</li>
                    <li>Adapt to changing conditions and events</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link href="/features" className="text-[#ff9966] hover:text-[#ff8855] transition-colors font-semibold">
                ← Back to Features
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
