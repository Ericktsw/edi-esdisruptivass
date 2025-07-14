import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const InvestorsSection = () => {
  const investors = [
    { name: "LogoIpsum", logo: "LI" },
    { name: "InvestCorp", logo: "IC" },
    { name: "VentureX", logo: "VX" },
    { name: "BlockFund", logo: "BF" },
    { name: "CryptoVC", logo: "CV" },
    { name: "TechAngel", logo: "TA" },
    { name: "AlphaInvest", logo: "AI" },
    { name: "NeoCapital", logo: "NC" }
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
            Our <span className="text-gradient">investors</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Backed by leading venture capital firms and strategic investors who believe in our vision
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {investors.map((investor, index) => (
            <motion.div
              key={investor.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.4,
                type: "spring",
                stiffness: 300 
              }}
              viewport={{ once: true }}
            >
              <Card className="p-8 gradient-secondary border-primary/20 hover:glow-card transition-smooth text-center group aspect-square flex flex-col items-center justify-center">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:glow-primary transition-smooth"
                >
                  <span className="text-white font-bold text-xl">{investor.logo}</span>
                </motion.div>
                <h3 className="font-semibold text-sm text-muted-foreground group-hover:text-foreground transition-smooth">
                  {investor.name}
                </h3>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-muted-foreground">
            <span className="text-gradient font-semibold">$50M+</span> raised from top-tier investors
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestorsSection;