import { motion } from "framer-motion";
import { Play, Users, BookOpen, TrendingUp } from "lucide-react";

const YouTubeSection = () => {
  const features = [
    {
      icon: Users,
      text: "Não tenha nenhuma experiência com o YouTube"
    },
    {
      icon: BookOpen,
      text: "Não sabe por onde começar seu canal backstage"
    },
    {
      icon: Play,
      text: "Mais de 70 videoaulas completas"
    },
    {
      icon: TrendingUp,
      text: "Do básico ao avançado"
    }
  ];

  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagem à esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/imagem youtube.png"
                alt="YouTube Channel Creation"
                className="w-full h-auto object-cover"
              />
              {/* Overlay com efeito de play */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Texto à direita */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Descubra como é possível criar um{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                canal de milhões
              </span>{" "}
              de inscritos sem aparecer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Aprenda as estratégias secretas dos maiores canais backstage do YouTube e 
              descubra como construir um império digital sem nunca mostrar o rosto. 
              Mesmo que você seja completamente iniciante, nosso método comprovado 
              vai te guiar passo a passo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                Mesmo que você:
              </h3>
              
              <div className="grid gap-4">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-red-500/30 transition-colors duration-300"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-lg text-gray-200 font-medium">
                        {feature.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 rounded-xl p-6">
                <h4 className="text-xl font-bold text-red-400 mb-3">
                  🎯 Conteúdo Completo Incluso:
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span>Mais de 70 videoaulas detalhadas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span>Estratégias do básico ao avançado</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span>Métodos comprovados de monetização</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span>Suporte completo para iniciantes</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;