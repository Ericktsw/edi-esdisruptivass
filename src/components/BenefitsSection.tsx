import { motion, useReducedMotion } from "framer-motion";
import { Zap, Cpu, Fingerprint, Pencil, Settings2, Sparkles } from 'lucide-react';
import { FeatureCard } from '@/components/ui/grid-feature-cards';
import { BGPattern } from '@/components/ui/bg-pattern';

const features = [
  {
    title: 'Quer sair do convencional',
    icon: Zap,
    description: 'Criar conteúdos únicos e diferenciados que se destacam no mercado.',
  },
  {
    title: 'Quer se destacar',
    icon: Cpu,
    description: 'Ser reconhecido pela qualidade excepcional de suas edições.',
  },
  {
    title: 'Quer ser profissional',
    icon: Fingerprint,
    description: 'Trabalhar com edição de forma séria e lucrativa.',
  },
  {
    title: 'Quer ter uma renda extra',
    icon: Pencil,
    description: 'Gerar dinheiro trabalhando de casa com suas habilidades.',
  },
  {
    title: 'Quer dominar as técnicas',
    icon: Settings2,
    description: 'Aprender métodos avançados de edição profissional.',
  },
  {
    title: 'Quer impressionar clientes',
    icon: Sparkles,
    description: 'Criar edições que surpreendem e fidelizam clientes.',
  },
];

const BenefitsSection = () => {
  return (
    <section 
      className="relative py-16 md:py-32 text-white"
      style={{
        background: "linear-gradient(135deg, #0a0613 0%, #150d27 100%)",
        filter: "contrast(1.1) brightness(0.95)",
      }}
    >
      {/* Noise overlay */}
      <div 
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Subtle background pattern */}
      <BGPattern 
        variant="dots" 
        mask="fade-edges" 
        size={32} 
        fill="rgba(155, 135, 245, 0.1)" 
        className="opacity-30"
      />
      <div className="relative z-10 mx-auto w-full max-w-5xl space-y-8 px-4">
        <AnimatedContainer className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-5xl xl:font-extrabold">
            {"O curso Edições Disruptivas é para você que:".split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
                className={`inline-block mr-2 ${word === 'Edições' || word === 'Disruptivas' ? 'text-gradient' : ''}`}
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <p className="text-muted-foreground mt-4 text-sm tracking-wide text-balance md:text-base">
            Transforme sua paixão por edição em uma carreira lucrativa e reconhecida.
          </p>
        </AnimatedContainer>

        <AnimatedContainer
          delay={0.4}
          className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 md:grid-cols-3"
        >
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
};

type ViewAnimationProps = {
  delay?: number;
  className?: React.ComponentProps<typeof motion.div>['className'];
  children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default BenefitsSection;