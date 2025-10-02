import { Disc3, Music, Play, Heart } from "lucide-react";

interface ReleaseHeaderProps {
  showAll: boolean;
  showHeader: boolean;
}

const ReleaseHeader: React.FC<ReleaseHeaderProps> = ({ showAll, showHeader }) => {
  if (!showHeader) return null;

  return (
    <div className="text-center mb-16">
      <div className="inline-block relative mb-6">
        <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-800 via-teal-600 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
          {showAll ? "MUSIC" : "LATEST RELEASES"}
        </h2>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-orange-500 rounded-full animate-slide-in"></div>
      </div>
      <p
        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in"
        style={{ animationDelay: "0.2s" }}
      >
        {showAll
          ? "Experience the soulful journey of Afrobeat excellence. From intimate singles to complete albums, discover the musical evolution that has captivated over 11,000 monthly listeners worldwide."
          : "Discover Efezino’s newest releases featuring her signature blend of Afrobeat, Soul, and authentic African sounds."}
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-sm">
        {[
          { icon: Disc3, label: "1 Album", color: "text-orange-500" },
          { icon: Music, label: "2 EPs", color: "text-cyan-400" },
          { icon: Play, label: "26+ Singles", color: "text-teal-500" },
          { icon: Heart, label: "11K+ Monthly Listeners", color: "text-pink-500" },
        ].map(({ icon: Icon, label, color }, index) => (
          <div
            key={label}
            className={`flex items-center space-x-2 ${color} animate-fade-in`}
            style={{ animationDelay: `${0.4 + index * 0.1}s` }}
          >
            <Icon className="w-5 h-5" />
            <span className="font-semibold">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReleaseHeader;
