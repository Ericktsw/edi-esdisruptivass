"use client";

import { motion } from "framer-motion";
import { BGPattern } from "@/components/ui/bg-pattern";

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  return (
    <motion.section
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#0a0613] font-light text-white antialiased"
      style={{
        background: "linear-gradient(135deg,rgb(3, 2, 7) 0%,rgb(32, 20, 59) 100%)",
        filter: "contrast(2.5) brightness(1,0)",
      }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Noise overlay */}
      <div 
        className="absolute inset-0 opacity-[0.5] mix-blend-overlay pointer-events-none"
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

      <div className="relative z-10 text-center">
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-light"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span
            className="inline-block mr-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Edições
          </motion.span>
          <motion.span
            className="inline-block text-[#9b87f5]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            Disruptivas
          </motion.span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl font-light text-gray-300 mt-6 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        >
          Uma parceria do Conhecimento disruptivo com os Mapas Fantásticos
        </motion.p>
        
        {/* Loading indicator */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <div className="flex space-x-2">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="h-3 w-3 rounded-full bg-[#9b87f5]"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Auto complete after animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1, delay: 3.5 }}
        onAnimationComplete={onComplete}
        className="absolute inset-0 pointer-events-none"
      />
    </motion.section>
  );
};