import Link from "next/link";
import Image from "next/image";

export default function AchievementsPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      {/* Background Image */}
      <Image
        src="/img1.jpg"
        alt="Mars Colony Achievements"
        fill
        className="z-0 object-cover brightness-50"
        quality={100}
        priority
      />

      {/* Back to Home */}
      <div className="absolute top-0 z-10 flex w-full items-center justify-start p-4">
        <Link
          href="/"
          className="text-xl font-bold text-white transition-colors hover:text-[#ff9966]"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <div className="container relative z-10 mt-8 flex flex-col items-center justify-start gap-8 px-4 py-20">
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-white sm:text-[3.5rem]">
          Player <span className="text-[#ff9966]">Achievements</span>
        </h1>

        <p className="mb-8 max-w-3xl text-center text-xl text-white/80">
          Celebrate the extraordinary accomplishments of Mars colonists and
          their remarkable feats of survival and innovation.
        </p>

        {/* Achievement Categories */}
        <div className="grid w-full max-w-4xl grid-cols-1 gap-8">
          {/* Survival Category */}
          <div className="rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm">
            <h2 className="mb-4 text-2xl font-bold text-[#ff9966]">
              Survival Milestones
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">Mars Pioneer</h3>
                  <p className="text-white/70">Survive 100 days on Mars</p>
                </div>
                <div className="text-sm text-white/80">
                  Achieved by 68% of players
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Seasoned Colonist
                  </h3>
                  <p className="text-white/70">Survive 365 days on Mars</p>
                </div>
                <div className="text-sm text-white/80">
                  Achieved by 42% of players
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">Mars Elder</h3>
                  <p className="text-white/70">Survive 1000 days on Mars</p>
                </div>
                <div className="text-sm text-white/80">
                  Achieved by 7% of players
                </div>
              </div>
            </div>
          </div>

          {/* Construction Category */}
          <div className="rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm">
            <h2 className="mb-4 text-2xl font-bold text-[#ff9966]">
              Construction Feats
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">Dome Builder</h3>
                  <p className="text-white/70">
                    Construct your first habitat dome
                  </p>
                </div>
                <div className="text-sm text-white/80">
                  Achieved by 94% of players
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Colony Expander
                  </h3>
                  <p className="text-white/70">
                    Build a colony with 5 connected structures
                  </p>
                </div>
                <div className="text-sm text-white/80">
                  Achieved by 56% of players
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Martian Metropolis
                  </h3>
                  <p className="text-white/70">
                    Build a colony supporting 100+ colonists
                  </p>
                </div>
                <div className="text-sm text-white/80">
                  Achieved by 12% of players
                </div>
              </div>
            </div>
          </div>

          {/* Resource Category */}
          <div className="rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm">
            <h2 className="mb-4 text-2xl font-bold text-[#ff9966]">
              Resource Management
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Self-Sufficient
                  </h3>
                  <p className="text-white/70">
                    Produce all basic resources for 30 days
                  </p>
                </div>
                <div className="text-sm text-white/80">
                  Achieved by 38% of players
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Resource Magnate
                  </h3>
                  <p className="text-white/70">
                    Stockpile 10,000 units of resources
                  </p>
                </div>
                <div className="text-sm text-white/80">
                  Achieved by 24% of players
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Mars Exporter
                  </h3>
                  <p className="text-white/70">Send resources back to Earth</p>
                </div>
                <div className="text-sm text-white/80">
                  Achieved by 5% of players
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
