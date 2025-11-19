"use client";

import React, { useState } from 'react';
import { FaCalendarAlt, FaMapMarkedAlt, FaUsers, FaWallet, FaHotel, FaCar, FaUtensils, FaCamera, FaArrowRight, FaPlus, FaMinus, FaCheckCircle } from 'react-icons/fa';

export default function PlanPage() {
  const [tripDuration, setTripDuration] = useState(7);
  const [travelers, setTravelers] = useState(2);
  const [budget, setBudget] = useState('medium');

  const budgetOptions = [
    { id: 'budget', name: 'Budget Friendly', price: '$50-100/day', description: 'Hostels, local transport, street food' },
    { id: 'medium', name: 'Moderate', price: '$100-200/day', description: 'Mid-range hotels, mix of transport, good restaurants' },
    { id: 'luxury', name: 'Luxury', price: '$200+/day', description: 'Premium hotels, private transport, fine dining' }
  ];

  const planningSteps = [
    {
      icon: <FaCalendarAlt />,
      title: 'Choose Your Dates',
      description: 'Select when you want to visit Sri Lanka and how long you\'ll stay',
      action: 'Pick Dates'
    },
    {
      icon: <FaMapMarkedAlt />,
      title: 'Select Destinations',
      description: 'Choose from our curated list of must-visit places across the island',
      action: 'Browse Places'
    },
    {
      icon: <FaUsers />,
      title: 'Customize Activities',
      description: 'Pick experiences that match your interests and travel style',
      action: 'View Activities'
    },
    {
      icon: <FaWallet />,
      title: 'Set Your Budget',
      description: 'Get recommendations that fit your spending preferences',
      action: 'Plan Budget'
    }
  ];

  const features = [
    {
      icon: <FaHotel />,
      title: 'Accommodation',
      description: 'Verified hotels, guesthouses, and homestays for every budget'
    },
    {
      icon: <FaCar />,
      title: 'Transportation',
      description: 'Reliable drivers, car rentals, and route optimization'
    },
    {
      icon: <FaUtensils />,
      title: 'Dining',
      description: 'Restaurant recommendations and authentic local cuisine spots'
    },
    {
      icon: <FaCamera />,
      title: 'Experiences',
      description: 'Curated activities, tours, and cultural experiences'
    }
  ];

  const sampleItineraries = [
    {
      title: 'Classic Sri Lanka',
      duration: '7 Days',
      destinations: ['Colombo', 'Kandy', 'Sigiriya', 'Nuwara Eliya'],
      image: '/bg2.jpg',
      highlights: ['Cultural Triangle', 'Temple of the Tooth', 'Tea Plantations']
    },
    {
      title: 'Beach & Wildlife',
      duration: '10 Days',
      destinations: ['Colombo', 'Yala', 'Mirissa', 'Galle'],
      image: '/bg3.jpg',
      highlights: ['Safari Adventures', 'Whale Watching', 'Historic Forts']
    },
    {
      title: 'Hill Country Explorer',
      duration: '5 Days',
      destinations: ['Kandy', 'Ella', 'Nuwara Eliya', 'Haputale'],
      image: '/bg4.jpg',
      highlights: ['Scenic Train Rides', 'Tea Estate Tours', 'Mountain Hikes']
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/bg6.jpg)',
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
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.9)' }}>
                Plan Your Perfect Journey
              </h1>
              <p className="text-xl text-white/90 mb-8" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                Create a personalized itinerary tailored to your interests, budget, and schedule
              </p>
              <button className="bg-accent-600 hover:bg-accent-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-3">
                <span>Start Planning Now</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Planning Tool */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 uppercase tracking-wide">
              Build Your Itinerary
            </h2>
            <p className="text-xl text-gray-700">
              Tell us about your trip and we'll create the perfect plan
            </p>
          </div>

          <div className="content-card p-8 md:p-12">
            {/* Trip Duration */}
            <div className="mb-8">
              <label className="block text-lg font-serif font-bold mb-4">How long will you stay?</label>
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => setTripDuration(Math.max(1, tripDuration - 1))}
                  className="w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center transition"
                >
                  <FaMinus />
                </button>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600">{tripDuration}</div>
                  <div className="text-sm text-gray-600">Days</div>
                </div>
                <button 
                  onClick={() => setTripDuration(tripDuration + 1)}
                  className="w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center transition"
                >
                  <FaPlus />
                </button>
              </div>
            </div>

            {/* Number of Travelers */}
            <div className="mb-8">
              <label className="block text-lg font-serif font-bold mb-4">Number of travelers</label>
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => setTravelers(Math.max(1, travelers - 1))}
                  className="w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center transition"
                >
                  <FaMinus />
                </button>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600">{travelers}</div>
                  <div className="text-sm text-gray-600">People</div>
                </div>
                <button 
                  onClick={() => setTravelers(travelers + 1)}
                  className="w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center transition"
                >
                  <FaPlus />
                </button>
              </div>
            </div>

            {/* Budget Selection */}
            <div className="mb-8">
              <label className="block text-lg font-serif font-bold mb-4">Select your budget range</label>
              <div className="grid md:grid-cols-3 gap-4">
                {budgetOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setBudget(option.id)}
                    className={`p-6 rounded-lg border-2 text-left transition-all ${
                      budget === option.id
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-lg">{option.name}</h3>
                      {budget === option.id && <FaCheckCircle className="text-primary-600 text-xl" />}
                    </div>
                    <p className="text-primary-600 font-semibold mb-2">{option.price}</p>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Itinerary Button */}
            <div className="text-center">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-3">
                <span>Generate My Itinerary</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Steps */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 uppercase tracking-wide">
              How Planning Works
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Four simple steps to your perfect Sri Lankan adventure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {planningSteps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-primary-600 text-white text-3xl rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <div className="mb-2 text-sm font-bold text-primary-600">STEP {idx + 1}</div>
                <h3 className="text-xl font-serif font-bold mb-3 uppercase">{step.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{step.description}</p>
                <button className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-2 group">
                  <span>{step.action}</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 uppercase tracking-wide">
              Everything Included
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Your complete travel plan covers all aspects of your journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="content-card p-8 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-600 text-3xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-bold mb-4 uppercase">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Itineraries */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 uppercase tracking-wide">
              Popular Itineraries
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Get inspired by our expertly crafted travel plans
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sampleItineraries.map((itinerary, idx) => (
              <div key={idx} className="content-card group overflow-hidden">
                <div 
                  className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${itinerary.image})` }}
                >
                  <div className="h-full bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <p className="text-sm uppercase tracking-wider mb-1">{itinerary.duration}</p>
                      <h3 className="text-2xl font-serif font-bold">{itinerary.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-800 mb-2">Destinations:</p>
                    <div className="flex flex-wrap gap-2">
                      {itinerary.destinations.map((dest, i) => (
                        <span key={i} className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-800 mb-2">Highlights:</p>
                    <ul className="space-y-1">
                      {itinerary.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 group">
                    <span>Use This Plan</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="nature-bg py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 uppercase tracking-wide">
            Ready to Start Planning?
          </h2>
          <p className="text-xl mb-8">
            Create your personalized Sri Lankan adventure in minutes
          </p>
          <button className="bg-accent-600 hover:bg-accent-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-3">
            <span>Create My Itinerary</span>
            <FaArrowRight />
          </button>
        </div>
      </section>
    </main>
  );
}
