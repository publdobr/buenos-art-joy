import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="relative aspect-video rounded-lg overflow-hidden border-thick border-foreground bg-background">
          {/* Video Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-playful-pink/20 to-playful-blue/20">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-background border-thick border-foreground flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer">
                <Play className="w-10 h-10 text-foreground fill-foreground ml-1" />
              </div>
              <p className="text-xl font-bold text-foreground font-archivo uppercase">
                Видео скоро появится!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
