import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Editor Freelancer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      text: "Depois do curso Edições Disruptivas, consegui triplicar minha renda como editor. As técnicas são incríveis e realmente funcionam!",
      rating: 5
    },
    {
      name: "Ana Beatriz",
      role: "Criadora de Conteúdo",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
      text: "Nunca imaginei que conseguiria criar edições tão profissionais. O curso superou todas minhas expectativas. Recomendo demais!",
      rating: 5
    },
    {
      name: "Pedro Santos",
      role: "YouTuber",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      text: "Meus vídeos nunca tiveram tantas visualizações! As técnicas do curso transformaram completamente a qualidade do meu conteúdo.",
      rating: 5
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
            O que nossos{" "}
            <span className="text-gradient">alunos dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Não acredite apenas em nossa palavra. Veja o que nossos alunos satisfeitos têm a dizer sobre sua experiência com o curso
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
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
            >
              <Card className="p-6 gradient-secondary border-primary/20 hover:glow-card transition-smooth h-full relative overflow-hidden">
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 300 }}
                  viewport={{ once: true }}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full gradient-primary/20 flex items-center justify-center"
                >
                  <Quote className="w-4 h-4 text-primary" />
                </motion.div>

                {/* Rating */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                  className="flex gap-1 mb-4"
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.5 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-4 h-4 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Testimonial Text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.6 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground mb-6 leading-relaxed"
                >
                  "{testimonial.text}"
                </motion.p>

                {/* Author */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.7 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative"
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                    />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border border-primary/30 border-t-primary"
                    />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                  </div>
                </motion.div>

                {/* Hover Effect */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.1 }}
                  className="absolute inset-0 gradient-primary rounded-lg"
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-4">
            Junte-se a milhares de alunos satisfeitos
          </p>
          <div className="flex justify-center items-center gap-2">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <motion.img
                  key={index}
                  initial={{ scale: 0, x: index * 20 }}
                  whileInView={{ scale: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1, type: "spring", stiffness: 300 }}
                  viewport={{ once: true }}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-8 h-8 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-2">+5,000 alunos</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;