"use client";

import { motion } from "framer-motion";
import { MapPin, Layers, Zap, Star } from "lucide-react";

const GeoLayersSection = () => {
  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto à esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8 lg:order-1 order-1"
          >
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-sm font-medium"
              >
                MÓDULO EXCLUSIVO
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Edições de{" "}
                <span className="text-gradient bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Mapas Animados
                </span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-xl text-gray-300 leading-relaxed"
              >
                Aprenda a criar mapas animados profissionais com o plugin{" "}
                <span className="text-purple-400 font-semibold">GeoLayers 3</span>,
                uma ferramenta poderosa para edições geográficas impressionantes.
              </motion.p>
            </div>

            {/* Imagem no mobile - aparece após o título */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative lg:hidden block"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/geolayers.png?v=2"
                  alt="GeoLayers 3 - Edições de Mapas Animados"
                  className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    console.error('Erro ao carregar imagem geolayers.png (mobile):', e);
                    console.log('Tentando carregar imagem de:', e.currentTarget.src);
                    // Não esconder a imagem, apenas logar o erro
                  }}
                  onLoad={() => console.log('Imagem geolayers.png (mobile) carregada com sucesso')}
                  loading="lazy"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                
                {/* Floating badge */}
                <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-purple-400 font-semibold text-sm">GeoLayers 3</span>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-20 blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-15 blur-2xl" />
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[
                {
                  icon: MapPin,
                  title: "Mapas Interativos",
                  description: "Crie mapas dinâmicos e envolventes"
                },
                {
                  icon: Layers,
                  title: "Camadas Avançadas",
                  description: "Trabalhe com múltiplas camadas de dados"
                },
                {
                  icon: Zap,
                  title: "Animações Fluidas",
                  description: "Transições suaves e profissionais"
                },
                {
                  icon: Star,
                  title: "Resultados Únicos",
                  description: "Destaque-se com edições exclusivas"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Acessar Módulo GeoLayers
              </button>
            </motion.div>
          </motion.div>

          {/* Imagem à direita - apenas desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative hidden lg:block lg:order-2"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/geolayers.png?v=2"
                alt="GeoLayers 3 - Edições de Mapas Animados"
                className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  console.error('Erro ao carregar imagem geolayers.png:', e);
                  console.log('Tentando carregar imagem de:', e.currentTarget.src);
                  // Não esconder a imagem, apenas logar o erro
                }}
                onLoad={() => console.log('Imagem geolayers.png carregada com sucesso')}
                loading="lazy"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              
              {/* Floating badge */}
              <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-purple-400 font-semibold text-sm">GeoLayers 3</span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-20 blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-15 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GeoLayersSection;