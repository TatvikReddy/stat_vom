import Link from "next/link";
import Image from "next/image";

export default function AnalyticsPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center">
      {/* Background Image */}
      <Image 
        src="/img1.jpg" 
        alt="Mars Colony Analytics" 
        fill 
        className="object-cover z-0 brightness-50" 
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
          Colony <span className="text-[#ff9966]">Analytics</span>
        </h1>
        
        <p className="text-xl text-center max-w-3xl text-white/80 mb-8">
          Dive deep into the data behind Mars colonies. Track resource management, survival rates, and colonization strategies.
        </p>
        
        {/* Stat Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
          <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-2">Colony Survival</h3>
            <p className="text-5xl font-bold text-[#ff9966] mb-4">86%</p>
            <p className="text-white/70">Average colony survival rate across all player games</p>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-2">Resource Efficiency</h3>
            <p className="text-5xl font-bold text-[#ff9966] mb-4">74%</p>
            <p className="text-white/70">Percentage of resources effectively utilized</p>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-2">Colonist Happiness</h3>
            <p className="text-5xl font-bold text-[#ff9966] mb-4">81%</p>
            <p className="text-white/70">Average happiness index across all colonies</p>
          </div>
        </div>
        
        {/* Coming Soon Section */}
        <div className="mt-12 bg-black/30 p-8 rounded-xl max-w-4xl w-full backdrop-blur-sm border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-4">Advanced Analytics Coming Soon</h2>
          <p className="text-white/80">
            We&apos;re building more comprehensive analytics tools for colony managers. Soon you&apos;ll be able to:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-white/80">
            <li>Compare your colony performance against global averages</li>
            <li>Track resource consumption patterns over time</li>
            <li>Analyze colonist productivity by role and assignment</li>
            <li>View detailed survival statistics by environment variables</li>
          </ul>
        </div>
      </div>
      
    </main>
  );
}