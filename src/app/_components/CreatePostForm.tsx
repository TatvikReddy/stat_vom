"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { api } from "~/trpc/react";
import type { TRPCClientErrorLike } from "@trpc/client";
import type { AppRouter } from "~/server/api/root";

export default function CreatePostForm() {
  const { user, isSignedIn } = useUser();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  // List of authorized developer IDs - add your Clerk user ID here
  const authorizedDevIds = [
    // Add your Clerk user ID here
    "user_2NF8fKs92o9PLKlO", // Example ID - replace with your actual developer IDs
  ];

  const isDeveloper = isSignedIn && user && authorizedDevIds.includes(user.id);

  const utils = api.useUtils();
  const createPost = api.post.create.useMutation({
    onSuccess: async () => {
      setTitle("");
      setContent("");
      setError("");
      await utils.post.getAll.invalidate();
    },
    onError: (e: TRPCClientErrorLike<AppRouter>) => {
      setError(e.message);
    }
  });

  if (!isDeveloper) {
    return null; // Don't render form for non-developers
  }

  // Added: handleSubmit with validation and confirmation.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) {
      setError("Title and content are required");
      return;
    }
    const nameToUse =
      user?.fullName?.trim() ? user.fullName : "Developer";
    if (
      !confirm(
        `Are you sure you want to post the update titled "${title}"?`
      )
    ) {
      return;
    }
    createPost.mutate({ title, content, name: nameToUse });
  };

  // Added: clear error on input change for improved UX.
  const handleInputChange = () => {
    if (error) setError("");
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-16 bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10">
      <h2 className="text-2xl font-bold text-[#ff9966] mb-6">
        Create Developer Update
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Update Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            handleInputChange();
          }}
          className="rounded-md px-4 py-2 bg-white/10 text-white border border-white/20 focus:border-[#ff9966] focus:outline-none"
        />
        <textarea
          placeholder="Update Content"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
            handleInputChange();
          }}
          className="rounded-md px-4 py-2 bg-white/10 text-white border border-white/20 focus:border-[#ff9966] focus:outline-none min-h-32"
        />
        {error && (
          <p className="text-red-400 text-sm">{error}</p>
        )}
        <button
          type="submit"
          disabled={createPost.isPending}
          className="px-4 py-2 bg-[#ff9966] text-black font-bold rounded-md hover:bg-[#ff8855] transition-colors disabled:opacity-50"
        >
          {createPost.isPending ? "Posting..." : "Post Update"}
        </button>
      </form>
    </div>
  );
}
