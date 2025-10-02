import React, { useState, useEffect } from "react";
import { Music, Heart, Image, Mail, Menu, X } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const navigationItems: NavItem[] = [
  { id: "home", label: "Home", href: "/", icon: Music },
  { id: "about", label: "About", href: "/about", icon: Heart },
  { id: "gallery", label: "Gallery", href: "/gallery", icon: Image },
  { id: "contact", label: "Contact", href: "/contact", icon: Mail },
];

interface NavigationProps {
  currentPath?: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentPath = "/" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActiveLink = (href: string) => {
    if (href === "/") return currentPath === "/";
    return currentPath.startsWith(href);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
          scrolled
            ? "bg-stone-50/90 backdrop-blur-md shadow-lg border-b border-amber-900/20"
            : "bg-stone-50/40 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="group flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-700 to-amber-800 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Music className="w-5 h-5 text-stone-50" />
                </div>
                <span className="text-2xl lg:text-3xl font-bold text-transparent bg-gradient-to-r from-orange-700 via-amber-900 to-stone-900 bg-clip-text hover:from-orange-800 hover:via-amber-950 hover:to-black transition-all duration-300">
                  Efezino
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`group flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                      isActiveLink(item.href)
                        ? "bg-gradient-to-r from-orange-700 to-amber-800 text-stone-50 shadow-lg"
                        : scrolled
                        ? "text-stone-700 hover:text-orange-700 hover:bg-orange-50"
                        : "text-stone-600 hover:text-orange-700 hover:bg-stone-100/50"
                    }`}
                  >
                    {Icon && (
                      <Icon
                        className={`w-4 h-4 ${
                          isActiveLink(item.href)
                            ? "text-stone-50"
                            : "group-hover:text-orange-700"
                        }`}
                      />
                    )}
                    <span>{item.label}</span>

                    {/* Hover effect */}
                    {!isActiveLink(item.href) && (
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-700/10 to-amber-800/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className={`p-2 rounded-full transition-all duration-300 ${
                  scrolled
                    ? "text-stone-700 hover:text-orange-700 hover:bg-orange-50"
                    : "text-stone-600 hover:text-orange-700 hover:bg-stone-100/50"
                }`}
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-16 z-40 transform transition-all duration-500 ease-out ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {/* Background with blur */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-50/95 via-amber-50/95 to-orange-50/95 backdrop-blur-lg" />

        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-300/30 to-amber-300/30 rounded-full blur-2xl animate-pulse" />
          <div
            className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-amber-300/30 to-stone-300/30 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />

          {/* Musical notes */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl animate-bounce opacity-20"
              style={{
                left: `${20 + i * 12}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                color: ["#c2410c", "#92400e", "#78716c"][i % 3],
              }}
            >
              {["♪", "♫", "♬"][i % 3]}
            </div>
          ))}
        </div>

        {/* Menu content */}
        <div className="relative z-10 px-6 py-8 space-y-4">
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`group flex items-center space-x-4 p-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 ${
                  isActiveLink(item.href)
                    ? "bg-gradient-to-r from-orange-700 to-amber-800 text-stone-50 shadow-lg"
                    : "bg-stone-50/80 backdrop-blur-sm text-stone-700 hover:bg-stone-50/90 border border-stone-200/50 shadow-lg hover:shadow-xl"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {Icon && (
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isActiveLink(item.href)
                        ? "bg-stone-50/20"
                        : "bg-gradient-to-r from-orange-700 to-amber-800"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        isActiveLink(item.href) ? "text-stone-50" : "text-stone-50"
                      }`}
                    />
                  </div>
                )}
                <span className="text-lg">{item.label}</span>

                {isActiveLink(item.href) && (
                  <div className="ml-auto w-2 h-2 bg-stone-50 rounded-full animate-pulse" />
                )}
              </a>
            );
          })}
        </div>

        {/* Social Links in Mobile Menu */}
        <div className="relative z-10 px-6 py-6 border-t border-stone-300/30 mt-8">
          <h3 className="text-lg font-semibold text-stone-700 mb-4">
            Connect With Me
          </h3>
          <div className="flex space-x-4">
            {[
              {
                name: "Instagram",
                color: "from-orange-700 to-amber-800",
                href: "#",
              },
              {
                name: "Twitter",
                color: "from-stone-700 to-stone-800",
                href: "#",
              },
              { name: "YouTube", color: "from-orange-800 to-red-800", href: "#" },
              {
                name: "Spotify",
                color: "from-amber-800 to-orange-900",
                href: "#",
              },
            ].map((social, index) => (
              <a
                key={social.name}
                href={social.href}
                className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${social.color} flex items-center justify-center text-stone-50 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300`}
                style={{ animationDelay: `${index * 0.1}s` }}
                aria-label={social.name}
              >
                <span className="text-lg font-bold">
                  {social.name.charAt(0)}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Contact info */}
        <div className="relative z-10 px-6 py-4">
          <div className="bg-stone-50/80 backdrop-blur-sm rounded-2xl p-4 border border-stone-200/50 shadow-lg">
            <p className="text-center text-stone-600 text-sm">
              Ready to work together?
            </p>
            <a
              href="/contact"
              className="block mt-2 text-center bg-gradient-to-r from-orange-700 to-amber-800 text-stone-50 py-2 px-4 rounded-full font-medium text-sm hover:scale-105 transition-transform duration-300"
              onClick={() => setIsOpen(false)}
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;