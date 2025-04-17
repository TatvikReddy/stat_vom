"use client";
import { useParams, useRouter } from "next/navigation";
import { api } from "~/trpc/react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

// Map of category IDs to display names
const CATEGORY_NAMES: Record<string, string> = {
  updates: "Game Updates",
  events: "Community Events",
  development: "Development",
  announcements: "Announcements",
};

export default function NewsPostPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  if (!id) {
    router.replace("/news");
    return null;
  }
  const postId = parseInt(id, 10);
  const {
    data: post,
    isLoading,
    error,
  } = api.news.getById.useQuery({ id: postId });
  if (isLoading) return <div>Loading...</div>;
  if (error || !post) {
    router.replace("/news");
    return null;
  }
  const formattedDate = format(new Date(post.createdAt), "MMMM d, yyyy");
  return (
    <main className="relative min-h-screen bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Image
          src={post.image ?? "/img1.jpg"}
          alt={post.title}
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      {/* Back to News */}
      <div className="absolute top-0 z-10 flex w-full items-center justify-start p-4">
        <Link
          href="/news"
          className="text-xl font-bold text-white transition-colors hover:text-[#ff9966]"
        >
          ← Back to News
        </Link>
      </div>

      {/* Article Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <article className="mx-auto max-w-4xl">
          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-4 text-[#ff9966]">
              {formattedDate} • {CATEGORY_NAMES[post.category] ?? "Misc"}
            </div>
            <h1 className="mb-8 text-4xl font-extrabold text-white md:text-5xl">
              {post.title}
            </h1>
            <p className="border-l-4 border-[#ff9966] pl-4 text-xl italic text-white/80">
              {post.excerpt}
            </p>
          </header>

          {/* Author info if available */}
          {post.authorName && (
            <div className="mb-8 flex items-center">
              <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#ff9966] to-orange-700">
                <span className="font-bold text-white">
                  {post.authorName.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-medium text-white">{post.authorName}</div>
                <div className="text-sm text-white/60">Staff Writer</div>
              </div>
            </div>
          )}

          {/* Article Body */}
          <div className="prose prose-lg prose-invert">
            {/* Format content with paragraphs */}
            {post.content.split("\n\n").map((paragraph: string, i: number) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Footer */}
          <footer className="mt-12 border-t border-white/10 pt-8">
            <div className="flex items-center justify-between">
              <Link
                href="/news"
                className="font-medium text-[#ff9966] transition-colors hover:text-[#ff8855]"
              >
                ← Back to News
              </Link>

              {/* Social Share Links */}
              <div className="flex gap-4">
                <button className="text-white/70 transition-colors hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </button>
                <button className="text-white/70 transition-colors hover:text-white">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </button>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </main>
  );
}

// Note: Metadata generation for a client component should be moved to a server file
// If needed, implement generateMetadata in a separate server-only module
