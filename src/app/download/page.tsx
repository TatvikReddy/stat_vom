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
      storage: "50 GB available space"
    },
    recommended: {
      os: "Windows 10/11 64-bit",
      processor: "Intel Core i7-8700K / AMD Ryzen 7 3700X",
      memory: "16 GB RAM",
      graphics: "NVIDIA GeForce RTX 2070 / AMD Radeon RX 5700 XT",
      directx: "Version 12",
      storage: "50 GB SSD"
    }
  };

  // Mock download versions
  const downloadVersions = [
    {
      id: 1,
      name: "Standard Edition",
      description: "The base game with all core features and gameplay mechanics.",
      price: "Free to Play",
      features: [
        "Full Mars colony management simulation",
        "Resource exploration and management",
        "Basic research and development",
        "Standard colonist management"
      ],
      downloadSize: "45 GB",
      buttonText: "Download Free",
      highlight: false
    },
    {
      id: 2,
      name: "Deluxe Edition",
      description: "Enhanced experience with additional content and exclusive features.",
      price: "$29.99",
      features: [
        "Everything in Standard Edition",
        "Exclusive vehicle and building designs",
        "Advanced research paths",
        "Expanded colonist specializations",
        "Digital soundtrack and artbook"
      ],
      downloadSize: "50 GB",
      buttonText: "Purchase & Download",
      highlight: true
    },
    {
      id: 3,
      name: "Ultimate Edition",
      description: "The complete Vault On Mars experience with all current and future DLC.",
      price: "$49.99",
      features: [
        "Everything in Deluxe Edition",
        "Season Pass for all future DLC",
        "Exclusive Ultimate Edition cosmetics",
        "Early access to new features",
        "Special in-game events",
        "Premium support"
      ],
      downloadSize: "55 GB",
      buttonText: "Purchase & Download",
      highlight: false
    }
  ];

  return (
    <HydrateClient>
      {/* Hero Section */}
      <section className="relative py-24 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-30 z-0">
          <Image 
            src="/img1.jpg" 
            alt="Download Vault On Mars" 
            fill 
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Download Vault On Mars</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Begin your journey to establish humanity&apos;s presence on the Red Planet. Choose your edition and prepare for launch.
          </p>
          <Link 
            href="#download-options" 
            className="px-8 py-3 bg-[#ff9966] text-black font-bold rounded-lg hover:bg-[#ff8855] transition-all transform hover:scale-105 inline-block"
          >
            View Download Options
          </Link>
        </div>
      </section>
      
      {/* Download Options */}
      <section id="download-options" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Choose Your Edition</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {downloadVersions.map((version) => (
              <div 
                key={version.id} 
                className={`bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border transition-all h-full ${
                  version.highlight 
                    ? "border-[#ff9966] transform md:scale-105 relative z-10" 
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                {version.highlight && (
                  <div className="bg-[#ff9966] text-black font-bold text-center py-2">
                    Most Popular
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{version.name}</h3>
                  <div className={`text-2xl font-bold mb-4 ${version.highlight ? "text-[#ff9966]" : "text-white/90"}`}>
                    {version.price}
                  </div>
                  <p className="text-white/70 mb-6">{version.description}</p>
                  
                  <div className="mb-8">
                    <div className="text-white font-medium mb-3">Features:</div>
                    <ul className="space-y-2">
                      {version.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className={`w-5 h-5 mr-2 flex-shrink-0 ${version.highlight ? "text-[#ff9966]" : "text-white/70"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-white/70 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-white/50 text-sm mb-6">
                    Download Size: {version.downloadSize}
                  </div>
                  
                  <Link 
                    href="#" 
                    className={`w-full py-3 font-bold rounded-lg transition-all text-center block ${
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
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">System Requirements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-6">Minimum Requirements</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-[#ff9966] font-medium">OS</div>
                  <div className="text-white/70 col-span-2">{systemRequirements.minimum.os}</div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-[#ff9966] font-medium">Processor</div>
                  <div className="text-white/70 col-span-2">{systemRequirements.minimum.processor}</div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-[#ff9966] font-medium">Memory</div>
                  <div className="text-white/70 col-span-2">{systemRequirements.minimum.memory}</div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-[#ff9966] font-medium">Graphics</div>
                  <div className="text-white/70 col-span-2">{systemRequirements.minimum.graphics}</div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-[#ff9966] font-medium">DirectX</div>
                  <div className="text-white/70 col-span-2">{systemRequirements.minimum.directx}</div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-[#ff9966] font-medium">Storage</div>
                  <div className="text-white/70 col-span-2">{systemRequirements.minimum.storage}</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-6">Recommended Requirements</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-[#ff9966] font-medium">OS</div>
                  <div className="text-white/70 col-span-2">{systemRequirements.recommended.os}</div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-[#ff9966] font-medium">Processor</div>
                  <div className="text-white/70 col-span-2">{systemRequirements.recommended.processor}</div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-[#ff9966] font-medium">Memory</div>
                  <div className="text-white/70 col-span-2">{systemRequirements.recommended.memory}</div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-[#ff9966] font-medium">Graphics</div>
                  <div className="text-white/70 col-span-2">{systemRequirements.recommended.graphics}</div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-[#ff9966] font-medium">DirectX</div>
                  <div className="text-white/70 col-span-2">{systemRequirements.recommended.directx}</div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-[#ff9966] font-medium">Storage</div>
                  <div className="text-white/70 col-span-2">{systemRequirements.recommended.storage}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Installation Guide */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Installation Guide</h2>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 p-8">
            <div className="max-w-3xl mx-auto">
              <div className="mb-10">
                <div className="flex items-start mb-6">
                  <div className="bg-[#ff9966] rounded-full w-8 h-8 flex items-center justify-center text-black font-bold mr-4 flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Download the Installer</h3>
                    <p className="text-white/70 mb-4">Select your preferred edition above and download the installer package to your computer.</p>
                    <div className="bg-white/10 rounded-md p-4">
                      <div className="text-white/80 text-sm">File name: <span className="font-mono">VaultOnMars_Installer_v1.0.exe</span></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="bg-[#ff9966] rounded-full w-8 h-8 flex items-center justify-center text-black font-bold mr-4 flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Run the Installer</h3>
                    <p className="text-white/70 mb-4">Launch the downloaded installer and follow the on-screen instructions. You may need to provide administrator permissions.</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="bg-[#ff9966] rounded-full w-8 h-8 flex items-center justify-center text-black font-bold mr-4 flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Choose Installation Location</h3>
                    <p className="text-white/70 mb-4">Select where you want to install the game. We recommend installing on an SSD for optimal performance.</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="bg-[#ff9966] rounded-full w-8 h-8 flex items-center justify-center text-black font-bold mr-4 flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Create Account</h3>
                    <p className="text-white/70 mb-4">During installation, you&apos;ll be prompted to create a Vault On Mars account or sign in with an existing one.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#ff9966] rounded-full w-8 h-8 flex items-center justify-center text-black font-bold mr-4 flex-shrink-0">5</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Launch the Game</h3>
                    <p className="text-white/70 mb-4">Once installation is complete, you can launch the game from your desktop shortcut or start menu.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">Troubleshooting</h3>
                <p className="text-white/70 mb-4">If you encounter any issues during installation or gameplay, please visit our <Link href="/support" className="text-[#ff9966] hover:underline">Support Center</Link> or contact our <Link href="/support/contact" className="text-[#ff9966] hover:underline">Technical Support Team</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-3">Can I transfer my game progress between devices?</h3>
              <p className="text-white/70">Yes, your game progress is tied to your Vault On Mars account and stored in the cloud. You can continue your game on any device by logging into your account.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-3">Is there a subscription fee?</h3>
              <p className="text-white/70">No, Vault On Mars does not require a subscription. The Standard Edition is free to play, while the Deluxe and Ultimate Editions are one-time purchases.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-3">Can I upgrade from the Standard Edition later?</h3>
              <p className="text-white/70">Yes, you can upgrade to the Deluxe or Ultimate Edition at any time. You&apos;ll only pay the difference between your current edition and the one you&apos;re upgrading to.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-3">Is the game available on consoles?</h3>
              <p className="text-white/70">Currently, Vault On Mars is only available on PC. We are exploring options to bring the game to consoles in the future.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-3">How often is the game updated?</h3>
              <p className="text-white/70">We release major updates quarterly, with smaller patches and hotfixes as needed. Ultimate Edition owners get early access to all new content.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-black text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Begin Your Mars Adventure?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Download Vault On Mars today and take the first step toward establishing humanity&apos;s presence on the Red Planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#download-options" 
              className="px-8 py-3 bg-[#ff9966] text-black font-bold rounded-lg hover:bg-[#ff8855] transition-all transform hover:scale-105"
            >
              Download Now
            </Link>
            <Link 
              href="/features" 
              className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/20 transition-all transform hover:scale-105 border border-white/30"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>
    </HydrateClient>
  );
}
