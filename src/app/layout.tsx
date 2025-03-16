import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Geist_Mono } from "next/font/google";
import { type Metadata } from "next";
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
              {/* Header */}
              <header className="fixed top-0 right-0 z-20 flex h-16 items-center justify-end gap-4 p-4">
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
              </header>
              
              {/* Main content area */}
              <main>
                {children}
              </main>
              
            </TRPCReactProvider>
          </ClerkProvider>
          
          {/* Footer overlaid on the bottom of content */}
          <footer className="absolute bottom-0 left-0 right-0 z-10 py-4 text-center text-white font-bold text-sm">
            Vault On Mars Analytics Dashboard • © 2025
          </footer>
        </div>
      </body>
    </html>
  );
}