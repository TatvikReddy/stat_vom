"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { api } from "~/trpc/react";
import type { TRPCClientErrorLike } from "@trpc/client";
import type { AppRouter } from "~/server/api/root";

// Available categories for the news posts
const CATEGORIES = [
  { id: "updates", name: "Game Updates" },
  { id: "events", name: "Community Events" },
  { id: "development", name: "Development" },
  { id: "announcements", name: "Announcements" },
];

const defaultCategory = CATEGORIES[0]?.id ?? "";

export function NewsCreateForm() {
  const router = useRouter();
  const { user, isSignedIn } = useUser();
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(defaultCategory);
  const [error, setError] = useState("");
  // Ensure publicMetadata is defined and typeUser is checked safely
  const isDeveloper =
    isSignedIn &&
    (user?.publicMetadata as { typeUser?: string } | undefined)?.typeUser ===
      "Dev";

  const utils = api.useUtils();
  const createNews = api.news.create.useMutation({
    onSuccess: async () => {
      resetForm();
      await utils.news?.getAll?.invalidate();
      router.push("/news");
    },
    onError: (e: TRPCClientErrorLike<AppRouter>) => {
      // Use type guard and optional chaining for error message
      const err = e as Partial<{
        data?: { message?: string };
        message?: string;
      }>;
      setError(err?.data?.message ?? err?.message ?? "An error occurred");
    },
  });

  // Reset form after submission
  const resetForm = () => {
    setTitle("");
    setExcerpt("");
    setContent("");
    setCategory(defaultCategory);
    setError("");
  };

  // Show a developer-only UI if the user is not a developer
  if (!isDeveloper) {
    return (
      <div className="p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold text-white">
          Developer Access Only
        </h2>
        <p className="text-white/70">
          Only team members with developer access can create news posts.
        </p>
      </div>
    );
  }

  // Form validation and submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !excerpt || !content || !category) {
      setError("All fields are required");
      return;
    }
    if (excerpt.length < 10) {
      setError("Description must be at least 10 characters");
      return;
    }
    if (content.length < 20) {
      setError("Content must be at least 20 characters");
      return;
    }
    if (!confirm(`Are you sure you want to publish "${title}"?`)) {
      return;
    }
    createNews.mutate({
      title,
      excerpt,
      content,
      category,
    });
  };

  const handleInputChange = () => {
    if (error) setError("");
  };

  return (
    <div className="mx-auto max-w-4xl rounded-xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm">
      <h2 className="mb-6 text-3xl font-bold text-[#ff9966]">
        Create News Post
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="title" className="mb-2 font-medium text-white">
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Enter post title"
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTitle(e.target.value);
                handleInputChange();
              }}
              className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white focus:border-[#ff9966] focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="category" className="mb-2 font-medium text-white">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setCategory(e.target.value);
                handleInputChange();
              }}
              className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white focus:border-[#ff9966] focus:outline-none"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="excerpt" className="mb-2 font-medium text-white">
            Short Description
          </label>
          <textarea
            id="excerpt"
            placeholder="Brief description for the news listing (100-200 characters)"
            value={excerpt}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setExcerpt(e.target.value);
              handleInputChange();
            }}
            maxLength={255}
            className="min-h-20 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white focus:border-[#ff9966] focus:outline-none"
          />
          <span className="mt-1 text-xs text-white/50">
            {excerpt.length}/255 characters
          </span>
        </div>

        <div className="flex flex-col">
          <label htmlFor="content" className="mb-2 font-medium text-white">
            Content
          </label>
          <textarea
            id="content"
            placeholder="Full content of the news post"
            value={content}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setContent(e.target.value);
              handleInputChange();
            }}
            className="min-h-64 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white focus:border-[#ff9966] focus:outline-none"
          />
        </div>

        {error && (
          <div className="rounded-lg border border-red-500/50 bg-red-500/20 px-4 py-3 text-red-200">
            {error}
          </div>
        )}

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => router.push("/news")}
            className="rounded-lg bg-white/10 px-6 py-3 font-medium text-white transition-colors hover:bg-white/20"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={createNews.status === "pending"}
            className="rounded-lg bg-[#ff9966] px-6 py-3 font-bold text-black transition-colors hover:bg-[#ff8855] disabled:opacity-50"
          >
            {createNews.status === "pending" ? "Publishing..." : "Publish Post"}
          </button>
        </div>
      </form>
    </div>
  );
}
