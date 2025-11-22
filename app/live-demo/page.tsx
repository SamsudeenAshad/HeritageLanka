"use client";

import React from 'react';
import Link from 'next/link';
import { FaRocket, FaArrowLeft, FaBell, FaCog } from 'react-icons/fa';

export default function LiveDemoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated Icon */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center mx-auto shadow-2xl animate-pulse">
            <FaRocket className="text-6xl text-white" />
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary-400 rounded-full blur-3xl opacity-30 animate-ping"></div>
        </div>

        {/* Main Content */}
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
          Coming Soon
        </h1>
        
        <p className="text-2xl md:text-3xl text-gray-800 mb-4 font-medium">
          Live Demo Experience
        </p>
        
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          We're working hard to bring you an interactive demo of Heritage Lanka's powerful features. 
          Experience our unified travel platform in action very soon!
        </p>

        {/* Features Preview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaRocket className="text-3xl text-primary-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">Smart Planning</h3>
            <p className="text-sm text-gray-600">AI-powered itinerary generation</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaBell className="text-3xl text-accent-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">Real-Time Guidance</h3>
            <p className="text-sm text-gray-600">Live navigation and updates</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCog className="text-3xl text-primary-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">All-in-One Management</h3>
            <p className="text-sm text-gray-600">Unified travel dashboard</p>
          </div>
        </div>

        {/* Countdown Timer Placeholder */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 inline-block">
          <p className="text-sm uppercase tracking-widest text-gray-600 mb-4">Launching In</p>
          <div className="flex gap-4 justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-1">30</div>
              <div className="text-xs text-gray-600 uppercase">Days</div>
            </div>
            <div className="text-4xl text-gray-400">:</div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-1">00</div>
              <div className="text-xs text-gray-600 uppercase">Hours</div>
            </div>
            <div className="text-4xl text-gray-400">:</div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-1">00</div>
              <div className="text-xs text-gray-600 uppercase">Minutes</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors shadow-lg"
          >
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>
          
          <Link 
            href="/#newsletter"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-primary-600 font-semibold rounded-lg transition-colors shadow-lg border-2 border-primary-600"
          >
            <FaBell />
            <span>Notify Me When Ready</span>
          </Link>
        </div>

        {/* Bottom Text */}
        <p className="mt-12 text-gray-500 text-sm">
          Want to be the first to try? Subscribe to our newsletter for exclusive early access!
        </p>
      </div>
    </main>
  );
}
