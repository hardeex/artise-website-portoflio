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
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-amber-300/20 to-stone-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={`note-${i}`} className="absolute text-2xl animate-bounce opacity-20" style={{ left: `${10 + i * 12}%`, top: `${15 + (i % 4) * 20}%`, animationDelay: `${i * 0.7}s`, color: ["#c2410c", "#92400e", "#78716c", "#d97706"][i % 4] }}>
            {["♪", "♫", "♬", "♡"][i % 4]}
          </div>
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={`sparkle-${i}`} className="absolute animate-pulse opacity-15" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 3}s` }}>
            {i % 2 === 0 ? "✨" : "💫"}
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-12 min-h-screen flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-6">
              <div className="inline-block">
                <h1 className="text-8xl md:text-9xl lg:text-[10rem] font-bold text-transparent bg-gradient-to-r from-orange-700 via-amber-800 to-stone-900 bg-clip-text animate-pulse leading-none">
                  4<span style={{ animationDelay: "0.5s" }}>0</span>4
                </h1>
              </div>
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-stone-50/80 backdrop-blur-sm rounded-full px-6 py-2 border border-orange-200/50 shadow-lg">
                  <Heart className="w-5 h-5 text-orange-700" />
                  <span className="text-orange-800 font-medium">Oops!</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-stone-800">Lost in the Music?</h2>
                <p className="text-lg md:text-xl text-stone-600 max-w-md mx-auto lg:mx-0 leading-relaxed">
                  Looks like you've wandered off the beaten path. Don't worry, even the most beautiful melodies sometimes take unexpected turns.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/" className="group inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-orange-700 to-amber-800 hover:from-orange-800 hover:to-amber-900 text-stone-50 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Home className="w-5 h-5 group-hover:animate-bounce" />
                <span>Back to Home</span>
              </a>
              <a href="https://open.spotify.com/artist/0eYobfoCMOOoN4sOrhsmaE" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-stone-50/80 backdrop-blur-sm border-2 border-stone-100/50 text-stone-700 font-semibold rounded-full hover:bg-stone-50/90 hover:border-orange-300 hover:text-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Music className="w-5 h-5 group-hover:animate-pulse" />
                <span>Explore Music</span>
              </a>
            </div>

            <div className="pt-6">
              <div className="bg-stone-50/60 backdrop-blur-sm rounded-3xl p-6 border border-stone-100/50 shadow-lg">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                  <Sparkles className="w-5 h-5 text-amber-700" />
                  <p className="text-sm text-stone-600 font-medium">Or try these popular pages:</p>
                </div>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <a href="/about" className="inline-flex items-center gap-2 bg-stone-50/80 backdrop-blur-sm rounded-full px-4 py-2 text-stone-600 hover:text-orange-700 hover:bg-stone-50/90 transition-all duration-300 text-sm border border-stone-100/50 hover:border-orange-300 shadow-lg hover:shadow-xl hover:scale-105">
                    <User className="w-4 h-4" />
                    <span>About Efezino</span>
                  </a>
                  <a href="/music" className="inline-flex items-center gap-2 bg-stone-50/80 backdrop-blur-sm rounded-full px-4 py-2 text-stone-600 hover:text-amber-800 hover:bg-stone-50/90 transition-all duration-300 text-sm border border-stone-100/50 hover:border-amber-300 shadow-lg hover:shadow-xl hover:scale-105">
                    <Music className="w-4 h-4" />
                    <span>Music</span>
                  </a>
                  <a href="/contact" className="inline-flex items-center gap-2 bg-stone-50/80 backdrop-blur-sm rounded-full px-4 py-2 text-stone-600 hover:text-stone-800 hover:bg-stone-50/90 transition-all duration-300 text-sm border border-stone-100/50 hover:border-stone-300 shadow-lg hover:shadow-xl hover:scale-105">
                    <ArrowLeft className="w-4 h-4" />
                    <span>Contact</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group">
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-orange-700 to-amber-700 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Music className="w-8 h-8 text-stone-50" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-r from-stone-700 to-stone-800 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: "1s" }}>
                <Heart className="w-6 h-6 text-stone-50" />
              </div>
              <div className="absolute top-1/4 -left-12 w-8 h-8 bg-gradient-to-r from-amber-800 to-orange-800 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Sparkles className="w-4 h-4 text-stone-50" />
              </div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 overflow-hidden border-4 border-stone-50/50 shadow-2xl group-hover:scale-105 transition-all duration-700 bg-gradient-to-br from-orange-200/40 via-amber-200/40 to-stone-200/40" style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%", animation: "blob 8s ease-in-out infinite" }}>
                <img src="/assets/efe_images/Celebrating 10 years of excellence _flyairpeace 👏🏾_Happy Anniversary_ 🫶🏾__💄 _didysignature _👗 _a.jpg" alt="Efezino - Nigerian Afrobeat Artist" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" style={{ filter: "sepia(10%) saturate(120%) hue-rotate(5deg)" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-700/20 via-transparent to-amber-700/10"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-stone-50/20 backdrop-blur-sm">
                  <div className="w-20 h-20 bg-stone-50/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">
                    <Play className="w-8 h-8 text-orange-700 ml-1" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-amber-600 rounded-full transform -translate-x-1/2 -translate-y-1/2" style={{ animation: "spin 10s linear infinite", transformOrigin: "0 120px" }} />
                <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-orange-600 rounded-full transform -translate-x-1/2 -translate-y-1/2" style={{ animation: "spin 15s linear infinite reverse", transformOrigin: "0 100px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 absolute bottom-8 left-0 right-0 text-center">
        <div className="bg-stone-50/60 backdrop-blur-sm rounded-3xl p-4 max-w-lg mx-auto border border-stone-100/50 shadow-lg">
          <p className="text-stone-600 text-sm italic flex items-center justify-center space-x-2">
            <Heart className="w-4 h-4 text-orange-700" />
            <span>"Every wrong turn is just another verse in your story - Keep exploring the rhythm of life"</span>
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