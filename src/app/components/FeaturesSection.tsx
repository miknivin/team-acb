import { Gem, Zap, MapPin, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export function FeaturesSection() {
  const features = [
    {
      icon: <Gem size={24} className="text-white mb-6" />,
      title: "Affordable Luxury",
      description: "Premium care doesn't have to carry a premium price tag. Accessibility is at our core."
    },
    {
      icon: <Zap size={24} className="text-white mb-6" />,
      title: "Proven Performance",
      description: "Rigorous testing ensures our formulas cut through the toughest stains and odors."
    },
    {
      icon: <MapPin size={24} className="text-white mb-6" />,
      title: "Locally Trusted",
      description: "Rooted in Team ACB's vision to serve the local community with global standards."
    },
    {
      icon: <ShieldCheck size={24} className="text-white mb-6" />,
      title: "Everyday Safe",
      description: "Thoughtfully crafted to ensure that your home, your hands, and our planet are respected."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="bg-[#1da26e] py-24 px-6 lg:px-24 mt-20 overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-semibold text-white mb-6">
            The Mulla Difference
          </motion.h2>
          <motion.p variants={itemVariants} className="text-white/90 text-lg">
            We combine traditional care with modern science to create products that perform without compromise.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center lg:items-start"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}