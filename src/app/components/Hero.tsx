import bgImage1 from "../../assets/main.png";
import bgImage2 from "../../assets/main 2.jpeg";
import bgImage3 from "../../assets/main 3.jpeg";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import { useState, useEffect, useCallback } from "react";

const banners = [bgImage1, bgImage2, bgImage3];

export function Hero() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  }, []);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

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
      {/* Background Image Swiper */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img
            src={banners[currentSlide]}
            alt={`Hero Background ${currentSlide + 1}`}
            className="w-full h-full object-cover object-[70%_center] lg:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-transparent lg:bg-gradient-to-r lg:from-white/60 lg:via-white/40 lg:to-transparent lg:w-1/2" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
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

      {/* Dots Pagination */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="relative group"
          >
            <span
              className={`block rounded-full transition-all duration-500 ease-out ${index === currentSlide
                  ? "w-8 h-3 bg-gradient-to-r from-[#006c46] to-[#24b078] shadow-md shadow-[#24b078]/30"
                  : "w-3 h-3 bg-white/60 hover:bg-white/90 border border-white/20"
                }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
