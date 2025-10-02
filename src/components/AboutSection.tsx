import React, { useState, useEffect, useRef } from "react";
import {
  Music,
  Heart,
  Globe,
  MapPin,
  Calendar,
  Award,
  Mic,
  Sparkles,
  ArrowRight,
  Camera,
  Star,
  Users,
} from "lucide-react";

const AboutSection: React.FC = () => {
  const [activeAchievement, setActiveAchievement] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const achievements = [
    {
      number: "11,000+",
      label: "Monthly Listeners",
      icon: Music,
      color: "from-orange-700 to-amber-700",
      bgColor: "from-orange-100 to-amber-100",
    },
    {
      number: "16",
      label: "Years Experience",
      icon: Heart,
      color: "from-amber-800 to-orange-800",
      bgColor: "from-amber-100 to-orange-100",
    },
    {
      number: "26+",
      label: "Songs Released",
      icon: Sparkles,
      color: "from-stone-700 to-stone-800",
      bgColor: "from-stone-100 to-stone-200",
    },
    {
      number: "5",
      label: "Continents Reached",
      icon: Globe,
      color: "from-orange-600 to-amber-800",
      bgColor: "from-orange-100 to-amber-100",
    },
  ];

  const highlights = [
    { text: "Grammy Winners Collaborator", emoji: "🏆" },
    { text: "Voice Nigeria Finalist", emoji: "🎤" },
    { text: "International Tour Artist", emoji: "✈️" },
    { text: "Multi-Genre Producer", emoji: "🎵" },
  ];

  const milestones = [
    {
      year: "2008",
      title: "Musical Awakening",
      description:
        "Discovered my passion for music at age 8, singing in church choirs",
      icon: Heart,
      color: "from-orange-700 to-amber-700",
    },
    {
      year: "2014",
      title: "Academic Achievement",
      description:
        "Graduated with B.Sc in Human Anatomy from Delta State University",
      icon: Award,
      color: "from-stone-700 to-stone-800",
    },
    {
      year: "2018",
      title: "Professional Debut",
      description:
        'Released my first single "Amere" and began my recording journey',
      icon: Mic,
      color: "from-amber-800 to-orange-800",
    },
    {
      year: "2024",
      title: "Global Recognition",
      description:
        "Reached international audiences with collaborations and tours",
      icon: Globe,
      color: "from-orange-600 to-amber-700",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveAchievement((prev) => (prev + 1) % achievements.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible, achievements.length]);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-stone-50/80 via-amber-50/80 to-orange-50/80 relative overflow-hidden"
    >
      {/* Soft Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-amber-300/20 to-orange-300/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-stone-200/20 to-amber-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-bounce opacity-20"
            style={{
              left: `${10 + i * 9}%`,
              top: `${15 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.8}s`,
              color: ["#c2410c", "#92400e", "#78716c", "#d97706", "#b45309"][
                i % 5
              ],
            }}
          >
            {["♡", "♪", "✨", "🎵", "💫"][i % 5]}
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div
            className={`space-y-8 ${
              isVisible ? "animate-fadeInLeft" : "opacity-0"
            }`}
          >
            {/* Header */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-stone-50/80 backdrop-blur-sm rounded-full px-6 py-2 border border-orange-200/50 shadow-lg shadow-orange-100/50">
                <Sparkles className="w-5 h-5 text-orange-700" />
                <span className="text-orange-800 font-medium">
                  About Efezino
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-stone-800">Soul of </span>
                <span className="text-transparent bg-gradient-to-r from-orange-700 via-amber-800 to-stone-900 bg-clip-text">
                  Afrobeat
                </span>
              </h2>

              <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
                From the vibrant streets of Warri, Delta State, to international
                stages, I weave musical magic that celebrates love, culture, and
                the beautiful rhythms of life. Every song is a journey, every
                note a piece of my heart.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((stat, index) => {
                const Icon = stat.icon;
                const isActive = activeAchievement === index;
                return (
                  <div
                    key={index}
                    className={`p-4 md:p-6 rounded-3xl transition-all duration-500 cursor-pointer border-2 ${
                      isActive
                        ? `bg-gradient-to-br ${stat.bgColor} border-transparent shadow-xl scale-105`
                        : "bg-stone-50/80 backdrop-blur-sm border-stone-100/50 hover:bg-stone-50/90 shadow-lg"
                    }`}
                    onClick={() => setActiveAchievement(index)}
                  >
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 md:mb-4 shadow-lg`}
                    >
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-stone-50" />
                    </div>
                    <div
                      className={`text-2xl md:text-3xl font-bold mb-1 ${
                        isActive ? "text-stone-800" : "text-stone-700"
                      }`}
                    >
                      {stat.number}
                    </div>
                    <div className="text-xs md:text-sm text-stone-600">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold text-stone-800">
                Career Highlights
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-stone-50/80 backdrop-blur-sm border border-stone-100/50 px-3 md:px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <span className="text-base md:text-lg">
                      {highlight.emoji}
                    </span>
                    <span className="text-stone-700 text-xs md:text-sm font-medium">
                      {highlight.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Touch */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-stone-600">
                <MapPin className="w-5 h-5 text-orange-700" />
                <span>Born and raised in Warri, Delta State, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3 text-stone-600">
                <Calendar className="w-5 h-5 text-amber-800" />
                <span>March 1992 • 32 years of life, 16 years of music</span>
              </div>
              <div className="flex items-center space-x-3 text-stone-600">
                <Award className="w-5 h-5 text-stone-700" />
                <span>
                  B.Sc in Human Anatomy, Delta State University (2014)
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="/about"
                className="inline-flex group bg-gradient-to-r from-orange-700 via-amber-800 to-orange-700 hover:from-orange-800 hover:via-amber-900 hover:to-orange-800 text-stone-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl items-center space-x-3"
              >
                <span>Discover My Full Story</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Right Column - Visual Timeline */}
          <div
            className={`relative ${
              isVisible ? "animate-fadeInRight" : "opacity-0"
            }`}
          >
            <div className="space-y-6 md:space-y-8">
              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-stone-800 mb-2">
                  My Journey
                </h3>
                <p className="text-sm md:text-base text-stone-600">
                  Key moments that shaped my musical path
                </p>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-orange-300 via-amber-300 to-stone-300 rounded-full"></div>

                {milestones.map((milestone, index) => {
                  const Icon = milestone.icon;
                  return (
                    <div
                      key={index}
                      className="relative flex items-start space-x-4 md:space-x-6 pb-6 md:pb-8"
                      style={{ animationDelay: `${index * 0.3}s` }}
                    >
                      {/* Timeline Dot */}
                      <div
                        className={`relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-lg border-2 md:border-4 border-stone-50`}
                      >
                        <Icon className="w-5 h-5 md:w-7 md:h-7 text-stone-50" />
                      </div>

                      {/* Content Card */}
                      <div className="flex-1 bg-stone-50/80 backdrop-blur-sm border border-stone-100/50 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div className="flex items-center justify-between mb-3">
                          <div
                            className={`text-xs md:text-sm font-bold px-2 md:px-3 py-1 rounded-full bg-gradient-to-r ${milestone.color} text-stone-50`}
                          >
                            {milestone.year}
                          </div>
                        </div>
                        <h4 className="text-lg md:text-xl font-bold text-stone-800 mb-2">
                          {milestone.title}
                        </h4>
                        <p className="text-sm md:text-base text-stone-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Floating Profile Image */}
            <div className="absolute -top-4 md:-top-8 -right-4 md:-right-8 w-20 h-20 md:w-32 md:h-32 rounded-2xl md:rounded-3xl bg-stone-50/80 backdrop-blur-sm border border-stone-100/50 shadow-lg overflow-hidden hover:scale-110 transition-all duration-500 group cursor-pointer">
              <img
                src="/assets/efe_images/Efezino Toxic picture .jpg"
                alt="Efezino"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                style={{ filter: "sepia(10%) saturate(120%) hue-rotate(5deg)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-700/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-stone-50/30 backdrop-blur-sm">
                <Camera className="w-5 h-5 md:w-8 md:h-8 text-stone-50" />
              </div>
            </div>
          </div>
        </div>

        {/* Personal Story Section */}
        <div className="mt-20">
          <div className="bg-stone-50/70 backdrop-blur-sm border border-stone-100/50 rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-stone-800 mb-4">
                Beyond the Music
              </h3>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Music is my language, but my story goes deeper than melodies and
                rhythms.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-700 to-amber-700 flex items-center justify-center shadow-lg">
                      <Heart className="w-6 h-6 text-stone-50" />
                    </div>
                    <h4 className="text-2xl font-semibold text-stone-800">
                      Cultural Heritage
                    </h4>
                  </div>
                  <p className="text-stone-600 leading-relaxed ml-15">
                    Proud of my Isoko heritage, I incorporate traditional
                    elements into my music. My roots in Delta State shape every
                    note I create and every story I tell.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-stone-700 to-stone-800 flex items-center justify-center shadow-lg">
                      <Award className="w-6 h-6 text-stone-50" />
                    </div>
                    <h4 className="text-2xl font-semibold text-stone-800">
                      Academic Foundation
                    </h4>
                  </div>
                  <p className="text-stone-600 leading-relaxed ml-15">
                    With a degree in Human Anatomy, I understand discipline and
                    dedication—qualities that translate beautifully into my
                    musical pursuits and creative process.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-800 to-orange-800 flex items-center justify-center shadow-lg">
                      <Globe className="w-6 h-6 text-stone-50" />
                    </div>
                    <h4 className="text-2xl font-semibold text-stone-800">
                      Global Vision
                    </h4>
                  </div>
                  <p className="text-stone-600 leading-relaxed ml-15">
                    My mission extends beyond entertainment. I strive to
                    showcase African culture's beauty and inspire audiences
                    worldwide through themes of love and self-discovery.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-600 to-amber-700 flex items-center justify-center shadow-lg">
                      <Users className="w-6 h-6 text-stone-50" />
                    </div>
                    <h4 className="text-2xl font-semibold text-stone-800">
                      Grateful Heart
                    </h4>
                  </div>
                  <p className="text-stone-600 leading-relaxed ml-15">
                    Forever grateful to my family and supporters who believed in
                    my dreams. Their love and encouragement fuel my passion to
                    create meaningful music.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-orange-100/60 via-amber-100/60 to-stone-100/60 backdrop-blur-sm rounded-3xl border border-stone-100/50 shadow-lg p-8 max-w-3xl mx-auto">
            <div className="mb-6">
              <Star className="w-16 h-16 text-amber-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-stone-800 mb-4">
                The Journey Continues
              </h3>
              <p className="text-xl text-stone-600 leading-relaxed">
                With 16 years of experience and countless beautiful memories,
                I'm just getting started. Join me as I continue to create,
                inspire, and share the magic of Afrobeat with the world.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://open.spotify.com/artist/0eYobfoCMOOoN4sOrhsmaE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-gradient-to-r from-orange-700 via-amber-800 to-orange-700 hover:from-orange-800 hover:via-amber-900 hover:to-orange-800 text-stone-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl items-center space-x-3"
              >
                <Music className="w-5 h-5" />
                <span>Listen to My Story</span>
              </a>

              <a
                href="/about"
                className="inline-flex bg-stone-50/90 hover:bg-stone-50 backdrop-blur-sm text-stone-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 border border-stone-300/50 shadow-lg hover:shadow-xl items-center space-x-3"
              >
                <Heart className="w-5 h-5" />
                <span>Follow My Journey</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out;
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
