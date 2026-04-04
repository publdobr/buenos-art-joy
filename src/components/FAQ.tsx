import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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

        <div className="text-center mt-12">
          <Button
            onClick={() => window.open('https://t.me/minpolska?text=Здравствуйте%21%20Хочу%20записаться%20на%20пробное%20занятие%20%3A%29', '_blank')}
            className="bg-[hsl(var(--color-pink))] hover:bg-[hsl(330_80%_55%)] text-white border-4 border-foreground shadow-[4px_4px_0_hsl(var(--foreground))] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_hsl(var(--foreground))] transition-all text-base md:text-xl font-bold px-4 sm:px-8 py-4 sm:py-6 rounded-xl"
          >
            {t('hero.cta')}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>;
};
export default FAQ;
