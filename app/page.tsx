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
  FaArrowRight
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
    <main className="min-h-screen">
      {/* Hero Section with Watercolor Background */}
      <section className="hero-bg min-h-screen flex items-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20"></div>
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight drop-shadow-2xl mb-8 fade-in tracking-wide">
              Travel Without <br/>
              <span className="text-accent-200">The Noise</span>
            </h1>
            <div className="section-divider mb-8"></div>
            <p className="text-xl md:text-2xl text-white/95 drop-shadow-lg leading-relaxed mb-12 font-light">
              One intelligent platform that plans, guides, and manages your entire journey. 
              Say goodbye to scattered apps and hello to seamless exploration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="px-12 py-4 rounded-sm bg-gradient-to-r from-primary-600 to-accent-600 shadow-2xl text-white font-semibold text-base hover:scale-105 transition-transform flex items-center justify-center gap-2 uppercase tracking-wider">
                Start Your Journey <FaArrowRight />
              </button>
              <button className="px-12 py-4 rounded-sm glass text-white font-semibold text-base hover:bg-white/30 transition uppercase tracking-wider border border-white/30">
                Watch Film
              </button>
            </div>

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
