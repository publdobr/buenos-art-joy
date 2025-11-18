import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();
  
  const faqs = [{
    question: t('faq.q1'),
    answer: t('faq.a1')
  }, {
    question: t('faq.q2'),
    answer: t('faq.a2')
  }, {
    question: t('faq.q3'),
    answer: t('faq.a3')
  }, {
    question: t('faq.q4'),
    answer: t('faq.a4')
  }, {
    question: t('faq.q5'),
    answer: t('faq.a5')
  }, {
    question: t('faq.q6'),
    answer: t('faq.a6')
  }, {
    question: t('faq.q7'),
    answer: t('faq.a7')
  }];
  return <section id="faq" className="py-12 sm:py-16 md:py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">

         <h2 className="relative inline-block text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
            {t('faq.title')}
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
