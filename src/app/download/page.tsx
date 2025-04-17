import Link from "next/link";
import Image from "next/image";

import { HydrateClient } from "~/trpc/server";

export default async function DownloadPage() {
  // Mock system requirements
  const systemRequirements = {
    minimum: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i5-6600K / AMD Ryzen 5 1600",
      memory: "8 GB RAM",
      graphics: "NVIDIA GeForce GTX 970 / AMD Radeon RX 570",
      directx: "Version 11",
      storage: "50 GB available space",
    },
    recommended: {
      os: "Windows 10/11 64-bit",
      processor: "Intel Core i7-8700K / AMD Ryzen 7 3700X",
      memory: "16 GB RAM",
      graphics: "NVIDIA GeForce RTX 2070 / AMD Radeon RX 5700 XT",
      directx: "Version 12",
      storage: "50 GB SSD",
    },
  };

  // Mock download versions
  const downloadVersions = [
    {
      id: 1,
      name: "Standard Edition",
      description:
        "The base game with all core features and gameplay mechanics.",
      price: "Free to Play",
      features: [
        "Full Mars colony management simulation",
        "Resource exploration and management",
        "Basic research and development",
        "Standard colonist management",
      ],
      downloadSize: "45 GB",
      buttonText: "Download Free",
      highlight: false,
    },
    {
      id: 2,
      name: "Deluxe Edition",
      description:
        "Enhanced experience with additional content and exclusive features.",
      price: "$29.99",
      features: [
        "Everything in Standard Edition",
        "Exclusive vehicle and building designs",
        "Advanced research paths",
        "Expanded colonist specializations",
        "Digital soundtrack and artbook",
      ],
      downloadSize: "50 GB",
      buttonText: "Purchase & Download",
      highlight: true,
    },
    {
      id: 3,
      name: "Ultimate Edition",
      description:
        "The complete Vault On Mars experience with all current and future DLC.",
      price: "$49.99",
      features: [
        "Everything in Deluxe Edition",
        "Season Pass for all future DLC",
        "Exclusive Ultimate Edition cosmetics",
        "Early access to new features",
        "Special in-game events",
        "Premium support",
      ],
      downloadSize: "55 GB",
      buttonText: "Purchase & Download",
      highlight: false,
    },
  ];

  return (
    <HydrateClient>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black py-24">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/img1.jpg"
            alt="Download Vault On Mars"
            fill
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
            Download Vault On Mars
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-white/80">
            Begin your journey to establish humanity&apos;s presence on the Red
            Planet. Choose your edition and prepare for launch.
          </p>
          <Link
            href="#download-options"
            className="inline-block transform rounded-lg bg-[#ff9966] px-8 py-3 font-bold text-black transition-all hover:scale-105 hover:bg-[#ff8855]"
          >
            View Download Options
          </Link>
        </div>
      </section>

      {/* Download Options */}
      <section id="download-options" className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Choose Your Edition
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {downloadVersions.map((version) => (
              <div
                key={version.id}
                className={`h-full overflow-hidden rounded-lg border bg-white/5 backdrop-blur-sm transition-all ${
                  version.highlight
                    ? "relative z-10 transform border-[#ff9966] md:scale-105"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                {version.highlight && (
                  <div className="bg-[#ff9966] py-2 text-center font-bold text-black">
                    Most Popular
                  </div>
                )}

                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    {version.name}
                  </h3>
                  <div
                    className={`mb-4 text-2xl font-bold ${version.highlight ? "text-[#ff9966]" : "text-white/90"}`}
                  >
                    {version.price}
                  </div>
                  <p className="mb-6 text-white/70">{version.description}</p>

                  <div className="mb-8">
                    <div className="mb-3 font-medium text-white">Features:</div>
                    <ul className="space-y-2">
                      {version.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className={`mr-2 h-5 w-5 flex-shrink-0 ${version.highlight ? "text-[#ff9966]" : "text-white/70"}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-sm text-white/70">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 text-sm text-white/50">
                    Download Size: {version.downloadSize}
                  </div>

                  <Link
                    href="#"
                    className={`block w-full rounded-lg py-3 text-center font-bold transition-all ${
                      version.highlight
                        ? "bg-[#ff9966] text-black hover:bg-[#ff8855]"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {version.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            System Requirements
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-6 text-xl font-bold text-white">
                Minimum Requirements
              </h3>

              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="font-medium text-[#ff9966]">OS</div>
                  <div className="col-span-2 text-white/70">
                    {systemRequirements.minimum.os}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="font-medium text-[#ff9966]">Processor</div>
                  <div className="col-span-2 text-white/70">
                    {systemRequirements.minimum.processor}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="font-medium text-[#ff9966]">Memory</div>
                  <div className="col-span-2 text-white/70">
                    {systemRequirements.minimum.memory}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="font-medium text-[#ff9966]">Graphics</div>
                  <div className="col-span-2 text-white/70">
                    {systemRequirements.minimum.graphics}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="font-medium text-[#ff9966]">DirectX</div>
                  <div className="col-span-2 text-white/70">
                    {systemRequirements.minimum.directx}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="font-medium text-[#ff9966]">Storage</div>
                  <div className="col-span-2 text-white/70">
                    {systemRequirements.minimum.storage}
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-6 text-xl font-bold text-white">
                Recommended Requirements
              </h3>

              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="font-medium text-[#ff9966]">OS</div>
                  <div className="col-span-2 text-white/70">
                    {systemRequirements.recommended.os}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="font-medium text-[#ff9966]">Processor</div>
                  <div className="col-span-2 text-white/70">
                    {systemRequirements.recommended.processor}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="font-medium text-[#ff9966]">Memory</div>
                  <div className="col-span-2 text-white/70">
                    {systemRequirements.recommended.memory}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="font-medium text-[#ff9966]">Graphics</div>
                  <div className="col-span-2 text-white/70">
                    {systemRequirements.recommended.graphics}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="font-medium text-[#ff9966]">DirectX</div>
                  <div className="col-span-2 text-white/70">
                    {systemRequirements.recommended.directx}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="font-medium text-[#ff9966]">Storage</div>
                  <div className="col-span-2 text-white/70">
                    {systemRequirements.recommended.storage}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Installation Guide
          </h2>

          <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="mx-auto max-w-3xl">
              <div className="mb-10">
                <div className="mb-6 flex items-start">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#ff9966] font-bold text-black">
                    1
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      Download the Installer
                    </h3>
                    <p className="mb-4 text-white/70">
                      Select your preferred edition above and download the
                      installer package to your computer.
                    </p>
                    <div className="rounded-md bg-white/10 p-4">
                      <div className="text-sm text-white/80">
                        File name:{" "}
                        <span className="font-mono">
                          VaultOnMars_Installer_v1.0.exe
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6 flex items-start">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#ff9966] font-bold text-black">
                    2
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      Run the Installer
                    </h3>
                    <p className="mb-4 text-white/70">
                      Launch the downloaded installer and follow the on-screen
                      instructions. You may need to provide administrator
                      permissions.
                    </p>
                  </div>
                </div>

                <div className="mb-6 flex items-start">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#ff9966] font-bold text-black">
                    3
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      Choose Installation Location
                    </h3>
                    <p className="mb-4 text-white/70">
                      Select where you want to install the game. We recommend
                      installing on an SSD for optimal performance.
                    </p>
                  </div>
                </div>

                <div className="mb-6 flex items-start">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#ff9966] font-bold text-black">
                    4
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      Create Account
                    </h3>
                    <p className="mb-4 text-white/70">
                      During installation, you&apos;ll be prompted to create a
                      Vault On Mars account or sign in with an existing one.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#ff9966] font-bold text-black">
                    5
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      Launch the Game
                    </h3>
                    <p className="mb-4 text-white/70">
                      Once installation is complete, you can launch the game
                      from your desktop shortcut or start menu.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-white/20 bg-white/10 p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  Troubleshooting
                </h3>
                <p className="mb-4 text-white/70">
                  If you encounter any issues during installation or gameplay,
                  please visit our{" "}
                  <Link
                    href="/support"
                    className="text-[#ff9966] hover:underline"
                  >
                    Support Center
                  </Link>{" "}
                  or contact our{" "}
                  <Link
                    href="/support/contact"
                    className="text-[#ff9966] hover:underline"
                  >
                    Technical Support Team
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <div className="mx-auto max-w-3xl space-y-6">
            <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-3 text-xl font-bold text-white">
                Can I transfer my game progress between devices?
              </h3>
              <p className="text-white/70">
                Yes, your game progress is tied to your Vault On Mars account
                and stored in the cloud. You can continue your game on any
                device by logging into your account.
              </p>
            </div>

            <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-3 text-xl font-bold text-white">
                Is there a subscription fee?
              </h3>
              <p className="text-white/70">
                No, Vault On Mars does not require a subscription. The Standard
                Edition is free to play, while the Deluxe and Ultimate Editions
                are one-time purchases.
              </p>
            </div>

            <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-3 text-xl font-bold text-white">
                Can I upgrade from the Standard Edition later?
              </h3>
              <p className="text-white/70">
                Yes, you can upgrade to the Deluxe or Ultimate Edition at any
                time. You&apos;ll only pay the difference between your current
                edition and the one you&apos;re upgrading to.
              </p>
            </div>

            <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-3 text-xl font-bold text-white">
                Is the game available on consoles?
              </h3>
              <p className="text-white/70">
                Currently, Vault On Mars is only available on PC. We are
                exploring options to bring the game to consoles in the future.
              </p>
            </div>

            <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-3 text-xl font-bold text-white">
                How often is the game updated?
              </h3>
              <p className="text-white/70">
                We release major updates quarterly, with smaller patches and
                hotfixes as needed. Ultimate Edition owners get early access to
                all new content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-black py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-4xl font-bold text-white">
            Ready to Begin Your Mars Adventure?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-white/80">
            Download Vault On Mars today and take the first step toward
            establishing humanity&apos;s presence on the Red Planet.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="#download-options"
              className="transform rounded-lg bg-[#ff9966] px-8 py-3 font-bold text-black transition-all hover:scale-105 hover:bg-[#ff8855]"
            >
              Download Now
            </Link>
            <Link
              href="/features"
              className="transform rounded-lg border border-white/30 bg-white/10 px-8 py-3 font-bold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>
    </HydrateClient>
  );
}
