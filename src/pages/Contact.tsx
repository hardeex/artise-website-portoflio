import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Music,
  Heart,
  Camera,
  MessageCircle,
  Play,
  Radio,
  Sparkles,
  Users,
  Calendar,
  Mic2,
  Headphones,
  Star,
} from "lucide-react";

const SoftContact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "General Inquiries",
      value: "teamefezino@efezino.net",
      link: "mailto:teamefezino@efezino.net",
      color: "from-orange-600 to-amber-600",
      description: "For all questions and messages",
    },
    {
      icon: Phone,
      title: "Management",
      value: "+234 811 000 5555 678",
      link: "tel:+2348110005555678",
      color: "from-amber-700 to-orange-700",
      description: "Bookings & collaborations",
    },
    {
      icon: MapPin,
      title: "Based In",
      value: "Delta State, Nigeria",
      link: null,
      color: "from-orange-500 to-red-600",
      description: "Proudly representing the Delta",
    },
  ];

  const socialLinks = [
    {
      icon: Camera,
      url: "https://instagram.com/efezino",
      name: "Instagram",
      handle: "@efezino",
      color: "from-orange-600 to-rose-600",
    },
    {
      icon: MessageCircle,
      url: "https://twitter.com/efezino",
      name: "Twitter",
      handle: "@efezino",
      color: "from-amber-700 to-orange-700",
    },
    {
      icon: Play,
      url: "https://youtube.com/efezino",
      name: "YouTube",
      handle: "Efezino Official",
      color: "from-red-600 to-orange-600",
    },
    {
      icon: Radio,
      url: "https://tiktok.com/@efezino",
      name: "TikTok",
      handle: "@efezino",
      color: "from-orange-500 to-amber-600",
    },
    {
      icon: Music,
      url: "https://open.spotify.com/artist/0eYobfoCMOOoN4sOrhsmaE",
      name: "Spotify",
      handle: "Efezino",
      color: "from-amber-600 to-orange-700",
    },
  ];

  const reasons = [
    {
      icon: Mic2,
      title: "Event Bookings",
      description: "Live performances, concerts, and private events",
    },
    {
      icon: Users,
      title: "Collaborations",
      description: "Musical partnerships and creative projects",
    },
    {
      icon: Camera,
      title: "Media & Press",
      description: "Interviews, features, and press inquiries",
    },
    {
      icon: Heart,
      title: "Fan Connection",
      description: "Just want to say hello? I'd love to hear from you",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-stone-50">
      {/* Soft Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-stone-200/20 to-neutral-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-orange-200/15 to-amber-200/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Floating Musical Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-xl animate-bounce opacity-10"
            style={{
              left: `${15 + i * 12}%`,
              top: `${15 + (i % 4) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              color: ["#ea580c", "#78350f", "#d97706", "#c2410c"][i % 4],
            }}
          >
            {["♪", "♫", "♡", "♬"][i % 4]}
          </div>
        ))}
      </div>

      {/* Header Section */}
      <div className="relative py-16 md:py-24 px-4 md:px-6 text-center">
        <div className="relative max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-200/50 shadow-lg mb-8 hover:scale-105 transition-transform duration-300">
            <Headphones className="w-5 h-5 text-orange-600 animate-pulse" />
            <span className="text-orange-800 font-semibold">Let's Connect</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-gradient-to-r from-orange-600 via-amber-700 to-stone-800 bg-clip-text mb-6 leading-tight">
            Reach Out to Efezino
          </h1>

          <p className="text-lg md:text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Whether you're looking to book a show, collaborate on a project, or
            just want to connect — I'm always excited to hear from fellow music
            lovers and creatives.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/60 backdrop-blur-sm rounded-full px-5 py-2 border border-orange-200/50 shadow-lg flex items-center gap-2">
              <Star className="w-4 h-4 text-orange-600" />
              <span className="text-stone-700 font-medium">
                11K+ Monthly Listeners
              </span>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-full px-5 py-2 border border-orange-200/50 shadow-lg flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span className="text-stone-700 font-medium">
                16+ Years Experience
              </span>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-full px-5 py-2 border border-orange-200/50 shadow-lg flex items-center gap-2">
              <MapPin className="w-4 h-4 text-orange-700" />
              <span className="text-stone-700 font-medium">
                Delta State, Nigeria
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pb-16 md:pb-24">
        {/* Why Connect Section */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-stone-800 mb-12">
            Why Get In Touch?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm border-2 border-white/50 rounded-3xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg mb-4 mx-auto">
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-stone-800 text-center mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-stone-600 text-center leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 md:gap-10">
          {/* Contact Information - Takes 3 columns */}
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-white/60 backdrop-blur-sm border-2 border-white/50 rounded-3xl p-8 md:p-10 shadow-lg">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-stone-800">
                  Contact Details
                </h3>
              </div>

              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div
                    key={index}
                    className="group p-6 bg-gradient-to-br from-white/50 to-amber-50/30 backdrop-blur-sm rounded-2xl hover:from-white/70 hover:to-amber-50/50 transition-all duration-300 hover:scale-102 shadow-lg hover:shadow-xl border-2 border-white/50"
                  >
                    <div className="flex items-start gap-5">
                      <div
                        className={`w-14 h-14 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <contact.icon className="text-white w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-stone-800 font-bold text-lg mb-1">
                          {contact.title}
                        </h4>
                        <p className="text-stone-600 text-sm mb-2">
                          {contact.description}
                        </p>
                        {contact.link ? (
                          <a
                            href={contact.link}
                            className="text-orange-700 hover:text-orange-800 transition-colors font-semibold text-lg inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                          >
                            {contact.value}
                            <span className="text-orange-600">→</span>
                          </a>
                        ) : (
                          <p className="text-stone-700 font-semibold text-lg">
                            {contact.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Response Time */}
              <div className="mt-8 p-6 bg-gradient-to-r from-green-100/60 to-emerald-100/60 border-2 border-green-200/50 rounded-2xl">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800 mb-1">
                      Quick Response
                    </h4>
                    <p className="text-sm text-green-700">
                      I typically respond within 24-48 hours. For urgent
                      bookings, please call the management number directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Quote - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Social Media */}
            <div className="bg-white/60 backdrop-blur-sm border-2 border-white/50 rounded-3xl p-6 md:p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-stone-800">
                  Follow Me
                </h3>
              </div>

              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/40 backdrop-blur-sm rounded-2xl hover:bg-white/70 hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl border border-white/50"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <social.icon className="text-white w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-stone-800 font-bold group-hover:text-orange-700 transition-colors">
                        {social.name}
                      </div>
                      <div className="text-sm text-stone-600">
                        {social.handle}
                      </div>
                    </div>
                    <span className="text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity text-xl">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Inspirational Quote */}
            <div className="bg-gradient-to-br from-orange-100/60 to-amber-100/60 backdrop-blur-sm border-2 border-orange-200/50 rounded-3xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-600 to-amber-700 rounded-2xl flex items-center justify-center shadow-lg mb-6 mx-auto">
                <Music className="w-7 h-7 text-white" />
              </div>
              <blockquote className="text-center">
                <p className="text-stone-800 text-lg md:text-xl font-medium italic mb-4 leading-relaxed">
                  "Music is the universal language that connects us all. Let's
                  speak it together."
                </p>
                <footer className="text-orange-700 font-bold text-sm">
                  — Efezino
                </footer>
              </blockquote>
            </div>

            {/* Stats Card */}
            <div className="bg-gradient-to-br from-stone-100/60 to-neutral-100/60 backdrop-blur-sm border-2 border-stone-200/50 rounded-3xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-5">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-stone-800">
                  About Efezino
                </h3>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 p-3 bg-white/50 backdrop-blur-sm rounded-xl border border-white/50">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Music className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-stone-700 font-medium">
                    Afrobeat, Soul & Afropop Artist
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white/50 backdrop-blur-sm rounded-xl border border-white/50">
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-700 to-orange-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-stone-700 font-medium">
                    11,000+ Monthly Spotify Listeners
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white/50 backdrop-blur-sm rounded-xl border border-white/50">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-stone-700 font-medium">
                    Celebrating Nigerian Culture
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftContact;
