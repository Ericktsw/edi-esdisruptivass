import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Demo } from "@/components/ui/demo";
import PartnersSection from "@/components/PartnersSection";
import BenefitsSection from "@/components/BenefitsSection";
import YouTubeSection from "@/components/YouTubeSection";
import CourseModulesSection from "@/components/CourseModulesSection";
import GeoLayersSection from "@/components/GeoLayersSection";
import VideoShowcaseSection from "@/components/VideoShowcaseSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { SplashScreen } from "@/components/SplashScreen";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash" onComplete={handleSplashComplete} />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Demo />
            <div className="bg-white">
              <BenefitsSection />
            </div>
            <YouTubeSection />
            <div className="bg-white">
              <CourseModulesSection />
            </div>
            <VideoShowcaseSection />
            <GeoLayersSection />
            <div className="gradient-hero">
              <PricingSection />
            </div>
            <div className="gradient-hero">
              <FAQSection />
            </div>
            <div className="bg-white">
              <Footer />
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
