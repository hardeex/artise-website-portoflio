import React from "react";
import {
  Home,
  Music,
  User,
  ArrowLeft,
  Heart,
  Sparkles,
  Play,
} from "lucide-react";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Soft Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Floating Musical Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`note-${i}`}
            className="absolute text-2xl animate-bounce opacity-20"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.7}s`,
              color: ["#ec4899", "#8b5cf6", "#06b6d4", "#f59e0b"][i % 4],
            }}
          >
            {["♪", "♫", "♬", "♡"][i % 4]}
          </div>
        ))}

        {/* Floating hearts and stars */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute animate-pulse opacity-15"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            {i % 2 === 0 ? "✨" : "💫"}
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-12 min-h-screen flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-6">
              <div className="inline-block">
                <h1 className="text-8xl md:text-9xl lg:text-[10rem] font-bold text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text animate-pulse leading-none">
                  4
                  <span
                    className=""
                    style={{ animationDelay: "0.5s" }}
                  >
                    0
                  </span>
                  4
                </h1>
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 border border-pink-200/50 shadow-lg">
                  <Heart className="w-5 h-5 text-pink-500" />
                  <span className="text-pink-700 font-medium">Oops!</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Lost in the Music?
                </h2>

                <p className="text-lg md:text-xl text-gray-600 max-w-md mx-auto lg:mx-0 leading-relaxed">
                  Looks like you've wandered off the beaten path. Don't worry,
                  even the most beautiful melodies sometimes take unexpected
                  turns.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/"
                className="group inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Home className="w-5 h-5 group-hover:animate-bounce" />
                <span>Back to Home</span>
              </a>

              <a
                href="https://open.spotify.com/artist/0eYobfoCMOOoN4sOrhsmaE"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-white/60 backdrop-blur-sm border-2 border-white/50 text-gray-700 font-semibold rounded-full hover:bg-white/80 hover:border-pink-300 hover:text-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Music className="w-5 h-5 group-hover:animate-pulse" />
                <span>Explore Music</span>
              </a>
            </div>

            {/* Quick Navigation */}
            <div className="pt-6">
              <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-6 border border-white/50 shadow-lg">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                  <Sparkles className="w-5 h-5 text-purple-500" />
                  <p className="text-sm text-gray-600 font-medium">
                    Or try these popular pages:
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <a
                    href="/about"
                    className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 text-gray-600 hover:text-pink-600 hover:bg-white/80 transition-all duration-300 text-sm border border-white/50 hover:border-pink-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <User className="w-4 h-4" />
                    <span>About Efezino</span>
                  </a>

                  <a
                    href="/music"
                    className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-white/80 transition-all duration-300 text-sm border border-white/50 hover:border-purple-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <Music className="w-4 h-4" />
                    <span>Music</span>
                  </a>

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-white/80 transition-all duration-300 text-sm border border-white/50 hover:border-blue-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Contact</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group">
              {/* Decorative floating elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Music className="w-8 h-8 text-white" />
              </div>

              <div
                className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                style={{ animationDelay: "1s" }}
              >
                <Heart className="w-6 h-6 text-white" />
              </div>

              <div className="absolute top-1/4 -left-12 w-8 h-8 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Sparkles className="w-4 h-4 text-white" />
              </div>

              {/* Main image container with organic shape */}
              <div
                className="relative w-80 h-80 md:w-96 md:h-96 overflow-hidden border-4 border-white/50 shadow-2xl group-hover:scale-105 transition-all duration-700 bg-gradient-to-br from-pink-200/40 via-purple-200/40 to-blue-200/40"
                style={{
                  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                  animation: "blob 8s ease-in-out infinite",
                }}
              >
                <img
                  src="/assets/efe_images/Celebrating 10 years of excellence _flyairpeace 👏🏾_Happy Anniversary_ 🫶🏾__💄 _didysignature _👗 _a.jpg"
                  alt="Efezino - Nigerian Afrobeat Artist"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 "
                  style={{
                    filter: "sepia(10%) saturate(120%) hue-rotate(5deg)",
                  }}
                />

                {/* Soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 via-transparent to-purple-500/10"></div>

                {/* Play button overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white/20 backdrop-blur-sm">
                  <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">
                    <Play className="w-8 h-8 text-pink-600 ml-1" />
                  </div>
                </div>
              </div>

              {/* Orbiting elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    animation: "spin 10s linear infinite",
                    transformOrigin: "0 120px",
                  }}
                />
                <div
                  className="absolute top-1/2 left-1/2 w-3 h-3 bg-green-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    animation: "spin 15s linear infinite reverse",
                    transformOrigin: "0 100px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom inspirational quote */}
      <div className="relative z-10 absolute bottom-8 left-0 right-0 text-center">
        <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-4 max-w-lg mx-auto border border-white/50 shadow-lg">
          <p className="text-gray-600 text-sm italic flex items-center justify-center space-x-2">
            <Heart className="w-4 h-4 text-pink-500" />
            <span>
              "Every wrong turn is just another verse in your story - Keep
              exploring the rhythm of life"
            </span>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          50% { border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%; }
          75% { border-radius: 60% 40% 60% 40% / 70% 30% 50% 60%; }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
