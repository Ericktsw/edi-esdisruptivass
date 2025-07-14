import { motion } from "framer-motion";

const PartnersSection = () => {
  const partners = [
    "LogoIpsum", "LogoIpsum", "LogoIpsum", "LogoIpsum", "LogoIpsum", "LogoIpsum"
  ];

  return (
    <section className="py-12 border-y border-border/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wide">
            Over 200 organizations trust us
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 lg:gap-12"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.4,
                type: "spring",
                stiffness: 300 
              }}
              viewport={{ once: true }}
              className="text-muted-foreground hover:text-primary transition-smooth cursor-pointer"
            >
              <div className="text-xl font-semibold">
                {partner}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;