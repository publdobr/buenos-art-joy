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
  return <section id="gallery" className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-playful-yellow/20 via-playful-pink/20 to-playful-blue/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {images.map((image, index) => {
          const rotations = ['rotate(-2deg)', 'rotate(2deg)', 'rotate(-1deg)', 'rotate(1.5deg)'];
          return <div key={index} className="aspect-[3/4] rounded-lg overflow-hidden cursor-pointer hover:scale-105 hover:-rotate-3 transition-all duration-300 shadow-block border-thick border-border" style={{
            transform: rotations[index]
          }} onClick={() => openLightbox(index)}>
                <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
              </div>;
        })}
        </div>

        {/* Lightbox */}
        <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
            {selectedImage !== null && <div className="relative">
                <img src={images[selectedImage]} alt={`Gallery image ${selectedImage + 1}`} className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-block border-thick border-border" />
                
                {/* Navigation Buttons */}
                <button onClick={goToPrevious} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background border-thick border-border flex items-center justify-center hover:scale-110 transition-all shadow-doodle hover:shadow-block">
                  <ChevronLeft className="w-6 h-6 text-foreground" strokeWidth={3} />
                </button>
                <button onClick={goToNext} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background border-thick border-border flex items-center justify-center hover:scale-110 transition-all shadow-doodle hover:shadow-block">
                  <ChevronRight className="w-6 h-6 text-foreground" strokeWidth={3} />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg bg-background border-thick border-border font-bold shadow-doodle font-work-sans">
                  {selectedImage + 1} / {images.length}
                </div>
              </div>}
          </DialogContent>
        </Dialog>
      </div>
    </section>;
};
export default Gallery;
