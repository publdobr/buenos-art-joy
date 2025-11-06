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
        <h2 className="text-4xl md:text-6xl font-black mb-16 text-center">
          <span className="text-gradient">Вопросики</span>
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-2 border-border rounded-3xl px-6 bg-muted/30 hover:border-playful-pink transition-colors"
            >
              <AccordionTrigger className="text-xl font-bold text-foreground hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
