"use client";

import { api } from "~/trpc/react";

// Define the post shape for better type safety
interface Post {
  id: number;
  name: string | null;
  authorId: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date | null;
}

export default function PostList() {
  // Fetch posts with proper typing
  const { data: posts, isLoading } = api.post.getAll.useQuery<Post[]>();

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Latest Developer Updates</h2>
      
      {isLoading ? (
        <div className="flex justify-center py-10">
          <div className="loader">Loading...</div>
        </div>
      ) : posts && posts.length > 0 ? (
        <div className="space-y-8">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700"
            >
              <h3 className="text-xl font-bold text-orange-400 mb-2">{post.title}</h3>
              <p className="text-gray-300 mb-4 whitespace-pre-wrap">{post.content}</p>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span>Posted by: Developer</span>
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-gray-400">
          <p>No developer updates available yet.</p>
        </div>
      )}
    </div>
  );
}
