import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        {/* Desktop Navigation - Top */}
        <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">HL</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  HeritageLanka
                </span>
              </div>
              <button className="px-6 py-2.5 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium">
                Get Started
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation - Bottom */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
          <div className="px-4 py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">HL</span>
                </div>
                <span className="text-base font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  HeritageLanka
                </span>
              </div>
              <button className="px-5 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full hover:shadow-lg transition-all duration-300 text-sm font-medium">
                Get Started
              </button>
            </div>
          </div>
        </nav>

        {/* Add padding to body for fixed navbars */}
        <div className="pt-16 md:pt-16 pb-20 md:pb-0">
          {children}
        </div>

        <footer className="bg-gray-900 text-white py-12 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">HL</span>
              </div>
              <span className="text-xl font-bold">HeritageLanka</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your unified travel companion for seamless adventures.
            </p>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} HeritageLanka. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
