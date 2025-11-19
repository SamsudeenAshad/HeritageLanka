"use client";

import React, { useState } from 'react';
import { FaArrowRight, FaChevronDown, FaPlay, FaMapMarkerAlt } from 'react-icons/fa';

// Sri Lankan destinations data
const sriLankanDestinations = [
  { id: 1, name: "COLOMBO", number: 1, position: { top: '58%', left: '22%' }, image: "/bg2.jpg", description: "The vibrant capital city blending colonial architecture, modern life, and coastal beauty. Explore bustling markets, temples, and seaside promenades.", activities: ["Galle Face Green", "Gangaramaya Temple", "National Museum", "Pettah Market"] },
  { id: 2, name: "KANDY", number: 2, position: { top: '52%', left: '38%' }, image: "/bg3.jpg", description: "The cultural heart of Sri Lanka, home to the sacred Temple of the Tooth Relic. Surrounded by misty mountains and tea plantations.", activities: ["Temple of the Tooth", "Royal Botanical Gardens", "Kandy Lake", "Cultural Dance Shows"] },
  { id: 3, name: "GALLE", number: 3, position: { top: '70%', left: '28%' }, image: "/bg4.jpg", description: "A UNESCO World Heritage fort city with Dutch colonial architecture, cobblestone streets, and stunning ocean views.", activities: ["Galle Fort", "Dutch Reformed Church", "Lighthouse", "Rampart Walk"] },
  { id: 4, name: "SIGIRIYA", number: 4, position: { top: '38%', left: '42%' }, image: "/bg5.jpg", description: "Ancient rock fortress rising 200m above the jungle, featuring stunning frescoes and the legendary Lion's Gate.", activities: ["Sigiriya Rock", "Ancient Frescoes", "Lion Gate", "Summit Palace"] },
  { id: 5, name: "ELLA", number: 5, position: { top: '62%', left: '50%' }, image: "/bg6.jpg", description: "A charming hill country town surrounded by tea plantations, waterfalls, and breathtaking mountain scenery.", activities: ["Nine Arch Bridge", "Little Adam's Peak", "Ravana Falls", "Tea Factory Tours"] },
  { id: 6, name: "NUWARA ELIYA", number: 6, position: { top: '52%', left: '45%' }, image: "/hero-bg.jpg", description: "Known as 'Little England', this cool climate town is surrounded by rolling tea estates and colonial-era bungalows.", activities: ["Gregory Lake", "Horton Plains", "Tea Plantations", "Victoria Park"] },
  { id: 7, name: "ANURADHAPURA", number: 7, position: { top: '32%', left: '42%' }, image: "/bg2.jpg", description: "Ancient capital with sacred Buddhist sites, massive dagobas, and the revered Sri Maha Bodhi tree.", activities: ["Sri Maha Bodhi", "Ruwanwelisaya", "Jetavanarama", "Twin Ponds"] },
  { id: 8, name: "POLONNARUWA", number: 8, position: { top: '35%', left: '52%' }, image: "/bg3.jpg", description: "Medieval capital featuring well-preserved ruins, giant Buddha statues, and impressive stone carvings.", activities: ["Gal Vihara", "Royal Palace", "Parakrama Samudra", "Lankathilaka Temple"] },
  { id: 9, name: "MIRISSA", number: 9, position: { top: '72%', left: '32%' }, image: "/bg4.jpg", description: "Beautiful beach town famous for whale watching, surfing, and pristine golden sand beaches.", activities: ["Whale Watching", "Beach Activities", "Coconut Hill", "Snorkeling"] },
  { id: 10, name: "TRINCOMALEE", number: 10, position: { top: '28%', left: '72%' }, image: "/bg5.jpg", description: "Eastern coast gem with pristine beaches, historical temples, and excellent diving spots.", activities: ["Nilaveli Beach", "Pigeon Island", "Koneswaram Temple", "Hot Springs"] },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [searchPlaceholder, setSearchPlaceholder] = useState("");
  const [selectedDestination, setSelectedDestination] = useState(sriLankanDestinations[3]); // Default to Sigiriya
  const placeholderTexts = ["Plan you tour.....", "Explore destinations.....", "Find experiences.....", "Discover heritage....."];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  React.useEffect(() => {
    const currentText = placeholderTexts[textIndex];
    const typingSpeed = isDeleting ? 50 : 150;
    const pauseAfterComplete = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setSearchPlaceholder(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setSearchPlaceholder(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), pauseAfterComplete);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % placeholderTexts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ zIndex: 1 }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay for text readability */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 via-black/50 to-black/30"
          style={{ zIndex: 10 }}
        ></div>
        
        {/* Content */}
        <div 
          className="absolute top-0 left-0 w-full h-full flex items-center px-6 md:px-12 lg:px-20"
          style={{ zIndex: 30 }}
        >
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="text-white max-w-3xl">
                <p className="text-lg md:text-xl font-serif italic mb-4 font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                  Welcome to Heritage Lanka
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.9)' }}>
                  Your Unified Travel Companion for Sri Lanka
                </h1>
                <p className="text-base md:text-lg text-white leading-relaxed mb-8" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                  Plan, guide, and manage your perfect Sri Lankan adventure with one intelligent platform
                </p>
                
                {/* Search Bar with Typing Animation */}
                <div className="relative max-w-2xl">
                  <input 
                    type="text" 
                    placeholder={searchPlaceholder}
                    className="w-full px-8 py-5 bg-white rounded-full text-gray-800 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-2xl placeholder:text-gray-400"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg">
                    <FaPlay className="text-white text-xl ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{ zIndex: 30 }}
        >
          <div className="text-white flex flex-col items-center cursor-pointer animate-bounce" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            <span className="text-xs uppercase tracking-widest mb-2">Scroll Down</span>
            <FaChevronDown className="text-xl" />
          </div>
        </div>
      </section>

      {/* Award Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2 uppercase tracking-wide leading-tight">
                ONE PLATFORM FOR YOUR ENTIRE JOURNEY
              </h2>
              <h2 className="text-5xl md:text-7xl font-serif font-bold uppercase tracking-wide leading-none">
                HERITAGE<br/>
                LANKA
              </h2>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">
                The Problem We Solve
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Travel information is scattered across multiple apps, documents, and websites, forcing travelers to constantly switch between tools. This creates confusion, stress, and wasted time.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Heritage Lanka unifies your entire travel experience into one intelligent platform that plans your trip, guides you in real time, and manages all logistics effortlessly—eliminating the chaos of juggling multiple apps.
              </p>
              <a href="#features" className="read-more">
                DISCOVER HOW IT WORKS
                <FaArrowRight className="text-xs" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Three Card Section */}
      <section className="bg-gray-50 py-16 px-6" id="features">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="content-card p-0 overflow-hidden">
              <div className="h-64 bg-cover bg-center" style={{backgroundImage: 'url(/bg2.jpg)'}}></div>
              <div className="p-8">
                <h3 className="text-xl font-serif font-bold uppercase mb-4 tracking-wide">
                  The Planner
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  Build smart, personalized itineraries that adapt to your preferences. No more juggling spreadsheets or scattered notes.
                </p>
                <a href="#" className="read-more text-sm">
                  LEARN MORE
                  <FaArrowRight className="text-xs" />
                </a>
              </div>
            </div>

            <div className="content-card p-0 overflow-hidden">
              <div className="h-64 bg-cover bg-center" style={{backgroundImage: 'url(/bg3.jpg)'}}></div>
              <div className="p-8">
                <h3 className="text-xl font-serif font-bold uppercase mb-4 tracking-wide">
                  The Guider
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  Get live, context-aware navigation and local insights in real time. Your personal guide in your pocket.
                </p>
                <a href="#" className="read-more text-sm">
                  LEARN MORE
                  <FaArrowRight className="text-xs" />
                </a>
              </div>
            </div>

            <div className="content-card p-0 overflow-hidden">
              <div className="h-64 bg-cover bg-center" style={{backgroundImage: 'url(/bg4.jpg)'}}></div>
              <div className="p-8">
                <h3 className="text-xl font-serif font-bold uppercase mb-4 tracking-wide">
                  The Manager
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  Store documents, manage bookings, and collaborate with travel companions—all in one secure place.
                </p>
                <a href="#" className="read-more text-sm">
                  LEARN MORE
                  <FaArrowRight className="text-xs" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section - Things to Do */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left Column - Text */}
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-2 leading-none">
                THINGS<br/>
                TO DO
              </h2>
              <p className="text-2xl font-sans font-normal mb-8">IN SRI LANKA</p>
              
              <p className="text-gray-700 leading-relaxed text-sm">
                Discover Sri Lanka's most incredible destinations with Heritage Lanka. We bring together everything you need to explore the island's rich culture, ancient wonders, pristine beaches, and lush landscapes. From planning to experiencing, we've got you covered every step of the way.
              </p>
            </div>

            {/* Middle Column - Interactive Map */}
            <div>
              <div className="relative bg-gradient-to-br from-blue-100 via-blue-50 to-green-50 rounded-lg overflow-hidden shadow-lg" style={{height: '600px'}}>
                {/* Sri Lankan Map Image */}
                <img 
                  src="/srilankan_map.png" 
                  alt="Sri Lanka Map" 
                  className="absolute inset-0 w-full h-full object-contain p-4"
                />

                {/* Location Markers - Positioned more accurately */}
                {sriLankanDestinations.map((dest) => (
                  <button
                    key={dest.id}
                    onClick={() => setSelectedDestination(dest)}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 ${
                      selectedDestination.id === dest.id ? 'scale-125 z-20' : 'z-10'
                    }`}
                    style={{ top: dest.position.top, left: dest.position.left }}
                    title={dest.name}
                  >
                    <div className={`relative ${selectedDestination.id === dest.id ? 'animate-pulse' : ''}`}>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-xl border-2 border-white ${
                        selectedDestination.id === dest.id 
                          ? 'bg-red-500 ring-4 ring-red-300' 
                          : 'bg-blue-900 hover:bg-blue-700'
                      }`}>
                        {dest.number}
                      </div>
                      <div className={`absolute -bottom-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-bold px-2 py-1 rounded ${
                        selectedDestination.id === dest.id 
                          ? 'bg-red-500 text-white' 
                          : 'bg-white text-gray-800 border border-gray-300'
                      }`}>
                        {dest.name}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Destination Details */}
            <div className="lg:sticky lg:top-32">
              <div className="bg-white rounded-lg overflow-hidden shadow-xl">
                {/* Destination Image */}
                <div 
                  className="h-96 bg-cover bg-center relative"
                  style={{backgroundImage: `url(${selectedDestination.image})`}}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>

                {/* Destination Info */}
                <div className="p-6 relative -mt-20 z-10">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-bold uppercase tracking-wide mb-2 flex items-center gap-3">
                      <FaMapMarkerAlt className="text-primary-600 text-xl" />
                      {selectedDestination.name}
                    </h3>
                    <p className="text-gray-500 uppercase text-xs tracking-widest mb-4">
                      HIKING TRAILS THAT ARE IDEAL FOR FRIENDS
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                      {selectedDestination.description}
                    </p>

                    <button className="flex items-center gap-2 text-gray-800 hover:text-primary-600 transition group">
                      <div className="w-10 h-10 border-2 border-gray-800 rounded-full flex items-center justify-center group-hover:border-primary-600 transition">
                        <FaArrowRight className="text-sm" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="nature-bg py-20 px-6 relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 uppercase tracking-wide">
              CONNECT WITH<br/>
              TRUSTED LOCAL SERVICES
            </h2>
            <p className="text-lg font-serif text-white/90 tracking-wide">VERIFIED GUIDES, TRANSPORT & MORE</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Expert Guides", desc: "Verified local experts who know Sri Lanka intimately" },
              { title: "Transport", desc: "Reliable drivers and comfortable vehicles" },
              { title: "Accommodation", desc: "Trusted hotels, guesthouses & homestays" },
              { title: "Experiences", desc: "Authentic cultural and adventure activities" }
            ].map((service, index) => (
              <div key={index} className="content-card p-6 text-center bg-white/95 hover:bg-white transition">
                <h3 className="text-lg font-serif font-bold uppercase mb-2 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 uppercase tracking-wide leading-tight">
                ONE PLATFORM<br/>
                EVERYTHING YOU NEED
              </h2>
              <p className="text-lg font-serif mb-6 tracking-wide">REPLACE ALL FRAGMENTED TOOLS</p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Stop switching between multiple apps for itineraries, maps, budgets, and bookings. Heritage Lanka brings everything together—planning, guiding, and managing your entire Sri Lankan adventure in one seamless experience.
              </p>
              <a href="#" className="read-more">
                EXPLORE FEATURES
                <FaArrowRight className="text-xs" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="h-64 bg-cover bg-center content-card overflow-hidden" style={{backgroundImage: 'url(/bg5.jpg)'}}>
                <div className="h-full bg-black/20 hover:bg-black/30 transition flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs uppercase tracking-widest mb-1">Smart</p>
                    <h4 className="text-2xl font-serif font-bold">PLANNING</h4>
                  </div>
                </div>
              </div>
              <div className="h-64 bg-cover bg-center content-card overflow-hidden" style={{backgroundImage: 'url(/bg6.jpg)'}}>
                <div className="h-full bg-black/20 hover:bg-black/30 transition flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs uppercase tracking-widest mb-1">Real-Time</p>
                    <h4 className="text-2xl font-serif font-bold">GUIDANCE</h4>
                  </div>
                </div>
              </div>
              <div className="h-64 bg-cover bg-center content-card overflow-hidden" style={{backgroundImage: 'url(/hero-bg.jpg)'}}>
                <div className="h-full bg-black/20 hover:bg-black/30 transition flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs uppercase tracking-widest mb-1">Complete</p>
                    <h4 className="text-2xl font-serif font-bold">MANAGEMENT</h4>
                  </div>
                </div>
              </div>
              <div className="h-64 bg-cover bg-center content-card overflow-hidden" style={{backgroundImage: 'url(/bg2.jpg)'}}>
                <div className="h-full bg-black/20 hover:bg-black/30 transition flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs uppercase tracking-widest mb-1">Trusted</p>
                    <h4 className="text-2xl font-serif font-bold">CONNECTIONS</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="sunset-bg py-20 px-6 relative">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 uppercase tracking-wide">
            START YOUR JOURNEY
          </h2>
          <p className="text-white/90 text-lg mb-12 font-light">
            Join travelers who've discovered stress-free exploration with Heritage Lanka
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold uppercase tracking-wider text-sm transition flex items-center justify-center gap-2"
              >
                Subscribe
                <FaArrowRight className="text-xs" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
