"use client";

import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaCalendar, FaClock, FaArrowRight, FaSearch } from 'react-icons/fa';

export default function PlacesPage() {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilterBar, setShowFilterBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setShowFilterBar(false);
      } else {
        // Scrolling up
        setShowFilterBar(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const regions = ['All', 'Western', 'Central', 'Southern', 'Eastern', 'Northern', 'North Western', 'North Central', 'Uva', 'Sabaragamuwa'];

  const places = [
    {
      id: 1,
      name: 'Colombo',
      region: 'Western',
      description: 'The vibrant capital city blending modern urban life with colonial heritage.',
      image: '/bg2.jpg',
      attractions: ['National Museum', 'Galle Face Green', 'Gangaramaya Temple'],
      bestTime: 'Year-round',
      duration: '1-2 days'
    },
    {
      id: 2,
      name: 'Kandy',
      region: 'Central',
      description: 'Sacred city home to the Temple of the Tooth Relic and stunning hill country.',
      image: '/bg3.jpg',
      attractions: ['Temple of the Tooth', 'Royal Botanical Gardens', 'Kandy Lake'],
      bestTime: 'December to April',
      duration: '2-3 days'
    },
    {
      id: 3,
      name: 'Galle',
      region: 'Southern',
      description: 'Historic fort city showcasing Dutch colonial architecture and coastal beauty.',
      image: '/bg4.jpg',
      attractions: ['Galle Fort', 'Dutch Reformed Church', 'Lighthouse'],
      bestTime: 'November to April',
      duration: '1-2 days'
    },
    {
      id: 4,
      name: 'Sigiriya',
      region: 'Central',
      description: 'Ancient rock fortress with spectacular frescoes and panoramic views.',
      image: '/bg5.jpg',
      attractions: ['Sigiriya Rock', 'Ancient Frescoes', 'Water Gardens'],
      bestTime: 'May to September',
      duration: '1 day'
    },
    {
      id: 5,
      name: 'Ella',
      region: 'Uva',
      description: 'Picturesque hill station with tea plantations and hiking trails.',
      image: '/bg6.jpg',
      attractions: ['Nine Arch Bridge', 'Little Adams Peak', 'Ravana Falls'],
      bestTime: 'January to March',
      duration: '2-3 days'
    },
    {
      id: 6,
      name: 'Nuwara Eliya',
      region: 'Central',
      description: 'Misty hill station known as "Little England" with tea estates.',
      image: '/hero-bg.jpg',
      attractions: ['Gregory Lake', 'Victoria Park', 'Tea Factories'],
      bestTime: 'April and December',
      duration: '1-2 days'
    },
    {
      id: 7,
      name: 'Anuradhapura',
      region: 'North Central',
      description: 'Ancient city with sacred Buddhist sites and archaeological wonders.',
      image: '/bg2.jpg',
      attractions: ['Sri Maha Bodhi', 'Ruwanwelisaya', 'Ancient Dagobas'],
      bestTime: 'May to September',
      duration: '1-2 days'
    },
    {
      id: 8,
      name: 'Polonnaruwa',
      region: 'North Central',
      description: 'Medieval capital with well-preserved ruins and rock sculptures.',
      image: '/bg3.jpg',
      attractions: ['Gal Vihara', 'Royal Palace', 'Parakrama Samudra'],
      bestTime: 'May to September',
      duration: '1 day'
    },
    {
      id: 9,
      name: 'Mirissa',
      region: 'Southern',
      description: 'Pristine beach paradise perfect for whale watching and surfing.',
      image: '/bg4.jpg',
      attractions: ['Whale Watching', 'Secret Beach', 'Coconut Hill'],
      bestTime: 'November to April',
      duration: '2-3 days'
    },
    {
      id: 10,
      name: 'Trincomalee',
      region: 'Eastern',
      description: 'Port city with stunning beaches and excellent diving spots.',
      image: '/bg5.jpg',
      attractions: ['Nilaveli Beach', 'Pigeon Island', 'Koneswaram Temple'],
      bestTime: 'May to October',
      duration: '2-3 days'
    },
    {
      id: 11,
      name: 'Yala National Park',
      region: 'Uva',
      description: 'Premier wildlife sanctuary famous for leopard sightings.',
      image: '/bg6.jpg',
      attractions: ['Leopard Safari', 'Elephant Herds', 'Bird Watching'],
      bestTime: 'February to July',
      duration: '1-2 days'
    },
    {
      id: 12,
      name: 'Arugam Bay',
      region: 'Eastern',
      description: 'World-renowned surf destination with laid-back beach vibes.',
      image: '/hero-bg.jpg',
      attractions: ['Surfing', 'Pottuvil Point', 'Lagoon Safari'],
      bestTime: 'May to October',
      duration: '3-5 days'
    }
  ];

  const filteredPlaces = places.filter(place => {
    const matchesRegion = selectedRegion === 'All' || place.region === selectedRegion;
    const matchesSearch = place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         place.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/hero-bg.jpg)',
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
              Explore Sri Lanka
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mb-8" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              Discover breathtaking destinations across the pearl of the Indian Ocean
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl">
              <div className="flex items-center bg-white/95 backdrop-blur-sm rounded-full px-6 py-4 shadow-xl">
                <FaSearch className="text-gray-400 text-xl mr-4" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-gray-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className={`bg-gray-50 py-8 px-6 sticky top-24 z-20 border-b border-gray-200 transition-transform duration-300 ${
        showFilterBar ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedRegion === region
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Places Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 uppercase tracking-wide">
              {selectedRegion === 'All' ? 'All Destinations' : `${selectedRegion} Province`}
            </h2>
            <p className="text-gray-600">
              {filteredPlaces.length} {filteredPlaces.length === 1 ? 'destination' : 'destinations'} found
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlaces.map((place) => (
              <div key={place.id} className="content-card group overflow-hidden">
                <div 
                  className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${place.image})` }}
                ></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary-600 mb-2">
                    <FaMapMarkerAlt />
                    <span className="text-sm font-medium">{place.region} Province</span>
                  </div>
                  
                  <h3 className="text-2xl font-serif font-bold mb-3 uppercase">{place.name}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{place.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FaCalendar className="text-accent-600" />
                      <span>Best Time: {place.bestTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FaClock className="text-accent-600" />
                      <span>Duration: {place.duration}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-800 mb-2">Top Attractions:</p>
                    <div className="flex flex-wrap gap-2">
                      {place.attractions.map((attraction, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                          {attraction}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 group">
                    <span>Explore {place.name}</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredPlaces.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No destinations found matching your criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="nature-bg py-20 px-6 relative">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 uppercase tracking-wide">
            Ready to Explore?
          </h2>
          <p className="text-xl mb-8">
            Let Heritage Lanka plan your perfect itinerary across these stunning destinations
          </p>
          <button className="bg-accent-600 hover:bg-accent-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-3">
            <span>Start Planning Your Journey</span>
            <FaArrowRight />
          </button>
        </div>
      </section>
    </main>
  );
}
