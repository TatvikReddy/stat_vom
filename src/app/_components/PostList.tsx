"use client";

import { useEffect } from "react";
import { api } from "~/trpc/react";
// Install this package with: npm install date-fns
import { formatDistanceToNow } from "date-fns";

export function PostList() {
  const { data: posts, isLoading, isError } = api.post.getAll.useQuery();
  
  useEffect(() => {
    if (posts?.length) {
      console.log("Posts loaded:", posts.length);
    }
  }, [posts]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="animate-pulse text-gray-400">Loading updates...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-red-400 text-center py-10">
        Failed to load developer updates.
      </div>
    );
  }

  if (!posts?.length) {
    return (
      <div className="text-gray-400 text-center py-10">
        No developer updates yet.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {posts?.map((post) => (
        <div 
          key={post.id} 
          className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10"
        >
          <h3 className="text-xl font-bold text-[#ff9966] mb-2">{post.title}</h3>
          <div className="text-gray-300 whitespace-pre-wrap mb-4">{post.content}</div>
          <div className="text-sm text-gray-400 flex justify-between">
            <span>Posted by: {post.name ?? "Developer"}</span>
            <span>
              {/* Use a safer approach to date formatting with proper type handling */}
              {(() => {
                // Ensure we're working with a valid date
                try {
                  if (!post.createdAt) return 'Recently posted';
                  
                  // Convert to Date safely
                  const date = new Date(post.createdAt);
                  
                  // Check if date is valid before calling formatDistanceToNow
                  if (isNaN(date.getTime())) return 'Recently posted';
                  
                  // Explicitly type the formatDistanceToNow function to ensure type safety
                  const formatDistanceFunc = formatDistanceToNow as (date: Date) => string;
                  return `${formatDistanceFunc(date)} ago`;
                } catch (_) { // Use underscore to indicate intentionally unused variable
                  return 'Recently posted';
                }
              })()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
