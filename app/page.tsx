"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Handle email submission
  };

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                HeritageLanka
              </span>
            </div>
            <button className="px-6 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Your Journey,{" "}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Perfectly Unified
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Stop juggling multiple apps. Experience travel as it should be—seamless, 
              stress-free, and magical. One platform for planning, guiding, and managing 
              your entire adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-lg font-semibold rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                Start Your Journey
              </button>
              <button className="px-8 py-4 border-2 border-primary-500 text-primary-600 text-lg font-semibold rounded-full hover:bg-primary-50 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="aspect-video bg-gradient-to-br from-primary-100 via-secondary-50 to-primary-50 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-lg">Platform Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Travel Shouldn't Feel Like{" "}
              <span className="text-red-500">Chaos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every traveler knows the frustration of scattered information, 
              endless app switching, and the fear of getting scammed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📱",
                title: "Too Many Apps",
                description: "Switching between maps, itineraries, notes, budgets, and booking apps creates confusion and kills the joy of travel."
              },
              {
                icon: "😰",
                title: "Constant Stress",
                description: "Searching for reliable guides, transport, and hotels while worrying about scams and safety drains your energy."
              },
              {
                icon: "⏰",
                title: "Wasted Time",
                description: "Hours spent organizing, researching, and cross-referencing information instead of actually enjoying your trip."
              }
            ].map((problem, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-5xl mb-4">{problem.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              One Platform.{" "}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Infinite Possibilities.
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              HeritageLanka unifies your entire travel experience into one intelligent 
              operating system. Plan, navigate, and manage everything effortlessly.
            </p>
          </div>

          <div className="space-y-24">
            {/* Planner */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                  🗓️ The Planner
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Smart Itineraries That Adapt to You
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Build intelligent travel plans that understand your preferences, budget, 
                  and time. Get personalized recommendations that make every moment count.
                </p>
                <ul className="space-y-4">
                  {[
                    "AI-powered itinerary generation",
                    "Real-time adjustments based on weather & traffic",
                    "Budget tracking and optimization",
                    "Collaborative planning for groups"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-12 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📋</div>
                    <p className="text-gray-600 font-medium">Interactive Planner</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Guider */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <div className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold mb-4">
                  🧭 The Guider
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Your Real-Time Travel Companion
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Navigate with confidence using context-aware guidance that knows where you 
                  are and what you need, exactly when you need it.
                </p>
                <ul className="space-y-4">
                  {[
                    "Live navigation with local insights",
                    "Context-aware recommendations",
                    "Offline maps and information",
                    "Audio guides for attractions"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-secondary-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative md:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-400 to-primary-400 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative bg-gradient-to-br from-secondary-100 to-primary-100 rounded-3xl p-12 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <p className="text-gray-600 font-medium">Smart Navigation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Manager */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                  📁 The Manager
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Effortless Trip Organization
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Keep all your documents, bookings, and logistics in one secure place. 
                  Share with travel companions and collaborate seamlessly.
                </p>
                <ul className="space-y-4">
                  {[
                    "Centralized document storage",
                    "Booking management & reminders",
                    "Expense tracking & splitting",
                    "Team collaboration tools"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-12 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">💼</div>
                    <p className="text-gray-600 font-medium">Trip Management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Connect with{" "}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Trusted Locals
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Direct access to verified guides, transport providers, hotels, and essential 
              services. No middlemen. No scams. Just authentic experiences.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "👨‍🏫", title: "Expert Guides", description: "Local experts with verified reviews" },
              { icon: "🚗", title: "Transport", description: "Reliable drivers & vehicles" },
              { icon: "🏨", title: "Accommodation", description: "Trusted hotels & homestays" },
              { icon: "🎯", title: "Activities", description: "Authentic experiences & tours" }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial/Emotional Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-2xl sm:text-3xl font-medium text-gray-900 mb-6 italic">
              "Finally, a travel app that actually understands what travelers need. 
              No more juggling ten different apps. This is the future of travel."
            </blockquote>
            <p className="text-lg text-gray-600">— Sarah M., Adventure Traveler</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Transform Your Travel Experience?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Join thousands of travelers who've discovered the joy of stress-free exploration.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Get Early Access
              </button>
            </div>
            <p className="text-sm mt-4 opacity-75">
              No credit card required. Start your free trial today.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">H</span>
                </div>
                <span className="text-xl font-bold">HeritageLanka</span>
              </div>
              <p className="text-gray-400">
                Your unified travel companion for seamless adventures.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 HeritageLanka. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
