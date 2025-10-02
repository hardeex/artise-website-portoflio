import React, { useState, useRef, useEffect } from "react";
import { Music, Play, Share2, Heart, Sparkles } from "lucide-react";

interface Release {
  title: string;
  year: number;
  tracks: number;
  type: "single" | "ep" | "album";
  spotifyUrl?: string;
  appleMusicUrl?: string;
  featured?: boolean;
  imageUrl: string;
  color: string;
}

const MusicSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const releases: Release[] = [
    {
      title: "Toxic",
      year: 2025,
      tracks: 1,
      type: "single",
      spotifyUrl: "https://open.spotify.com/track/4GlwuIEi3vWcC4Cc2y476U?si=9bcb3105cbe84ae2",
      appleMusicUrl: "https://music.apple.com/album/toxic",
      featured: true,
      imageUrl: "/assets/efe_images/Efezino Toxic picture .jpg",
      color: "from-orange-600 via-red-600 to-rose-700",
    },
    {
      title: "Till The Day",
      year: 2024,
      tracks: 1,
      type: "single",
      spotifyUrl: "https://open.spotify.com/track/tilltheday",
      appleMusicUrl: "https://music.apple.com/album/till-the-day",
      imageUrl: "/assets/efe_images/IMG_0156.jpg",
      color: "from-amber-700 via-orange-700 to-stone-800",
      featured: true,
    },
    {
      title: "Memory Box EP",
      year: 2023,
      tracks: 6,
      type: "ep",
      spotifyUrl: "https://open.spotify.com/album/memorybox",
      appleMusicUrl: "https://music.apple.com/album/memory-box-ep",
      featured: true,
      imageUrl: "/assets/efe_images/IMG_0157.jpg",
      color: "from-stone-700 via-neutral-800 to-zinc-900",
    },
    {
      title: "Santa Maria",
      year: 2023,
      tracks: 1,
      type: "single",
      spotifyUrl: "https://open.spotify.com/track/santamaria",
      appleMusicUrl: "https://music.apple.com/album/santa-maria",
      imageUrl: "/assets/efe_images/IMG_0158.jpg",
      color: "from-amber-600 via-orange-600 to-yellow-700",
    },
    {
      title: "Sounds From Africa",
      year: 2022,
      tracks: 14,
      type: "album",
      spotifyUrl: "https://open.spotify.com/album/soundsfromafrica",
      appleMusicUrl: "https://music.apple.com/album/sounds-from-africa",
      featured: true,
      imageUrl: "/assets/efe_images/DSC00008.jpg",
      color: "from-orange-700 via-amber-800 to-stone-900",
    },
    {
      title: "Amere",
      year: 2019,
      tracks: 1,
      type: "single",
      spotifyUrl: "https://open.spotify.com/track/7wIRtXKQNYRT25X5Kn0WBU?si=e441dd9d3a264e74",
      appleMusicUrl: "https://music.apple.com/album/amere",
      imageUrl: "/assets/efe_images/Mehn_ I_m pretty. __When I was 12_ I wanted to be a model. Fast forward to 2023_ I can confidently tel (4).jpg",
      color: "from-orange-600 via-rose-700 to-red-800",
    },
  ];

  const handlePlay = (title: string) => {
    setPlayingTrack(playingTrack === title ? null : title);
  };

  const handleShare = (release: Release) => {
    if (navigator.share) {
      navigator.share({
        title: `${release.title} by Efezino`,
        text: `Check out "${release.title}" - a beautiful ${release.type} by Efezino`,
        url: release.spotifyUrl || window.location.href,
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll(".music-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-amber-50/50 via-orange-50/50 to-stone-50/50 relative overflow-hidden"
    >
      {/* Soft Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-stone-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-br from-stone-200/20 to-neutral-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Floating Musical Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-bounce opacity-20"
            style={{
              left: `${15 + (i * 12)}%`,
              top: `${10 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.7}s`,
              color: ['#ea580c', '#78350f', '#d97706', '#c2410c'][i % 4],
            }}
          >
            {['♪', '♫', '♬', '♭'][i % 4]}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 border border-orange-200/50 shadow-lg shadow-orange-100/50 mb-6">
            <Sparkles className="w-5 h-5 text-orange-600" />
            <span className="text-orange-800 font-medium">My Musical Journey</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-orange-600 via-amber-700 to-stone-800 bg-clip-text mb-6">
            Songs & Stories
          </h2>
          
          <p className="text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed">
            Each song is a piece of my heart, a story from my soul. From intimate singles to full-bodied albums, 
            discover the melodies that have shaped my artistic journey.
          </p>
        </div>

        {/* Music Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {releases.map((release, index) => (
            <div
              key={`${release.title}-${release.year}`}
              className={`music-card group relative opacity-0 transform translate-y-8`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(release.title)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative overflow-hidden bg-white/70 backdrop-blur-sm rounded-3xl border border-amber-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={release.imageUrl}
                    alt={release.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ filter: 'sepia(8%) saturate(105%) brightness(102%)' }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${release.color} opacity-15 group-hover:opacity-25 transition-opacity duration-300`}></div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-stone-900/20 backdrop-blur-sm">
                    <button
                      onClick={() => handlePlay(release.title)}
                      className="w-16 h-16 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-orange-200"
                    >
                      <Play className="w-6 h-6 text-orange-700 ml-1" />
                    </button>
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`bg-gradient-to-r ${release.color} px-3 py-1 rounded-full text-white text-sm font-semibold shadow-lg`}>
                      {release.type.toUpperCase()}
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-stone-800 text-sm font-semibold shadow-lg border border-orange-200/50">
                      {release.year}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-stone-800 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-amber-700 group-hover:bg-clip-text transition-all duration-300">
                      {release.title}
                    </h3>
                    <p className="text-stone-600">
                      {release.tracks} {release.tracks === 1 ? 'track' : 'tracks'} • {release.year}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      {release.spotifyUrl && (
                        <a
                          href={release.spotifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-orange-600 to-amber-700 text-white px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2"
                        >
                          <Music className="w-4 h-4" />
                          <span>Spotify</span>
                        </a>
                      )}
                      
                      {release.appleMusicUrl && (
                        <a
                          href={release.appleMusicUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-stone-700 to-stone-800 text-white px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2"
                        >
                          <Music className="w-4 h-4" />
                          <span>Apple</span>
                        </a>
                      )}
                    </div>

                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleShare(release)}
                        className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-stone-600 hover:text-orange-600 hover:scale-110 transition-all duration-300 shadow-lg border border-orange-200/30"
                      >
                        <Share2 className="w-5 h-5" />
                      </button>
                      
                      <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-stone-600 hover:text-red-600 hover:scale-110 transition-all duration-300 shadow-lg border border-orange-200/30">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default MusicSection;