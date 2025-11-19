"use client";

import React from 'react';
import { FaArrowRight, FaUsers, FaLightbulb, FaHeart } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/bg2.jpg)',
            zIndex: 1
          }}
        ></div>
        
        <div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 via-black/50 to-black/30"
          style={{ zIndex: 10 }}
        ></div>
        
        <div 
          className="absolute top-0 left-0 w-full h-full flex items-center px-6 md:px-12 lg:px-20"
          style={{ zIndex: 30 }}
        >
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.9)' }}>
              About Heritage Lanka
            </h1>
            <p className="text-xl text-white/90 max-w-3xl" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              Revolutionizing travel in Sri Lanka with one unified platform
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 uppercase tracking-wide">
                Our Story
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Heritage Lanka was born from a simple observation: travelers to Sri Lanka were overwhelmed by fragmented information scattered across countless apps, websites, and documents.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We witnessed the frustration of constantly switching between multiple tools for planning itineraries, finding directions, managing bookings, and connecting with local services. This chaos was stealing the joy from travel.
              </p>
              <p className="text-gray-700 leading-relaxed">
                So we built Heritage Lanka—a unified platform that brings everything together in one intelligent system, making Sri Lankan travel effortless and enjoyable.
              </p>
            </div>
            <div className="h-96 bg-cover bg-center rounded-lg shadow-xl" style={{backgroundImage: 'url(/bg3.jpg)'}}></div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 uppercase tracking-wide">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              To eliminate the stress and confusion of travel by unifying every aspect of the Sri Lankan journey into one seamless experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="content-card p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaLightbulb className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 uppercase">Innovation</h3>
              <p className="text-gray-700 leading-relaxed">
                Creating intelligent solutions that replace fragmented tools with unified experiences
              </p>
            </div>

            <div className="content-card p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUsers className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 uppercase">Community</h3>
              <p className="text-gray-700 leading-relaxed">
                Connecting travelers with verified local guides, services, and authentic experiences
              </p>
            </div>

            <div className="content-card p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHeart className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 uppercase">Passion</h3>
              <p className="text-gray-700 leading-relaxed">
                Driven by love for Sri Lanka and dedication to making travel extraordinary
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="h-96 bg-cover bg-center rounded-lg shadow-xl" style={{backgroundImage: 'url(/bg4.jpg)'}}></div>
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 uppercase tracking-wide">
                The Problem We Solve
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <FaArrowRight className="text-primary-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Fragmented Information:</strong> Travel details scattered across multiple apps, websites, and documents
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <FaArrowRight className="text-primary-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Constant Switching:</strong> Jumping between tools for itineraries, maps, budgets, and bookings
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <FaArrowRight className="text-primary-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Wasted Time:</strong> Hours spent organizing and cross-referencing information
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <FaArrowRight className="text-primary-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Stress & Confusion:</strong> Uncertainty about bookings, routes, and local services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="nature-bg py-20 px-6 relative">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 uppercase tracking-wide">
              Our Solution
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto">
              One intelligent platform that plans, guides, and manages your entire Sri Lankan journey
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg">
                <h3 className="text-2xl font-serif font-bold mb-4 uppercase">The Planner</h3>
                <p className="text-white/90">
                  Smart itineraries that adapt to your preferences, eliminating scattered notes and spreadsheets
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg">
                <h3 className="text-2xl font-serif font-bold mb-4 uppercase">The Guider</h3>
                <p className="text-white/90">
                  Live, context-aware navigation and local insights replacing multiple map and travel apps
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg">
                <h3 className="text-2xl font-serif font-bold mb-4 uppercase">The Manager</h3>
                <p className="text-white/90">
                  Centralized document storage, booking management, and collaboration features
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 uppercase tracking-wide">
            Built by Innovators
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Heritage Lanka is developed by the TetraNeurons team—passionate technologists dedicated to revolutionizing travel through intelligent platform design
          </p>

          <div className="inline-block bg-gradient-to-r from-primary-600 to-accent-600 text-white px-12 py-6 rounded-lg">
            <p className="text-3xl font-serif font-bold mb-2">TetraNeurons</p>
            <p className="text-sm tracking-widest">INNOVATION IN TRAVEL TECHNOLOGY</p>
          </div>
        </div>
      </section>
    </main>
  );
}
