import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-playful-blue/10 via-playful-green/10 to-playful-coral/10">
      <div className="max-w-5xl mx-auto">
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-playful bg-muted">
          {/* Video Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-playful-pink/20 to-playful-blue/20">
            <div className="text-center space-y-6">
              <div className="w-24 h-24 mx-auto rounded-full bg-background/90 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer shadow-playful">
                <Play className="w-12 h-12 text-playful-pink fill-playful-pink ml-2" />
              </div>
              <p className="text-2xl font-bold text-foreground">Видео скоро появится!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
