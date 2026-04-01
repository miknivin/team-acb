import { Eye, Rocket, Banknote, Users, Sparkles, ShieldCheck } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";

export function AboutPage() {
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
    <div className="bg-white min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        className="max-w-7xl mx-auto px-6 lg:px-24 mb-24 flex flex-col md:flex-row gap-12 lg:gap-24"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="w-full md:w-1/3">
          <h1 className="text-[#191c1e] text-4xl lg:text-[44px] font-bold font-['Poppins'] leading-tight tracking-tight">
            Rooted in Kerala, Driven by Innovation
          </h1>
        </motion.div>
        <motion.div variants={itemVariants} className="w-full md:w-2/3 flex flex-col gap-8">
          <p className="text-[#475569] text-[16px] leading-relaxed">
            Mulla's journey began in the vibrant heart of Kerala, where Team ACB envisioned a new standard for household care. We were inspired by the natural purity of our surroundings and the deep-rooted tradition of cleanliness in every home.
          </p>
          <p className="text-[#475569] text-[16px] leading-relaxed">
            What started as a shared passion among friends grew into a commitment to create effective, family-safe cleaning solutions that don't compromise on quality or affordability.
          </p>
          <div className="bg-[#f8f9fa] border-l-[4px] border-[#1da26e] rounded-r-2xl p-6 mt-4">
            <p className="text-[#3f4a3c] text-[16px] font-medium leading-relaxed italic">
              "Cleanliness isn't a chore; it's the foundation of a healthy, happy life. Team ACB built Mulla to be the silent guardian of your home's well-being."
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Vision & Mission Section */}
      <motion.section 
        className="max-w-7xl mx-auto px-6 lg:px-24 mb-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="bg-white rounded-[32px] p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-100/50 transition-all"
          >
            <div className="bg-[#dcfce7] w-14 h-14 rounded-full flex items-center justify-center mb-8">
              <Eye className="text-[#16a34a]" size={28} />
            </div>
            <h3 className="text-[#191c1e] text-[24px] font-bold font-['Poppins'] mb-4">
              Our Vision
            </h3>
            <p className="text-[#64748b] text-[16px] leading-relaxed">
              To become the most trusted household name globally by redefining hygiene through sustainable practices and accessible premium care for every family.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="bg-white rounded-[32px] p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-100/50 transition-all"
          >
            <div className="bg-[#dbeafe] w-14 h-14 rounded-full flex items-center justify-center mb-8">
              <Rocket className="text-[#3b82f6]" size={28} />
            </div>
            <h3 className="text-[#191c1e] text-[24px] font-bold font-['Poppins'] mb-4">
              Our Mission
            </h3>
            <p className="text-[#64748b] text-[16px] leading-relaxed">
              Empowering households with effective, science-backed cleaning essentials that are safe for loved ones, kind to the planet, and fairly priced.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* The Mulla Promise Section */}
      <motion.section 
        className="bg-[#f8f9fa] py-24 mb-32 rounded-[48px] mx-4 lg:mx-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.h2 variants={itemVariants} className="text-[#191c1e] text-3xl lg:text-[36px] font-bold font-['Poppins'] mb-4">
            The Mulla Promise
          </motion.h2>
          <motion.p variants={itemVariants} className="text-[#64748b] text-[16px] mb-16 max-w-2xl mx-auto">
            Why thousands of families across the region choose Mulla for their daily care.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <motion.div variants={itemVariants} whileHover={{ y: -8 }} className="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-md transition-shadow">
              <Banknote className="text-[#1da26e] mb-6" size={32} />
              <h4 className="text-[#191c1e] text-[18px] font-bold font-['Poppins'] mb-3">
                Affordable Quality
              </h4>
              <p className="text-[#64748b] text-[14px] leading-relaxed">
                Premium cleaning performance that fits your monthly household budget effortlessly.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ y: -8 }} className="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-md transition-shadow">
              <Users className="text-[#1da26e] mb-6" size={32} />
              <h4 className="text-[#191c1e] text-[18px] font-bold font-['Poppins'] mb-3">
                Trusted by Families
              </h4>
              <p className="text-[#64748b] text-[14px] leading-relaxed">
                Formulated with safety in mind, making it ideal for homes with kids and pets.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ y: -8 }} className="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-md transition-shadow">
              <Sparkles className="text-[#1da26e] mb-6" size={32} />
              <h4 className="text-[#191c1e] text-[18px] font-bold font-['Poppins'] mb-3">
                Effective Cleaning
              </h4>
              <p className="text-[#64748b] text-[14px] leading-relaxed">
                Powerful dirt-removing formulas that leave surfaces pristine and fresh.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ y: -8 }} className="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-md transition-shadow">
              <ShieldCheck className="text-[#1da26e] mb-6" size={32} />
              <h4 className="text-[#191c1e] text-[18px] font-bold font-['Poppins'] mb-3">
                Everyday Safe
              </h4>
              <p className="text-[#64748b] text-[14px] leading-relaxed">
                pH-balanced and dermatologist-tested where it matters most for your daily routine.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Growth Story Section */}
      <motion.section 
        className="max-w-5xl mx-auto px-6 lg:px-24 mb-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="text-center mb-16">
          <motion.h2 variants={itemVariants} className="text-[#191c1e] text-3xl lg:text-[36px] font-bold font-['Poppins'] mb-4">
            Our Growth Story
          </motion.h2>
          <motion.p variants={itemVariants} className="text-[#64748b] text-[16px]">
            Milestones that defined the journey of Team ACB and Mulla Care.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#dcfce7] md:-translate-x-1/2"
          ></motion.div>

          {/* Timeline Items */}
          <div className="space-y-12 relative z-10">
            
            {/* Item 1 */}
            <div className="flex flex-col md:flex-row items-start justify-between w-full relative">
              <div className="hidden md:block w-5/12 pr-12 text-right">
                <span className="text-[#1da26e] text-[14px] font-bold tracking-[1px] uppercase mb-2 block font-['Poppins']">
                  2021 — The Spark
                </span>
                <h4 className="text-[#191c1e] text-[20px] font-bold font-['Poppins'] mb-3">
                  Foundation in Kerala
                </h4>
                <p className="text-[#64748b] text-[14px] leading-relaxed">
                  Team ACB conceptualizes a home care brand that balances performance with traditional safety values.
                </p>
              </div>
              <div className="absolute left-[20px] md:left-1/2 w-[14px] h-[14px] rounded-full bg-[#1da26e] border-[3px] border-white md:-translate-x-1/2 mt-1.5 shadow-sm shadow-[#1da26e]/30 z-10 -ml-[6px] md:ml-0"></div>
              <div className="w-full md:hidden pl-16">
                <span className="text-[#1da26e] text-[12px] font-bold tracking-[1px] uppercase mb-1.5 block font-['Poppins']">
                  2021 — The Spark
                </span>
                <h4 className="text-[#191c1e] text-[18px] font-bold font-['Poppins'] mb-2">
                  Foundation in Kerala
                </h4>
                <p className="text-[#64748b] text-[14px] leading-relaxed">
                  Team ACB conceptualizes a home care brand that balances performance with traditional safety values.
                </p>
              </div>
              <div className="hidden md:block w-5/12"></div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col md:flex-row items-start justify-between w-full relative">
              <div className="hidden md:block w-5/12"></div>
              <div className="absolute left-[20px] md:left-1/2 w-[14px] h-[14px] rounded-full bg-[#1da26e] border-[3px] border-white md:-translate-x-1/2 mt-1.5 shadow-sm shadow-[#1da26e]/30 z-10 -ml-[6px] md:ml-0"></div>
              <div className="w-full md:w-5/12 pl-16 md:pl-12 text-left">
                <span className="text-[#1da26e] text-[14px] md:text-[14px] text-[12px] font-bold tracking-[1px] uppercase mb-1.5 md:mb-2 block font-['Poppins']">
                  2022 — Research
                </span>
                <h4 className="text-[#191c1e] text-[18px] md:text-[20px] font-bold font-['Poppins'] mb-2 md:mb-3">
                  Product Formulation
                </h4>
                <p className="text-[#64748b] text-[14px] leading-relaxed">
                  Over 100 trials to perfect the PH-balanced formula that became our flagship cleaner.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col md:flex-row items-start justify-between w-full relative">
              <div className="hidden md:block w-5/12 pr-12 text-right">
                <span className="text-[#1da26e] text-[14px] font-bold tracking-[1px] uppercase mb-2 block font-['Poppins']">
                  2023 — Launch
                </span>
                <h4 className="text-[#191c1e] text-[20px] font-bold font-['Poppins'] mb-3">
                  First Retail Presence
                </h4>
                <p className="text-[#64748b] text-[14px] leading-relaxed">
                  Mulla enters the local markets, quickly becoming a household favorite for its value.
                </p>
              </div>
              <div className="absolute left-[20px] md:left-1/2 w-[14px] h-[14px] rounded-full bg-[#1da26e] border-[3px] border-white md:-translate-x-1/2 mt-1.5 shadow-sm shadow-[#1da26e]/30 z-10 -ml-[6px] md:ml-0"></div>
              <div className="w-full md:hidden pl-16">
                <span className="text-[#1da26e] text-[12px] font-bold tracking-[1px] uppercase mb-1.5 block font-['Poppins']">
                  2023 — Launch
                </span>
                <h4 className="text-[#191c1e] text-[18px] font-bold font-['Poppins'] mb-2">
                  First Retail Presence
                </h4>
                <p className="text-[#64748b] text-[14px] leading-relaxed">
                  Mulla enters the local markets, quickly becoming a household favorite for its value.
                </p>
              </div>
              <div className="hidden md:block w-5/12"></div>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col md:flex-row items-start justify-between w-full relative">
              <div className="hidden md:block w-5/12"></div>
              <div className="absolute left-[20px] md:left-1/2 w-[14px] h-[14px] rounded-full bg-[#1da26e] border-[3px] border-white md:-translate-x-1/2 mt-1.5 shadow-sm shadow-[#1da26e]/30 z-10 -ml-[6px] md:ml-0"></div>
              <div className="w-full md:w-5/12 pl-16 md:pl-12 text-left">
                <span className="text-[#1da26e] text-[14px] md:text-[14px] text-[12px] font-bold tracking-[1px] uppercase mb-1.5 md:mb-2 block font-['Poppins']">
                  2024 — Future
                </span>
                <h4 className="text-[#191c1e] text-[18px] md:text-[20px] font-bold font-['Poppins'] mb-2 md:mb-3">
                  Expanding the Reach
                </h4>
                <p className="text-[#64748b] text-[14px] leading-relaxed">
                  Expanding our digital footprint and product line to serve families across the country.
                </p>
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="max-w-7xl mx-auto px-6 lg:px-24"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="bg-[#1da26e] rounded-[48px] p-12 lg:p-24 text-center relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#0f7048]/30 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-white text-3xl lg:text-[44px] font-bold font-['Poppins'] mb-6 leading-tight">
              Experience the Mulla Difference
            </h2>
            <p className="text-white/90 text-[18px] leading-relaxed mb-10 max-w-2xl mx-auto">
              Join thousands of families who have switched to a smarter, safer way of keeping their homes pristine. Quality shouldn't be a luxury.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/products"
                className="bg-white text-[#1da26e] font-bold text-[16px] px-8 py-4 rounded-full hover:bg-gray-50 transition-transform hover:scale-105 w-full sm:w-auto"
              >
                Explore Products
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border border-white text-white font-bold text-[16px] px-8 py-4 rounded-full hover:bg-white/10 transition-transform hover:scale-105 w-full sm:w-auto"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
