import { Suspense } from "react";
import { HydrateClient } from "~/trpc/server";
import CreatePostForm from "~/app/_components/CreatePostForm";
import PostList from "~/app/_components/PostList"; 

export const metadata = {
  title: "Mars Settlement - Developer Updates",
  description: "Latest updates from the Mars Settlement game development team",
};

export default function PostsPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <div className="container mx-auto py-16 px-4">
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-12">
            Developer <span className="text-[#ff9966]">Updates</span>
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-300 text-center mb-10">
              Get the latest news and updates from our development team about the Mars Settlement project.
              These posts are created by our developers to keep you informed about new features,
              bug fixes, and upcoming changes.
            </p>
          </div>
        </section>
        
        <HydrateClient>
          <Suspense fallback={<div>Loading developer tools...</div>}>
            <CreatePostForm />
          </Suspense>
          
          <Suspense fallback={<div>Loading posts...</div>}>
            <PostList />
          </Suspense>
        </HydrateClient>
      </div>
    </main>
  );
}
