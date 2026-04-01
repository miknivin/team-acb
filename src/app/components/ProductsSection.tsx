import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import productImg from "figma:asset/eb3ae7d8303fa6d6de5e1cce75c63a84f56a4777.png";
import shadowImg from "figma:asset/bf74166371110eda65b8d707004f362fb217b15e.png";
import gradientImg from "figma:asset/ec79af5c2d67fd4194e6aa3f975e94ddc6da9c00.png";

import mullaSilkSoftImg from "@/assets/home/85edf17bf57835c6f1816a8a5817c3e91453805b.png";
import mullaDishwashImg from "@/assets/home/Mulla dishwash liquid-BRfupRq_.jpg";
import sunveelLiquidImg from "@/assets/home/SUNVEEL DETERGENT LIQUID 1 kg sigel-CCDZ1PBp.jpg";
import gradientImage from "@/assets/home/Gradient.png";

const products = [
  {
    id: 1,
    name: "Sunveel Detergent Liquid",
    category: "DEEP CLEAN LIQUIDS",
    description: "Advanced enzyme formula penetrates deep into fibers to lift stains effortlessly, keeping colors bright and fabric soft.",
    image: sunveelLiquidImg,
    badge: "BESTSELLER"
  },
  {
    id: 2,
    name: "Mulla Detergent Liquid",
    category: "FABRIC CARE",
    description: "Gentle cleaning formula enriched with lavender extract to preserve delicate fabrics and keep them luxuriously soft.",
    image: mullaSilkSoftImg,
    badge: "BIO-ACTIVE"
  },
  {
    id: 3,
    name: "Mulla Dishwash Liquid",
    category: "DISHWASHING LIQUID",
    description: "Cuts through tough grease and burnt-on food, leaving your dishes sparkling clean with a delightful fresh scent.",
    image: mullaDishwashImg,
    badge: "PREMIUM"
  },
  {
    id: 4,
    name: "Sunveel Detergent Powder",
    category: "DETERGENT POWDERS",
    description: "Powerful stain-fighting powder that dissolves quickly and removes dirt without fading your clothes, suitable for all machines.",
    image: gradientImage,
    badge: "NEW"
  }
];

export function ProductsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="py-24 px-6 lg:px-24 max-w-7xl mx-auto">
      <motion.div
        className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#191c1e] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">
            Mulla Collection
          </h2>
          <p className="text-lg text-[#3f4a3c]">
            Engineered for purity, crafted for your home.
          </p>
        </div>
        {/* Navigation Arrows Removed */}
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/5] bg-white rounded-[32px] overflow-hidden mb-6 shadow-sm group-hover:shadow-md transition-shadow">
              {product.badge && (
                <div className="absolute top-4 right-4 z-20 bg-[#006c46] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {product.badge}
                </div>
              )}

              <div className="absolute inset-0 flex items-center justify-center z-10 p-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[80%] w-auto object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#191c1e] mb-2">{product.name}</h3>
            <p className="text-[#006c46] text-sm font-bold uppercase tracking-wider mb-3">
              {product.category}
            </p>
            <p className="text-[#3f4a3c] text-sm leading-relaxed mb-4">
              {product.description}
            </p>
            {/* <p className="text-2xl font-extrabold text-[#191c1e]">
              {product.price}
            </p> */}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
