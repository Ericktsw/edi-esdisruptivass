import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X, Star, ArrowRight, CreditCard, Shield } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "PLANO START",
      price: "R$ 97,00",
      originalPrice: "R$ 147,00",
      description: "Pagamento único",
      popular: false,
      features: [
        "Acesso ao curso + trilha inicial",
        "Certificado ao final do curso (modalidade livre)",
        "Acesso vitalício ao material básico",
        "Curso do Básico ao Avançado (Edição)",
        "Motion Básico + Avançado"
      ],
      notIncluded: [
        "Aulas bônus exclusivas",
        "Grupo secreto", 
        "Pack de elementos visuais",
        "Suporte com feedback",
        "Templates e materiais editáveis"
      ]
    },
    {
      name: "PLANO EXPERT", 
      price: "R$ 197,00",
      originalPrice: "R$ 297,00",
      description: "ou 12x de R$ 19,70",
      popular: true,
      features: [
        "Inclui tudo do Plano Start",
        "Aulas bônus exclusivas",
        "Acesso ao grupo secreto",
        "Pack de elementos visuais",
        "Atualizações vitalícias",
        "Suporte com feedback",
        "Técnicas de monetização",
        "Templates e materiais editáveis",
        "Pack de transições",
        "Estilos de edição",
        "Presets e overlays",
        "Análise de vídeos prontos"
      ],
      notIncluded: []
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {"Escolha seu plano".split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: "easeOut" 
                }}
                className={`inline-block mr-2 ${word === 'plano' ? 'text-gradient' : ''}`}
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comece sua jornada para se tornar um editor profissional
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ 
                delay: index * 0.2,
                duration: 0.6,
                type: "spring",
                stiffness: 300
              }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <div className="gradient-primary text-white px-6 py-2 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </div>
                </motion.div>
              )}

              <Card className={`p-8 h-full ${
                plan.popular 
                  ? 'gradient-secondary border-primary glow-card' 
                  : 'gradient-secondary border-primary/20 hover:glow-card'
              } transition-smooth relative overflow-hidden`}>
                
                {plan.popular && (
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 gradient-primary"
                  />
                )}

                <div className="relative z-10">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-2">
                      {plan.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through mr-2">
                          {plan.originalPrice}
                        </span>
                      )}
                      <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + featureIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                    
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + (plan.features.length + featureIndex) * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 opacity-50"
                      >
                        <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'gradient-primary hover:glow-primary' 
                          : 'border border-primary/50 hover:bg-primary/10'
                      } transition-smooth group`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      COMPRAR AGORA
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>

                  {/* Payment Methods */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    className="mt-6 flex items-center justify-center gap-4 text-xs text-muted-foreground"
                  >
                    <div className="flex items-center gap-1">
                      <CreditCard className="w-4 h-4" />
                      <span>Cartão</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield className="w-4 h-4" />
                      <span>PIX</span>
                    </div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="p-8 gradient-secondary border-primary/20 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center"
              >
                <Shield className="w-8 h-8 text-white" />
              </motion.div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gradient">Totalmente seguro</h3>
                <p className="text-muted-foreground">Garantia de 7 dias</p>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground">
              🔒 Garantia incondicional de 7 dias. Se por qualquer motivo você não gostar do conteúdo, pode pedir reembolso total — sem perguntas.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;