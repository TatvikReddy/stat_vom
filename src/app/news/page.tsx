import Link from "next/link";
import Image from "next/image";
import { type Metadata } from "next";
import { HydrateClient } from "~/trpc/server";
import { NewsGrid } from "./_components/NewsGrid";

export const metadata: Metadata = {
  title: "News - Vault On Mars",
  description: "Latest news, updates, and announcements for Vault On Mars",
};

export default async function NewsPage() {
  // Categories for filtering - these match the ones in NewsCreateForm
  const categories = [
    { id: "updates", name: "Game Updates", slug: "updates" },
    { id: "events", name: "Community Events", slug: "events" },
    { id: "development", name: "Development", slug: "development" },
    { id: "announcements", name: "Announcements", slug: "announcements" },
  ];

  // Mock data for featured and list of news
  const featuredNews = {
    id: 1,
    title: "Major Update: Olympus Mons Expansion",
    date: "March 18, 2025",
    category: "Game Updates",
    excerpt: "Explore the largest volcano in the solar system with our new expansion. Discover rare minerals and face unique challenges in this harsh environment.",
    image: "/img1.jpg",
    link: "/news/olympus-mons-expansion",
  };
  const newsArticles = [
    { id: 2, title: "New Mars Colony Update", date: "March 15, 2025", category: "Game Updates", excerpt: "Explore the new Olympus Mons region and discover rare resources.", image: "/img1.jpg", link: "/news/new-mars-colony-update" },
    { id: 3, title: "Community Challenge: Survive the Dust Storm", date: "March 10, 2025", category: "Community Events", excerpt: "Join our community event and test your colony's resilience against the harshest Martian dust storms.", image: "/img1.jpg", link: "/news/community-challenge-dust-storm" },
    { id: 4, title: "Research Breakthrough: Water Recycling", date: "March 5, 2025", category: "Development", excerpt: "New technology allows for 95% water efficiency in your colony. Learn how to implement this system.", image: "/img1.jpg", link: "/news/research-breakthrough-water" },
    // Additional mock articles
    { id: 5, title: "Vault On Mars: Q1 2025 Roadmap", date: "February 28, 2025", category: "Announcements", excerpt: "Check out our development roadmap for the first quarter of 2025. New features, improvements, and more!", image: "/img1.jpg", link: "/news/q1-2025-roadmap" },
    { id: 6, title: "Introducing New Colony Templates", date: "February 20, 2025", category: "Game Updates", excerpt: "Start your Mars adventure with specialized colony templates designed for different playstyles.", image: "/img1.jpg", link: "/news/new-colony-templates" },
    { id: 7, title: "Community Spotlight: Best Colony Designs", date: "February 15, 2025", category: "Community Events", excerpt: "See the most efficient and creative colony designs from our community members.", image: "/img1.jpg", link: "/news/community-spotlight-colony-designs" },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative bg-black py-20">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/img1.jpg"
            alt="Mars News"
            fill
            className="object-cover"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Latest News
          </h1>
          <p className="max-w-3xl text-xl text-white/80">
            Stay updated with the latest announcements, game updates, and
            community events for Vault On Mars.
          </p>
        </div>
      </section>

      {/* News Categories */}
      <section className="border-b border-white/10 bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/news"
              className="rounded-lg bg-[#ff9966] px-4 py-2 font-medium text-black transition-all hover:bg-[#ff8855]"
            >
              All News
            </Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/news/category/${category.slug}`}
                className="rounded-lg bg-white/10 px-4 py-2 font-medium text-white transition-all hover:bg-white/20"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">Featured News</h2>
          <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative h-64">
                <Image src={featuredNews.image} alt={featuredNews.title} fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <div className="text-[#ff9966] text-sm mb-2">{featuredNews.date} • {featuredNews.category}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{featuredNews.title}</h3>
                <p className="text-white/70 mb-6">{featuredNews.excerpt}</p>
                <Link href={featuredNews.link} className="text-[#ff9966] hover:text-[#ff8855] transition-colors font-semibold">
                  Read Full Article →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Articles Grid */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">All News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map(article => (
              <Link key={article.id} href={article.link} className="group">
                <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5 h-full transition-all group-hover:border-[#ff9966]/50 group-hover:bg-white/10">
                  <div className="relative h-48">
                    <Image src={article.image} alt={article.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="text-[#ff9966] text-sm mb-2">{article.date} • {article.category}</div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ff9966] transition-colors">{article.title}</h3>
                    <p className="text-white/70 mb-4">{article.excerpt}</p>
                    <div className="text-[#ff9966] font-medium">Read More →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#ff9966] text-black font-medium">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all">3</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <HydrateClient>
        <NewsGrid />
      </HydrateClient>

      {/* Newsletter Subscription */}
      <section className="bg-gradient-to-r from-[#ff9966]/20 to-black py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white">Stay Updated</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/80">
            Subscribe to our newsletter to receive the latest news and updates
            directly to your inbox.
          </p>

          <form className="mx-auto flex max-w-lg gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-white focus:border-[#ff9966] focus:outline-none"
            />
            <button
              type="submit"
              className="whitespace-nowrap rounded-lg bg-[#ff9966] px-6 py-3 font-bold text-black transition-all hover:bg-[#ff8855]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
