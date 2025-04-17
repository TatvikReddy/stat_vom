import Link from "next/link";
import Image from "next/image";

export default function AnalyticsPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      {/* Background Image */}
      <Image
        src="/img1.jpg"
        alt="Mars Colony Analytics"
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
          Colony <span className="text-[#ff9966]">Analytics</span>
        </h1>

        <p className="mb-8 max-w-3xl text-center text-xl text-white/80">
          Dive deep into the data behind Mars colonies. Track resource
          management, survival rates, and colonization strategies.
        </p>

        {/* Stat Cards */}
        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm">
            <h3 className="mb-2 text-2xl font-bold text-white">
              Colony Survival
            </h3>
            <p className="mb-4 text-5xl font-bold text-[#ff9966]">86%</p>
            <p className="text-white/70">
              Average colony survival rate across all player games
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm">
            <h3 className="mb-2 text-2xl font-bold text-white">
              Resource Efficiency
            </h3>
            <p className="mb-4 text-5xl font-bold text-[#ff9966]">74%</p>
            <p className="text-white/70">
              Percentage of resources effectively utilized
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm">
            <h3 className="mb-2 text-2xl font-bold text-white">
              Colonist Happiness
            </h3>
            <p className="mb-4 text-5xl font-bold text-[#ff9966]">81%</p>
            <p className="text-white/70">
              Average happiness index across all colonies
            </p>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="mt-12 w-full max-w-4xl rounded-xl border border-white/10 bg-black/30 p-8 backdrop-blur-sm">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Advanced Analytics Coming Soon
          </h2>
          <p className="text-white/80">
            We&apos;re building more comprehensive analytics tools for colony
            managers. Soon you&apos;ll be able to:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-white/80">
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
