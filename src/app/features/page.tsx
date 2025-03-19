import Link from "next/link";
import Image from "next/image";

import { HydrateClient } from "~/trpc/server";

export default async function FeaturesPage() {
  // Mock data for game features
  const gameFeatures = [
    {
      id: 1,
      title: "Limitless Exploration",
      description: "Traverse the Martian landscape, discover hidden resources, and map uncharted territories. From the vast Valles Marineris to the towering Olympus Mons, every location offers unique challenges and opportunities.",
      image: "/img1.jpg",
      link: "/features/exploration",
      details: [
        "Discover rare resources in unexplored regions",
        "Map the Martian terrain with advanced surveying tools",
        "Face environmental hazards like dust storms and radiation",
        "Establish outposts in strategic locations"
      ]
    },
    {
      id: 2,
      title: "Colony Management",
      description: "Build and manage your Mars colony with advanced resource management and strategic planning. Balance oxygen production, water recycling, food cultivation, and energy generation to ensure your colony's survival.",
      image: "/img1.jpg",
      link: "/features/colony",
      details: [
        "Design efficient colony layouts for optimal resource usage",
        "Manage life support systems to keep colonists alive",
        "Expand your base with specialized modules and facilities",
        "Balance resource production and consumption"
      ]
    },
    {
      id: 3,
      title: "Research & Development",
      description: "Unlock new technologies through scientific research to improve your colony's survival chances. Invest in various research paths to adapt to the harsh Martian environment and overcome challenges.",
      image: "/img1.jpg",
      link: "/features/research",
      details: [
        "Unlock advanced technologies through research trees",
        "Improve efficiency of life support systems",
        "Develop new materials suited for the Martian environment",
        "Create sustainable ecosystems for long-term survival"
      ]
    },
    {
      id: 4,
      title: "Colonist Management",
      description: "Recruit specialists with unique skills and manage their well-being. Each colonist has individual needs, skills, and psychological profiles that affect their performance and the colony's success.",
      image: "/img1.jpg",
      link: "/features/colonists",
      details: [
        "Recruit specialists with unique abilities and skills",
        "Manage colonist morale and psychological well-being",
        "Assign roles based on individual strengths",
        "Train colonists to improve their capabilities"
      ]
    },
    {
      id: 5,
      title: "Trade & Economics",
      description: "Establish trade routes with Earth and other colonies, manage your economy, and secure valuable contracts. Create a sustainable economic model for your colony's growth and prosperity.",
      image: "/img1.jpg",
      link: "/features/trade",
      details: [
        "Trade resources with Earth and other Martian colonies",
        "Secure contracts for specialized production",
        "Manage your colony's economy and finances",
        "Invest in infrastructure to increase production capacity"
      ]
    },
    {
      id: 6,
      title: "Challenges & Events",
      description: "Face dynamic challenges and participate in special events that test your colony's resilience. From natural disasters to supply shortages, every challenge provides an opportunity to prove your management skills.",
      image: "/img1.jpg",
      link: "/features/challenges",
      details: [
        "Overcome environmental disasters like dust storms",
        "Manage resource shortages and supply chain disruptions",
        "Participate in community-wide events and competitions",
        "Complete special missions for unique rewards"
      ]
    }
  ];

  return (
    <HydrateClient>
      {/* Hero Section */}
      <section className="relative py-24 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-30 z-0">
          <Image 
            src="/img1.jpg" 
            alt="Mars Colony" 
            fill 
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Game Features</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Explore the comprehensive features that make Vault On Mars the ultimate Mars colonization simulation experience.
          </p>
        </div>
      </section>
      
      {/* Features Overview */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {gameFeatures.map((feature) => (
              <Link key={feature.id} href={feature.link} className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 h-full transition-all group-hover:border-[#ff9966]/50 group-hover:bg-white/10">
                  <div className="relative h-48">
                    <Image 
                      src={feature.image} 
                      alt={feature.title} 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white group-hover:text-[#ff9966] transition-colors">{feature.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-white/70 mb-4">{feature.description}</p>
                    <div className="text-[#ff9966] font-medium">Learn More →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Detailed Feature Showcase */}
      {gameFeatures.map((feature, index) => (
        <section 
          key={feature.id} 
          id={`feature-${feature.id}`}
          className={`py-20 ${index % 2 === 0 ? 'bg-gradient-to-r from-[#ff9966]/10 to-black' : 'bg-black'}`}
        >
          <div className="container mx-auto px-4">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
                <Image 
                  src={feature.image} 
                  alt={feature.title} 
                  fill 
                  className="object-cover"
                />
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">{feature.title}</h2>
                <p className="text-lg text-white/80 mb-8">{feature.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-6 h-6 text-[#ff9966] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/70">{detail}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={feature.link}
                  className="px-6 py-3 bg-[#ff9966] text-black font-bold rounded-lg hover:bg-[#ff8855] transition-all inline-block"
                >
                  Explore {feature.title}
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Mars Adventure?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Join thousands of players already building and managing their own Mars colonies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/download" className="px-8 py-3 bg-[#ff9966] text-black font-bold rounded-lg hover:bg-[#ff8855] transition-all transform hover:scale-105">
              Download Now
            </Link>
            <Link href="/about" className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/20 transition-all transform hover:scale-105 border border-white/30">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </HydrateClient>
  );
}
