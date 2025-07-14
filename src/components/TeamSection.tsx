import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Maria Silva",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face",
      linkedin: "#"
    },
    {
      name: "João Santos",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#"
    },
    {
      name: "Ana Costa",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      linkedin: "#"
    },
    {
      name: "Pedro Lima",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#"
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
            Excellent teams{" "}
            <span className="text-gradient">working with</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet our passionate team of experts dedicated to revolutionizing the crypto space
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 300
              }}
              viewport={{ once: true }}
            >
              <Card className="p-6 gradient-secondary border-primary/20 hover:glow-card transition-smooth text-center group">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative mb-4 mx-auto w-24 h-24"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-2 border-primary/20"
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-2 border-primary/50 border-t-primary"
                  />
                </motion.div>
                
                <h3 className="font-bold text-lg mb-2">{member.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{member.role}</p>
                
                <motion.a
                  href={member.linkedin}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full gradient-primary hover:glow-primary transition-smooth"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </motion.a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;