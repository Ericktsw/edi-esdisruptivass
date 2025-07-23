import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X, Star, ArrowRight, CreditCard, Shield } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "PLANO BÁSICO",
      price: "R$ 97,00",
      description: "ou 6x de R$ 16,17",
      popular: false,
      features: [
        { text: "Aprenda a editar do Básico", included: true },
        { text: "Editando Na Prática", included: true },
        { text: "Instalando Programas", included: true },
        { text: "Certificado de Conclusão", included: true },
        { text: "Acesso Vitalício", included: true },
        { text: "3D Avançado", included: false },
        { text: "Element 3D", included: false },
        { text: "Animações Avançadas", included: false },
        { text: "Módulo de Mapas Animados", included: false },
        { text: "Comunidade Secreta", included: false }
      ],
      bonuses: []
    },
    {
      name: "PLANO AVANÇADO",
      price: "R$ 297,00",
      description: "ou 12x de R$ 24,75",
      popular: false,
      features: [
        { text: "Aprenda a editar do Básico ao Avançado", included: true },
        { text: "3D Avançado", included: true },
        { text: "Element 3D – Transformando Objetos em 3D", included: true },
        { text: "Editando Vídeo Oficial do Canal", included: true },
        { text: "Editando Na Prática", included: true },
        { text: "Certificado de Conclusão", included: true },
        { text: "Instalando Programas", included: true },
        { text: "Animações do ZERO!", included: true },
        { text: "Sua primeira animação", included: true },
        { text: "Módulo de Mapas Animados", included: true },
        { text: "Comunidade secreta de suporte e interação", included: true },
        { text: "Acesso Vitalício", included: true }
      ],
      bonuses: [
        { text: "BÔNUS: COMO TER UM CANAL DARK-YOUTUBE" },
        { text: "BÔNUS: FINALIZAÇÃO NO PREMIERE" },
        { text: "BÔNUS: SUPORTE PRIORITÁRIO" }
      ]
    },
    {
      name: "PLANO INTERMEDIÁRIO",
      price: "R$ 197,00",
      description: "ou 10x de R$ 19,70",
      popular: false,
      features: [
        { text: "Aprenda a editar do Básico ao Avançado", included: true },
        { text: "3D Avançado", included: true },
        { text: "Element 3D – Transformando Objetos em 3D", included: true },
        { text: "Editando Vídeo Oficial do Canal", included: true },
        { text: "Editando Na Prática", included: true },
        { text: "Certificado de Conclusão", included: true },
        { text: "Instalando Programas", included: true },
        { text: "Animações do ZERO!", included: true },
        { text: "Sua primeira animação", included: true },
        { text: "Comunidade secreta de suporte e interação", included: false },
        { text: "Acesso Vitalício", included: true },
        { text: "Módulo de Mapas Animados", included: false }
      ],
      bonuses: [
        { text: "BÔNUS: COMO TER UM CANAL DARK-YOUTUBE" },
        { text: "BÔNUS: FINALIZAÇÃO NO PREMIERE" }
      ]
    }
  ];

  return (
    <section id="precos" className="py-20 px-4">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, planIndex) => (
            <motion.div
              key={planIndex}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ 
                duration: 0.6,
                delay: planIndex * 0.2,
                type: "spring",
                stiffness: 300
              }}
              viewport={{ once: true }}
              className="relative"
            >


              <Card className="p-6 h-full bg-black/10 backdrop-blur-sm border-white/20 transition-smooth relative overflow-hidden">

                <div className="relative z-10">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-gradient">{plan.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>

                   {/* Features */}
                   <div className="space-y-3 mb-6">
                     {plan.features.map((feature, featureIndex) => (
                       <motion.div
                         key={featureIndex}
                         initial={{ opacity: 0, x: -20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ delay: (planIndex * 0.2) + (featureIndex * 0.03) }}
                         viewport={{ once: true }}
                         className="flex items-center gap-3"
                       >
                         {feature.included ? (
                           <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                         ) : (
                           <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                         )}
                         <span className={`text-sm ${
                           feature.included ? 'text-white' : 'text-muted-foreground line-through'
                         }`}>{feature.text}</span>
                       </motion.div>
                     ))}
                     
                     {plan.bonuses.map((bonus, bonusIndex) => (
                       <motion.div
                         key={bonusIndex}
                         initial={{ opacity: 0, x: -20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ delay: (planIndex * 0.2) + ((plan.features.length + bonusIndex) * 0.03) }}
                         viewport={{ once: true }}
                         className="flex items-center gap-3"
                       >
                         <span className="text-yellow-400 text-sm">🎁</span>
                         <span className="text-sm font-medium text-yellow-400">{bonus.text}</span>
                       </motion.div>
                     ))}
                   </div>

                   {/* CTA Button */}
                   <motion.div
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                   >
                     <Button 
                       className="w-full gradient-primary hover:glow-primary transition-smooth group text-sm px-4 py-3 h-auto min-h-[3rem]"
                       variant="default"
                     >
                       <span className="text-center leading-tight">
                         ESCOLHER PLANO<br />POR {plan.price.replace('R$ ', '').replace(',00', '')} REAIS
                       </span>
                       <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                     </Button>
                   </motion.div>
                 </div>
               </Card>
             </motion.div>
          ))}
          </div>

        {/* Security and Payment Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground mb-2">
            Compra 100% segura – 07 dias de garantia
          </p>
          <p className="text-sm text-muted-foreground">
            Aceita: VISA, Mastercard, Elo, American Express, Boleto
          </p>
        </motion.div>

        {/* Guarantee Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="p-8 bg-black/10 backdrop-blur-sm border-white/20 max-w-2xl mx-auto">
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