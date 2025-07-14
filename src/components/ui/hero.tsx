"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BGPattern } from "@/components/ui/bg-pattern";

export default function Globe3D() {
  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-[#0a0613] font-light text-white antialiased flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg,rgb(3, 2, 7) 0%,rgb(32, 20, 59) 100%)",
        filter: "contrast(2.5) brightness(1,0)",
      }}
    >
      {/* Hacker Misterioso Background */}
      <div 
        className="absolute inset-0 opacity-60 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url('/hacker-misterioso.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Noise overlay */}
      <div 
        className="absolute inset-0 opacity-[0.3] mix-blend-overlay pointer-events-none"
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
        className="opacity-20"
      />
      
      {/* Dark overlay to maintain readability */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-2xl px-4 text-center md:max-w-4xl md:px-6 lg:max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="mb-6 inline-block rounded-full border border-[#9b87f5]/30 px-3 py-1 text-xs text-[#9b87f5]">
            PRÓXIMA GERAÇÃO DE EDIÇÃO DE VÍDEOS
          </span>
          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-light md:text-5xl lg:text-7xl">
            {["Edições", "Disruptivas", "que", "Impressionam"].map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2 + 0.5,
                  ease: "easeOut" 
                }}
                className={`inline-block mr-4 ${index === 1 ? 'text-[#9b87f5]' : ''}`}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p 
            className="mx-auto mb-10 max-w-2xl text-lg text-white/60 md:text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
          >
            {"Aprenda a criar edições de outro nível e descubra como faturar até R$5.000 por mês trabalhando de casa com vídeos que impressionam!".split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 1.5 + index * 0.05 
                }}
                className="inline-block mr-1"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          <div className="mb-10 sm:mb-0 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              className="neumorphic-button hover:shadow-[0_0_20px_rgba(155, 135, 245, 0.5)] relative w-full overflow-hidden rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/5 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:border-[#9b87f5]/30 sm:w-auto group"
            >
              COMEÇAR AGORA
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform inline" />
            </button>
            <a
              href="#como-funciona"
              className="flex w-full items-center justify-center gap-2 text-white/70 transition-colors hover:text-white sm:w-auto"
            >
              <span>Veja como funciona</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </a>
          </div>
        </motion.div>
        

      </div>
    </section>
  );
}