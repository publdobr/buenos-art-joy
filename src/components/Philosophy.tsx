const Philosophy = () => {
  return <section id="philosophy"  className="py-24 relative overflow-hidden bg-[hsl(var(--color-yellow))]/20">
      {/* Doodles */}
      <div className="absolute top-10 left-10 w-20 h-20 border-4 border-[hsl(var(--color-pink))] rotate-12 opacity-60 animate-wiggle" />
      <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-[hsl(var(--color-blue))] rounded-full opacity-50 animate-float" />
      <div className="absolute top-1/2 right-20 w-3 h-3 bg-[hsl(var(--color-red))] rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="relative inline-block">
            Философия
            <div className="absolute -bottom-3 left-0 right-0 h-2 bg-[hsl(var(--color-pink))] opacity-60 -rotate-1" />
          </h2>
          
          <div className="relative p-10 md:p-16 bg-white border-4 border-black shadow-[8px_8px_0_hsl(0_0%_0%)]">
            {/* Decorative corners */}
            <div className="absolute -top-3 -left-3 w-10 h-10 bg-[hsl(var(--color-cyan))] rounded-full" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-[hsl(var(--color-orange))]" />
            <div className="absolute -top-3 -right-3 w-8 h-8 border-4 border-[hsl(var(--color-pink))] rotate-45" />
            
          <span className="text-gradient text-purple-600">Философия</span>
        </h2>
        
        <div className="space-y-8 text-center">
          <p className="text-xl md:text-2xl text-foreground leading-relaxed max-w-3xl mx-auto font-work-sans bg-background/60 p-8 rounded-lg shadow-doodle border-thick border-border" style={{
          transform: 'rotate(-0.5deg)'
        }}>
            Творим без страха испачкаться самому и испачкать всё вокруг.{" "}
            <span className="font-bold text-playful-pink">Грязный ребёнок — счастливый ребёнок</span>.
            Иногда <span className="font-bold text-playful-blue">ПРОСТО рисуем</span>. 
            Иногда узнаём о <span className="font-bold text-playful-green">новых стилях и художниках</span>. 
            Иногда <span className="font-bold text-playful-orange">рисуем музыку</span>. 
            Иногда <span className="font-bold text-playful-yellow">валяемся в краске</span>. 
            Всё — <span className="font-black text-playful-pink text-3xl font-archivo">в удовольствие.</span>
          </p>

          {/* Hand-drawn star */}
            <div className="absolute top-4 left-4 text-4xl text-[hsl(var(--color-yellow))]">✦</div>
          
        </div>
      </div>
    </div>
    </section>;
};
export default Philosophy;
