import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Play, Clock, Users, BookOpen, Award, Star } from "lucide-react";
import { Carousel3D } from "@/components/ui/3d-carousel";

const CourseModulesSection = () => {
  const modules = [
    {
      id: "01",
      title: "Boas-vindas",
      description: "Acesso e explicação geral do curso",
      duration: "30min",
      lessons: 3,
      icon: BookOpen,
      image: "/modulos/Módulo 1.png"
    },
    {
      id: "02", 
      title: "Fundamentos da Edição",
      description: "Filosofia do curso e tipos de vídeos",
      duration: "1h",
      lessons: 4,
      icon: Star,
      image: "/modulos/Módulo 2.png"
    },
    {
      id: "03",
      title: "Eixos da Edição Disruptiva",
      description: "Storytelling, som, imagem e ritmo", 
      duration: "2h",
      lessons: 5,
      icon: Award,
      image: "/modulos/Módulo 3.png"
    },
    {
      id: "04",
      title: "Universo do Vídeo",
      description: "Roteiro, retenção e narrativa",
      duration: "1.5h", 
      lessons: 4,
      icon: Play,
      image: "/modulos/módulo 4.png"
    },
    {
      id: "05",
      title: "Módulo Básico",
      description: "Interface, cortes e exportação",
      duration: "3h",
      lessons: 8,
      icon: Users,
      image: "/modulos/Módulo 5.png"
    },
    {
      id: "06",
      title: "Edição Avançada",
      description: "Zoom dinâmico, efeitos e LUTs",
      duration: "3.5h",
      lessons: 7,
      icon: Award,
      image: "/modulos/Módulo 6.png"
    },
    {
      id: "07",
      title: "Motion Graphics",
      description: "Máscaras, transições e animações",
      duration: "4h",
      lessons: 11,
      icon: Play,
      image: "/modulos/Módulo 7.png"
    },
    {
      id: "08",
      title: "Extras",
      description: "Templates e materiais editáveis",
      duration: "2h",
      lessons: 5,
      icon: Star,
      image: "/modulos/Módulo 8.png"
    },
    {
      id: "09",
      title: "Monetização",
      description: "Como atrair clientes e precificar",
      duration: "1.5h",
      lessons: 4,
      icon: Users,
      image: "/modulos/Módulo 9.png"
    }
  ];

  const detailedModules = [
    "✅ Do básico ao avançado",
    "✅ Técnicas profissionais", 
    "✅ Edições que vendem",
    "✅ Criação de vídeos virais",
    "✅ Transições animadas",
    "✅ Ferramentas gratuitas e pagas",
    "✅ Motion Básico + Avançado", 
    "✅ Templates Editáveis",
    "✅ Pack de Transições",
    "✅ Técnicas de Monetização",
    "✅ Análise de vídeos prontos",
    "✅ Como fechar clientes e manter fluxo constante"
  ];

  // Carousel items for the 3D carousel
  const carouselItems = [
    {
      id: 1,
      title: "Módulo 1: Boas-vindas",
      image: "/modulos/Módulo 1.png",
      description: "Acesso e explicação geral do curso"
    },
    {
      id: 2,
      title: "Módulo 2: Fundamentos da Edição",
      image: "/modulos/Módulo 2.png",
      description: "Filosofia do curso e tipos de vídeos"
    },
    {
      id: 3,
      title: "Módulo 3: Eixos da Edição Disruptiva",
      image: "/modulos/Módulo 3.png",
      description: "Storytelling, som, imagem e ritmo"
    },
    {
      id: 4,
      title: "Módulo 4: Universo do Vídeo",
      image: "/modulos/módulo 4.png",
      description: "Roteiro, retenção e narrativa"
    },
    {
      id: 5,
      title: "Módulo 5: Módulo Básico",
      image: "/modulos/Módulo 5.png",
      description: "Interface, cortes e exportação"
    },
    {
      id: 6,
      title: "Módulo 6: Edição Avançada",
      image: "/modulos/Módulo 6.png",
      description: "Zoom dinâmico, efeitos e LUTs"
    },
    {
      id: 7,
      title: "Módulo 7: Motion Graphics",
      image: "/modulos/Módulo 7.png",
      description: "Máscaras, transições e animações"
    },
    {
      id: 8,
      title: "Módulo 8: Extras",
      image: "/modulos/Módulo 8.png",
      description: "Templates e materiais editáveis"
    },
    {
      id: 9,
      title: "Módulo 9: Monetização",
      image: "/modulos/Módulo 9.png",
      description: "Como atrair clientes e precificar"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">




        {/* 3D Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-800 leading-tight">
            Veja como é <span className="text-gradient bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">dentro do curso</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-16 font-medium max-w-3xl mx-auto">
            Explore os módulos do curso de forma interativa e descubra todo o conteúdo exclusivo
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <Carousel3D 
              items={carouselItems}
              autoPlay={true}
              autoPlayInterval={5000}
              className="h-[500px]"
            />
          </motion.div>
        </motion.div>


      </div>
    </section>
  );
};

export default CourseModulesSection;