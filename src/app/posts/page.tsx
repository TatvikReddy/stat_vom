import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { HydrateClient } from "~/trpc/server";
import CreatePostForm from "~/app/_components/CreatePostForm";
import { PostList } from "~/app/_components/PostList"; 

export const metadata = {
  title: "Vault On Mars - Developer Updates",
  description: "Latest updates from the Vault On Mars game development team",
};

export default function PostsPage() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* Background Image */}
      <Image 
        src="/img1.jpg" 
        alt="Mars Background" 
        fill 
        className="object-cover z-0 brightness-50 opacity-30"
        quality={100} 
        priority
      />
      
      {/* Back to Home */}
      <div className="absolute top-0 w-full flex justify-start items-center p-4 z-10">
        <Link href="/" className="text-xl font-bold text-white hover:text-[#ff9966] transition-colors">
          ← Back to Home
        </Link>
      </div>
      
      <div className="container mx-auto py-16 px-4 relative z-10">
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-12">
            <span className="text-white">Developer</span> <span className="text-[#ff9966]">Updates</span>
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-white/80 text-center mb-10">
              Get the latest news and updates from our development team about the Vault On Mars project.
              These posts are created by our developers to keep you informed about new features,
              bug fixes, and upcoming changes.
            </p>
          </div>
        </section>
        
        <HydrateClient>
          <Suspense fallback={<div className="text-white/70 text-center py-4">Loading developer tools...</div>}>
            <CreatePostForm />
          </Suspense>
          
          <Suspense fallback={<div className="text-white/70 text-center py-4">Loading posts...</div>}>
            <PostList />
          </Suspense>
        </HydrateClient>
      </div>
    </main>
  );
}
