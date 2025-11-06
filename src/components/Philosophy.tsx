const Philosophy = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-playful-pink/20 via-playful-yellow/20 to-playful-blue/20 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-playful-orange rotate-45 opacity-30 border-thick border-foreground" />
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-playful-purple opacity-30 border-thick border-foreground" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-12 text-center font-archivo" style={{ transform: 'rotate(-1deg)' }}>
          <span className="text-gradient">Философия</span>
        </h2>
        
        <div className="space-y-8 text-center">
          <p className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed font-work-sans bg-background/80 p-8 rounded-lg shadow-block border-thick border-border" style={{ transform: 'rotate(1deg)' }}>
            Творим без страха испачкаться самому и испачкать всё вокруг.{" "}
            <span className="text-playful-pink">Грязный ребёнок — счастливый ребёнок.</span>
          </p>

          <p className="text-xl md:text-2xl text-foreground leading-relaxed max-w-3xl mx-auto font-work-sans bg-background/60 p-8 rounded-lg shadow-doodle border-thick border-border" style={{ transform: 'rotate(-0.5deg)' }}>
            Иногда <span className="font-bold text-playful-blue">ПРОСТО рисуем</span>. 
            Иногда узнаём о <span className="font-bold text-playful-green">новых стилях и художниках</span>. 
            Иногда <span className="font-bold text-playful-orange">рисуем музыку</span>. 
            Иногда <span className="font-bold text-playful-yellow">валяемся в краске</span>. 
            Всё — <span className="font-black text-playful-pink text-3xl font-archivo">в удовольствие.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
