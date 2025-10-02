import { Play, Volume2 } from "lucide-react";
import TypeBadge from "./TypeBadge";
import ActionButtons from "./ActionButtons";
import type { Release } from "../types/Release";
import { Calendar, Music } from "lucide-react";

interface ReleaseCardProps {
  release: Release;
  index: number;
  activeRelease: string | null;
  setActiveRelease: (title: string | null) => void;
  playingPreview: string | null;
  setPlayingPreview: (title: string | null) => void;
  hoveredCard: string | null;
  setHoveredCard: (title: string | null) => void;
  handleShare: (release: Release) => void;
  shareSuccess: string | null;
}

const ReleaseCard: React.FC<ReleaseCardProps> = ({
  release,
  index,
  activeRelease,
  setActiveRelease,
  playingPreview,
  setPlayingPreview,
  hoveredCard,
  setHoveredCard,
  handleShare,
  shareSuccess,
}) => {
  const togglePreview = (title: string) => {
    setPlayingPreview(playingPreview === title ? null : title);
  };

  return (
    <div
      key={`${release.title}-${release.year}`}
      className={`music-card group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 ${
        release.featured ? "ring-2 ring-orange-300 ring-opacity-50" : ""
      } transform hover:scale-105 hover:-rotate-1`}
      onMouseEnter={() => {
        setActiveRelease(release.title);
        setHoveredCard(release.title);
      }}
      onMouseLeave={() => {
        setActiveRelease(null);
        setHoveredCard(null);
      }}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {release.featured && (
        <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs px-4 py-2 rounded-full font-bold shadow-lg animate-bounce-subtle">
          ⭐ Featured
        </div>
      )}
      <div className="relative aspect-square overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${release.color} opacity-20`}
        ></div>
        <img
          src={release.imageUrl}
          alt={release.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            hoveredCard === release.title ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={() => togglePreview(release.title)}
            className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
          >
            {playingPreview === release.title ? (
              <Volume2 className="w-8 h-8" />
            ) : (
              <Play className="w-8 h-8 ml-1" />
            )}
          </button>
        </div>
        <TypeBadge type={release.type} />
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-cyan-400 transition-colors duration-300">
            {release.title}
          </h3>
          <div className="flex items-center space-x-4 text-gray-600">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span className="font-medium">{release.year}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Music className="w-4 h-4" />
              <span className="font-medium">
                {release.tracks} track{release.tracks > 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </div>
        <ActionButtons
          release={release}
          playingPreview={playingPreview}
          togglePreview={togglePreview}
          handleShare={handleShare}
          shareSuccess={shareSuccess}
        />
      </div>
      <div
        className={`absolute inset-0 rounded-3xl transition-all duration-500 pointer-events-none ${
          activeRelease === release.title
            ? "bg-gradient-to-r from-cyan-400/20 via-orange-500/20 to-pink-300/20"
            : "bg-transparent"
        }`}
      />
    </div>
  );
};

export default ReleaseCard;
