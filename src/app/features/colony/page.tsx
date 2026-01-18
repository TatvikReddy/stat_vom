import Link from "next/link";
import Image from "next/image";

export default function ColonyPage() {
  // Mock data for colony structures
  const structures = [
    {
      id: 1,
      title: "Habitat Modules",
      description:
        "Living quarters for your colonists. Each module supports up to 8 colonists and provides basic amenities.",
      requirements: "50 Metal, 20 Polymers",
      benefits: "Houses 8 colonists, +5 Morale",
    },
    {
      id: 2,
      title: "Hydroponics Bay",
      description:
        "Indoor farming facility that produces food regardless of external conditions.",
      requirements: "40 Metal, 30 Polymers, 10 Electronics",
      benefits: "+15 Food per year, Research opportunities",
    },
    {
      id: 3,
      title: "Solar Array",
      description:
        "Collection of solar panels that generate power during daylight hours.",
      requirements: "30 Metal, 20 Electronics",
      benefits: "+25 Power during day, Vulnerable to dust storms",
    },
    {
      id: 4,
      title: "Water Extractor",
      description:
        "Drills into the Martian surface to extract water ice, which is then purified for colony use.",
      requirements: "60 Metal, 15 Electronics, 10 Rare Metals",
      benefits: "+20 Water per year",
    },
    {
      id: 5,
      title: "Research Lab",
      description:
        "Facility dedicated to scientific research and technological advancement.",
      requirements: "40 Metal, 30 Electronics, 5 Rare Metals",
      benefits: "+10 Research points per year, Unlocks new technologies",
    },
    {
      id: 6,
      title: "Storage Depot",
      description: "Secure facility for storing resources and supplies.",
      requirements: "30 Metal, 10 Polymers",
      benefits: "+100 Storage capacity for each resource type",
    },
  ];

  // Mock data for resource types
  const resources = [
    {
      id: 1,
      name: "Metal",
      description:
        "Basic building material extracted from Martian soil and rocks. Used in almost all structures.",
      source: "Mining operations, Meteor salvage",
      icon: "🔧",
    },
    {
      id: 2,
      name: "Polymers",
      description:
        "Synthetic materials produced from processed Martian carbon. Used for seals, insulation, and flexible components.",
      source: "Chemical plant, Imported supplies",
      icon: "🧪",
    },
    {
      id: 3,
      name: "Electronics",
      description:
        "Circuit boards, wiring, and electronic components essential for advanced structures.",
      source: "Manufacturing plant, Imported supplies",
      icon: "💻",
    },
    {
      id: 4,
      name: "Rare Metals",
      description:
        "Precious metals used in specialized equipment and advanced research.",
      source: "Deep mining, Meteor salvage",
      icon: "⚙️",
    },
    {
      id: 5,
      name: "Food",
      description:
        "Nutrition for your colonists, produced in hydroponics bays or imported from Earth.",
      source: "Hydroponics, Imported supplies",
      icon: "🌽",
    },
    {
      id: 6,
      name: "Water",
      description:
        "Essential resource for colonist survival, farming, and various industrial processes.",
      source: "Water extractors, Ice mining",
      icon: "💧",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
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

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Colony Management
            </h1>
            <p className="mb-8 text-xl text-white/80">
              Build and expand your Mars settlement in a challenging
              side-scrolling environment. Balance resources, population growth,
              and expansion while facing the harsh realities of Mars
              colonization.
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

      {/* Gameplay Overview */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Colony Management Gameplay
          </h2>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold">Side-Scrolling Design</h3>
              <p className="mb-4 text-white/80">
                Your Mars colony expands horizontally across the Martian
                landscape in a 2D side-scrolling environment. Each new structure
                adds to your colony&apos;s footprint, requiring strategic
                placement and planning.
              </p>
              <p className="text-white/80">
                Inspired by games like Kingdom Two Crowns, the side-scrolling
                design offers an accessible yet deep gameplay experience,
                allowing you to see your entire colony at a glance while
                managing its growth.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold">Resource Management</h3>
              <p className="mb-4 text-white/80">
                Carefully balance the collection and consumption of vital
                resources. Mining operations extract metals, hydroponics produce
                food, and water extractors tap into subsurface ice deposits.
              </p>
              <p className="text-white/80">
                Each colonist consumes resources daily, and structures require
                maintenance. Plan your resource allocation carefully to avoid
                shortages that could threaten your colony&apos;s survival.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold">Population Growth</h3>
              <p className="mb-4 text-white/80">
                Your initial colonists are just the beginning. As your colony
                prospers, new colonists may arrive from Earth, and eventually,
                children will be born on Mars, creating the first generation of
                true Martians.
              </p>
              <p className="text-white/80">
                Each colonist has skills, needs, and morale that must be
                managed. Specialized colonists like engineers, scientists, and
                miners bring unique benefits to your settlement.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold">Expansion Planning</h3>
              <p className="mb-4 text-white/80">
                Strategically plan your colony&apos;s expansion. Place
                structures in optimal locations, considering factors like
                resource proximity, protection from hazards, and future growth
                potential.
              </p>
              <p className="text-white/80">
                As you expand, you&apos;ll discover new areas with unique
                resources, challenges, and possibly alien artifacts that could
                revolutionize your technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Colony Structures */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Colony Structures
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {structures.map((structure) => (
              <div
                key={structure.id}
                className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-[#ff9966]/50"
              >
                <h3 className="mb-3 text-xl font-bold">{structure.title}</h3>
                <p className="mb-4 text-white/70">{structure.description}</p>
                <div className="space-y-2">
                  <div>
                    <span className="font-semibold text-[#ff9966]">
                      Requirements:
                    </span>
                    <span className="ml-2 text-white/70">
                      {structure.requirements}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#ff9966]">
                      Benefits:
                    </span>
                    <span className="ml-2 text-white/70">
                      {structure.benefits}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Resource Management
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-[#ff9966]/50"
              >
                <div className="mb-3 flex items-center">
                  <span className="mr-3 text-3xl">{resource.icon}</span>
                  <h3 className="text-xl font-bold">{resource.name}</h3>
                </div>
                <p className="mb-4 text-white/70">{resource.description}</p>
                <div>
                  <span className="font-semibold text-[#ff9966]">Source:</span>
                  <span className="ml-2 text-white/70">{resource.source}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-4xl rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h3 className="mb-4 text-2xl font-bold">Resource Cycles</h3>
            <p className="mb-6 text-white/80">
              In Vault On Mars, resources flow through your colony in complex
              cycles. Mining operations extract raw materials, which are
              processed into building materials or consumed by colonists and
              structures.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-2 font-bold">Production Chains:</h4>
                <ul className="list-disc space-y-2 pl-5 text-white/70">
                  <li>
                    Basic resources are extracted from the Martian environment
                  </li>
                  <li>
                    Processing facilities refine raw materials into usable forms
                  </li>
                  <li>
                    Advanced structures combine basic resources into complex
                    components
                  </li>
                  <li>
                    Research labs convert resources into technological
                    advancements
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 font-bold">Resource Challenges:</h4>
                <ul className="list-disc space-y-2 pl-5 text-white/70">
                  <li>
                    Limited storage capacity requires careful inventory
                    management
                  </li>
                  <li>
                    Resource deposits can be depleted, requiring new mining
                    sites
                  </li>
                  <li>
                    Dust storms and other events can disrupt resource production
                  </li>
                  <li>Population growth increases resource consumption</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="bg-black py-10">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/features"
            className="font-semibold text-[#ff9966] transition-colors hover:text-[#ff8855]"
          >
            ← Back to Features
          </Link>
        </div>
      </section>
    </main>
  );
}
