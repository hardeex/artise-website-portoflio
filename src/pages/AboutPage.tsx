import React, { useState, useEffect, useRef } from "react";
import {
  Music, Heart, Globe, MapPin, Calendar, Award, Mic, Users, Star, Sparkles,
  ArrowRight, Camera, Play, X, Trophy, Radio, Volume2, Target,
} from "lucide-react";
import { Link } from "react-router";

const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("journey");
  const [currentAchievement, setCurrentAchievement] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const images = ["/assets/efe_images/Efezino-4.jpg", "/assets/efe_images/Efezino’s picture.jpg", "/assets/efe_images/DSC00008.jpg", "/assets/efe_images/DSC00018.jpg", "/assets/efe_images/IMG_0156.jpg", "/assets/efe_images/Mehn_ I_m pretty. __When I was 12_ I wanted to be a model. Fast forward to 2023_ I can confidently tel (4).jpg"];
  const tabs = [{ id: "journey", label: "My Journey", icon: MapPin }, { id: "music", label: "Musical Style", icon: Music }, { id: "achievements", label: "Achievements", icon: Award }, { id: "collaborations", label: "Collaborations", icon: Users }, { id: "gallery", label: "Gallery", icon: Camera }];
  const timelineEvents = [{ year: "2008", age: 8, event: "Discovered passion for music", icon: Heart, color: "from-orange-700 to-amber-700", image: images[0] }, { year: "2009", age: 17, event: 'Won "Who Sings Best" Competition in Warri', icon: Trophy, color: "from-amber-600 to-orange-700", image: null }, { year: "2014", age: 22, event: "Graduated with B.Sc in Human Anatomy from DELSU", icon: Star, color: "from-stone-700 to-stone-800", image: images[1] }, { year: "2018", age: 26, event: 'Released debut single "Amere"', icon: Music, color: "from-amber-800 to-orange-800", image: images[2] }, { year: "2024", age: 32, event: 'Released "Memory Box" EP', icon: Mic, color: "from-orange-600 to-amber-800", image: images[3] }];
  const achievements = [{ category: "Recording", items: ["Demo tracks for Grammy winners Rihanna and Brandy Norwood", "Worked with soul artist Asa", "Over 26 songs released across albums, EPs, and singles"], icon: Music, gradient: "from-orange-700 to-amber-800", image: images[4] }, { category: "Live Performance", items: ["Backup vocalist for Adekunle Gold and Simi", "US tour with international artist Simi", "Performances across multiple continents"], icon: Mic, gradient: "from-amber-700 to-orange-700", image: images[5] }, { category: "Television & Media", items: ["Advanced to live rounds on The Voice Nigeria", "Top 6 finalist on Nigeria Idol", "Featured in commercials for Maggi, DSTV, and Delta Soap"], icon: Camera, gradient: "from-stone-700 to-stone-800", image: images[0] }, { category: "Collaborations", items: ["The Cavemen, Paul Okoye (Rudeboy), Zoro, Falz", "Multiple commercial jingle collaborations", "International and local artist partnerships"], icon: Users, gradient: "from-orange-800 to-amber-900", image: images[1] }];
  const musicalGenres = [{ genre: "Afrobeat", percentage: 90, color: "bg-orange-700" }, { genre: "Afropop", percentage: 85, color: "bg-amber-700" }, { genre: "Soul", percentage: 80, color: "bg-orange-800" }, { genre: "R&B", percentage: 75, color: "bg-stone-700" }, { genre: "Traditional Isoko", percentage: 70, color: "bg-amber-800" }];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { setVisibleSections((prev) => new Set(prev.add(entry.target.id))); } }); }, { threshold: 0.1 });
    document.querySelectorAll("[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => { const interval = setInterval(() => { setCurrentAchievement((prev) => (prev + 1) % achievements.length); }, 4000); return () => clearInterval(interval); }, [achievements.length]);

  const ImageModal = () => { 
    if (!selectedImage) return null; 
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
        <div className="relative max-w-4xl max-h-full">
          <button className="absolute -top-12 right-0 text-white hover:text-orange-400 transition-colors" onClick={() => setSelectedImage(null)}>
            <X className="w-8 h-8" />
          </button>
          <img src={selectedImage} alt="Efezino" className="max-w-full max-h-full object-contain rounded-lg" />
        </div>
      </div>
    ); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50">
      <ImageModal />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-amber-300/20 to-stone-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute text-2xl animate-bounce opacity-20" style={{ left: `${15 + (i * 12)}%`, top: `${10 + (i % 4) * 25}%`, animationDelay: `${i * 0.7}s`, color: ['#c2410c', '#92400e', '#78716c', '#d97706'][i % 4] }}>
            {['♪', '♫', '♬', '♭'][i % 4]}
          </div>
        ))}
      </div>

      <section id="hero" ref={heroRef} className="relative pt-20 pb-16 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <div className={`space-y-8 ${visibleSections.has("hero") ? "animate-fadeIn" : "opacity-0"}`}>
            <div className="relative mx-auto w-48 md:w-72 h-48 md:h-72 group cursor-pointer" onClick={() => setSelectedImage(images[0])}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-300 via-amber-300 to-stone-300 rounded-full animate-pulse" />
              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center border-4 border-white/50 overflow-hidden shadow-2xl">
                <img src={images[0]} alt="Efezino" className="w-full h-full object-cover rounded-full transform group-hover:scale-110 transition-transform duration-700" style={{ filter: 'sepia(10%) saturate(120%) hue-rotate(5deg)' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-700/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 rounded-full">
                  <span className="text-white font-medium text-sm">Click to view</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Star className="w-6 md:w-8 h-6 md:h-8 text-stone-50" />
              </div>
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
                <span className="block text-transparent bg-gradient-to-r from-orange-700 via-amber-800 to-stone-900 bg-clip-text">Efezino</span>
                <span className="block text-2xl md:text-3xl lg:text-5xl text-stone-600 font-light mt-2">Majiri Akpo</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-stone-600 max-w-4xl mx-auto leading-relaxed">An embodiment of African talent inspiring a worldwide audience through the perfect blend of Afrobeat, Soul, and pure musical magic.</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                <div className="flex items-center space-x-2 bg-stone-50/80 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 border border-orange-200/50 shadow-lg">
                  <MapPin className="w-4 md:w-5 h-4 md:h-5 text-orange-700" /><span>Warri, Delta State, Nigeria</span>
                </div>
                <div className="flex items-center space-x-2 bg-stone-50/80 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 border border-amber-200/50 shadow-lg">
                  <Calendar className="w-4 md:w-5 h-4 md:h-5 text-amber-800" /><span>Born March 1992</span>
                </div>
                <div className="flex items-center space-x-2 bg-stone-50/80 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 border border-stone-200/50 shadow-lg">
                  <Music className="w-4 md:w-5 h-4 md:h-5 text-stone-700" /><span>16+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="sticky top-0 z-40 bg-stone-50/80 backdrop-blur-md border-b border-orange-200/30 shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex space-x-4 md:space-x-8 overflow-x-auto py-4">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 rounded-full whitespace-nowrap transition-all duration-300 ${activeTab === tab.id ? "bg-gradient-to-r from-orange-700 to-amber-800 text-stone-50 shadow-lg" : "text-stone-600 hover:text-orange-700 hover:bg-stone-50/80"}`}>
                  <Icon className="w-4 md:w-5 h-4 md:h-5" />
                  <span className="font-medium text-sm md:text-base">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative">
        {activeTab === "journey" && (
          <section id="journey" className="py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12 md:mb-16">
                <div className="inline-flex items-center space-x-2 bg-stone-50/80 backdrop-blur-sm rounded-full px-6 py-2 border border-orange-200/50 shadow-lg mb-6">
                  <Sparkles className="w-5 h-5 text-orange-700" />
                  <span className="text-orange-800 font-medium">My Story</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-800 mb-6">My Musical Journey</h2>
                <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto">From an 8-year-old dreamer in Warri to an international Afrobeat sensation, here's how the magic unfolded.</p>
              </div>
              <div className="relative max-w-4xl mx-auto">
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-700 via-amber-700 to-stone-700 rounded-full" />
                <div className="space-y-8 md:space-y-16">
                  {timelineEvents.map((event, index) => (
                    <div key={index} className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} ${visibleSections.has("journey") ? "animate-fadeIn" : "opacity-0"}`} style={{ animationDelay: `${index * 0.2}s` }}>
                      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"} ml-8 md:ml-0`}>
                        <div className="space-y-4">
                          <div className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-orange-700 to-amber-800 bg-clip-text">{event.year}</div>
                          <div className="text-sm md:text-lg text-stone-500">Age {event.age}</div>
                          <div className="text-lg md:text-xl font-semibold text-stone-800">{event.event}</div>
                        </div>
                      </div>
                      <div className={`absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-12 md:w-16 h-12 md:h-16 rounded-2xl bg-gradient-to-r ${event.color} flex items-center justify-center shadow-lg border-4 border-white z-10`}>
                        <event.icon className="w-5 md:w-8 h-5 md:h-8 text-stone-50" />
                      </div>
                      {event.image && (
                        <div className="hidden md:block w-1/2">
                          <div className={`${index % 2 === 0 ? "pl-8" : "pr-8"} cursor-pointer`} onClick={() => setSelectedImage(event.image)}>
                            <div className="relative overflow-hidden rounded-2xl border-2 border-stone-100/50 hover:border-orange-300 transition-all duration-300 group shadow-lg">
                              <img src={event.image} alt={`Efezino ${event.year}`} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" style={{ filter: 'sepia(5%) saturate(110%) brightness(105%)' }} />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                <span className="text-white font-medium text-sm">Click to view</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === "music" && (
          <section id="music" className="py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
                <div className="space-y-8">
                  <div>
                    <div className="inline-flex items-center space-x-2 bg-stone-50/80 backdrop-blur-sm rounded-full px-6 py-2 border border-amber-200/50 shadow-lg mb-6">
                      <Music className="w-5 h-5 text-amber-700" />
                      <span className="text-amber-800 font-medium">My Sound</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-800 mb-6">Musical DNA</h2>
                    <p className="text-lg md:text-xl text-stone-600 leading-relaxed">My sound is a unique fusion that celebrates African heritage while embracing global influences. Each genre tells a part of my story.</p>
                  </div>
                  <div className="space-y-6">
                    {musicalGenres.map((item, index) => (
                      <div key={index} className="space-y-2" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-lg text-stone-800">{item.genre}</span>
                          <span className="text-stone-500">{item.percentage}%</span>
                        </div>
                        <div className="w-full bg-stone-50/80 rounded-full h-3 overflow-hidden border border-stone-100/50">
                          <div className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out shadow-sm`} style={{ width: `${item.percentage}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="cursor-pointer group" onClick={() => setSelectedImage(images[2])}>
                    <div className="relative overflow-hidden rounded-3xl border-2 border-stone-100/50 hover:border-orange-300 transition-all duration-300 shadow-2xl">
                      <img src={images[2]} alt="Efezino performing" className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700" style={{ filter: 'sepia(10%) saturate(120%) hue-rotate(5deg)' }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button onClick={(e) => { e.stopPropagation(); setIsPlaying(!isPlaying); }} className="w-20 h-20 bg-stone-50/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">
                          {isPlaying ? <div className="w-6 h-6 bg-orange-700 rounded-sm"></div> : <Play className="w-8 h-8 text-orange-700 ml-1" />}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 space-y-4">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg animate-bounce ${i === 0 ? "bg-gradient-to-r from-orange-700 to-amber-700" : i === 1 ? "bg-gradient-to-r from-amber-800 to-orange-800" : "bg-gradient-to-r from-stone-700 to-stone-800"}`} style={{ animationDelay: `${i * 0.3}s` }}>
                        <Music className="w-4 h-4 text-stone-50" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === "achievements" && (
          <section id="achievements" className="py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12 md:mb-16">
                <div className="inline-flex items-center space-x-2 bg-stone-50/80 backdrop-blur-sm rounded-full px-6 py-2 border border-amber-200/50 shadow-lg mb-6">
                  <Trophy className="w-5 h-5 text-amber-700" />
                  <span className="text-amber-800 font-medium">My Achievements</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-800 mb-6">Recognition & Success</h2>
                <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto">A testament to dedication, talent, and the power of dreams. Each milestone represents a step closer to musical excellence.</p>
              </div>
              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  const isActive = currentAchievement === index;
                  return (
                    <div key={index} className={`relative p-6 md:p-8 rounded-3xl border-2 transition-all duration-500 cursor-pointer group ${isActive ? "bg-stone-50/90 border-orange-300 shadow-xl scale-105" : "bg-stone-50/70 border-stone-100/50 hover:bg-stone-50/80 shadow-lg hover:shadow-xl"}`} onClick={() => setCurrentAchievement(index)}>
                      <div className="space-y-6">
                        <div className={`w-12 md:w-16 h-12 md:h-16 rounded-2xl bg-gradient-to-r ${achievement.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-6 md:w-8 h-6 md:h-8 text-stone-50" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-stone-800 mb-4">{achievement.category}</h3>
                          <div className="space-y-3">
                            {achievement.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-start space-x-3">
                                <ArrowRight className="w-4 h-4 text-orange-700 mt-1 flex-shrink-0" />
                                <span className="text-stone-600 text-sm leading-relaxed">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {achievement.image && (
                        <div className="mt-6 cursor-pointer" onClick={(e) => { e.stopPropagation(); setSelectedImage(achievement.image); }}>
                          <div className="relative overflow-hidden rounded-xl border-2 border-stone-100/50 hover:border-orange-300 transition-all duration-300 group-hover:scale-105">
                            <img src={achievement.image} alt={achievement.category} className="w-full h-24 md:h-32 object-cover group-hover:scale-110 transition-transform duration-500" style={{ filter: 'sepia(5%) saturate(110%) brightness(105%)' }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                              <span className="text-white text-xs">Click to view</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {activeTab === "collaborations" && (
          <section id="collaborations" className="py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12 md:mb-16">
                <div className="inline-flex items-center space-x-2 bg-stone-50/80 backdrop-blur-sm rounded-full px-6 py-2 border border-stone-200/50 shadow-lg mb-6">
                  <Users className="w-5 h-5 text-stone-700" />
                  <span className="text-stone-800 font-medium">Collaborations</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-800 mb-6">Musical Partnerships</h2>
                <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto">Music is a universal language, and collaboration is its most beautiful expression. I've been blessed to work with incredible artists across the globe.</p>
              </div>
              <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 max-w-5xl mx-auto">
                {[
                  { category: "International Stars", artists: ["Rihanna (Demo Tracks)", "Brandy Norwood (Demo Tracks)", "Asa (Collaborations)"], icon: Globe, gradient: "from-orange-700 to-amber-800" },
                  { category: "Nigerian Legends", artists: ["Adekunle Gold (Backup Vocals)", "Simi (Backup Vocals & Tours)", "Paul Okoye - Rudeboy"], icon: Star, gradient: "from-amber-700 to-orange-700" },
                  { category: "Rising Stars", artists: ["The Cavemen", "Zoro", "Falz the Bahd Guy"], icon: Target, gradient: "from-stone-700 to-stone-800" },
                ].map((collab, index) => {
                  const Icon = collab.icon;
                  return (
                    <div key={index} className="relative group p-6 md:p-8 bg-stone-50/70 backdrop-blur-sm rounded-3xl border-2 border-stone-100/50 hover:border-orange-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                      <div className="space-y-6">
                        <div className={`w-12 md:w-16 h-12 md:h-16 rounded-2xl bg-gradient-to-r ${collab.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-6 md:w-8 h-6 md:h-8 text-stone-50" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-stone-800 mb-4">{collab.category}</h3>
                          <div className="space-y-3">
                            {collab.artists.map((artist, artistIndex) => (
                              <div key={artistIndex} className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-orange-700 rounded-full" />
                                <span className="text-stone-600">{artist}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="bg-stone-50/70 backdrop-blur-sm rounded-3xl border-2 border-stone-100/50 p-6 md:p-8 shadow-lg max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4">Commercial Collaborations</h3>
                  <p className="text-stone-600">Bringing music to brands and connecting with audiences through commercial work</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {[
                    { brand: "Maggi", type: "Commercial Jingle", icon: Radio },
                    { brand: "DSTV", type: "Brand Campaign", icon: Volume2 },
                    { brand: "Delta Soap", type: "Product Theme", icon: Music },
                  ].map((work, index) => {
                    const Icon = work.icon;
                    return (
                      <div key={index} className="text-center p-6 bg-stone-50/80 rounded-2xl border-2 border-stone-100/50 hover:border-orange-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                        <Icon className="w-10 md:w-12 h-10 md:h-12 text-orange-700 mx-auto mb-4" />
                        <h4 className="text-lg md:text-xl font-semibold text-stone-800 mb-2">{work.brand}</h4>
                        <p className="text-stone-600 text-sm">{work.type}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === "gallery" && (
          <section id="gallery" className="py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12 md:mb-16">
                <div className="inline-flex items-center space-x-2 bg-stone-50/80 backdrop-blur-sm rounded-full px-6 py-2 border border-amber-200/50 shadow-lg mb-6">
                  <Camera className="w-5 h-5 text-amber-700" />
                  <span className="text-amber-800 font-medium">Gallery</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-800 mb-6">Moments & Memories</h2>
                <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto">Capturing the journey of a passionate artist through the lens of beautiful moments</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
                {images.map((image, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border-2 border-stone-100/50 hover:border-orange-300" style={{ height: index % 3 === 0 ? "280px" : index % 2 === 0 ? "320px" : "240px" }} onClick={() => setSelectedImage(image)}>
                    <img src={image} alt={`Efezino ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" style={{ filter: 'sepia(5%) saturate(110%) brightness(105%)' }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <span className="text-white font-medium bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">Click to view full size</span>
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-orange-700 to-amber-800 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Camera className="w-4 h-4 text-stone-50" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      <section className="py-12 md:py-20 bg-stone-50/60 backdrop-blur-sm border-t border-stone-100/50 mt-12 md:mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center space-x-2 bg-stone-50/80 backdrop-blur-sm rounded-full px-6 py-2 border border-amber-200/50 shadow-lg mb-6">
                <Heart className="w-5 h-5 text-amber-700" />
                <span className="text-amber-800 font-medium">Personal Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-800 mb-6">Beyond the Music</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 md:w-12 h-10 md:h-12 rounded-2xl bg-gradient-to-br from-orange-700 to-amber-700 flex items-center justify-center shadow-lg">
                      <Heart className="w-5 md:w-6 h-5 md:h-6 text-stone-50" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-stone-800">Cultural Heritage</h3>
                  </div>
                  <p className="text-stone-600 leading-relaxed ml-13 md:ml-15">Proud of my Isoko heritage, I incorporate traditional elements into my music. My roots in Delta State shape every note I create and every story I tell.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 md:w-12 h-10 md:h-12 rounded-2xl bg-gradient-to-br from-stone-700 to-stone-800 flex items-center justify-center shadow-lg">
                      <Award className="w-5 md:w-6 h-5 md:h-6 text-stone-50" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-stone-800">Academic Foundation</h3>
                  </div>
                  <p className="text-stone-600 leading-relaxed ml-13 md:ml-15">With a degree in Human Anatomy, I understand discipline and dedication—qualities that translate beautifully into my musical pursuits and creative process.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 md:w-12 h-10 md:h-12 rounded-2xl bg-gradient-to-br from-amber-800 to-orange-800 flex items-center justify-center shadow-lg">
                      <Globe className="w-5 md:w-6 h-5 md:h-6 text-stone-50" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-stone-800">Global Vision</h3>
                  </div>
                  <p className="text-stone-600 leading-relaxed ml-13 md:ml-15">My mission extends beyond entertainment. I strive to showcase African culture's beauty and inspire audiences worldwide through themes of love and self-discovery.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 md:w-12 h-10 md:h-12 rounded-2xl bg-gradient-to-br from-orange-600 to-amber-800 flex items-center justify-center shadow-lg">
                      <Users className="w-5 md:w-6 h-5 md:h-6 text-stone-50" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-stone-800">Grateful Heart</h3>
                  </div>
                  <p className="text-stone-600 leading-relaxed ml-13 md:ml-15">Forever grateful to my family and supporters who believed in my dreams. Their love and encouragement fuel my passion to create meaningful music.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center space-x-2 bg-stone-50/80 backdrop-blur-sm rounded-full px-6 py-2 border border-amber-200/50 shadow-lg mb-6">
              <Sparkles className="w-5 h-5 text-amber-700" />
              <span className="text-amber-800 font-medium">Let's Connect</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-800">The Journey Continues</h2>
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-3xl mx-auto">With 16 years of experience and countless beautiful memories, I'm just getting started. Join me as I continue to create, inspire, and share the beauty of Afrobeat with the world.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-4">
              <Link to="https://open.spotify.com/artist/0eYobfoCMOOoN4sOrhsmaE" target="_blank" className="group bg-gradient-to-r from-orange-700 via-amber-800 to-orange-700 hover:from-orange-800 hover:via-amber-900 hover:to-orange-800 text-stone-50 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3">
                <Play className="w-4 md:w-5 h-4 md:h-5" />
                <span>Listen to My Music</span>
              </Link>
              <button className="bg-stone-50/90 hover:bg-stone-50 backdrop-blur-sm text-stone-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 border-2 border-stone-300/50 hover:border-orange-300 shadow-lg hover:shadow-xl flex items-center space-x-3">
                <Heart className="w-4 md:w-5 h-4 md:h-5" />
                <span>Follow My Journey</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;