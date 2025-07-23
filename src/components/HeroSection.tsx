import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#0a0613] pb-10 pt-32 text-white antialiased md:pb-16 md:pt-20"
      style={{
        background: "linear-gradient(135deg, #0a0613 0%, #150d27 100%)",
      }}
    >
      <div
        className="absolute right-0 top-0 h-1/2 w-1/2"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(155, 135, 245, 0.15) 0%, rgba(13, 10, 25, 0) 60%)",
        }}
      />
      <div
        className="absolute left-0 top-0 h-1/2 w-1/2 -scale-x-100"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(155, 135, 245, 0.15) 0%, rgba(13, 10, 25, 0) 60%)",
        }}
      />

      <div className="container relative z-10 mx-auto max-w-2xl px-4 text-center md:max-w-4xl md:px-6 lg:max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="mb-6 inline-block rounded-full border border-[#9b87f5]/30 px-3 py-1 text-xs text-[#9b87f5]">
            PRÓXIMA GERAÇÃO DE EDIÇÃO DE VÍDEOS
          </span>
          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-bold md:text-5xl lg:text-7xl">
            Edições{" "}
            <span className="text-[#9b87f5]">Disruptivas</span>{" "}
            que Impressionam
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/60 md:text-xl">
            Aprenda a criar edições de outro nível e fature trabalhando de casa com vídeos que impressionam!
          </p>

          <div className="mb-10 sm:mb-0 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              className="neumorphic-button hover:shadow-[0_0_20px_rgba(155, 135, 245, 0.5)] relative w-full overflow-hidden rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/5 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:border-[#9b87f5]/30 sm:w-auto group"
            >
              CURSO COMEÇA HOJE POR R$ 97,00
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform inline" />
            </button>
            <div className="text-center">
              <p className="text-lg font-semibold text-red-400 line-through">DE R$ 147,00</p>
              <p className="text-xl font-bold text-green-400">POR APENAS R$ 97,00</p>
              <p className="text-sm text-white/60 mt-2">💳 VISA | MasterCard | PIX | Boleto</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#9b87f5]">5K+</div>
              <div className="text-sm text-white/60">Alunos Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#9b87f5]">R$ 5K</div>
              <div className="text-sm text-white/60">Faturamento/Mês</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#9b87f5]">7 dias</div>
              <div className="text-sm text-white/60">Garantia</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="relative mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <div className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-lg shadow-[0_0_50px_rgba(155,135,245,0.2)]">
            <img
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1920&h=1080&fit=crop&crop=center"
              alt="Interface de Edição de Vídeos"
              className="h-auto w-full rounded-lg border border-white/10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;