import { ExternalLink } from "lucide-react";
import  type{ Release } from "../types/Release";


interface ReleaseCTAProps {
  showCTA: boolean;
  allReleases: Release[];
}

const ReleaseCTA: React.FC<ReleaseCTAProps> = ({ showCTA}) => {
  if (!showCTA) return null;

  return (
    <div className="mt-20 relative">
      <div className="bg-gradient-to-r from-white/90 to-white/70 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-white/50 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-orange-500/5 to-pink-300/5 rounded-3xl"></div>
        <div className="relative z-10">
          <h3 className="text-4xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-gray-800 to-cyan-400 bg-clip-text text-transparent">
            Join the Journey
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Be part of Efezino’s musical evolution. Stream her latest releases,
            follow for updates, and experience the authentic sound of modern
            Afrobeat artistry.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() =>
                window.open("https://open.spotify.com/artist/efezino", "_blank")
              }
              className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 transform hover:scale-105 shadow-xl hover:shadow-green-500/40"
            >
              <svg
                className="w-6 h-6 group-hover:animate-spin"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.48.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              <span>Follow on Spotify</span>
              <ExternalLink className="w-5 h-5" />
            </button>
            <button
              onClick={() => (window.location.href = "/music")}
              className="group bg-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-500 text-cyan-400 hover:text-white border-2 border-cyan-400 px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-cyan-400/40"
            >
              <span>Explore All Music</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReleaseCTA;
