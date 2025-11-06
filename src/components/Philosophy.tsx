const Philosophy = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-playful-pink/10 via-playful-yellow/10 to-playful-blue/10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black mb-12 text-center">
          <span className="text-gradient">Философия</span>
        </h2>
        
        <div className="space-y-8 text-center">
          <p className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
            Творим без страха испачкаться самому и испачкать всё вокруг.{" "}
            <span className="text-playful-pink">Грязный ребёнок — счастливый ребёнок.</span>
          </p>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Иногда <span className="font-bold text-playful-blue">ПРОСТО рисуем</span>. 
            Иногда узнаём о <span className="font-bold text-playful-green">новых стилях и художниках</span>. 
            Иногда <span className="font-bold text-playful-coral">рисуем музыку</span>. 
            Иногда <span className="font-bold text-playful-yellow">валяемся в краске</span>. 
            Всё — <span className="font-black text-playful-pink text-3xl">в удовольствие.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
