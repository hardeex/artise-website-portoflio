import React, { useState, useEffect, useRef } from "react";
import { Heart, Music, Play, Pause, Instagram, Mail, Facebook } from "lucide-react";

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  const heroImages = [
    "/assets/efe_images/It_s my birthday_ As I look back_ I see the miles I_ve traveled_ the mountains I_ve climbed_ and the l (2).jpg",
    "/assets/efe_images/Efezino-4.jpg",
    "/assets/efe_images/Efezino Toxic picture .jpg", 
    "/assets/efe_images/DSC00008.jpg",
    "/assets/efe_images/DSC00018.jpg"
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={heroRef}
      className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Floating Organic Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-orange-200/40 to-amber-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-amber-300/40 to-orange-300/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-stone-200/30 to-amber-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Hearts and Music Notes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-pulse ${
              i % 2 === 0 ? 'text-orange-300' : 'text-amber-300'
            }`}
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${20 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              fontSize: `${12 + (i % 3) * 4}px`,
            }}
          >
            {i % 3 === 0 ? '♪' : i % 3 === 1 ? '♫' : '♡'}
          </div>
        ))}
      </div>

      {/* Interactive Mouse Glow */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-orange-300/20 via-amber-300/20 to-stone-300/20 rounded-full blur-3xl transition-all duration-700 pointer-events-none"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Left Side - Content */}
          <div className="space-y-8 animate-fadeIn">
            {/* Soft Tag */}
            <div className="inline-flex items-center space-x-2 bg-stone-50/80 backdrop-blur-sm rounded-full px-6 py-2 border border-orange-200/50 shadow-lg shadow-orange-100/50">
              <Heart className="w-4 h-4 text-orange-700" />
              <span className="text-orange-800 font-medium text-sm">Afrobeat Songbird</span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-7xl lg:text-8xl font-bold text-transparent bg-gradient-to-r from-orange-700 via-amber-800 to-stone-900 bg-clip-text leading-none">
                Efezino
              </h1>
              
              <div className="flex items-center space-x-4">
                <div className="h-1 w-16 bg-gradient-to-r from-orange-600 to-amber-700 rounded-full"></div>
                <p className="text-2xl lg:text-3xl text-stone-600 font-light">
                  Majiri Akpo
                </p>
              </div>

              <div className="inline-block">
                <div className="bg-gradient-to-r from-amber-200/60 to-orange-200/60 backdrop-blur-sm rounded-full px-8 py-3 border border-amber-300/50">
                  <div className="flex items-center space-x-3">
                    <Music className="w-5 h-5 text-orange-800" />
                    <span className="text-orange-900 font-semibold text-lg">Singer • Songwriter • Soul</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-xl text-stone-700 leading-relaxed max-w-lg font-light">
                A vibrant Afrobeat artist weaving magic through soulful melodies, celebrating love, culture, and the beautiful rhythms of life.
              </p>
              
              <div className="flex items-center space-x-2 text-stone-600">
                <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
                <span className="text-sm">16+ years of musical storytelling</span>
              </div>
            </div>

            {/* Soft Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="https://open.spotify.com/artist/0eYobfoCMOOoN4sOrhsmaE" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsPlaying(!isPlaying)}
                className="group bg-gradient-to-r from-orange-700 to-amber-800 hover:from-orange-800 hover:to-amber-900 text-stone-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl shadow-orange-300/50 flex items-center space-x-3"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                <span>{isPlaying ? 'Pause Music' : 'Play My Music'}</span>
              </a>

              <a 
                href="/about" 
                className="bg-stone-50/90 hover:bg-stone-50 backdrop-blur-sm text-stone-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 border border-stone-300/50 shadow-lg hover:shadow-xl"
              >
                Discover My Story 
              </a>
            </div>

            {/* Social Links - Soft Style */}
            <div className="flex space-x-4 pt-6">
              {[
                {
                  icon: Instagram,
                  color: 'from-orange-700 to-amber-800',
                  href: 'https://www.instagram.com/Efezino_/',
                },
                {
                  icon: Facebook,
                  color: 'from-stone-700 to-stone-800',
                  href: 'https://www.facebook.com/EfezinoAkpo',
                },
                {
                  icon: Mail,
                  color: 'from-amber-800 to-orange-900',
                  href: 'mailto:teamefezino@efezino.net',
                },
              ].map(({ icon: Icon, color, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 bg-gradient-to-r ${color} rounded-full flex items-center justify-center text-stone-50 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300`}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Soft Image Gallery */}
          <div className="relative">
            {/* Main Image Container - Organic Shape */}
            <div className="relative group">
              <div 
                className="w-full h-[600px] bg-gradient-to-br from-orange-200/40 via-amber-200/40 to-stone-200/40 backdrop-blur-sm rounded-[3rem] overflow-hidden shadow-2xl shadow-orange-200/30 border border-stone-100/30"
                style={{
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                  animation: 'blob 8s ease-in-out infinite'
                }}
              >
                {/* Image Slider */}
                <div className="relative w-full h-full">
                  {heroImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ${
                        index === currentImageIndex
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-105"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Efezino ${index + 1}`}
                        className="w-full h-full object-cover"
                        style={{ filter: 'sepia(10%) saturate(120%) hue-rotate(10deg)' }}
                      />
                    </div>
                  ))}
                </div>

                {/* Soft Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-700/20 via-transparent to-amber-700/10"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-stone-50/20 backdrop-blur-sm">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-20 h-20 bg-stone-50/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 border border-stone-100/50"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-orange-700" />
                    ) : (
                      <Play className="w-8 h-8 text-orange-700 ml-1" />
                    )}
                  </button>
                </div>
              </div>

              {/* Floating Accent Cards */}
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-amber-600 to-orange-700 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 hover:rotate-6 transition-transform duration-500 animate-pulse">
                <Music className="w-8 h-8 text-stone-50" />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-600 to-amber-700 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12 hover:-rotate-6 transition-transform duration-500 animate-pulse" style={{ animationDelay: '1s' }}>
                <Heart className="w-10 h-10 text-stone-50" />
              </div>

              {/* Soft Floating Elements */}
              <div className="absolute top-1/4 -right-12 w-16 h-16 bg-stone-50/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-orange-200/50 animate-bounce">
                <span className="text-2xl text-orange-700">♪</span>
              </div>
              
              <div className="absolute bottom-1/4 -left-12 w-12 h-12 bg-stone-50/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-amber-200/50 animate-bounce" style={{ animationDelay: '1s' }}>
                <span className="text-xl text-amber-700">♫</span>
              </div>
            </div>

            {/* Image Navigation Dots - Soft Style */}
            <div className="flex justify-center mt-8 space-x-3">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-gradient-to-r from-orange-700 to-amber-800 scale-125"
                      : "bg-stone-300 hover:bg-stone-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Floating Stats - Soft Bubbles */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-8">
            {[
              { number: "11k+", label: "Monthly Listeners", color: "from-orange-700 to-amber-700" },
              { number: "26+", label: "Songs Released", color: "from-amber-800 to-orange-800" },
              { number: "16", label: "Years Experience", color: "from-stone-700 to-stone-800" }
            ].map((stat, idx) => (
              <div key={idx} className={`bg-gradient-to-r ${stat.color} rounded-full px-6 py-3 shadow-lg text-stone-50 text-center min-w-[120px]`}>
                <div className="font-bold text-lg">{stat.number}</div>
                <div className="text-xs opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          50% { border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%; }
          75% { border-radius: 60% 40% 60% 40% / 70% 30% 50% 60%; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;