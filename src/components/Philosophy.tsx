const Philosophy = () => {
  return <section className="py-20 px-4 bg-playful-yellow/30 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl lg:text-6xl font-black mb-12 text-center font-archivo uppercase">
          ФИЛОСОФИЯ
        </h2>
        
        <div className="relative bg-background p-8 md:p-12 rounded-lg border-thick border-foreground">
          {/* Cyan corner accent */}
          <div className="absolute top-0 left-0 w-12 h-12 bg-playful-cyan border-r-4 border-b-4 border-foreground rounded-tl-lg" />
          
          <p className="text-lg md:text-xl text-foreground leading-relaxed font-work-sans text-center">
            Творозрим весело, безграмотно свободно. Без страха испачкаться самому и исполчкать всё вокруг. <span className="font-bold">Грязный ребёнок — счастливый ребёнок.</span> Иногда ПРОСТО рисуем. Иногда узнаём о новых стилях и художниках. Иногда рисуем музыку. Иногда валяемся в краске. Всё — в удовольствие.
          </p>
        </div>
      </div>
    </section>;
};
export default Philosophy;