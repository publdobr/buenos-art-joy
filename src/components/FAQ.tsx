import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const FAQ = () => {
  const faqs = [{
    question: "Нужно ли уметь рисовать, чтобы прийти?",
    answer: "Совсем нет! Здесь не учат рисовать «правильно». Здесь — про свободу, удовольствие и процесс."
  }, {
    question: "Где проходят занятия?",
    answer: "Занятия проходят на терассе дома. Это значит, что есть кухня, обеденная зона, два туалета с ваннами, аптечка, детские игрушки, возможность побыть отдельно в тишине, если произошел сенсорный перегруз."
  }, {
  question: "Сколько человек в группе?",
    answer: "Занятия проходят в небольших группах до 8 человек — так каждому достаётся внимание и пространство для эксперимента."
  }, {
    question: "Что нужно брать с собой?",
    answer: "Только сменную одежду, которую не жалко испачкать. Все материалы есть на месте."
  }, {
    question: "Можно ли взрослым приходить без детей?",
    answer: "Обязательно! Взрослые тоже имеют право на безобразие."
  }, {
    question: "Что если ребёнку станет слишком шумно или он устанет?",
    answer: "В доме есть тихие зоны, где можно побыть в спокойствии, выпить воды или просто полежать."
  }, {
    question: "Как часто проходят занятия?",
    answer: "Дважды в неделю, но можно прийти и на разовое занятие."
  }];
  return <section id="faq" className="py-12 sm:py-16 md:py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">

         <h2 className="relative inline-block text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
            Вопрос / Ответ
            <div className="absolute -bottom-2 md:-bottom-3 left-0 right-0 h-2 bg-[hsl(var(--color-pink))] opacity-60 -rotate-1" />
          </h2>

        <Accordion type="single" collapsible className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => {
          const rotations = ['rotate(-0.5deg)', 'rotate(0.5deg)', 'rotate(-0.3deg)', 'rotate(0.7deg)', 'rotate(-0.4deg)', 'rotate(0.3deg)'];
          return <AccordionItem key={index} value={`item-${index}`} className="border-thick border-border rounded-lg px-4 sm:px-6 bg-background shadow-block hover:shadow-playful hover:scale-[1.02] transition-all duration-300" style={{
            transform: rotations[index]
          }}>
                <AccordionTrigger className="text-base sm:text-lg md:text-xl font-bold text-foreground hover:no-underline py-4 sm:py-6 font-work-sans text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base md:text-lg text-foreground pb-4 sm:pb-6 font-work-sans">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>;
        })}
        </Accordion>
      </div>
    </section>;
};
export default FAQ;
