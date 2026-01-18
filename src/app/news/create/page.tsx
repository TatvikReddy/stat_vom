import { type Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HydrateClient } from "~/trpc/server";
import { NewsCreateForm } from "../_components/NewsCreateForm";

export const metadata: Metadata = {
  title: "Create News Post - Vault On Mars",
  description: "Create a new news post for Vault On Mars",
};

export default function CreateNewsPage() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* Background Image */}
      <Image
        src="/img1.jpg"
        alt="Mars Background"
        fill
        className="z-0 object-cover opacity-30 brightness-50"
        quality={100}
        priority
      />

      {/* Back to News */}
      <div className="absolute top-0 z-10 flex w-full items-center justify-start p-4">
        <Link
          href="/news"
          className="text-xl font-bold text-white transition-colors hover:text-[#ff9966]"
        >
          ← Back to News
        </Link>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-16">
        <section className="mb-16">
          <h1 className="mb-12 text-center text-4xl font-extrabold tracking-tight md:text-5xl">
            <span className="text-white">Create</span>{" "}
            <span className="text-[#ff9966]">News Post</span>
          </h1>
        </section>

        <HydrateClient>
          <NewsCreateForm />
        </HydrateClient>
      </div>
    </main>
  );
}
