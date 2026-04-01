import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import premiumImg from "figma:asset/2d60da04f028ff8c07e7d2eade95e853483f852c.png";
import soapsImg from "figma:asset/c36464a95ae222ed18620d2484c45deec0914159.png";
import liquidsImg from "figma:asset/e78b091560384562d7d630661a66706237bdebdd.png";

export function CategoriesSection() {
  const navigate = useNavigate();

  return (
    <section className="py-12 px-6 lg:px-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-auto lg:h-[600px]">
        {/* Large Banner */}
        <motion.div 
          onClick={() => navigate("/products/powders")}
          className="lg:col-span-8 relative rounded-[48px] overflow-hidden group cursor-pointer h-[400px] lg:h-full"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 z-0">
            <img 
              src={premiumImg} 
              alt="Premium Detergents" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#191c1e]/80 via-transparent to-transparent" />
          </div>
          
          <div className="absolute bottom-0 left-0 p-8 md:p-12 z-10 w-full">
            <p className="text-white/80 text-xs tracking-widest uppercase font-medium mb-2">
              Collection
            </p>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
              Premium Detergents
            </h2>
            <button className="bg-white text-[#191c1e] font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              Browse Laundry
            </button>
          </div>
        </motion.div>
        
        {/* Small Banners */}
        <div className="lg:col-span-4 flex flex-col gap-8 h-[600px] lg:h-full">
          {/* Soaps & Bars */}
          <motion.div 
            onClick={() => navigate("/products/soaps")}
            className="relative flex-1 rounded-[48px] overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 z-0">
              <img 
                src={soapsImg} 
                alt="Soaps & Bars" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#191c1e]/60 via-transparent to-transparent" />
            </div>
            
            <div className="absolute bottom-0 left-0 p-8 z-10 flex items-center justify-between w-full">
              <h3 className="text-2xl font-bold text-white">
                Soaps & Bars
              </h3>
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                <ArrowRight size={16} />
              </div>
            </div>
          </motion.div>
          
          {/* Liquid Cleaners */}
          <motion.div 
            onClick={() => navigate("/products/liquids")}
            className="relative flex-1 rounded-[48px] overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="absolute inset-0 z-0">
              <img 
                src={liquidsImg} 
                alt="Liquid Cleaners" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#191c1e]/60 via-transparent to-transparent" />
            </div>
            
            <div className="absolute bottom-0 left-0 p-8 z-10 flex items-center justify-between w-full">
              <h3 className="text-2xl font-bold text-white">
                Liquid Cleaners
              </h3>
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                <ArrowRight size={16} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
