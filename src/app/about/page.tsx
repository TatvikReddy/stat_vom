import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      {/* Background Image */}
      <Image
        src="/img1.jpg"
        alt="About Vault On Mars"
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
      <div className="container relative z-10 mt-8 flex max-w-4xl flex-col items-center justify-start gap-8 px-4 py-20">
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-white sm:text-[3.5rem]">
          About <span className="text-[#ff9966]">Vault On Mars</span>
        </h1>

        <div className="w-full rounded-xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm">
          <h2 className="mb-4 text-2xl font-bold text-[#ff9966]">
            Our Mission
          </h2>
          <p className="mb-6 leading-relaxed text-white/90">
            Vault On Mars is a colony management simulation that challenges
            players to establish and maintain a sustainable human presence on
            the red planet. Our mission is to create an engaging,
            scientifically-informed experience that inspires interest in space
            exploration and demonstrates the challenges and rewards of
            interplanetary colonization.
          </p>
        </div>

        {/* Faculty Sponsor */}
        <div className="mt-4 w-full rounded-xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm">
          <h2 className="mb-6 text-center text-2xl font-bold text-[#ff9966]">
            Faculty Sponsor
          </h2>

          <div className="flex justify-center">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-700">
                <span className="text-4xl font-bold text-white">EB</span>
              </div>
              <h3 className="text-xl font-bold text-white">Dr. Eric Becker</h3>
            </div>
          </div>
        </div>

        {/* Client Software Team */}
        <div className="mt-4 w-full rounded-xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm">
          <h2 className="mb-6 text-center text-2xl font-bold text-[#ff9966]">
            Client Software Team
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-teal-700">
                <span className="text-3xl font-bold text-white">TRC</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Tatvik Reddy Chevuru
              </h3>
              <p className="text-white/70">Dev-Ops</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-teal-700">
                <span className="text-3xl font-bold text-white">SS</span>
              </div>
              <h3 className="text-xl font-bold text-white">Surya Solaiappan</h3>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-teal-700">
                <span className="text-3xl font-bold text-white">NR</span>
              </div>
              <h3 className="text-xl font-bold text-white">Nafiz Rahman</h3>
              <p className="text-white/70">Project-Management</p>
            </div>
          </div>
        </div>

        {/* Server Software Team */}
        <div className="mt-4 w-full rounded-xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm">
          <h2 className="mb-6 text-center text-2xl font-bold text-[#ff9966]">
            Server Software Team
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-700">
                <span className="text-3xl font-bold text-white">SG</span>
              </div>
              <h3 className="text-xl font-bold text-white">Satyam Garg</h3>
              <p className="text-white/70">Database-Engineer</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-700">
                <span className="text-3xl font-bold text-white">DB</span>
              </div>
              <h3 className="text-xl font-bold text-white">Danielle Bryan</h3>
              <p className="text-white/70">Cyber-Security</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-700">
                <span className="text-3xl font-bold text-white">DB</span>
              </div>
              <h3 className="text-xl font-bold text-white">Daniyal Baig</h3>
              <p className="text-white/70">Team-Lead</p>
            </div>
          </div>
        </div>

        {/* Analysis Engine Team */}
        <div className="mt-4 w-full rounded-xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm">
          <h2 className="mb-6 text-center text-2xl font-bold text-[#ff9966]">
            Analysis Engine
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-700">
                <span className="text-3xl font-bold text-white">AP</span>
              </div>
              <h3 className="text-xl font-bold text-white">Allison Philips</h3>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-700">
                <span className="text-3xl font-bold text-white">JP</span>
              </div>
              <h3 className="text-xl font-bold text-white">Joshua Perez</h3>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="mailto:contact@vaultonmars.com"
            className="inline-block rounded-md bg-[#ff9966]/80 px-6 py-3 font-semibold text-white transition-colors hover:bg-[#ff9966]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
