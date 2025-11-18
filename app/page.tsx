"use client";

import React, { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section with Watercolor Background */}
      <section className="hero-bg min-h-screen flex items-center relative pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-2xl mb-8 fade-in">
              Travel Without <br/>
              <span className="text-primary-200">The Noise</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 drop-shadow-lg leading-relaxed mb-12">
              One intelligent platform that plans, guides, and manages your entire journey. 
              Say goodbye to scattered apps and hello to seamless exploration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="px-10 py-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 shadow-2xl text-white font-semibold text-lg hover:scale-105 transition-transform">
                Start Your Journey
              </button>
              <button className="px-10 py-4 rounded-full glass text-white font-semibold text-lg hover:bg-white/20 transition">
                Watch Demo
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="p-6 rounded-2xl glass-dark backdrop-blur-md hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">🗓️</div>
                <h4 className="font-bold text-xl mb-3">The Planner</h4>
                <p className="text-sm text-white/90 leading-relaxed">Smart itineraries that adapt to your pace and preferences.</p>
              </div>
              <div className="p-6 rounded-2xl glass-dark backdrop-blur-md hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">🧭</div>
                <h4 className="font-bold text-xl mb-3">The Guider</h4>
                <p className="text-sm text-white/90 leading-relaxed">Live, context-aware guidance with trusted local insights.</p>
              </div>
              <div className="p-6 rounded-2xl glass-dark backdrop-blur-md hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">📁</div>
                <h4 className="font-bold text-xl mb-3">The Manager</h4>
                <p className="text-sm text-white/90 leading-relaxed">Documents, bookings and collaboration — all organized.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section with Nature Background */}
      <section className="nature-bg min-h-screen flex items-center relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Travel Shouldn't Feel Like <span className="text-red-400">Chaos</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Every traveler knows the frustration of scattered information, 
              endless app switching, and the fear of getting scammed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                className="glass-dark backdrop-blur-md rounded-2xl p-8 hover:scale-105 transition-all duration-300"
              >
                <div className="text-6xl mb-4">{problem.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{problem.title}</h3>
                <p className="text-white/90 leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section with Heritage Background */}
      <section className="heritage-bg min-h-screen flex items-center relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              One Platform. <span className="text-primary-300">Infinite Possibilities.</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              HeritageLanka unifies your entire travel experience into one intelligent 
              operating system. Plan, navigate, and manage everything effortlessly.
            </p>
          </div>

          <div className="space-y-16 max-w-6xl mx-auto">
            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-dark backdrop-blur-md rounded-3xl p-8 hover:scale-105 transition-transform">
                <div className="inline-block px-4 py-2 bg-primary-500/30 rounded-full text-sm font-semibold mb-4">
                  🗓️ The Planner
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Smart Itineraries That Adapt to You
                </h3>
                <p className="text-lg text-white/90 mb-6 leading-relaxed">
                  Build intelligent travel plans that understand your preferences, budget, 
                  and time. Get personalized recommendations that make every moment count.
                </p>
                <ul className="space-y-3">
                  {[
                    "AI-powered itinerary generation",
                    "Real-time adjustments based on weather & traffic",
                    "Budget tracking and optimization",
                    "Collaborative planning for groups"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start text-white/90">
                      <span className="text-primary-400 mr-3">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-dark backdrop-blur-md rounded-3xl p-8 hover:scale-105 transition-transform">
                <div className="inline-block px-4 py-2 bg-secondary-500/30 rounded-full text-sm font-semibold mb-4">
                  🧭 The Guider
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Your Real-Time Travel Companion
                </h3>
                <p className="text-lg text-white/90 mb-6 leading-relaxed">
                  Navigate with confidence using context-aware guidance that knows where you 
                  are and what you need, exactly when you need it.
                </p>
                <ul className="space-y-3">
                  {[
                    "Live navigation with local insights",
                    "Context-aware recommendations",
                    "Offline maps and information",
                    "Audio guides for attractions"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start text-white/90">
                      <span className="text-secondary-400 mr-3">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="glass-dark backdrop-blur-md rounded-3xl p-8 max-w-3xl mx-auto hover:scale-105 transition-transform">
              <div className="inline-block px-4 py-2 bg-primary-500/30 rounded-full text-sm font-semibold mb-4">
                📁 The Manager
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Effortless Trip Organization
              </h3>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Keep all your documents, bookings, and logistics in one secure place. 
                Share with travel companions and collaborate seamlessly.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Centralized document storage",
                  "Booking management & reminders",
                  "Expense tracking & splitting",
                  "Team collaboration tools"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start text-white/90">
                    <span className="text-primary-400 mr-3">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Services Section with Adventure Background */}
      <section className="adventure-bg min-h-screen flex items-center relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Connect with <span className="text-secondary-300">Trusted Locals</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Direct access to verified guides, transport providers, hotels, and essential 
              services. No middlemen. No scams. Just authentic experiences.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: "👨‍🏫", title: "Expert Guides", description: "Local experts with verified reviews" },
              { icon: "🚗", title: "Transport", description: "Reliable drivers & vehicles" },
              { icon: "🏨", title: "Accommodation", description: "Trusted hotels & homestays" },
              { icon: "🎯", title: "Activities", description: "Authentic experiences & tours" }
            ].map((service, index) => (
              <div
                key={index}
                className="glass-dark backdrop-blur-md rounded-2xl p-8 hover:scale-110 transition-all duration-300 text-center"
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/90">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Sunset Background */}
      <section className="sunset-bg min-h-[70vh] flex items-center relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Transform Your Travel Experience?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-white/95">
              Join thousands of travelers who've discovered the joy of stress-free exploration.
            </p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50 font-medium"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Early Access
                </button>
              </div>
              <p className="text-sm mt-4 text-white/75">
                No credit card required. Start your free trial today.
              </p>
            </form>

            <div className="mt-16 flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="mt-4 text-lg text-white/95 italic">
              "Finally, a travel app that actually understands what travelers need. This is the future of travel."
            </p>
            <p className="mt-2 text-white/80">— Sarah M., Adventure Traveler</p>
          </div>
        </div>
      </section>
    </main>
  );
}
