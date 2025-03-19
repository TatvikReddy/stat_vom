"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { api } from "~/trpc/react";

export default function CreatePostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  
  // Get user from Clerk
  const { user, isLoaded } = useUser();
  
  // Create post mutation
  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      setTitle("");
      setContent("");
      setSuccess(true);
      setError(null);
      setIsSubmitting(false);
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    },
    onError: (err) => {
      setError(err.message);
      setIsSubmitting(false);
    }
  });
  
  // Check if the user is a developer
  const isDeveloper = isLoaded && user?.publicMetadata?.typeUser === "Dev";
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !content) {
      setError("Title and content are required");
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      await createPost.mutateAsync({
        title,
        content
      });
    } catch {
      // Error is handled in the onError callback
    }
  };
  
  // Only render the form for developers
  if (!isLoaded) {
    return (
      <div className="w-full max-w-4xl mx-auto my-8 p-6 bg-gray-800 rounded-lg">
        <p className="text-gray-400">Checking user permissions...</p>
      </div>
    );
  }
  
  if (!isDeveloper) {
    return null;
  }
  
  return (
    <div className="w-full max-w-4xl mx-auto my-8 p-6 bg-gray-800 rounded-lg border border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-6">Create Developer Update</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
            disabled={isSubmitting}
          />
        </div>
        
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-300 mb-1">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
            disabled={isSubmitting}
          />
        </div>
        
        {error && (
          <div className="p-2 bg-red-900 text-white rounded">
            {error}
          </div>
        )}
        
        {success && (
          <div className="p-2 bg-green-800 text-white rounded">
            Post created successfully!
          </div>
        )}
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded disabled:opacity-50"
        >
          {isSubmitting ? "Creating..." : "Create Post"}
        </button>
      </form>
    </div>
  );
}
