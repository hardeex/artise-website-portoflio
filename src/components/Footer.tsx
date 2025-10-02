import React from "react";
import {
  Music,
  Mail,
  Phone,
  MapPin,
  Heart,
  Sparkles,
  ExternalLink,
} from "lucide-react";

const SoftFooter: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-amber-50/90 via-orange-50/90 to-stone-50/90 backdrop-blur-sm">
      {/* Soft Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-stone-200/20 to-neutral-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Floating Musical Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-xl animate-bounce opacity-10"
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 1}s`,
              color: ["#ea580c", "#78350f", "#d97706"][i % 3],
            }}
          >
            {["♪", "♫", "♡"][i % 3]}
          </div>
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand & Bio */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <Music className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-orange-600 via-amber-700 to-stone-800 bg-clip-text">
                Efezino
              </h2>
            </div>

            <p className="text-stone-700 mb-6 leading-relaxed max-w-md">
              Nigerian Afrobeat sensation from Delta State, blending Afropop,
              Soul, and contemporary sounds. Creating musical magic that
              celebrates love, culture, and the beautiful rhythms of life.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-stone-700">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span>Delta State, Nigeria</span>
              </div>
              <div className="flex items-center gap-3 text-stone-700">
                <div className="w-8 h-8 bg-gradient-to-r from-amber-700 to-orange-700 rounded-full flex items-center justify-center">
                  <Music className="w-4 h-4 text-white" />
                </div>
                <span>11,000+ Monthly Spotify Listeners</span>
              </div>
              <div className="flex items-center gap-3 text-stone-700">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span>16+ Years of Musical Excellence</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-6 h-6 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
                <ExternalLink className="w-3 h-3 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-stone-800">
                Quick Links
              </h3>
            </div>

            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-stone-600 hover:text-orange-600 transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <div className="w-1 h-1 bg-orange-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-6 h-6 bg-gradient-to-r from-orange-600 to-amber-700 rounded-full flex items-center justify-center">
                <Heart className="w-3 h-3 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-stone-800">Connect</h3>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 mb-6 text-sm">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-amber-200/50 shadow-lg">
                <div className="flex items-center gap-3 text-stone-700 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <a
                      href="mailto:teamefezino@efezino.net"
                      className="hover:text-orange-600 transition-colors font-medium"
                    >
                      teamefezino@efezino.net
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-stone-700">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-700 to-amber-700 rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span>+234811 000 5555 678</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-amber-200/30 py-6 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-stone-700 text-center md:text-left">
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <Heart className="w-4 h-4 text-orange-600" />
              <span>
                &copy; {new Date().getFullYear()} Efezino - Powered by SM
                DIGITAL SYSTEM.
              </span>
            </p>
            <p className="mt-1 text-xs text-stone-600">
              Proudly representing Delta State, Nigeria with love and music
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SoftFooter;
