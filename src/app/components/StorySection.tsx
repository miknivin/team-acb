import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import storyImg from "figma:asset/347dd1a5b0b4808ea58c5089bec6cab33923b691.png";

export function StorySection() {
  return (
    <section className="py-24 px-6 lg:px-24 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <motion.div 
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[#006c46] font-bold text-xs tracking-[1.4px] uppercase">
            OUR STORY
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#191c1e] leading-tight font-['Plus_Jakarta_Sans',sans-serif]">
            Crafted with Care by <br />Team ACB
          </h2>
          <div className="space-y-4 text-lg text-[#475569] leading-relaxed max-w-xl">
            <p>
              Mulla was born from a simple observation: cleaning shouldn't just be a chore—it should be an act of care for your space and those within it.
            </p>
            <p>
              Team ACB set out to redefine the local household care industry by blending artisanal quality with industrial-grade efficacy. Our journey from a small local lab to a trusted household name is built on transparency, quality, and a commitment to everyday excellence.
            </p>
          </div>
          <motion.button 
            whileHover={{ x: 5 }}
            className="text-[#006c46] font-bold inline-flex items-center gap-2 hover:gap-3 transition-all group pt-4"
          >
            Discover Our Roots
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
        
        <motion.div 
          className="flex-1 w-full relative"
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[48px] overflow-hidden max-w-lg ml-auto group">
            <motion.img 
              src={storyImg} 
              alt="Factory worker inspecting Mulla product" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}