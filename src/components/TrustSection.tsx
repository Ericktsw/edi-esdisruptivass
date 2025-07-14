import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shield, Code, Zap, Lock } from "lucide-react";

const TrustSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Military-grade encryption protects your assets"
    },
    {
      icon: Code,
      title: "Open Source",
      description: "Transparent and auditable smart contracts"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Instant transactions with minimal fees"
    },
    {
      icon: Lock,
      title: "Non-Custodial",
      description: "You always maintain control of your funds"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold mb-6"
              >
                Trust and{" "}
                <span className="text-gradient">Transparency</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl text-muted-foreground mb-8"
              >
                Built with security and transparency at its core. Every transaction is verified on the blockchain and protected by advanced cryptography.
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ 
                    delay: 0.4 + index * 0.1, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 300
                  }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Code Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="p-6 gradient-secondary border-primary/20 glow-card">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm text-muted-foreground ml-2">smart-contract.sol</span>
              </div>
              
              <div className="font-mono text-sm space-y-2">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="text-blue-400"
                >
                  pragma solidity ^0.8.0;
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="text-purple-400"
                >
                  contract <span className="text-yellow-400">SecureVault</span> {`{`}
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  className="text-green-400 pl-4"
                >
                  mapping(address =&gt; uint256) balances;
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                  className="text-orange-400 pl-4"
                >
                  event <span className="text-yellow-400">Transfer</span>(address, uint256);
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  className="text-blue-400 pl-4"
                >
                  function withdraw() external {`{`}
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 0.5 }}
                  className="text-red-400 pl-8"
                >
                  require(balances[msg.sender] &gt; 0);
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2, duration: 0.5 }}
                  className="text-purple-400 pl-4"
                >
                  {`}`}
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.4, duration: 0.5 }}
                  className="text-purple-400"
                >
                  {`}`}
                </motion.div>
              </div>
              
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-primary mt-2"
              />
            </Card>

            {/* Floating Security Icons */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-16 h-16 rounded-full gradient-primary/20 flex items-center justify-center"
            >
              <Shield className="w-8 h-8 text-primary" />
            </motion.div>
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full gradient-primary/30 flex items-center justify-center"
            >
              <Lock className="w-6 h-6 text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;