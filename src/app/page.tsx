import Link from "next/link";
import Image from "next/image";

import { HydrateClient } from "~/trpc/server";

export default async function Home() {

  return (
    <HydrateClient>
      <main className="relative min-h-screen flex flex-col items-center">
        {/* Background Image */}
        <Image 
          src="/img1.jpg" 
          alt="Vault on Mars" 
          fill 
          className="object-cover z-0 brightness-50"
          priority
        />
        
        {/* Site Logo/Title - No auth button here as it's in layout.tsx */}
        <div className="absolute top-0 w-full flex justify-start items-center p-4 z-10">
          <Link href="/" className="text-xl font-bold text-white">
            V<span className="text-[#ff9966]">O</span>M Analytics
          </Link>
        </div>
        
        {/* Main Content - Adjusted padding-top to account for header */}
        <div className="container relative z-10 flex flex-col items-center justify-center gap-12 px-4 py-24">
          <h1 className="text-5xl font-extrabold tracking-tight text-center text-white sm:text-[5rem]">
            Vault <span className="text-[#ff9966]">On</span> Mars
          </h1>
          
          <p className="text-xl text-center max-w-3xl text-white">
            Explore player achievements and colony statistics from our Mars colonization management simulation game.
          </p>
          
          {/* Navigation Cards - 2x2 Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl w-full">
            
            <Link
              className="flex flex-col gap-3 rounded-xl bg-black/40 backdrop-blur-sm p-6 hover:bg-black/50 transition-all border border-white/10"
              href="/analytics"
            >
              <h3 className="text-2xl font-bold text-white">Analytics →</h3>
              <div className="text-lg text-white/80">
                Discover player strategies through comprehensive game data and colony performance metrics.
              </div>
            </Link>
            
            <Link
              className="flex flex-col gap-3 rounded-xl bg-black/40 backdrop-blur-sm p-6 hover:bg-black/50 transition-all border border-white/10"
              href="/achievements"
            >
              <h3 className="text-2xl font-bold text-white">Player Achievements →</h3>
              <div className="text-lg text-white/80">
                View rare accomplishments and special milestones reached by the community.
              </div>
            </Link>

          </div>
          
          <div className="flex flex-col items-center gap-2 text-white">
            <p className="text-2xl">
              Welcome from the Team of Vault On Mars
            </p>
          </div>

          {/* Latest Updates Section */}
          <div className="border-t border-white/20 pt-8 w-full max-w-4xl mt-6">
            <h2 className="text-3xl font-bold text-center mb-6 text-white">
              <Link href="/about" className="hover:text-[#ff9966] transition-colors">
                About us <span className="ml-1">→</span>
              </Link>
            </h2>
            <p className="text-center text-white/80 mb-4">
              Learn more about our team, mission, and the story behind Vault On Mars.
            </p>
          </div>
        </div>
        
        {/* Footer */}
        <div className="relative z-10 w-full py-4 mt-auto bg-black/60 text-center text-white/60 text-sm">
          Vault On Mars Analytics Dashboard • © 2025
        </div>
      </main>
    </HydrateClient>
  );
}