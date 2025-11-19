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
        <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-sm flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-xl font-serif">HL</span>
                </div>
                <span className="text-2xl font-bold font-serif bg-gradient-to-r from-primary-700 to-accent-700 bg-clip-text text-transparent">
                  HeritageLanka
                </span>
              </div>
              <button className="px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium uppercase tracking-wide text-sm">
                Get Started
              </button>
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
                Start
              </button>
            </div>
          </div>
        </nav>

        {/* Add padding to body for fixed navbars */}
        <div className="md:pt-20 pb-24 md:pb-0">
          {children}
        </div>

        <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-16 px-6 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-accent-600 rounded-sm flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl font-serif">HL</span>
                </div>
                <span className="text-3xl font-bold font-serif">HeritageLanka</span>
              </div>
              <div className="section-divider mb-6"></div>
              <p className="text-gray-400 text-lg mb-2 max-w-2xl mx-auto">
                Your unified travel companion for seamless adventures.
              </p>
              <p className="text-gray-500 italic">
                Plan. Guide. Manage. Experience.
              </p>
            </div>
            <div className="pt-8 border-t border-gray-800 text-center">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} HeritageLanka. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
