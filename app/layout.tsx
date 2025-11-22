import type { Metadata } from "next";
import Link from "next/link";
import { Cinzel, Lato } from "next/font/google";
import { FaHome, FaInfoCircle, FaMapMarkedAlt, FaCompass, FaCalendarAlt } from 'react-icons/fa';
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
        <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex justify-between items-center h-24">
              {/* Logo */}
              <div className="flex items-center">
                <div className="text-white">
                  <svg width="160" height="60" viewBox="0 0 160 60" className="fill-current text-white">
                    <text x="10" y="35" fontFamily="serif" fontSize="24" fontWeight="bold" fill="currentColor">HERITAGE</text>
                    <text x="10" y="55" fontFamily="sans-serif" fontSize="10" letterSpacing="2" fill="currentColor">LANKA</text>
                  </svg>
                </div>
              </div>
              
              {/* Navigation Menu */}
              <div className="flex items-center gap-8">
                <Link href="/" className="flex flex-col items-center gap-1 text-white hover:text-orange-400 transition text-xs uppercase tracking-wider font-medium">
                  <FaHome className="text-lg" />
                  <span>Home</span>
                </Link>
                <Link href="/about" className="flex flex-col items-center gap-1 text-white hover:text-orange-400 transition text-xs uppercase tracking-wider font-medium">
                  <FaInfoCircle className="text-lg" />
                  <span>About</span>
                </Link>
                <Link href="/plan" className="flex flex-col items-center gap-1 text-white hover:text-orange-400 transition text-xs uppercase tracking-wider font-medium">
                  <FaCalendarAlt className="text-lg" />
                  <span>Plan</span>
                </Link>
                <Link href="/places" className="flex flex-col items-center gap-1 text-white hover:text-orange-400 transition text-xs uppercase tracking-wider font-medium">
                  <FaMapMarkedAlt className="text-lg" />
                  <span>Places</span>
                </Link>
                <Link href="/explore" className="flex flex-col items-center gap-1 text-white hover:text-orange-400 transition text-xs uppercase tracking-wider font-medium">
                  <FaCompass className="text-lg" />
                  <span>Explore</span>
                </Link>
              </div>

              {/* Search Bar & Live Demo */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-64 px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-sm text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white/30 transition"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-orange-400 transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
                
                {/* Live Demo Button */}
                <Link href="/live-demo" className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 border border-orange-400/50">
                  <FaPlay className="text-xs" />
                  <span>Live Demo</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation - Bottom */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md shadow-2xl border-t border-gray-200">
          <div className="px-2 py-3">
            <div className="flex justify-around items-center">
              <Link href="/" className="flex flex-col items-center gap-1 text-gray-600 hover:text-primary-600 transition-colors py-2 px-3">
                <FaHome className="text-xl" />
                <span className="text-xs">Home</span>
              </Link>
              <Link href="/about" className="flex flex-col items-center gap-1 text-gray-600 hover:text-primary-600 transition-colors py-2 px-3">
                <FaInfoCircle className="text-xl" />
                <span className="text-xs">About</span>
              </Link>
              <Link href="/plan" className="flex flex-col items-center gap-1 text-gray-600 hover:text-primary-600 transition-colors py-2 px-3">
                <FaCalendarAlt className="text-xl" />
                <span className="text-xs">Plan</span>
              </Link>
              <Link href="/places" className="flex flex-col items-center gap-1 text-gray-600 hover:text-primary-600 transition-colors py-2 px-3">
                <FaMapMarkedAlt className="text-xl" />
                <span className="text-xs">Places</span>
              </Link>
              <Link href="/explore" className="flex flex-col items-center gap-1 text-gray-600 hover:text-primary-600 transition-colors py-2 px-3">
                <FaCompass className="text-xl" />
                <span className="text-xs">Explore</span>
              </Link>
              <Link href="/live-demo" className="flex flex-col items-center gap-1 text-orange-600 hover:text-orange-700 transition-colors py-2 px-3">
                <FaPlay className="text-xl" />
                <span className="text-xs font-semibold">Demo</span>
              </Link>
                <span className="text-xs">Explore</span>
              </Link>
            </div>
          </div>
        </nav>

        {/* Add padding to body for fixed navbars */}
        <div className="pb-24 md:pb-0">
          {children}
        </div>

        <footer className="relative bg-cover bg-center py-16 px-6" style={{backgroundImage: 'url(/bg5.jpg)'}}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Top Navigation Links */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 text-white text-sm uppercase tracking-widest">
              <Link href="/" className="hover:text-white/80 transition">Home</Link>
              <Link href="/about" className="hover:text-white/80 transition">About</Link>
              <Link href="/plan" className="hover:text-white/80 transition">Plan</Link>
              <Link href="/places" className="hover:text-white/80 transition">Places</Link>
              <Link href="/explore" className="hover:text-white/80 transition">Explore</Link>
            </div>

            {/* Main Footer Content */}
            <div className="grid md:grid-cols-3 gap-12 mb-12 text-white">
              {/* Connect With Us */}
              <div className="text-center md:text-left">
                <h3 className="text-sm uppercase tracking-widest mb-6 font-semibold">Connect With Us</h3>
                <div className="flex justify-center md:justify-start gap-4">
                  <a href="#" className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/20 transition" aria-label="Facebook">
                    <span className="text-lg">f</span>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/20 transition" aria-label="LinkedIn">
                    <span className="text-lg">in</span>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/20 transition" aria-label="Twitter">
                    <span className="text-lg">𝕏</span>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/20 transition" aria-label="Instagram">
                    <span className="text-lg">📷</span>
                  </a>
                </div>
              </div>

              {/* About Heritage Lanka */}
              <div className="text-center">
                <h3 className="text-sm uppercase tracking-widest mb-6 font-semibold">About Heritage Lanka</h3>
                <div className="bg-white/10 backdrop-blur-sm p-6 inline-block rounded-lg">
                  <p className="font-serif text-xl font-bold mb-2">HERITAGE<br/>LANKA</p>
                  <p className="text-xs tracking-wide">Your Unified Travel Platform<br/>for Sri Lanka</p>
                </div>
              </div>

              {/* Development Partner */}
              <div className="text-center md:text-right">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-4 font-semibold">Developed By</h3>
                  <div className="inline-block">
                    <p className="font-serif text-3xl font-bold tracking-wide">TetraNeurons</p>
                    <p className="text-xs tracking-widest mt-1 text-white/80">Innovation in Travel Technology</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/30 pt-8 text-center text-white/80 text-sm">
              <p className="mb-2">© 2024 Heritage Lanka. All rights reserved.</p>
              <p>Proudly Developed by <span className="font-semibold text-white">TetraNeurons Team</span></p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}