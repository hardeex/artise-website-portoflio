import React, { useState, useEffect, useRef } from 'react';
import { Music, Heart, Globe, Sparkles, ArrowRight, Play, Pause } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { number: '11,000+', label: 'Monthly Listeners', icon: Music },
    { number: '16', label: 'Years Experience', icon: Heart },
    { number: '26+', label: 'Songs Released', icon: Sparkles },
    { number: '5', label: 'Continents Reached', icon: Globe },
  ];

  const highlights = [
    'Grammy Winners Collaborator',
    'International Tour Artist',
    'Voice Nigeria Finalist',
    'Multi-Genre Producer'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentStat(prev => (prev + 1) % stats.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible, stats.length]);

  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-4 h-4 rounded-full animate-bounce-subtle ${
            i % 3 === 0 ? 'bg-bubble-turquoise' : 
            i % 3 === 1 ? 'bg-bubble-pink' : 'bg-bubble-yellow'
          }`}
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.5}s`,
            opacity: 0.6
          }}
        />
      ))}
    </div>
  );

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-tide-900 via-haze-800 to-tide-800 overflow-hidden"
    >
      <FloatingElements />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-bubble-turquoise rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-bubble-turquoise/20 backdrop-blur-sm rounded-full px-6 py-2 border border-bubble-turquoise/30">
                <Sparkles className="w-5 h-5 text-bubble-turquoise animate-pulse" />
                <span className="text-bubble-turquoise font-medium">About Efezino</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                Embodiment of
                <span className="block bg-gradient-to-r from-bubble-turquoise via-bubble-pink to-orange-500 bg-clip-text text-transparent animate-pulse">
                  African Talent
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                From the vibrant streets of Warri, Delta State, to international stages, 
                Efezino weaves Afrobeat magic that transcends boundaries and touches souls worldwide.
              </p>
            </div>

            {/* Interactive Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const isActive = currentStat === index;
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                      isActive 
                        ? 'bg-bubble-turquoise/20 border-bubble-turquoise shadow-lg shadow-bubble-turquoise/25 scale-105' 
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                    onClick={() => setCurrentStat(index)}
                  >
                    <Icon className={`w-8 h-8 mb-3 ${isActive ? 'text-bubble-turquoise' : 'text-gray-400'}`} />
                    <div className={`text-2xl font-bold ${isActive ? 'text-white' : 'text-gray-300'}`}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Highlights Pills */}
            <div className="flex flex-wrap gap-3">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-blossom-500/20 backdrop-blur-sm rounded-full border border-orange-500/30 text-orange-300 text-sm font-medium hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {highlight}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-bubble-turquoise to-bubble-pink px-8 py-4 rounded-full font-semibold text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-bubble-pink to-bubble-turquoise opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Discover My Journey</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className={`relative ${isVisible ? 'animate-slide-in' : 'opacity-0 translate-y-10'}`}>
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-bubble-turquoise/20 to-orange-500/20 backdrop-blur-sm">
                {/* Placeholder for artist image */}
                <div className="absolute inset-0 bg-gradient-to-br from-bubble-turquoise/30 via-bubble-pink/20 to-orange-500/30 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                      <Music className="w-16 h-16 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">Efezino</h3>
                      <p className="text-bubble-turquoise">Afrobeat Sensation</p>
                    </div>
                  </div>
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/30">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-20 h-20 bg-bubble-turquoise rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white ml-1" />
                    )}
                  </button>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-bubble-yellow to-orange-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-6 transition-transform duration-500">
                <Music className="w-10 h-10 text-white" />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-gradient-to-br from-bubble-pink to-blossom-500 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12 group-hover:-rotate-6 transition-transform duration-500">
                <Heart className="w-12 h-12 text-white animate-pulse" />
              </div>
            </div>

            {/* Achievement Badges */}
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-bubble-turquoise rounded-full flex items-center justify-center mx-auto mb-2">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xs text-gray-300">International</div>
                  <div className="text-sm font-bold text-white">Tours</div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xs text-gray-300">Award</div>
                  <div className="text-sm font-bold text-white">Winner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;