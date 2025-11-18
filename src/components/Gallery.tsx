import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import foto6 from "@/assets/foto6.jpeg";
import foto7 from "@/assets/foto7.jpeg";
import foto8 from "@/assets/foto8.jpeg";
import foto9 from "@/assets/foto9.jpeg";
import foto10 from "@/assets/foto10.jpeg";
import foto11 from "@/assets/foto11.jpeg";

const VideoSection = () => {
  const media = [
    { type: "image", src: foto6 },
    { type: "image", src: foto7 },
    { type: "image", src: foto8 },
    { type: "image", src: foto9 },
    { type: "image", src: foto10 },
    { type: "image", src: foto11 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % media.length);
  const goToPrevious = () => setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);

  return (
    <section
      id="gallery"
      className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-playful-yellow/20 via-playful-pink/20 to-playful-blue/20 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">

        {/* Главное медиа */}
        <div className="relative w-full max-w-2xl aspect-[4/3] sm:aspect-[4/3] rounded-lg overflow-hidden shadow-block border-thick border-border mb-6 flex items-center justify-center bg-background">
          {media[currentIndex].type === "image" ? (
            <img
              src={media[currentIndex].src}
              alt={`Gallery item ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-500"
            />
          ) : (
            <video
              controls
              playsInline
              className="w-auto h-full max-h-[80vh] rounded-lg object-contain"
            >
              <source src={media[currentIndex].src} type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
          )}

          {/* Кнопки навигации */}
          <button
            onClick={goToPrevious}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background border-thick border-border flex items-center justify-center hover:scale-110 transition-all shadow-doodle hover:shadow-block"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" strokeWidth={3} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background border-thick border-border flex items-center justify-center hover:scale-110 transition-all shadow-doodle hover:shadow-block"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" strokeWidth={3} />
          </button>
        </div>

        {/* Миниатюры */}
        <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-2 justify-center w-full">
          {media.map((item, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden cursor-pointer border-thick transition-all duration-300 ${
                currentIndex === index
                  ? "border-border shadow-block scale-105"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={item.src + "#t=0.1"} type="video/mp4" />
                </video>
              )}
            </div>
          ))}
        </div>

        {/* Счетчик */}
        <div className="mt-4 px-4 py-2 rounded-lg bg-background border-thick border-border font-bold shadow-doodle font-work-sans">
          {currentIndex + 1} / {media.length}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
