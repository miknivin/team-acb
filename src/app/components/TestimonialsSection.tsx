import { Star } from "lucide-react";
import { motion } from "motion/react";
import avatar1 from "figma:asset/7f3d483c2eb2904b267e0ff0a6cd2285d30d9cb2.png";
import avatar2 from "figma:asset/086146f9f18c0208cf2d76ff4ea8de569d757ca0.png";
import avatar3 from "figma:asset/3c9d8a008f06ade7658e6e8b4ded09137a04c697.png";

const testimonials = [
  {
    text: "I have been using this product for a few weeks now and it works really well. It cleans dishes perfectly and removes grease easily. The fragrance is also very pleasant. Good quality product",
    name: "Nimisha Mathew",


  },
  {
    text: "This detergent cleans clothes very effectively. Even tough stains come off easily. The quality is great for the price. I’m satisfied with the product.",
    name: "Anjali Nair",


  },
  {
    text: "The hand wash is very gentle on the skin and doesn’t make my hands dry. It has a nice fresh smell and lathers well. My family really likes it.",
    name: "Kamalini Kaur",


  }
];

export function TestimonialsSection() {
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
    <section className="py-24 px-6 lg:px-24 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#191c1e] font-['Plus_Jakarta_Sans',sans-serif]">
          Trusted by Families
        </h2>
        <div className="flex items-center gap-2 bg-[#f8f9fa] px-4 py-2 rounded-full">
          <Star className="text-[#006c46] fill-[#006c46]" size={16} />
          <span className="font-bold text-[#191c1e]">4.9/5.0</span>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="flex flex-col justify-between p-8 rounded-[32px] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all"
          >
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#006c46] fill-[#006c46]" />
                ))}
              </div>
              <p className="text-[#3f4a3c] leading-relaxed mb-8 text-lg">
                "{testimonial.text}"
              </p>
            </div>
            <div className="flex items-center gap-4">
              {/* <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              /> */}
              <div>
                <p className="font-bold text-[#191c1e] text-sm">{testimonial.name}</p>
                {/* <p className="text-[#475569] text-xs">{testimonial.role}</p> */}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}