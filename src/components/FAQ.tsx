import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  description?: string;
}

export const FAQ = ({ items, title = "Frequently Asked Questions", description }: FAQProps) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-20 bg-gradient-card relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gold/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection animation="fade" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient-primary">{title}</span>
          </h2>
          {description && (
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-6">
          {items.map((item, index) => (
            <AnimatedSection key={index} animation="slide-left" delay={index * 100}>
              <Card className="card-glass hover-tilt overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-primary/5 transition-colors duration-300"
                  >
                    <h3 className="text-lg font-semibold text-gradient-primary pr-4">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0 transform transition-transform duration-300 hover:scale-110">
                      {openItems.has(index) ? (
                        <ChevronUp className="text-primary" size={24} />
                      ) : (
                        <ChevronDown className="text-primary" size={24} />
                      )}
                    </div>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openItems.has(index) 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <div className="h-px bg-gradient-primary mb-4 opacity-20"></div>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};