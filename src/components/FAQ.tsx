import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Нужно ли уметь рисовать, чтобы прийти?",
      answer: "Совсем нет! Здесь не учат рисовать «правильно». Здесь — про свободу, удовольствие и процесс."
    },
    {
      question: "Что нужно брать с собой?",
      answer: "Только сменную одежду, которую не жалко испачкать. Все материалы есть на месте."
    },
    {
      question: "Можно ли прийти с малышом младше 1,5 лет?",
      answer: "Если ребёнок уже интересуется красками и текстурами — конечно! Главное, чтобы ему было комфортно."
    },
    {
      question: "Можно ли взрослым приходить без детей?",
      answer: "Да, обязательно! Взрослые тоже имеют право на безобразие."
    },
    {
      question: "Что если ребёнку станет слишком шумно или он устанет?",
      answer: "В доме есть тихие зоны, где можно побыть в спокойствии, выпить воды или просто полежать."
    },
    {
      question: "Как часто проходят занятия?",
      answer: "Дважды в неделю, но можно прийти и на разовое занятие."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-16 text-center font-archivo" style={{ transform: 'rotate(1deg)' }}>
          <span className="text-gradient">Вопросики</span>
        </h2>

        <Accordion type="single" collapsible className="space-y-6">
          {faqs.map((faq, index) => {
            const rotations = ['rotate(-0.5deg)', 'rotate(0.5deg)', 'rotate(-0.3deg)', 'rotate(0.7deg)', 'rotate(-0.4deg)', 'rotate(0.3deg)'];
            return (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-thick border-border rounded-lg px-6 bg-background shadow-block hover:shadow-playful hover:scale-[1.02] transition-all duration-300"
                style={{ transform: rotations[index] }}
              >
                <AccordionTrigger className="text-xl font-bold text-foreground hover:no-underline py-6 font-work-sans">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-foreground pb-6 font-work-sans">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
