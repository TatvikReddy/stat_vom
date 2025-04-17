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
        <section className="relative overflow-hidden bg-black py-24">
          <div className="absolute inset-0 z-0 opacity-30">
            <Image
              src="/img1.jpg"
              alt="Mars Exploration"
              fill
              className="object-cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="flex max-w-3xl flex-col items-start">
              <Link
                href="/features"
                className="mb-6 flex items-center text-[#ff9966] transition-colors hover:text-[#ff8855]"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Back to Features
              </Link>

              <h1 className="mb-6 text-5xl font-bold text-white">
                Alien Mysteries
              </h1>
              <p className="text-xl text-white/80">
                Uncover the secrets of an ancient alien presence on Mars. From
                mysterious footprints to unexplained signals and artifacts, your
                colony will be at the forefront of the most important scientific
                discovery in human history.
              </p>
            </div>
          </div>
        </section>

        {/* Feature Overview */}
        <section className="bg-black py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              <div className="relative h-80 overflow-hidden rounded-lg md:h-96">
                <Image
                  src="/img1.jpg"
                  alt="Alien Footprints"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="mb-6 text-3xl font-bold text-white">
                  The First Contact
                </h2>
                <p className="mb-6 text-lg text-white/80">
                  What began as a routine exploration mission turned into
                  humanity&apos;s first evidence of extraterrestrial
                  intelligence. Strange footprints discovered in the Acidalia
                  Planitia region have changed our understanding of Mars
                  forever.
                </p>

                <p className="mb-8 text-lg text-white/80">
                  As your colony expands, you&apos;ll have the opportunity to
                  investigate these mysteries, recover artifacts, and
                  potentially make contact with whatever left these traces. Your
                  decisions will shape humanity&apos;s approach to this
                  momentous discovery.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="mb-2 font-bold text-[#ff9966]">
                      Artifact Recovery
                    </div>
                    <p className="text-sm text-white/70">
                      Discover and analyze alien technology that could
                      revolutionize your colony
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="mb-2 font-bold text-[#ff9966]">
                      Signal Tracking
                    </div>
                    <p className="text-sm text-white/70">
                      Follow mysterious transmissions to their source beneath
                      the Martian surface
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="mb-2 font-bold text-[#ff9966]">
                      Xenoarchaeology
                    </div>
                    <p className="text-sm text-white/70">
                      Study the remains of an ancient civilization that once
                      called Mars home
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="mb-2 font-bold text-[#ff9966]">
                      First Contact Protocol
                    </div>
                    <p className="text-sm text-white/70">
                      Develop strategies for potential communication with alien
                      intelligence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alien Discoveries */}
        <section className="bg-gradient-to-b from-black to-gray-900 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-white">
              Notable Alien Discoveries
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {alienDiscoveries.map((discovery) => (
                <div
                  key={discovery.id}
                  className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-[#ff9966]/50"
                >
                  <div className="mb-3 flex items-start justify-between">
                    <h3 className="text-xl font-bold text-white">
                      {discovery.name}
                    </h3>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        discovery.researchValue === "High"
                          ? "bg-green-500/20 text-green-300"
                          : discovery.researchValue === "Very High"
                            ? "bg-yellow-500/20 text-yellow-300"
                            : "bg-red-500/20 text-red-300"
                      }`}
                    >
                      {discovery.researchValue} Value
                    </span>
                  </div>
                  <p className="mb-4 text-white/70">{discovery.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-[#ff9966]">
                        Location:
                      </span>
                      <span className="ml-2 text-white/70">
                        {discovery.location}
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-[#ff9966]">
                        First Discovered:
                      </span>
                      <span className="ml-2 text-white/70">
                        {discovery.discoveryDate}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Exploration Locations */}
        <section className="bg-black py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-white">
              Key Exploration Sites
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {explorationLocations.map((location) => (
                <div
                  key={location.id}
                  className="overflow-hidden rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm"
                >
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
                      <div className="mb-2 flex items-start justify-between">
                        <h3 className="text-xl font-bold text-white">
                          {location.name}
                        </h3>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            location.difficulty === "Easy"
                              ? "bg-green-500/20 text-green-300"
                              : location.difficulty === "Medium"
                                ? "bg-yellow-500/20 text-yellow-300"
                                : "bg-red-500/20 text-red-300"
                          }`}
                        >
                          {location.difficulty}
                        </span>
                      </div>
                      <p className="mb-4 text-sm text-white/70">
                        {location.description}
                      </p>
                      <div>
                        <div className="mb-2 text-sm font-medium text-[#ff9966]">
                          Available Resources:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {location.resources.map((resource, index) => (
                            <span
                              key={index}
                              className="rounded-md bg-white/10 px-2 py-1 text-xs text-white/80"
                            >
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
        <section className="bg-gradient-to-b from-gray-900 to-black py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-white">
              Alien Research & Technology
            </h2>

            <div className="mx-auto mb-12 max-w-4xl rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="mb-4 text-2xl font-bold">Research Progression</h3>
              <p className="mb-6 text-white/80">
                As your scientists study alien artifacts and signals,
                they&apos;ll unlock new technologies and insights. Each
                discovery builds upon previous research, creating a branching
                tech tree of alien-inspired advancements.
              </p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-lg bg-black/30 p-4">
                  <h4 className="mb-2 font-bold">Initial Analysis</h4>
                  <p className="text-sm text-white/70">
                    Basic understanding of alien materials and simple
                    technological principles.
                  </p>
                  <div className="mt-2 text-xs text-[#ff9966]">Year 5-10</div>
                </div>
                <div className="rounded-lg bg-black/30 p-4">
                  <h4 className="mb-2 font-bold">Practical Applications</h4>
                  <p className="text-sm text-white/70">
                    Reverse-engineered technologies that can be applied to
                    improve your colony&apos;s systems.
                  </p>
                  <div className="mt-2 text-xs text-[#ff9966]">Year 10-20</div>
                </div>
                <div className="rounded-lg bg-black/30 p-4">
                  <h4 className="mb-2 font-bold">Advanced Integration</h4>
                  <p className="text-sm text-white/70">
                    Revolutionary technologies that fundamentally change your
                    colony&apos;s capabilities.
                  </p>
                  <div className="mt-2 text-xs text-[#ff9966]">Year 20+</div>
                </div>
              </div>
            </div>

            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="mb-4 text-xl font-bold">
                  Potential Technologies
                </h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <span className="mr-2 text-[#ff9966]">•</span>
                    <span>
                      Advanced water reclamation systems with 99% efficiency
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[#ff9966]">•</span>
                    <span>
                      Atmospheric processors that accelerate terraforming
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[#ff9966]">•</span>
                    <span>
                      Energy systems that harness Martian geothermal activity
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[#ff9966]">•</span>
                    <span>
                      Materials with self-repairing properties for structures
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="mb-4 text-xl font-bold">
                  Ethical Considerations
                </h3>
                <p className="mb-4 text-white/80">
                  The discovery of alien artifacts raises important ethical
                  questions that your colony must address:
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <span className="mr-2 text-[#ff9966]">•</span>
                    <span>
                      Should artifacts be preserved in place or collected for
                      study?
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[#ff9966]">•</span>
                    <span>
                      How aggressively should signals be investigated?
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[#ff9966]">•</span>
                    <span>Who owns the rights to alien technology?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[#ff9966]">•</span>
                    <span>
                      What protocols should be followed for potential contact?
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Client Component for Live Data */}
        <section className="bg-black py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-white">
              Interactive Exploration Hub
            </h2>
            <div className="mx-auto max-w-4xl">
              {/* Import the client component */}
              <div className="mb-8">
                <p className="mb-8 text-center text-lg text-white/80">
                  This interactive panel demonstrates client-side data fetching
                  with tRPC, providing real-time updates from your exploration
                  teams without requiring a full page refresh.
                </p>

                <ExploreLiveData />
              </div>
            </div>
          </div>
        </section>

        {/* Exploration Vehicles */}
        <section className="bg-black py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-white">
              Specialized Research Vehicles
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {explorationVehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                  <div className="relative h-48">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-grow p-6">
                    <h3 className="mb-3 text-xl font-bold text-white">
                      {vehicle.name}
                    </h3>
                    <p className="mb-6 text-sm text-white/70">
                      {vehicle.description}
                    </p>

                    <div className="mt-auto">
                      <div className="mb-2 text-sm font-medium text-[#ff9966]">
                        Specifications:
                      </div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                        <div>
                          <span className="text-white/50">Range:</span>
                          <span className="ml-2 text-white">
                            {vehicle.stats.range}
                          </span>
                        </div>
                        <div>
                          <span className="text-white/50">Speed:</span>
                          <span className="ml-2 text-white">
                            {vehicle.stats.speed}
                          </span>
                        </div>
                        <div>
                          <span className="text-white/50">Capacity:</span>
                          <span className="ml-2 text-white">
                            {vehicle.stats.capacity}
                          </span>
                        </div>
                        <div>
                          <span className="text-white/50">Equipment:</span>
                          <span className="ml-2 text-white">
                            {vehicle.stats.specialEquipment}
                          </span>
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
        <section className="bg-gradient-to-b from-black to-gray-900 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-center text-3xl font-bold text-white">
                Alien Research Tips
              </h2>

              <div className="mb-8 rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 text-xl font-bold">
                      1. Prioritize Safety Protocols
                    </h3>
                    <p className="text-white/80">
                      Always follow containment procedures when handling alien
                      artifacts. Unknown technologies may pose unforeseen risks
                      to your colonists.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 text-xl font-bold">
                      2. Build Specialized Research Facilities
                    </h3>
                    <p className="text-white/80">
                      Dedicated xenoarchaeology labs and signal monitoring
                      stations will significantly increase your research
                      efficiency and discovery rate.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 text-xl font-bold">
                      3. Train Specialist Researchers
                    </h3>
                    <p className="text-white/80">
                      Colonists with scientific backgrounds can be trained in
                      specialized alien research fields, improving research
                      outcomes and technology development.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 text-xl font-bold">
                      4. Document Everything
                    </h3>
                    <p className="text-white/80">
                      Maintain detailed records of all discoveries and research
                      findings. Patterns may emerge from seemingly unrelated
                      discoveries.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 text-xl font-bold">
                      5. Balance Risk and Reward
                    </h3>
                    <p className="text-white/80">
                      More valuable discoveries are often found in more
                      dangerous locations. Ensure your expedition teams are
                      properly equipped before venturing into high-risk areas.
                    </p>
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
    </HydrateClient>
  );
}
