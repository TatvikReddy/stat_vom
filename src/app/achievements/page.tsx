import Link from "next/link";
import Image from "next/image";


export default function AchievementsPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center">
      {/* Background Image */}
      <Image 
        src="/img1.jpg" 
        alt="Mars Colony Achievements" 
        fill 
        className="object-cover z-0 brightness-50"
        quality={100} 
        priority
      />
      
      {/* Back to Home */}
      <div className="absolute top-0 w-full flex justify-start items-center p-4 z-10">
        <Link href="/" className="text-xl font-bold text-white hover:text-[#ff9966] transition-colors">
          ← Back to Home
        </Link>
      </div>
      
      {/* Main Content */}
      <div className="container relative z-10 flex flex-col items-center justify-start gap-8 px-4 py-20 mt-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-center text-white sm:text-[3.5rem]">
          Player <span className="text-[#ff9966]">Achievements</span>
        </h1>
        
        <p className="text-xl text-center max-w-3xl text-white/80 mb-8">
          Celebrate the extraordinary accomplishments of Mars colonists and their remarkable feats of survival and innovation.
        </p>
        
        {/* Achievement Categories */}
        <div className="grid grid-cols-1 gap-8 max-w-4xl w-full">
          {/* Survival Category */}
          <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <h2 className="text-2xl font-bold text-[#ff9966] mb-4">Survival Milestones</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">Mars Pioneer</h3>
                  <p className="text-white/70">Survive 100 days on Mars</p>
                </div>
                <div className="text-white/80 text-sm">
                  Achieved by 68% of players
                </div>
              </div>
              
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">Seasoned Colonist</h3>
                  <p className="text-white/70">Survive 365 days on Mars</p>
                </div>
                <div className="text-white/80 text-sm">
                  Achieved by 42% of players
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-white">Mars Elder</h3>
                  <p className="text-white/70">Survive 1000 days on Mars</p>
                </div>
                <div className="text-white/80 text-sm">
                  Achieved by 7% of players
                </div>
              </div>
            </div>
          </div>
          
          {/* Construction Category */}
          <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <h2 className="text-2xl font-bold text-[#ff9966] mb-4">Construction Feats</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">Dome Builder</h3>
                  <p className="text-white/70">Construct your first habitat dome</p>
                </div>
                <div className="text-white/80 text-sm">
                  Achieved by 94% of players
                </div>
              </div>
              
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">Colony Expander</h3>
                  <p className="text-white/70">Build a colony with 5 connected structures</p>
                </div>
                <div className="text-white/80 text-sm">
                  Achieved by 56% of players
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-white">Martian Metropolis</h3>
                  <p className="text-white/70">Build a colony supporting 100+ colonists</p>
                </div>
                <div className="text-white/80 text-sm">
                  Achieved by 12% of players
                </div>
              </div>
            </div>
          </div>
          
          {/* Resource Category */}
          <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <h2 className="text-2xl font-bold text-[#ff9966] mb-4">Resource Management</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">Self-Sufficient</h3>
                  <p className="text-white/70">Produce all basic resources for 30 days</p>
                </div>
                <div className="text-white/80 text-sm">
                  Achieved by 38% of players
                </div>
              </div>
              
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">Resource Magnate</h3>
                  <p className="text-white/70">Stockpile 10,000 units of resources</p>
                </div>
                <div className="text-white/80 text-sm">
                  Achieved by 24% of players
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-white">Mars Exporter</h3>
                  <p className="text-white/70">Send resources back to Earth</p>
                </div>
                <div className="text-white/80 text-sm">
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