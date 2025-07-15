import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Como vou acessar o curso?",
      answer: "Você recebe o acesso no e-mail cadastrado assim que o pagamento for confirmado."
    },
    {
      question: "O curso é ao vivo ou gravado?", 
      answer: "Gravado, com acesso vitalício. Você pode assistir no seu ritmo, quantas vezes quiser."
    },
    {
      question: "Quais são os requisitos técnicos para acompanhar o curso?",
      answer: "Você pode assistir às aulas em qualquer dispositivo, incluindo celular e tablet. Porém, para aplicar as técnicas ensinadas e criar suas próprias edições, é necessário um computador que execute o Adobe After Effects, que é o software principal utilizado no curso. Recomendamos um PC com pelo menos 8GB de RAM e placa de vídeo dedicada para melhor performance."
    },
    {
      question: "Tenho acesso vitalício ao curso?",
      answer: "Sim, acesso vitalício com todas as atualizações. Uma vez que você adquire o curso, ele é seu para sempre."
    },
    {
      question: "Serve para celular?",
      answer: "Você pode assistir às aulas no celular, mas para editar precisa de um computador."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {"Perguntas frequentes".split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: "easeOut" 
                }}
                className="inline-block mr-2 text-gradient"
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre o curso de Edições Disruptivas
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="gradient-secondary border-primary/20 hover:glow-card transition-smooth overflow-hidden">
                <motion.button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-white" />
                    )}
                  </motion.div>
                </motion.button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Ainda tem alguma dúvida?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-smooth font-semibold"
          >
            Entre em contato conosco
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;