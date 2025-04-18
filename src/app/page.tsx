import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const latestNews = await api.news.getAll();
  const gameFeatures = await api.features.getAll();

  return (
    <HydrateClient>
      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img1.jpg"
            alt="Vault on Mars"
            fill
            className="object-cover brightness-50"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black"></div>
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 px-4 text-center">
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white drop-shadow-lg md:text-7xl">
            Vault <span className="text-[#ff9966]">On</span> Mars
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-xl text-white/90 drop-shadow-md md:text-2xl">
            Build your Mars colony, face challenging hazards, discover alien
            secrets, and manage your settlement in this 2D pixel-art
            side-scrolling adventure.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/analytics"
              className="transform rounded-lg bg-[#ff9966] px-8 py-3 font-bold text-black transition-all hover:scale-105 hover:bg-[#ff8855]"
            >
              View Analytics
            </Link>
            <Link
              href="/achievements"
              className="transform rounded-lg border border-white/30 bg-white/10 px-8 py-3 font-bold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
            >
              Player Achievements
            </Link>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 transform animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white/70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-white">Latest News</h2>
            <Link
              href="/news"
              className="font-semibold text-[#ff9966] transition-colors hover:text-[#ff8855]"
            >
              View All News →
            </Link>
          </div>
          <div
            id="newsContainer"
            className="flex gap-8 overflow-x-auto scroll-smooth py-4"
          >
            {latestNews.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className="group min-w-[475px]"
              >
                <div className="h-full overflow-hidden rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm transition-all group-hover:border-[#ff9966]/50 group-hover:bg-white/10">
                  <div className="p-6">
                    <div className="mb-2 text-sm text-[#ff9966]">
                      {new Date(item.createdAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-[#ff9966]">
                      {item.title}
                    </h3>
                    <p className="mb-4 text-white/70">{item.excerpt}</p>
                    <div className="font-medium text-[#ff9966]">
                      Read More →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Game Features Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Game Features
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {gameFeatures.map((feature) => (
              <div key={feature.id} className="flex flex-col">
                <h3 className="mb-4 text-2xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="mb-6 text-white/70">{feature.description}</p>
                <Link
                  href={feature.link}
                  className="font-semibold text-[#ff9966] transition-colors hover:text-[#ff8855]"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold text-white">
                Yearly Turn-Based Gameplay
              </h3>
              <p className="text-white/70">
                Watch your colony evolve year by year as you make strategic
                decisions. Each turn advances time, completes construction
                projects, updates population, and triggers random events that
                can help or hinder your colony&apos;s growth.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold text-white">
                Pixel Art Aesthetic
              </h3>
              <p className="text-white/70">
                Experience Mars in beautiful 2D pixel art style. Our
                side-scrolling design offers an accessible yet deep gameplay
                experience, inspired by games like Kingdom Two Crowns but set in
                the challenging Martian environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Showcase */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black py-16">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/img1.jpg"
            alt="Mars Colony"
            fill
            className="object-cover"
            quality={80}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Join Our Community
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-center text-xl text-white/80">
            Connect with other Mars colonists, share strategies, and participate
            in community events.
          </p>

          <div className="flex justify-center space-x-8">
            <a
              href="https://discord.gg/vaultmars"
              className="flex items-center text-white transition-colors hover:text-[#ff9966]"
            >
              <svg
                className="mr-2 h-8 w-8"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path>
              </svg>
              Discord
            </a>
            <a
              href="https://twitter.com/vaultmars"
              className="flex items-center text-white transition-colors hover:text-[#ff9966]"
            >
              <svg
                className="mr-2 h-7 w-7"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
              Twitter
            </a>
            <a
              href="https://www.youtube.com/vaultmars"
              className="flex items-center text-white transition-colors hover:text-[#ff9966]"
            >
              <svg
                className="mr-2 h-8 w-8"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
              </svg>
              YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#ff9966]/20 to-black py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white">
            Ready to Colonize Mars?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-white/80">
            Join thousands of players building settlements, discovering alien
            secrets, and facing the challenges of Mars colonization in this
            unique side-scrolling adventure.
          </p>
          <Link
            href="/download"
            className="inline-block transform rounded-lg bg-[#ff9966] px-10 py-4 text-lg font-bold text-black transition-all hover:scale-105 hover:bg-[#ff8855]"
          >
            Download Now
          </Link>
        </div>
      </section>

      {/* Client-side script to add onWheel functionality */}
      <Script id="news-scroll" strategy="afterInteractive">
        {`
          (function() {
            const container = document.getElementById('newsContainer');
            if (container) {
              container.addEventListener('wheel', function(e) {
                if(e.deltaY !== 0) {
                  this.scrollLeft += e.deltaY;
                  e.preventDefault();
                }
              });
            }
          })();
        `}
      </Script>
    </HydrateClient>
  );
}
