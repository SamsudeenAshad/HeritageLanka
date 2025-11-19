import type { Metadata } from "next";
import { Cinzel, Lato } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({ 
  subsets: ["latin"],
  variable: '--font-cinzel',
  weight: ['400', '600', '700']
});

const lato = Lato({ 
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  variable: '--font-lato'
});

export const metadata: Metadata = {
  title: "HeritageLanka - Your Unified Travel Companion",
  description: "Plan, guide, and manage your perfect adventure with one intelligent platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${lato.variable}`}>
      <body className={lato.className}>
        {/* Desktop Navigation - Top */}
        <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex justify-between items-center h-24">
              {/* Logo */}
              <div className="flex items-center">
                <div className="text-white">
                  <svg width="120" height="60" viewBox="0 0 120 60" className="fill-current text-gray-800">
                    <text x="10" y="35" fontFamily="serif" fontSize="28" fontWeight="bold" fill="currentColor">Love</text>
                    <text x="10" y="55" fontFamily="sans-serif" fontSize="10" letterSpacing="2" fill="currentColor">SRI LANKA</text>
                  </svg>
                </div>
              </div>
              
              {/* Navigation Menu */}
              <div className="flex items-center gap-8">
                <a href="#" className="text-gray-700 hover:text-primary-600 transition text-sm uppercase tracking-wider font-medium">Home</a>
                <a href="#" className="text-gray-700 hover:text-primary-600 transition text-sm uppercase tracking-wider font-medium">About Us</a>
                <a href="#" className="text-gray-700 hover:text-primary-600 transition text-sm uppercase tracking-wider font-medium">Planning a Trip</a>
                <a href="#" className="text-gray-700 hover:text-primary-600 transition text-sm uppercase tracking-wider font-medium">Destinations</a>
                <a href="#" className="text-gray-700 hover:text-primary-600 transition text-sm uppercase tracking-wider font-medium">Key Experiences</a>
                <a href="#" className="text-gray-700 hover:text-primary-600 transition text-sm uppercase tracking-wider font-medium">Journal</a>
                <a href="#" className="text-gray-700 hover:text-primary-600 transition text-sm uppercase tracking-wider font-medium">Media</a>
              </div>

              {/* Search Bar */}
              <div className="flex items-center">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-64 px-6 py-3 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary-600 transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation - Bottom */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md shadow-2xl border-t border-gray-200">
          <div className="px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-sm flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-base font-serif">HL</span>
                </div>
                <span className="text-lg font-bold font-serif bg-gradient-to-r from-primary-700 to-accent-700 bg-clip-text text-transparent">
                  HeritageLanka
                </span>
              </div>
              <button className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-sm hover:shadow-lg transition-all duration-300 text-sm font-medium uppercase tracking-wide">
                Menu
              </button>
            </div>
          </div>
        </nav>

        {/* Add padding to body for fixed navbars */}
        <div className="md:pt-24 pb-24 md:pb-0">
          {children}
        </div>

        <footer className="relative bg-cover bg-center py-16 px-6" style={{backgroundImage: 'url(/bg5.jpg)'}}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Top Navigation Links */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 text-white text-sm uppercase tracking-widest">
              <a href="#" className="hover:text-white/80 transition">Home</a>
              <a href="#" className="hover:text-white/80 transition">Destinations</a>
              <a href="#" className="hover:text-white/80 transition">Planning a Trip</a>
              <a href="#" className="hover:text-white/80 transition">Key Experiences</a>
              <a href="#" className="hover:text-white/80 transition">Contact Us</a>
            </div>

            {/* Main Footer Content */}
            <div className="grid md:grid-cols-3 gap-12 mb-12 text-white">
              {/* Connect With Us */}
              <div className="text-center md:text-left">
                <h3 className="text-sm uppercase tracking-widest mb-6 font-semibold">Connect With Us</h3>
                <div className="flex justify-center md:justify-start gap-4">
                  <a href="#" className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/20 transition">
                    <span className="text-lg">f</span>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/20 transition">
                    <span className="text-lg">in</span>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/20 transition">
                    <span className="text-lg">t</span>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/20 transition">
                    <span className="text-lg">p</span>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/20 transition">
                    <span className="text-lg">yt</span>
                  </a>
                </div>
              </div>

              {/* An Initiative By */}
              <div className="text-center">
                <h3 className="text-sm uppercase tracking-widest mb-6 font-semibold">An Initiative By</h3>
                <div className="bg-white/10 backdrop-blur-sm p-4 inline-block">
                  <p className="font-serif text-lg font-bold">SRI LANKA<br/>TOURISM<br/>ALLIANCE</p>
                </div>
              </div>

              {/* Partners */}
              <div className="text-center md:text-right">
                <div className="mb-8">
                  <h3 className="text-sm uppercase tracking-widest mb-4 font-semibold">Web and Digital Partner</h3>
                  <div className="inline-block">
                    <p className="font-serif text-2xl font-bold">ANTYRA</p>
                    <p className="text-xs tracking-widest">SOLUTIONS</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-4 font-semibold">Branding Partner</h3>
                  <div className="inline-block">
                    <p className="font-serif text-2xl font-bold italic">audacity</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/30 pt-8 text-center text-white/80 text-sm">
              <p className="mb-2">POWERED BY <span className="font-semibold">TALES OF CEYLON</span></p>
              <p>CONCEPT AND DESIGN BY <span className="font-semibold text-primary-400">ANTYRA SOLUTIONS</span></p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
