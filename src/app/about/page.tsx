import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center">
      {/* Background Image */}
      <Image 
        src="/img1.jpg" 
        alt="About Vault On Mars" 
        fill 
        className="object-cover z-0 brightness-50" 
        priority
      />
      
      {/* Back to Home */}
      <div className="absolute top-0 w-full flex justify-start items-center p-4 z-10">
        <Link href="/" className="text-xl font-bold text-white hover:text-[#ff9966] transition-colors">
          ← Back to Home
        </Link>
      </div>
      
      {/* Main Content */}
      <div className="container relative z-10 flex flex-col items-center justify-start gap-8 px-4 py-20 mt-8 max-w-4xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-center text-white sm:text-[3.5rem]">
          About <span className="text-[#ff9966]">Vault On Mars</span>
        </h1>
        
        <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-white/10 w-full">
          <h2 className="text-2xl font-bold text-[#ff9966] mb-4">Our Mission</h2>
          <p className="text-white/90 mb-6 leading-relaxed">
            Vault On Mars is a colony management simulation that challenges players to establish and maintain a sustainable human presence on the red planet. Our mission is to create an engaging, scientifically-informed experience that inspires interest in space exploration and demonstrates the challenges and rewards of interplanetary colonization.
          </p>
        </div>
        
        {/* Faculty Sponsor */}
        <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-white/10 w-full mt-4">
          <h2 className="text-2xl font-bold text-[#ff9966] mb-6 text-center">Faculty Sponsor</h2>
          
          <div className="flex justify-center">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-700 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">EB</span>
              </div>
              <h3 className="text-xl font-bold text-white">Dr. Eric Becker</h3>
            </div>
          </div>
        </div>
        
        {/* Client Software Team */}
        <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-white/10 w-full mt-4">
          <h2 className="text-2xl font-bold text-[#ff9966] mb-6 text-center">Client Software Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-green-500 to-teal-700 mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">TRC</span>
              </div>
              <h3 className="text-xl font-bold text-white">Tatvik Reddy Chevuru</h3>
            </div>
            
            <div className="text-center">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-green-500 to-teal-700 mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">SS</span>
              </div>
              <h3 className="text-xl font-bold text-white">Surya Solaiappan</h3>
            </div>
            
            <div className="text-center">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-green-500 to-teal-700 mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">NR</span>
              </div>
              <h3 className="text-xl font-bold text-white">Nafiz Rahman</h3>
              <p className="text-white/70">Note-Taker</p>
            </div>
          </div>
        </div>
        
        {/* Server Software Team */}
        <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-white/10 w-full mt-4">
          <h2 className="text-2xl font-bold text-[#ff9966] mb-6 text-center">Server Software Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-orange-500 to-red-700 mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">SG</span>
              </div>
              <h3 className="text-xl font-bold text-white">Satyam Garg</h3>
            </div>
            
            <div className="text-center">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-orange-500 to-red-700 mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">DB</span>
              </div>
              <h3 className="text-xl font-bold text-white">Danielle Bryan</h3>
            </div>
            
            <div className="text-center">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-orange-500 to-red-700 mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">DB</span>
              </div>
              <h3 className="text-xl font-bold text-white">Daniyal Baig</h3>
              <p className="text-white/70">Point-Of-Contact</p>
            </div>
          </div>
        </div>
        
        {/* Analysis Engine Team */}
        <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-white/10 w-full mt-4">
          <h2 className="text-2xl font-bold text-[#ff9966] mb-6 text-center">Analysis Engine</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-purple-500 to-indigo-700 mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">AP</span>
              </div>
              <h3 className="text-xl font-bold text-white">Allison Philips</h3>
            </div>
            
            <div className="text-center">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-purple-500 to-indigo-700 mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">JP</span>
              </div>
              <h3 className="text-xl font-bold text-white">Joshua Perez</h3>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="mailto:contact@vaultonmars.com" 
            className="inline-block px-6 py-3 bg-[#ff9966]/80 hover:bg-[#ff9966] transition-colors rounded-md text-white font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </div>
      
    </main>
  );
}