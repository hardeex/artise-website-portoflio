import React, { useState, useEffect } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Expand,
  Heart,
  Camera,
  Sparkles,
  Filter,
} from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  featured?: boolean;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [loading, setLoading] = useState(true);
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set());

  const images: GalleryImage[] = [
    {
      src: "/assets/efe_images/Celebrating 10 years of excellence _flyairpeace 👏🏾_Happy Anniversary_ 🫶🏾__💄 _didysignature _👗 _a (1).jpg",
      alt: "Efezino - Celebrating Excellence",
      category: "professional",
      featured: true,
    },
    {
      src: "/assets/efe_images/Celebrating 10 years of excellence _flyairpeace 👏🏾_Happy Anniversary_ 🫶🏾__💄 _didysignature _👗 _a (2).jpg",
      alt: "Efezino - Anniversary Celebration",
      category: "professional",
    },
    {
      src: "/assets/efe_images/Efezino Toxic picture .jpg",
      alt: "Efezino - Toxic Single",
      category: "music",
      featured: true,
    },
    {
      src: "/assets/efe_images/Like your favorite poison_sweet_ slow_ and unforgettable.__👉🏽 https___onerpm.link_efezino-toxic__Sty.jpg",
      alt: "Efezino - Like Your Favorite Poison",
      category: "music",
    },
    {
      src: "/assets/efe_images/It_s Slay season baby__📷 _thelexash _👗 _adozifashionhub _💄 _didysignature _💇🏾_♀️ _oplush_ ___beau.jpg",
      alt: "Efezino - Slay Season",
      category: "fashion",
      featured: true,
    },
    {
      src: "/assets/efe_images/It_s Slay season baby__📷 _thelexash _👗 _adozifashionhub _💄 _didysignature _💇🏾_♀️ _oplush_ ___beau (1).jpg",
      alt: "Efezino - Fashion Forward",
      category: "fashion",
    },
    {
      src: "/assets/efe_images/Mehn_ I_m pretty. __When I was 12_ I wanted to be a model. Fast forward to 2023_ I can confidently tel.jpg",
      alt: "Efezino - Model Dreams",
      category: "portraits",
      featured: true,
    },
    {
      src: "/assets/efe_images/It_s my birthday_ As I look back_ I see the miles I_ve traveled_ the mountains I_ve climbed_ and the l.jpg",
      alt: "Efezino - Birthday Reflections",
      category: "personal",
    },
    {
      src: "/assets/efe_images/Like your favorite poison_sweet_ slow_ and unforgettable.__👉🏽 https___onerpm.link_efezino-toxic__Sty.jpg",
      alt: "Efezino - Going Out",
      category: "lifestyle",
    },
    {
      src: "/assets/efe_images/DSC00008.jpg",
      alt: "Efezino - Studio Session",
      category: "portraits",
    },
    {
      src: "/assets/efe_images/DSC00018.jpg",
      alt: "Efezino - Artistic Portrait",
      category: "portraits",
    },
    {
      src: "/assets/efe_images/Efezino-4.jpg",
      alt: "Efezino - Music Artist",
      category: "music",
    },
    {
      src: "/assets/efe_images/Ómóté n_igho fo __Cheers to many more years _wemabank 🥂___wemaat80(JPG)_1.jpg",
      alt: "Efezino - Professional Headshot",
      category: "portraits",
    },
    {
      src: "/assets/efe_images/IMG_0156.jpg",
      alt: "Efezino - Natural Beauty",
      category: "portraits",
    },
    {
      src: "/assets/efe_images/IMG_0157.jpg",
      alt: "Efezino - Confident Pose",
      category: "portraits",
    },
    {
      src: "/assets/efe_images/IMG_0158.jpg",
      alt: "Efezino - Elegant Style",
      category: "fashion",
    },
  ];

  const categories = [
    { key: "all", label: "All Photos", color: "from-orange-700 to-amber-700" },
    {
      key: "featured",
      label: "Featured",
      color: "from-amber-800 to-orange-800",
    },
    { key: "music", label: "Music", color: "from-stone-700 to-stone-800" },
    { key: "fashion", label: "Fashion", color: "from-orange-600 to-amber-800" },
    {
      key: "professional",
      label: "Professional",
      color: "from-amber-700 to-orange-700",
    },
    {
      key: "portraits",
      label: "Portraits",
      color: "from-orange-800 to-amber-900",
    },
    {
      key: "lifestyle",
      label: "Lifestyle",
      color: "from-amber-600 to-orange-600",
    },
    {
      key: "personal",
      label: "Personal",
      color: "from-stone-600 to-stone-700",
    },
  ];

  const filteredImages = images.filter((image) => {
    if (filter === "all") return true;
    if (filter === "featured") return image.featured;
    return image.category === filter;
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    const newIndex =
      direction === "next"
        ? (selectedImage + 1) % filteredImages.length
        : (selectedImage - 1 + filteredImages.length) % filteredImages.length;

    setSelectedImage(newIndex);
  };

  const toggleLike = (index: number) => {
    const newLikedImages = new Set(likedImages);
    if (newLikedImages.has(index)) {
      newLikedImages.delete(index);
    } else {
      newLikedImages.add(index);
    }
    setLikedImages(newLikedImages);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") navigateImage("prev");
        if (e.key === "ArrowRight") navigateImage("next");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-700 to-amber-800 rounded-full animate-spin mb-4 flex items-center justify-center">
            <div className="w-8 h-8 bg-stone-50 rounded-full"></div>
          </div>
          <p className="text-stone-600 font-medium">Loading gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-amber-300/20 to-stone-300/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-xl animate-bounce opacity-10"
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 1}s`,
              color: ["#c2410c", "#92400e", "#78716c"][i % 3],
            }}
          >
            {["📸", "✨", "♡"][i % 3]}
          </div>
        ))}
      </div>

      <div className="relative py-16 md:py-20 px-4 md:px-6 text-center">
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-stone-50/80 backdrop-blur-sm rounded-full px-6 py-2 border border-orange-200/50 shadow-lg mb-6">
            <Camera className="w-5 h-5 text-orange-700" />
            <span className="text-orange-800 font-medium">My Gallery</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-orange-700 via-amber-800 to-stone-900 bg-clip-text mb-6">
            Visual Journey
          </h1>

          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Capturing moments, emotions, and the artistry behind the music.
            Explore the visual story of my journey through beautiful
            photography.
          </p>
        </div>
      </div>

      <div className="sticky top-0 z-10 bg-stone-50/80 backdrop-blur-md border-b border-orange-200/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="w-5 h-5 text-stone-600" />
            <span className="text-stone-700 font-medium">Filter by:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setFilter(category.key)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300 text-sm font-medium transform hover:scale-105 ${
                  filter === category.key
                    ? `bg-gradient-to-r ${category.color} text-stone-50 shadow-lg`
                    : "bg-stone-50/80 backdrop-blur-sm text-stone-600 hover:text-stone-800 hover:bg-stone-50/90 border border-stone-100/50 shadow-lg hover:shadow-xl"
                }`}
              >
                {category.label}
                {category.key !== "all" && category.key !== "featured" && (
                  <span className="ml-2 opacity-70">
                    (
                    {
                      images.filter((img) => img.category === category.key)
                        .length
                    }
                    )
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl md:rounded-3xl bg-stone-50/60 backdrop-blur-sm border-2 border-stone-100/50 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ filter: "sepia(5%) saturate(110%) brightness(105%)" }}
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-sm mb-1">
                    {image.alt}
                  </h3>
                  <p className="text-amber-300 text-xs capitalize font-medium">
                    {image.category}
                  </p>
                </div>
              </div>

              {image.featured && (
                <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-600 to-orange-700 text-stone-50 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  ✨ Featured
                </div>
              )}

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLike(index);
                }}
                className={`absolute top-3 left-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
                  likedImages.has(index)
                    ? "bg-gradient-to-r from-orange-700 to-amber-800 text-stone-50 scale-110"
                    : "bg-stone-50/90 backdrop-blur-sm text-stone-600 hover:bg-gradient-to-r hover:from-orange-700 hover:to-amber-800 hover:text-stone-50 hover:scale-110"
                }`}
              >
                <Heart
                  className={`w-5 h-5 ${
                    likedImages.has(index) ? "fill-current" : ""
                  }`}
                />
              </button>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-stone-50/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <Expand className="text-stone-700 text-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gradient-to-r from-orange-700 to-amber-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Camera className="w-12 h-12 text-stone-50" />
            </div>
            <h3 className="text-2xl font-bold text-stone-800 mb-2">
              No photos found
            </h3>
            <p className="text-stone-600">
              Try selecting a different category to see more photos.
            </p>
          </div>
        )}
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-stone-50/20 backdrop-blur-sm hover:bg-stone-50/30 rounded-full flex items-center justify-center text-stone-50 transition-all duration-300 shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>

            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={() => navigateImage("prev")}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-stone-50/20 backdrop-blur-sm hover:bg-stone-50/30 rounded-full flex items-center justify-center text-stone-50 transition-all duration-300 shadow-lg"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={() => navigateImage("next")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-stone-50/20 backdrop-blur-sm hover:bg-stone-50/30 rounded-full flex items-center justify-center text-stone-50 transition-all duration-300 shadow-lg"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <div className="relative max-w-full max-h-full">
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              <div className="absolute bottom-4 left-4 right-4 bg-stone-50/20 backdrop-blur-md rounded-2xl p-4 border border-stone-50/30">
                <h3 className="text-stone-50 font-semibold text-lg mb-1">
                  {filteredImages[selectedImage].alt}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-amber-300 text-sm capitalize font-medium">
                    {filteredImages[selectedImage].category}
                  </p>
                  <p className="text-stone-50/70 text-sm">
                    {selectedImage + 1} of {filteredImages.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 bg-stone-50/60 backdrop-blur-sm border-t border-stone-100/30 py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-stone-50/80 backdrop-blur-sm rounded-full px-6 py-2 border border-amber-200/50 shadow-lg mb-4">
              <Sparkles className="w-5 h-5 text-amber-700" />
              <span className="text-amber-800 font-medium">Gallery Stats</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                value: images.length,
                label: "Total Photos",
                icon: Camera,
                color: "from-orange-700 to-amber-700",
              },
              {
                value: categories.length - 2,
                label: "Categories",
                icon: Filter,
                color: "from-stone-700 to-stone-800",
              },
              {
                value: images.filter((img) => img.featured).length,
                label: "Featured",
                icon: Sparkles,
                color: "from-amber-600 to-orange-700",
              },
              {
                value: likedImages.size,
                label: "Liked",
                icon: Heart,
                color: "from-orange-800 to-amber-900",
              },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-stone-50/80 backdrop-blur-sm rounded-2xl border border-stone-100/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-stone-50" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-stone-800 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-stone-600 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
