import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import foto1 from "@/assets/foto1.jpeg";
import foto2 from "@/assets/foto2.jpeg";
import foto3 from "@/assets/foto3.jpeg";
import foto4 from "@/assets/foto4.jpeg";

const Gallery = () => {
  const images = [foto1, foto2, foto3, foto4];
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-playful-yellow/10 via-playful-pink/10 to-playful-blue/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black mb-16 text-center">
          <span className="text-gradient">Галерея</span>
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className="aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 shadow-soft"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
            {selectedImage !== null && (
              <div className="relative">
                <img 
                  src={images[selectedImage]} 
                  alt={`Gallery image ${selectedImage + 1}`}
                  className="w-full h-auto max-h-[90vh] object-contain rounded-3xl"
                />
                
                {/* Navigation Buttons */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 flex items-center justify-center hover:scale-110 transition-transform shadow-playful"
                >
                  <ChevronLeft className="w-6 h-6 text-foreground" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 flex items-center justify-center hover:scale-110 transition-transform shadow-playful"
                >
                  <ChevronRight className="w-6 h-6 text-foreground" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-background/90 font-bold">
                  {selectedImage + 1} / {images.length}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
