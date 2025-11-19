"use client";

import React from 'react';
import { FaCompass, FaRoute, FaMapMarkedAlt, FaLightbulb, FaMobileAlt, FaCalendarCheck, FaUsers, FaArrowRight } from 'react-icons/fa';

export default function ExplorePage() {
  const features = [
    {
      icon: <FaRoute />,
      title: 'Smart Itineraries',
      description: 'AI-powered route planning that optimizes your journey based on interests, time, and budget'
    },
    {
      icon: <FaMapMarkedAlt />,
      title: 'Live Navigation',
      description: 'Real-time GPS guidance with offline maps and context-aware local recommendations'
    },
    {
      icon: <FaLightbulb />,
      title: 'Insider Insights',
      description: 'Curated tips from local experts, hidden gems, and authentic cultural experiences'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile-First',
      description: 'Access everything on-the-go with our intuitive mobile interface'
    },
    {
      icon: <FaCalendarCheck />,
      title: 'Trip Management',
      description: 'Organize bookings, documents, and schedules in one centralized dashboard'
    },
    {
      icon: <FaUsers />,
      title: 'Connect Locally',
      description: 'Direct access to verified guides, drivers, and local service providers'
    }
  ];

  const experiences = [
    {
      title: 'Cultural Heritage',
      description: 'Explore ancient temples, royal palaces, and UNESCO World Heritage sites',
      image: '/bg2.jpg',
      highlights: ['Temple of the Tooth', 'Sigiriya Rock Fortress', 'Ancient Cities']
    },
    {
      title: 'Wildlife Adventures',
      description: 'Encounter elephants, leopards, and diverse wildlife in natural habitats',
      image: '/bg3.jpg',
      highlights: ['Yala National Park', 'Udawalawe Elephants', 'Sinharaja Rainforest']
    },
    {
      title: 'Beach Escapes',
      description: 'Relax on pristine beaches with crystal-clear waters and golden sands',
      image: '/bg4.jpg',
      highlights: ['Mirissa Beach', 'Arugam Bay', 'Unawatuna']
    },
    {
      title: 'Hill Country',
      description: 'Discover misty mountains, tea plantations, and scenic train journeys',
      image: '/bg5.jpg',
      highlights: ['Ella', 'Nuwara Eliya', 'Horton Plains']
    },
    {
      title: 'Adventure Sports',
      description: 'Surfing, hiking, diving, and adrenaline-pumping activities',
      image: '/bg6.jpg',
      highlights: ['Surfing Lessons', 'White Water Rafting', 'Rock Climbing']
    },
    {
      title: 'Culinary Journey',
      description: 'Savor authentic Sri Lankan cuisine and street food delights',
      image: '/hero-bg.jpg',
      highlights: ['Cooking Classes', 'Food Tours', 'Spice Gardens']
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/bg5.jpg)',
            zIndex: 1
          }}
        ></div>
        
        <div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 via-black/60 to-black/40"
          style={{ zIndex: 10 }}
        ></div>
        
        <div 
          className="absolute top-0 left-0 w-full h-full flex items-center px-6 md:px-12 lg:px-20"
          style={{ zIndex: 30 }}
        >
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <FaCompass className="text-5xl text-accent-500" />
                <h1 className="text-5xl md:text-6xl font-bold text-white" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.9)' }}>
                  Explore
                </h1>
              </div>
              <p className="text-2xl text-white/90 mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                Your intelligent travel companion for discovering Sri Lanka
              </p>
              <p className="text-lg text-white/80 leading-relaxed" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                From planning to navigation to local connections—Heritage Lanka brings every aspect of your journey together in one seamless platform
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 uppercase tracking-wide">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Heritage Lanka replaces fragmented travel tools with one unified intelligent platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="content-card p-8 hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 text-primary-600 text-3xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-bold mb-4 uppercase">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 uppercase tracking-wide">
              Curated Experiences
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover the best of Sri Lanka through expertly crafted journeys
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="content-card group overflow-hidden">
                <div 
                  className="h-56 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${exp.image})` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold mb-3 uppercase">{exp.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-800 mb-2">Highlights:</p>
                    <ul className="space-y-1">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2 group">
                    <span>Learn More</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 uppercase tracking-wide">
              How Heritage Lanka Works
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Three intelligent systems working together for your perfect journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 text-white text-3xl font-bold rounded-full flex items-center justify-center mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 uppercase">The Planner</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Input your preferences, interests, and travel dates. Our AI creates personalized itineraries optimized for your unique journey.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Replaces:</strong> Scattered notes, spreadsheets, multiple booking apps
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 text-white text-3xl font-bold rounded-full flex items-center justify-center mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 uppercase">The Guider</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Real-time navigation with live updates, offline maps, and context-aware recommendations as you explore.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Replaces:</strong> Multiple map apps, guidebooks, constant online searching
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 text-white text-3xl font-bold rounded-full flex items-center justify-center mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 uppercase">The Manager</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Store documents, manage bookings, track budgets, and connect with local services all in one place.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Replaces:</strong> Email confirmations, file folders, currency converters, contact lists
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="nature-bg py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 uppercase tracking-wide">
            Start Your Journey Today
          </h2>
          <p className="text-xl mb-8">
            Join thousands of travelers who've discovered the smarter way to explore Sri Lanka
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent-600 hover:bg-accent-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center gap-3">
              <span>Get Started Free</span>
              <FaArrowRight />
            </button>
            <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors border-2 border-white/50">
              Watch Demo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
