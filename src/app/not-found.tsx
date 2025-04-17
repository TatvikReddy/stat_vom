import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      {/* Background Image */}
      <Image
        src="/img1.jpg"
        alt="Page Not Found"
        fill
        className="brightness-30 z-0 object-cover"
        priority
      />

      {/* Content */}
      <div className="container relative z-10 flex h-screen flex-col items-center justify-center gap-6 px-4 py-24">
        <h1 className="text-6xl font-extrabold text-white">404</h1>
        <h2 className="text-3xl font-bold text-[#ff9966]">Colony Not Found</h2>

        <p className="mt-4 max-w-lg text-center text-xl text-white/80">
          The Mars colony you&apos;re looking for seems to have been lost in a
          dust storm. Let&apos;s get you back to base camp.
        </p>

        <Link
          href="/"
          className="mt-8 rounded-md bg-[#ff9966]/80 px-6 py-3 font-semibold text-white transition-colors hover:bg-[#ff9966]"
        >
          Return to Base
        </Link>
      </div>
    </main>
  );
}
