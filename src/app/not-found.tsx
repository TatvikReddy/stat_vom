import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col items-center">
      {/* Background Image */}
      <Image 
        src="/img1.jpg" 
        alt="Page Not Found" 
        fill 
        className="object-cover z-0 brightness-30" 
        quality={100}
        priority
      />
      
      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center justify-center gap-6 px-4 py-24 h-screen">
        <h1 className="text-6xl font-extrabold text-white">404</h1>
        <h2 className="text-3xl font-bold text-[#ff9966]">Colony Not Found</h2>
        
        <p className="text-xl text-center max-w-lg text-white/80 mt-4">
          The Mars colony you&apos;re looking for seems to have been lost in a dust storm. Let&apos;s get you back to base camp.
        </p>
        
        <Link 
          href="/" 
          className="mt-8 px-6 py-3 bg-[#ff9966]/80 hover:bg-[#ff9966] transition-colors rounded-md text-white font-semibold"
        >
          Return to Base
        </Link>
      </div>
    </main>
  );
}