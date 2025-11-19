"use client";

import React, { useState } from 'react';
import { 
  FaCalendarAlt, 
  FaCompass, 
  FaFolderOpen, 
  FaMobileAlt, 
  FaClock, 
  FaExclamationTriangle,
  FaCheckCircle,
  FaUserTie,
  FaCar,
  FaHotel,
  FaBullseye,
  FaStar,
  FaArrowRight,
  FaChevronDown,
  FaPlay
} from 'react-icons/fa';
import { 
  MdNavigation, 
  MdMap, 
  MdChatBubble, 
  MdVolumeUp 
} from 'react-icons/md';
import { 
  HiDocumentText, 
  HiCreditCard, 
  HiCash, 
  HiUserGroup 
} from 'react-icons/hi';

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Full screen with bordered text */}
      <section className="hero-bg relative">
        <div className="hero-overlay absolute inset-0"></div>
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
          <div className="text-center text-white mb-12">
            <div className="hero-title-box mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif uppercase tracking-widest leading-tight">
                Travel Without<br/>
                The Noise
              </h1>
              <p className="text-sm md:text-base uppercase tracking-[0.3em] mt-6 font-light">
                Plan Your Next Trip
              </p>
            </div>
          </div>
          
          {/* Watch Film Button */}
          <button className="flex items-center gap-3 text-white hover:text-accent-300 transition-colors">
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10 transition">
              <FaPlay className="text-sm ml-1" />
            </div>
            <span className="text-sm uppercase tracking-widest">Watch The Film</span>
          </button>
          
          {/* Explore Arrow */}
          <div className="explore-arrow">
            <div className="text-white flex flex-col items-center cursor-pointer">
              <span className="text-xs uppercase tracking-widest mb-2">Explore</span>
              <FaChevronDown className="text-2xl animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Award Section - White Background */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 uppercase tracking-wide">
                SRI LANKA IS BACK!<br/>
                <span className="text-6xl md:text-7xl">LOVE SRI<br/>LANKA</span>
              </h2>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">
                Sri Lanka bags Gold – Wanderlust Awards
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Sri Lanka named <em>"Most Desirable Island in the World"</em> by Wanderlust UK
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Sri Lanka has been voted the Most Desirable Island in the World. Considered one of the most thrilling turnarounds, Sri Lanka has risen from eighth place last year to claim the Gold award reaffirming the island's captivating appeal and diverse offerings, as recognized by over 200,000 passionate travelers who voted for their favorite destinations.
              </p>
              <a href="#" className="read-more">
                ABOUT US
                <FaArrowRight className="text-xs" />
              </a>
            </div>
          </div>
        </div>
      </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="p-8 rounded-sm glass-dark backdrop-blur-md hover:scale-105 transition-transform text-center border border-white/20">
                <div className="flex justify-center items-center mb-4">
                  <FaCalendarAlt className="text-5xl text-accent-300" />
                </div>
                <h4 className="font-serif font-bold text-xl mb-3">The Planner</h4>
                <p className="text-sm text-white/90 leading-relaxed font-light">Smart itineraries that adapt to your pace and preferences.</p>
              </div>
              <div className="p-8 rounded-sm glass-dark backdrop-blur-md hover:scale-105 transition-transform text-center border border-white/20">
                <div className="flex justify-center items-center mb-4">
                  <FaCompass className="text-5xl text-primary-300" />
                </div>
                <h4 className="font-serif font-bold text-xl mb-3">The Guider</h4>
                <p className="text-sm text-white/90 leading-relaxed font-light">Live, context-aware guidance with trusted local insights.</p>
              </div>
              <div className="p-8 rounded-sm glass-dark backdrop-blur-md hover:scale-105 transition-transform text-center border border-white/20">
                <div className="flex justify-center items-center mb-4">
                  <FaFolderOpen className="text-5xl text-accent-200" />
                </div>
                <h4 className="font-serif font-bold text-xl mb-3">The Manager</h4>
                <p className="text-sm text-white/90 leading-relaxed font-light">Documents, bookings and collaboration — all organized.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section with Nature Background */}
      <section className="nature-bg min-h-screen flex items-center relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white mb-16">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-wide">
              Travel Shouldn't Feel Like <span className="text-red-300">Chaos</span>
            </h2>
            <div className="section-divider mb-6"></div>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
              Every traveler knows the frustration of scattered information, 
              endless app switching, and the fear of getting scammed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <FaMobileAlt className="text-6xl text-red-300" />,
                title: "Too Many Apps",
                description: "Switching between maps, itineraries, notes, budgets, and booking apps creates confusion and kills the joy of travel."
              },
              {
                icon: <FaExclamationTriangle className="text-6xl text-yellow-300" />,
                title: "Constant Stress",
                description: "Searching for reliable guides, transport, and hotels while worrying about scams and safety drains your energy."
              },
              {
                icon: <FaClock className="text-6xl text-orange-300" />,
                title: "Wasted Time",
                description: "Hours spent organizing, researching, and cross-referencing information instead of actually enjoying your trip."
              }
            ].map((problem, index) => (
              <div
                key={index}
                className="glass-dark backdrop-blur-md rounded-sm p-8 hover:scale-105 transition-all duration-300 text-center border border-white/20"
              >
                <div className="mb-4 flex justify-center items-center">{problem.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">{problem.title}</h3>
                <p className="text-white/90 leading-relaxed font-light">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section with Heritage Background */}
      <section className="heritage-bg min-h-screen flex items-center relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white mb-16">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-wide">
              One Platform. <span className="text-accent-200">Infinite Possibilities.</span>
            </h2>
            <div className="section-divider mb-6"></div>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
              HeritageLanka unifies your entire travel experience into one intelligent 
              operating system. Plan, navigate, and manage everything effortlessly.
            </p>
          </div>

          <div className="space-y-16 max-w-6xl mx-auto">
            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-dark backdrop-blur-md rounded-sm p-10 hover:scale-105 transition-transform border border-white/20">
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-accent-600/40 rounded-sm text-sm font-semibold mb-4 border border-accent-400/30 uppercase tracking-wider">
                  <FaCalendarAlt /> The Planner
                </div>
                <h3 className="text-3xl font-serif font-bold text-white mb-4">
                  Smart Itineraries That Adapt to You
                </h3>
                <p className="text-lg text-white/90 mb-6 leading-relaxed font-light">
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
                    <li key={index} className="flex items-center text-white/90">
                      <FaCheckCircle className="text-accent-300 mr-3 flex-shrink-0" />
                      <span className="font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-dark backdrop-blur-md rounded-sm p-10 hover:scale-105 transition-transform border border-white/20">
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary-600/40 rounded-sm text-sm font-semibold mb-4 border border-primary-400/30 uppercase tracking-wider">
                  <FaCompass /> The Guider
                </div>
                <h3 className="text-3xl font-serif font-bold text-white mb-4">
                  Your Real-Time Travel Companion
                </h3>
                <p className="text-lg text-white/90 mb-6 leading-relaxed font-light">
                  Navigate with confidence using context-aware guidance that knows where you 
                  are and what you need, exactly when you need it.
                </p>
                <ul className="space-y-3">
                  {[
                    { text: "Live navigation with local insights", icon: <MdNavigation /> },
                    { text: "Context-aware recommendations", icon: <MdChatBubble /> },
                    { text: "Offline maps and information", icon: <MdMap /> },
                    { text: "Audio guides for attractions", icon: <MdVolumeUp /> }
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-white/90">
                      <span className="text-primary-300 mr-3 text-lg flex-shrink-0">{feature.icon}</span>
                      <span className="font-light">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="glass-dark backdrop-blur-md rounded-sm p-10 max-w-3xl mx-auto hover:scale-105 transition-transform border border-white/20">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-accent-600/40 rounded-sm text-sm font-semibold mb-4 border border-accent-400/30 uppercase tracking-wider">
                <FaFolderOpen /> The Manager
              </div>
              <h3 className="text-3xl font-serif font-bold text-white mb-4">
                Effortless Trip Organization
              </h3>
              <p className="text-lg text-white/90 mb-6 leading-relaxed font-light">
                Keep all your documents, bookings, and logistics in one secure place. 
                Share with travel companions and collaborate seamlessly.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { text: "Centralized document storage", icon: <HiDocumentText /> },
                  { text: "Booking management & reminders", icon: <HiCreditCard /> },
                  { text: "Expense tracking & splitting", icon: <HiCash /> },
                  { text: "Team collaboration tools", icon: <HiUserGroup /> }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center text-white/90">
                    <span className="text-accent-300 mr-3 text-xl flex-shrink-0">{feature.icon}</span>
                    <span className="font-light">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Services Section with Adventure Background */}
      <section className="adventure-bg min-h-screen flex items-center relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white mb-16">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-wide">
              Connect with <span className="text-primary-200">Trusted Locals</span>
            </h2>
            <div className="section-divider mb-6"></div>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
              Direct access to verified guides, transport providers, hotels, and essential 
              services. No middlemen. No scams. Just authentic experiences.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: <FaUserTie className="text-6xl text-accent-300" />, title: "Expert Guides", description: "Local experts with verified reviews" },
              { icon: <FaCar className="text-6xl text-primary-300" />, title: "Transport", description: "Reliable drivers & vehicles" },
              { icon: <FaHotel className="text-6xl text-accent-400" />, title: "Accommodation", description: "Trusted hotels & homestays" },
              { icon: <FaBullseye className="text-6xl text-primary-400" />, title: "Activities", description: "Authentic experiences & tours" }
            ].map((service, index) => (
              <div
                key={index}
                className="glass-dark backdrop-blur-md rounded-sm p-8 hover:scale-110 transition-all duration-300 text-center border border-white/20"
              >
                <div className="mb-4 flex justify-center items-center">{service.icon}</div>
                <h3 className="text-xl font-serif font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/90 font-light">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Sunset Background */}
      <section className="sunset-bg min-h-[70vh] flex items-center relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-wide">
              Ready to Transform Your Travel Experience?
            </h2>
            <div className="section-divider mb-8"></div>
            <p className="text-xl md:text-2xl mb-12 text-white/95 font-light">
              Join thousands of travelers who've discovered the joy of stress-free exploration.
            </p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-500 font-light"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-sm hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  Get Early Access <FaArrowRight />
                </button>
              </div>
              <p className="text-sm mt-4 text-white/75 font-light italic">
                No credit card required. Start your free trial today.
              </p>
            </form>

            <div className="mt-16 flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-8 h-8 text-yellow-400" />
              ))}
            </div>
            <p className="mt-4 text-lg text-white/95 italic font-light">
              "Finally, a travel app that actually understands what travelers need. This is the future of travel."
            </p>
            <p className="mt-2 text-white/80 font-light">— Sarah M., Adventure Traveler</p>
          </div>
        </div>
      </section>
    </main>
  );
}
