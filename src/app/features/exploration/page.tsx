import Link from "next/link";
import Image from "next/image";
import { HydrateClient } from "~/trpc/server";
import { api } from "~/trpc/server";
import ExploreLiveData from "./_components/ExploreLiveData";

// This is a Server Component that can directly use the api
export default async function ExplorationFeaturePage() {
  // Using tRPC to fetch data from our routers
  const alienDiscoveries = await api.exploration.getAlienDiscoveries();
  const explorationLocations = await api.exploration.getExplorationLocations();
  const explorationVehicles = await api.exploration.getExplorationVehicles();

  return (
    <HydrateClient>
      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-24 bg-black overflow-hidden">
          <div className="absolute inset-0 opacity-30 z-0">
            <Image 
              src="/img1.jpg" 
              alt="Mars Exploration" 
              fill 
              className="object-cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-start max-w-3xl">
              <Link href="/features" className="flex items-center text-[#ff9966] hover:text-[#ff8855] transition-colors mb-6">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Back to Features
              </Link>
              
              <h1 className="text-5xl font-bold text-white mb-6">Alien Mysteries</h1>
              <p className="text-xl text-white/80">
                Uncover the secrets of an ancient alien presence on Mars. From mysterious footprints to unexplained signals and artifacts, your colony will be at the forefront of the most important scientific discovery in human history.
              </p>
            </div>
          </div>
        </section>
        
        {/* Feature Overview */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
                <Image 
                  src="/img1.jpg" 
                  alt="Alien Footprints" 
                  fill 
                  className="object-cover"
                />
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">The First Contact</h2>
                <p className="text-lg text-white/80 mb-6">
                  What began as a routine exploration mission turned into humanity&apos;s first evidence of extraterrestrial intelligence. Strange footprints discovered in the Acidalia Planitia region have changed our understanding of Mars forever.
                </p>
                
                <p className="text-lg text-white/80 mb-8">
                  As your colony expands, you&apos;ll have the opportunity to investigate these mysteries, recover artifacts, and potentially make contact with whatever left these traces. Your decisions will shape humanity&apos;s approach to this momentous discovery.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <div className="text-[#ff9966] font-bold mb-2">Artifact Recovery</div>
                    <p className="text-white/70 text-sm">Discover and analyze alien technology that could revolutionize your colony</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <div className="text-[#ff9966] font-bold mb-2">Signal Tracking</div>
                    <p className="text-white/70 text-sm">Follow mysterious transmissions to their source beneath the Martian surface</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <div className="text-[#ff9966] font-bold mb-2">Xenoarchaeology</div>
                    <p className="text-white/70 text-sm">Study the remains of an ancient civilization that once called Mars home</p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <div className="text-[#ff9966] font-bold mb-2">First Contact Protocol</div>
                    <p className="text-white/70 text-sm">Develop strategies for potential communication with alien intelligence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Alien Discoveries */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Notable Alien Discoveries</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {alienDiscoveries.map((discovery) => (
                <div key={discovery.id} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-[#ff9966]/50 transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white">{discovery.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      discovery.researchValue === "High" ? "bg-green-500/20 text-green-300" :
                      discovery.researchValue === "Very High" ? "bg-yellow-500/20 text-yellow-300" :
                      "bg-red-500/20 text-red-300"
                    }`}>
                      {discovery.researchValue} Value
                    </span>
                  </div>
                  <p className="text-white/70 mb-4">{discovery.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-[#ff9966] font-medium">Location:</span>
                      <span className="text-white/70 ml-2">{discovery.location}</span>
                    </div>
                    <div>
                      <span className="text-[#ff9966] font-medium">First Discovered:</span>
                      <span className="text-white/70 ml-2">{discovery.discoveryDate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Exploration Locations */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Exploration Sites</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {explorationLocations.map((location) => (
                <div key={location.id} className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="relative h-48 md:h-auto">
                      <Image 
                        src={location.image} 
                        alt={location.name} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 md:col-span-2">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-white">{location.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          location.difficulty === "Easy" ? "bg-green-500/20 text-green-300" :
                          location.difficulty === "Medium" ? "bg-yellow-500/20 text-yellow-300" :
                          "bg-red-500/20 text-red-300"
                        }`}>
                          {location.difficulty}
                        </span>
                      </div>
                      <p className="text-white/70 mb-4 text-sm">{location.description}</p>
                      <div>
                        <div className="text-[#ff9966] text-sm font-medium mb-2">Available Resources:</div>
                        <div className="flex flex-wrap gap-2">
                          {location.resources.map((resource, index) => (
                            <span key={index} className="px-2 py-1 bg-white/10 rounded-md text-xs text-white/80">
                              {resource}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Research & Technology */}
        <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Alien Research & Technology</h2>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 max-w-4xl mx-auto mb-12">
              <h3 className="text-2xl font-bold mb-4">Research Progression</h3>
              <p className="text-white/80 mb-6">
                As your scientists study alien artifacts and signals, they&apos;ll unlock new technologies and insights. Each discovery builds upon previous research, creating a branching tech tree of alien-inspired advancements.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-black/30 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Initial Analysis</h4>
                  <p className="text-white/70 text-sm">Basic understanding of alien materials and simple technological principles.</p>
                  <div className="mt-2 text-xs text-[#ff9966]">Year 5-10</div>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Practical Applications</h4>
                  <p className="text-white/70 text-sm">Reverse-engineered technologies that can be applied to improve your colony&apos;s systems.</p>
                  <div className="mt-2 text-xs text-[#ff9966]">Year 10-20</div>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Advanced Integration</h4>
                  <p className="text-white/70 text-sm">Revolutionary technologies that fundamentally change your colony&apos;s capabilities.</p>
                  <div className="mt-2 text-xs text-[#ff9966]">Year 20+</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-4">Potential Technologies</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <span className="text-[#ff9966] mr-2">•</span>
                    <span>Advanced water reclamation systems with 99% efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff9966] mr-2">•</span>
                    <span>Atmospheric processors that accelerate terraforming</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff9966] mr-2">•</span>
                    <span>Energy systems that harness Martian geothermal activity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff9966] mr-2">•</span>
                    <span>Materials with self-repairing properties for structures</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-4">Ethical Considerations</h3>
                <p className="text-white/80 mb-4">
                  The discovery of alien artifacts raises important ethical questions that your colony must address:
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <span className="text-[#ff9966] mr-2">•</span>
                    <span>Should artifacts be preserved in place or collected for study?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff9966] mr-2">•</span>
                    <span>How aggressively should signals be investigated?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff9966] mr-2">•</span>
                    <span>Who owns the rights to alien technology?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff9966] mr-2">•</span>
                    <span>What protocols should be followed for potential contact?</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Client Component for Live Data */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Interactive Exploration Hub</h2>
            <div className="max-w-4xl mx-auto">
              {/* Import the client component */}
              <div className="mb-8">
                <p className="text-lg text-white/80 text-center mb-8">
                  This interactive panel demonstrates client-side data fetching with tRPC, providing real-time updates 
                  from your exploration teams without requiring a full page refresh.
                </p>
                
                <ExploreLiveData />
              </div>
            </div>
          </div>
        </section>
        
        {/* Exploration Vehicles */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Specialized Research Vehicles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {explorationVehicles.map((vehicle) => (
                <div key={vehicle.id} className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 h-full flex flex-col">
                  <div className="relative h-48">
                    <Image 
                      src={vehicle.image} 
                      alt={vehicle.name} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3">{vehicle.name}</h3>
                    <p className="text-white/70 mb-6 text-sm">{vehicle.description}</p>
                    
                    <div className="mt-auto">
                      <div className="text-[#ff9966] text-sm font-medium mb-2">Specifications:</div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                        <div>
                          <span className="text-white/50">Range:</span>
                          <span className="text-white ml-2">{vehicle.stats.range}</span>
                        </div>
                        <div>
                          <span className="text-white/50">Speed:</span>
                          <span className="text-white ml-2">{vehicle.stats.speed}</span>
                        </div>
                        <div>
                          <span className="text-white/50">Capacity:</span>
                          <span className="text-white ml-2">{vehicle.stats.capacity}</span>
                        </div>
                        <div>
                          <span className="text-white/50">Equipment:</span>
                          <span className="text-white ml-2">{vehicle.stats.specialEquipment}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Exploration Tips */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Alien Research Tips</h2>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 mb-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">1. Prioritize Safety Protocols</h3>
                    <p className="text-white/80">
                      Always follow containment procedures when handling alien artifacts. Unknown technologies may pose unforeseen risks to your colonists.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">2. Build Specialized Research Facilities</h3>
                    <p className="text-white/80">
                      Dedicated xenoarchaeology labs and signal monitoring stations will significantly increase your research efficiency and discovery rate.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">3. Train Specialist Researchers</h3>
                    <p className="text-white/80">
                      Colonists with scientific backgrounds can be trained in specialized alien research fields, improving research outcomes and technology development.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">4. Document Everything</h3>
                    <p className="text-white/80">
                      Maintain detailed records of all discoveries and research findings. Patterns may emerge from seemingly unrelated discoveries.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">5. Balance Risk and Reward</h3>
                    <p className="text-white/80">
                      More valuable discoveries are often found in more dangerous locations. Ensure your expedition teams are properly equipped before venturing into high-risk areas.
                    </p>
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
    </HydrateClient>
  );
}
