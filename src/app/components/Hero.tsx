import bgImage from "figma:asset/45b675ee74c22db277292db71eacaa8f14ffbc46.png";
import { motion } from "motion/react";
import { useNavigate } from "react-router";

export function Hero() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 lg:px-24 min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img 
          src={bgImage} 
          alt="Hero Background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/40 to-transparent lg:w-1/2" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div 
          className="max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="inline-block bg-[#7cfabb] text-[#002112] font-bold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            The New Standard
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#191c1e] leading-[1.1] mb-6 font-['Plus_Jakarta_Sans',sans-serif]">
            Elevate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006c46] to-[#24b078]">
              Everyday
            </span> <br />
            Cleaning
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-[#3f4a3c] font-medium mb-10 max-w-lg leading-relaxed">
            Smart, effective, and trusted cleaning solutions by Mulla. Designed for the modern home.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/products")}
              className="bg-gradient-to-r from-[#006c46] to-[#24b078] text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Shop Products
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/products")}
              className="bg-white text-[#006c46] font-bold text-lg px-8 py-4 rounded-full border-2 border-[#006c46]/10 hover:border-[#006c46]/30 transition-all"
            >
              Explore Range
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
