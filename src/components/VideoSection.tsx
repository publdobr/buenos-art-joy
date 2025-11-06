import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-playful-blue/20 via-playful-green/20 to-playful-orange/20 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-playful-cyan opacity-30 border-thick border-foreground animate-float" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-playful-purple rotate-45 opacity-30 border-thick border-foreground animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-block border-thick border-border bg-background" style={{ transform: 'rotate(-1deg)' }}>
          {/* Video Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-playful-pink/30 to-playful-blue/30">
            <div className="text-center space-y-6">
              <div className="w-24 h-24 mx-auto rounded-full bg-background border-thick border-border flex items-center justify-center hover:scale-110 hover:-rotate-12 transition-all duration-500 cursor-pointer shadow-doodle hover:shadow-playful">
                <Play className="w-12 h-12 text-playful-pink fill-playful-pink ml-2" />
              </div>
              <p className="text-2xl font-bold text-foreground font-archivo" style={{ transform: 'rotate(1deg)' }}>
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
