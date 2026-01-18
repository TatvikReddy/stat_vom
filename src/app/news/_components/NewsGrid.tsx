"use client";

import Link from "next/link";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { api } from "~/trpc/react";
import type { NewsPost } from "~/server/db/schema";
import { format } from "date-fns";

// Map of category IDs to display names
const CATEGORY_NAMES: Record<string, string> = {
  updates: "Game Updates",
  events: "Community Events",
  development: "Development",
  announcements: "Announcements",
};

export function NewsGrid() {
  // Changed: add generic type parameter and default array cast for newsPosts
  const {
    data: newsPosts = [] as NewsPost[],
    isLoading,
    isError,
  } = api.news.getAll.useQuery<NewsPost[]>();
  const { user } = useUser();
  // Check if user is a developer
  const isDeveloper =
    (user?.publicMetadata as Record<string, unknown>)?.typeUser === "Dev";

  if (isLoading) {
    return (
      <div className="flex min-h-64 items-center justify-center">
        <div className="animate-pulse text-white/70">Loading news posts...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-lg border border-red-700/30 bg-red-900/20 p-4 text-red-200">
        Failed to load news posts. Please try again later.
      </div>
    );
  }

  if (!newsPosts || newsPosts.length === 0) {
    return (
      <div className="py-12 text-center">
        <h3 className="mb-4 text-2xl font-bold text-white">
          No News Posts Yet
        </h3>
        <p className="mb-6 text-white/70">
          Check back later for news and updates.
        </p>

        {/* Show "Create News" button for developers only */}
        {isDeveloper && (
          <Link
            href="/news/create"
            className="inline-block rounded-lg bg-[#ff9966] px-6 py-3 font-bold text-black transition-colors hover:bg-[#ff8855]"
          >
            Create News Post
          </Link>
        )}
      </div>
    );
  }
  // Get the featured (first/newest) post and ensure it's defined
  const featuredPost = newsPosts.length > 0 ? newsPosts[0] : null;
  // Rest of the posts
  const regularPosts = newsPosts.length > 1 ? newsPosts.slice(1) : [];

  return (
    <>
      {/* Show "Create News" button for developers only */}
      {isDeveloper && (
        <div className="mb-8 flex justify-end">
          <Link
            href="/news/create"
            className="inline-block rounded-lg bg-[#ff9966] px-6 py-3 font-bold text-black transition-colors hover:bg-[#ff8855]"
          >
            Create News Post
          </Link>
        </div>
      )}
      {/* Featured News - only show if we have a featured post */}{" "}
      {featuredPost && (
        <section className="bg-gradient-to-b from-black to-gray-900 py-12">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-3xl font-bold text-white">
              Latest Update
            </h2>

            <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={featuredPost.image ?? "/img1.jpg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-6">
                  <div className="mb-2 text-sm text-[#ff9966]">
                    {formatDate(featuredPost.createdAt)} •{" "}
                    {getCategoryName(featuredPost.category)}
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-white">
                    {featuredPost.title}
                  </h3>
                  <p className="mb-6 text-white/70">{featuredPost.excerpt}</p>
                  <Link
                    href={`/news/${featuredPost.id}`}
                    className="font-semibold text-[#ff9966] transition-colors hover:text-[#ff8855]"
                  >
                    Read Full Article →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* News Articles Grid */}
      <section className="bg-black py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-white">All News</h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((article) => (
              <Link
                key={article.id}
                href={`/news/${article.id}`}
                className="group"
              >
                <div className="h-full overflow-hidden rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm transition-all group-hover:border-[#ff9966]/50 group-hover:bg-white/10">
                  <div className="relative h-48">
                    {" "}
                    <Image
                      src={article.image ?? "/img1.jpg"}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2 text-sm text-[#ff9966]">
                      {formatDate(article.createdAt)} •{" "}
                      {getCategoryName(article.category)}
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-[#ff9966]">
                      {article.title}
                    </h3>
                    <p className="mb-4 text-white/70">{article.excerpt}</p>
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
    </>
  );
}

// Helper function to format dates consistently
function formatDate(date: Date | null): string {
  if (!date) return "Recently posted";

  try {
    return format(new Date(date), "MMMM d, yyyy");
  } catch {
    return "Recently posted";
  }
}

// Helper function to get category display name
function getCategoryName(categoryId: string): string {
  return CATEGORY_NAMES[categoryId] ?? "Misc";
}
