import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const FAQ = () => {
  const faqs = [{
    question: "Нужно ли уметь рисовать, чтобы прийти?",
    answer: "Совсем нет! Здесь не учат рисовать «правильно». Здесь — про свободу, удовольствие и процесс."
  }, {
    question: "Что нужно брать с собой?",
    answer: "Только сменную одежду, которую не жалко испачкать. Все материалы есть на месте."
  }, {
    question: "Можно ли прийти с малышом младше 1,5 лет?",
    answer: "Если ребёнок уже интересуется красками и текстурами — конечно! Главное, чтобы ему было комфортно."
  }, {
    question: "Можно ли взрослым приходить без детей?",
    answer: "Да, обязательно! Взрослые тоже имеют право на безобразие."
  }, {
    question: "Что если ребёнку станет слишком шумно или он устанет?",
    answer: "В доме есть тихие зоны, где можно побыть в спокойствии, выпить воды или просто полежать."
  }, {
    question: "Как часто проходят занятия?",
    answer: "Дважды в неделю, но можно прийти и на разовое занятие."
  }];
  return <section id="faq" className="py-12 sm:py-16 md:py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 sm:mb-12 md:mb-16 text-center font-archivo" style={{
        transform: 'rotate(1deg)'
      }}>
          <span className="text-gradient text-green-500">Вопросики</span>
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