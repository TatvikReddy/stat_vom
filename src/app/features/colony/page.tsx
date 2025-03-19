import Link from "next/link";
import Image from "next/image";

export default function ColonyPage() {
  // Mock data for colony structures
  const structures = [
    {
      id: 1,
      title: "Habitat Modules",
      description: "Living quarters for your colonists. Each module supports up to 8 colonists and provides basic amenities.",
      requirements: "50 Metal, 20 Polymers",
      benefits: "Houses 8 colonists, +5 Morale"
    },
    {
      id: 2,
      title: "Hydroponics Bay",
      description: "Indoor farming facility that produces food regardless of external conditions.",
      requirements: "40 Metal, 30 Polymers, 10 Electronics",
      benefits: "+15 Food per year, Research opportunities"
    },
    {
      id: 3,
      title: "Solar Array",
      description: "Collection of solar panels that generate power during daylight hours.",
      requirements: "30 Metal, 20 Electronics",
      benefits: "+25 Power during day, Vulnerable to dust storms"
    },
    {
      id: 4,
      title: "Water Extractor",
      description: "Drills into the Martian surface to extract water ice, which is then purified for colony use.",
      requirements: "60 Metal, 15 Electronics, 10 Rare Metals",
      benefits: "+20 Water per year"
    },
    {
      id: 5,
      title: "Research Lab",
      description: "Facility dedicated to scientific research and technological advancement.",
      requirements: "40 Metal, 30 Electronics, 5 Rare Metals",
      benefits: "+10 Research points per year, Unlocks new technologies"
    },
    {
      id: 6,
      title: "Storage Depot",
      description: "Secure facility for storing resources and supplies.",
      requirements: "30 Metal, 10 Polymers",
      benefits: "+100 Storage capacity for each resource type"
    }
  ];

  // Mock data for resource types
  const resources = [
    {
      id: 1,
      name: "Metal",
      description: "Basic building material extracted from Martian soil and rocks. Used in almost all structures.",
      source: "Mining operations, Meteor salvage",
      icon: "🔧"
    },
    {
      id: 2,
      name: "Polymers",
      description: "Synthetic materials produced from processed Martian carbon. Used for seals, insulation, and flexible components.",
      source: "Chemical plant, Imported supplies",
      icon: "🧪"
    },
    {
      id: 3,
      name: "Electronics",
      description: "Circuit boards, wiring, and electronic components essential for advanced structures.",
      source: "Manufacturing plant, Imported supplies",
      icon: "💻"
    },
    {
      id: 4,
      name: "Rare Metals",
      description: "Precious metals used in specialized equipment and advanced research.",
      source: "Deep mining, Meteor salvage",
      icon: "⚙️"
    },
    {
      id: 5,
      name: "Food",
      description: "Nutrition for your colonists, produced in hydroponics bays or imported from Earth.",
      source: "Hydroponics, Imported supplies",
      icon: "🌽"
    },
    {
      id: 6,
      name: "Water",
      description: "Essential resource for colonist survival, farming, and various industrial processes.",
      source: "Water extractors, Ice mining",
      icon: "💧"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image 
            src="/img1.jpg" 
            alt="Mars Colony" 
            fill 
            className="object-cover"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Colony Management</h1>
            <p className="text-xl text-white/80 mb-8">
              Build and expand your Mars settlement in a challenging side-scrolling environment. Balance resources, population growth, and expansion while facing the harsh realities of Mars colonization.
            </p>
            <div className="flex justify-center">
              <Link href="/download" className="px-8 py-3 bg-[#ff9966] text-black font-bold rounded-lg hover:bg-[#ff8855] transition-all">
                Download Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gameplay Overview */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Colony Management Gameplay</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4">Side-Scrolling Design</h3>
              <p className="text-white/80 mb-4">
                Your Mars colony expands horizontally across the Martian landscape in a 2D side-scrolling environment. Each new structure adds to your colony&apos;s footprint, requiring strategic placement and planning.
              </p>
              <p className="text-white/80">
                Inspired by games like Kingdom Two Crowns, the side-scrolling design offers an accessible yet deep gameplay experience, allowing you to see your entire colony at a glance while managing its growth.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4">Resource Management</h3>
              <p className="text-white/80 mb-4">
                Carefully balance the collection and consumption of vital resources. Mining operations extract metals, hydroponics produce food, and water extractors tap into subsurface ice deposits.
              </p>
              <p className="text-white/80">
                Each colonist consumes resources daily, and structures require maintenance. Plan your resource allocation carefully to avoid shortages that could threaten your colony&apos;s survival.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4">Population Growth</h3>
              <p className="text-white/80 mb-4">
                Your initial colonists are just the beginning. As your colony prospers, new colonists may arrive from Earth, and eventually, children will be born on Mars, creating the first generation of true Martians.
              </p>
              <p className="text-white/80">
                Each colonist has skills, needs, and morale that must be managed. Specialized colonists like engineers, scientists, and miners bring unique benefits to your settlement.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4">Expansion Planning</h3>
              <p className="text-white/80 mb-4">
                Strategically plan your colony&apos;s expansion. Place structures in optimal locations, considering factors like resource proximity, protection from hazards, and future growth potential.
              </p>
              <p className="text-white/80">
                As you expand, you&apos;ll discover new areas with unique resources, challenges, and possibly alien artifacts that could revolutionize your technology.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Colony Structures */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Colony Structures</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {structures.map((structure) => (
              <div key={structure.id} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-[#ff9966]/50 transition-all">
                <h3 className="text-xl font-bold mb-3">{structure.title}</h3>
                <p className="text-white/70 mb-4">{structure.description}</p>
                <div className="space-y-2">
                  <div>
                    <span className="text-[#ff9966] font-semibold">Requirements:</span>
                    <span className="text-white/70 ml-2">{structure.requirements}</span>
                  </div>
                  <div>
                    <span className="text-[#ff9966] font-semibold">Benefits:</span>
                    <span className="text-white/70 ml-2">{structure.benefits}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Resources */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Resource Management</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <div key={resource.id} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-[#ff9966]/50 transition-all">
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">{resource.icon}</span>
                  <h3 className="text-xl font-bold">{resource.name}</h3>
                </div>
                <p className="text-white/70 mb-4">{resource.description}</p>
                <div>
                  <span className="text-[#ff9966] font-semibold">Source:</span>
                  <span className="text-white/70 ml-2">{resource.source}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Resource Cycles</h3>
            <p className="text-white/80 mb-6">
              In Vault On Mars, resources flow through your colony in complex cycles. Mining operations extract raw materials, which are processed into building materials or consumed by colonists and structures.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2">Production Chains:</h4>
                <ul className="list-disc pl-5 text-white/70 space-y-2">
                  <li>Basic resources are extracted from the Martian environment</li>
                  <li>Processing facilities refine raw materials into usable forms</li>
                  <li>Advanced structures combine basic resources into complex components</li>
                  <li>Research labs convert resources into technological advancements</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Resource Challenges:</h4>
                <ul className="list-disc pl-5 text-white/70 space-y-2">
                  <li>Limited storage capacity requires careful inventory management</li>
                  <li>Resource deposits can be depleted, requiring new mining sites</li>
                  <li>Dust storms and other events can disrupt resource production</li>
                  <li>Population growth increases resource consumption</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Navigation */}
      <section className="py-10 bg-black">
        <div className="container mx-auto px-4 text-center">
          <Link href="/features" className="text-[#ff9966] hover:text-[#ff8855] transition-colors font-semibold">
            ← Back to Features
          </Link>
        </div>
      </section>
    </main>
  );
}
