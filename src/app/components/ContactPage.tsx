import { Phone, Mail, MapPin, ChevronDown, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import imgBackgroundImage from "figma:asset/cf898b98b64518fca7abf972eae71dc24257b73a.png";

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('_subject');
    const message = formData.get('message');
    
    const mailtoUrl = `mailto:acbenterprises16@gmail.com?subject=${encodeURIComponent(String(subject))}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    window.location.href = mailtoUrl;
    toast.success("Opening your email client...");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <div className="bg-[#fafafa] min-h-screen pt-32 pb-24 overflow-hidden font-['Poppins']">
      {/* Hero Section */}
      <motion.section
        className="max-w-7xl mx-auto px-6 lg:px-24 mb-20 flex flex-col items-center text-center mt-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="bg-[#dcfce7] px-4 py-1.5 rounded-full mb-8">
          <span className="text-[#006c46] text-[12px] font-bold tracking-[1.2px] uppercase">
            Get in touch
          </span>
        </motion.div>
        <motion.h1 variants={itemVariants} className="text-[#191c1e] text-5xl md:text-[72px] font-bold leading-tight tracking-tight mb-6">
          Let's Connect
        </motion.h1>
        <motion.p variants={itemVariants} className="text-[#3f4a3c] text-[18px] md:text-[20px] max-w-3xl leading-relaxed">
          We're here to help you with anything you need. Experience the purity of Kerala's finest household care.
        </motion.p>
      </motion.section>

      {/* Info Cards */}
      <motion.section
        className="max-w-7xl mx-auto px-6 lg:px-24 mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
            className="bg-white/80 backdrop-blur-md rounded-[32px] md:rounded-[40px] shadow-[0px_20px_40px_0px_rgba(25,28,30,0.04)] p-6 md:p-8 flex flex-col items-center gap-5 border border-white text-center"
          >
            <div className="bg-[#e6f0fa] w-16 h-16 rounded-full flex items-center justify-center shrink-0">
              <Phone className="text-[#005cae]" size={24} />
            </div>
            <div>
              <span className="text-[#6f7a6b] text-[13px] font-bold tracking-[1px] uppercase block mb-2">
                Call Us
              </span>
              <span className="text-[#191c1e] text-[15px] lg:text-[18px] font-bold whitespace-nowrap">
                +91 7025984447
              </span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
            className="bg-white/80 backdrop-blur-md rounded-[32px] md:rounded-[40px] shadow-[0px_20px_40px_0px_rgba(25,28,30,0.04)] p-6 md:p-8 flex flex-col items-center gap-5 border border-white text-center hover:z-10"
          >
            <div className="bg-[#e9f7f1] w-16 h-16 rounded-full flex items-center justify-center shrink-0">
              <Mail className="text-[#006c46]" size={24} />
            </div>
            <div className="w-full">
              <span className="text-[#6f7a6b] text-[13px] font-bold tracking-[1px] uppercase block mb-2">
                Email Us
              </span>
              <span className="text-[#191c1e] text-[14px] lg:text-[16px] xl:text-[18px] font-bold break-words w-full inline-block">
                acbenterprises16@gmail.com
              </span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
            className="bg-white/80 backdrop-blur-md rounded-[32px] md:rounded-[40px] shadow-[0px_20px_40px_0px_rgba(25,28,30,0.04)] p-6 md:p-8 flex flex-col items-center gap-5 border border-white text-center"
          >
            <div className="bg-[#e6f7f9] w-16 h-16 rounded-full flex items-center justify-center shrink-0">
              <MapPin className="text-[#006876]" size={24} />
            </div>
            <div>
              <span className="text-[#6f7a6b] text-[13px] font-bold tracking-[1px] uppercase block mb-2">
                Visit Us
              </span>
              <span className="text-[#191c1e] text-[15px] lg:text-[18px] font-bold">
                Marine Drive, Kochi, Kerala 682031
              </span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Form & Map Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-24 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Form Container */}
          <motion.div
            className="w-full bg-white rounded-[48px] p-8 lg:p-12 shadow-[0px_20px_40px_0px_rgba(25,28,30,0.04)] border border-[#e6e8ea]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-[#191c1e] text-[30px] font-bold mb-3">
              Send us a message
            </h2>
            <p className="text-[#3f4a3c] text-[16px] mb-10">
              We usually respond within 24 hours.
            </p>

            <form 
              className="space-y-6" 
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[#6f7a6b] text-[12px] font-bold tracking-[1.2px] uppercase mb-3 block">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full bg-[#f2f4f6] text-[#191c1e] text-[20px] rounded-[32px] px-8 h-[65px] outline-none focus:ring-2 focus:ring-[#1da26e] transition-all border border-transparent font-['Roboto',sans-serif]"
                  />
                </div>
                <div>
                  <label className="text-[#6f7a6b] text-[12px] font-bold tracking-[1.2px] uppercase mb-3 block">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full bg-[#f2f4f6] text-[#191c1e] text-[20px] rounded-[32px] px-8 h-[65px] outline-none focus:ring-2 focus:ring-[#1da26e] transition-all border border-transparent font-['Roboto',sans-serif]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[#6f7a6b] text-[12px] font-bold tracking-[1.2px] uppercase mb-3 block">
                  Subject
                </label>
                <input
                  required
                  type="text"
                  name="_subject"
                  placeholder="Subject"
                  className="w-full bg-[#f2f4f6] text-[#191c1e] text-[20px] rounded-[32px] px-8 h-[65px] outline-none focus:ring-2 focus:ring-[#1da26e] transition-all border border-transparent font-['Roboto',sans-serif]"
                />
              </div>

              <div>
                <label className="text-[#6f7a6b] text-[12px] font-bold tracking-[1.2px] uppercase mb-3 block">
                  Your Message
                </label>
                <textarea
                  required
                  name="message"
                  placeholder="Tell us more about your needs..."
                  rows={4}
                  className="w-full bg-[#f2f4f6] text-[#191c1e] text-[20px] rounded-[32px] px-8 py-6 outline-none focus:ring-2 focus:ring-[#1da26e] transition-all resize-none border border-transparent font-['Roboto',sans-serif] h-[209px]"
                ></textarea>
              </div>

              <div className="pt-2 flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  type="submit"
                  className={`w-full md:w-[337px] bg-gradient-to-br from-[#006c46] to-[#24b078] hover:from-[#005a3a] hover:to-[#1fa06a] text-white font-bold text-[22px] px-12 h-[67px] rounded-full shadow-[0px_10px_20px_0px_rgba(36,176,120,0.2)] hover:shadow-[0px_10px_25px_0px_rgba(36,176,120,0.3)] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed font-['Roboto',sans-serif]`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={24} />
                      Sending...
                    </>
                  ) : (
                    "Send now"
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div
            className="relative w-full h-[500px] lg:h-full min-h-[500px] rounded-[48px] overflow-hidden bg-[#e6e8ea] shadow-[0px_20px_40px_0px_rgba(25,28,30,0.06)] border border-white group"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 bg-[#e6e8ea]"></div>
            <motion.img
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src={imgBackgroundImage}
              alt="Map location"
              className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-40 transition-transform duration-700 group-hover:scale-105"
            />

            {/* Floating Card */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-xl rounded-[32px] p-8 shadow-[0px_20px_40px_0px_rgba(25,28,30,0.1)] w-[280px] flex flex-col items-center text-center border border-white"
              initial={{ opacity: 0, scale: 0.8, y: "-35%", x: "-50%" }}
              whileInView={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, type: "spring", bounce: 0.3 }}
            >
              <div className="mb-4 bg-[#e9f7f1] p-3 rounded-full">
                <MapPin className="text-[#006c46]" size={28} />
              </div>
              <h3 className="text-[#191c1e] text-[18px] font-bold mb-1">
                Our Headquarters
              </h3>
              <p className="text-[#64748b] text-[14px] leading-relaxed mb-4">
                Marine Drive, Kochi, Kerala 682031
              </p>
              <button className="text-[#006c46] font-bold text-[14px] hover:text-[#1da26e] transition-colors flex items-center gap-1 group/btn">
                Get Directions
                <motion.span
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
