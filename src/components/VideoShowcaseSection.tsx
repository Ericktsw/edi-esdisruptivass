"use client";

import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import { useState } from "react";

const VideoShowcaseSection = () => {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

  const videos = [
    {
      id: "m368pKGi7Nc",
      title: "Como a Maior Fabricante de Eletrônicos do Brasil Sumiu?",
      url: "https://www.youtube.com/watch?v=m368pKGi7Nc",
      thumbnail: `https://img.youtube.com/vi/m368pKGi7Nc/maxresdefault.jpg`
    },
    {
      id: "WxI2QZLlSTo",
      title: "Como um Jovem Perdido na Vida Criou a Nike | A História da Nike",
      url: "https://www.youtube.com/watch?v=WxI2QZLlSTo",
      thumbnail: `https://img.youtube.com/vi/WxI2QZLlSTo/maxresdefault.jpg`
    },
    {
      id: "8ARvvJHUaYE",
      title: "A Queda de Luva de Pedreiro",
      url: "https://www.youtube.com/watch?v=8ARvvJHUaYE",
      thumbnail: `https://img.youtube.com/vi/8ARvvJHUaYE/maxresdefault.jpg`
    }
  ];

  const handleVideoClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-red-600 to-purple-600 rounded-full text-white font-medium mb-6"
          >
            VÍDEOS EDITADOS
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Veja os Resultados{" "}
            <span className="bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
              Impressionantes
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Estes são alguns dos vídeos que já editei aplicando as técnicas ensinadas no curso.
            Cada um demonstra o poder das edições disruptivas em ação.
          </motion.p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredVideo(index)}
              onMouseLeave={() => setHoveredVideo(null)}
              onClick={() => handleVideoClick(video.url)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-800">
                {/* Thumbnail */}
                <div className="relative aspect-video">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = '/geolayers.png';
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 1 }}
                      animate={{ 
                        scale: hoveredVideo === index ? 1.1 : 1,
                        rotate: hoveredVideo === index ? 5 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-20 h-20 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-red-500/50 transition-all duration-300"
                    >
                      <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                    </motion.div>
                  </div>
                  
                  {/* External Link Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  {/* Duration Badge (simulated) */}
                  <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm rounded px-2 py-1">
                    <span className="text-white text-sm font-medium">HD</span>
                  </div>
                </div>
                
                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300 line-clamp-2">
                    {video.title}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Técnicas Aplicadas</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-red-400 text-sm font-medium">Assista Agora</span>
                    </div>
                  </div>
                </div>
                
                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/50 rounded-2xl transition-all duration-300" />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 text-lg mb-6">
            Quer criar vídeos como estes? Aprenda as técnicas que fazem a diferença.
          </p>
          <button className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Começar Agora
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcaseSection;