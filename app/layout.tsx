import './globals.css'
import React from 'react'

export const metadata = {
  title: 'HeritageLanka — Unified Travel OS',
  description: 'Plan, guide and manage your trips with one intelligent travel platform',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-slate-800">
        <header className="w-full py-6 px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center text-white font-bold">HL</div>
            <div className="font-semibold text-lg">HeritageLanka</div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-slate-700">
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#contact" className="text-primary-600">Contact</a>
          </nav>
        </header>

        {children}

        <footer className="w-full py-8 px-6 md:px-12 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} HeritageLanka — Bringing journeys together.
        </footer>
      </body>
    </html>
  )
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HeritageLanka - Your Unified Travel Companion",
  description: "Plan, guide, and manage your perfect Sri Lankan adventure with one intelligent platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
