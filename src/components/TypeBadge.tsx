import { Disc3, Music, Play } from "lucide-react";
import type { Release } from "../types/Release";

interface TypeBadgeProps {
  type: Release["type"];
}

const TypeBadge: React.FC<TypeBadgeProps> = ({ type }) => {
  const getTypeIcon = (type: Release["type"]) => {
    switch (type) {
      case "album":
        return <Disc3 className="w-4 h-4" />;
      case "ep":
        return <Music className="w-4 h-4" />;
      case "single":
        return <Play className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: Release["type"]) => {
    switch (type) {
      case "album":
        return "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30";
      case "ep":
        return "bg-gradient-to-r from-cyan-400 to-cyan-500 text-white shadow-lg shadow-cyan-400/30";
      case "single":
        return "bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/30";
    }
  };

  return (
    <div
      className={`absolute top-4 left-4 inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-md ${getTypeColor(
        type
      )}`}
    >
      {getTypeIcon(type)}
      <span className="capitalize">{type}</span>
    </div>
  );
};

export default TypeBadge;