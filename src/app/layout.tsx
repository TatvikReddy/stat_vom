import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Geist_Mono } from "next/font/google";
import { type Metadata } from "next";
import Link from "next/link";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { TRPCReactProvider } from "~/trpc/react";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vault On Mars Analytics",
  description: "View player achievements and colony statistics from the Mars Colony Simulator game",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased bg-black">
        <div className="relative min-h-screen">
          <ClerkProvider>
            <TRPCReactProvider>
              {/* Main Navigation */}
              <header className="fixed top-0 left-0 right-0 z-30 bg-black/80 backdrop-blur-md border-b border-white/10">
                <div className="container mx-auto px-4">
                  <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold text-white flex items-center">
                      V<span className="text-[#ff9966]">O</span>M Analytics
                    </Link>
                    
                    {/* Main Navigation Links */}
                    <nav className="hidden md:flex items-center space-x-6">
                      <Link href="/analytics" className="text-white hover:text-[#ff9966] transition-colors font-medium">
                        Analytics
                      </Link>
                      <Link href="/achievements" className="text-white hover:text-[#ff9966] transition-colors font-medium">
                        Achievements
                      </Link>
                      <Link href="/features" className="text-white hover:text-[#ff9966] transition-colors font-medium">
                        Features
                      </Link>
                      <Link href="/posts" className="text-white hover:text-[#ff9966] transition-colors font-medium">
                        Dev Updates
                      </Link>
                      <Link href="/news" className="text-white hover:text-[#ff9966] transition-colors font-medium">
                        News
                      </Link>
                      <Link href="/about" className="text-white hover:text-[#ff9966] transition-colors font-medium">
                        About
                      </Link>
                      <Link href="/download" className="text-white hover:text-[#ff9966] transition-colors font-medium">
                        Download
                      </Link>
                    </nav>
                    
                    {/* Auth Buttons */}
                    <div className="flex items-center gap-4">
                      <SignedOut>
                        <SignInButton>
                          <button className="rounded-lg bg-white/10 px-4 py-2 font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-all">
                            Log In
                          </button>
                        </SignInButton>
                        <SignUpButton>
                          <button className="rounded-lg bg-[#ff9966] px-4 py-2 font-semibold text-black hover:bg-[#ff8855] transition-all">
                            Sign Up
                          </button>
                        </SignUpButton>
                      </SignedOut>
                      <SignedIn>
                        <UserButton 
                          afterSignOutUrl="/"
                          appearance={{
                            elements: {
                              avatarBox: "h-10 w-10"
                            }
                          }}
                        />
                      </SignedIn>
                    </div>
                  </div>
                </div>
              </header>
              
              {/* Mobile Navigation Menu - Shown on smaller screens */}
              <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-black/90 backdrop-blur-md border-t border-white/10">
                <div className="flex justify-around items-center h-16">
                  <Link href="/" className="flex flex-col items-center justify-center text-white hover:text-[#ff9966] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="text-xs mt-1">Home</span>
                  </Link>
                  <Link href="/analytics" className="flex flex-col items-center justify-center text-white hover:text-[#ff9966] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="text-xs mt-1">Analytics</span>
                  </Link>
                  <Link href="/features" className="flex flex-col items-center justify-center text-white hover:text-[#ff9966] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    <span className="text-xs mt-1">Features</span>
                  </Link>
                  <Link href="/news" className="flex flex-col items-center justify-center text-white hover:text-[#ff9966] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    <span className="text-xs mt-1">News</span>
                  </Link>
                  <Link href="/download" className="flex flex-col items-center justify-center text-white hover:text-[#ff9966] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span className="text-xs mt-1">Download</span>
                  </Link>
                </div>
              </div>
              
              {/* Main content area with padding for fixed header */}
              <main className="pt-16 pb-16 md:pb-0">
                {children}
              </main>
              
              {/* Enhanced Footer */}
              <footer className="bg-black/90 border-t border-white/10 py-8 text-white z-10 mt-auto">
                <div className="container mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Column 1: About */}
                    <div>
                      <h3 className="text-lg font-bold mb-4">About VOM</h3>
                      <ul className="space-y-2">
                        <li><Link href="/about" className="text-white/80 hover:text-[#ff9966] transition-colors">Our Story</Link></li>
                        <li><Link href="/about/team" className="text-white/80 hover:text-[#ff9966] transition-colors">Team</Link></li>
                        <li><Link href="/about/mission" className="text-white/80 hover:text-[#ff9966] transition-colors">Mission</Link></li>
                      </ul>
                    </div>
                    
                    {/* Column 2: Game Features */}
                    <div>
                      <h3 className="text-lg font-bold mb-4">Game Features</h3>
                      <ul className="space-y-2">
                        <li><Link href="/features" className="text-white/80 hover:text-[#ff9966] transition-colors">All Features</Link></li>
                        <li><Link href="/features/exploration" className="text-white/80 hover:text-[#ff9966] transition-colors">Exploration</Link></li>
                        <li><Link href="/features/colony" className="text-white/80 hover:text-[#ff9966] transition-colors">Colony Management</Link></li>
                        <li><Link href="/features/research" className="text-white/80 hover:text-[#ff9966] transition-colors">Research</Link></li>
                      </ul>
                    </div>
                    
                    {/* Column 3: Community */}
                    <div>
                      <h3 className="text-lg font-bold mb-4">Community</h3>
                      <ul className="space-y-2">
                        <li><Link href="/news" className="text-white/80 hover:text-[#ff9966] transition-colors">News</Link></li>
                        <li><a href="https://discord.gg/vaultmars" className="text-white/80 hover:text-[#ff9966] transition-colors">Discord</a></li>
                        <li><a href="https://twitter.com/vaultmars" className="text-white/80 hover:text-[#ff9966] transition-colors">Twitter</a></li>
                      </ul>
                    </div>
                    
                    {/* Column 4: Legal */}
                    <div>
                      <h3 className="text-lg font-bold mb-4">Legal</h3>
                      <ul className="space-y-2">
                        <li><Link href="/legal/terms" className="text-white/80 hover:text-[#ff9966] transition-colors">Terms of Service</Link></li>
                        <li><Link href="/legal/privacy" className="text-white/80 hover:text-[#ff9966] transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/legal/cookies" className="text-white/80 hover:text-[#ff9966] transition-colors">Cookie Policy</Link></li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Copyright */}
                  <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <p className="text-white/60 text-sm">
                      Vault On Mars Analytics Dashboard • 2025 All Rights Reserved
                    </p>
                  </div>
                </div>
              </footer>
              
            </TRPCReactProvider>
          </ClerkProvider>
        </div>
      </body>
    </html>
  );
}