import { motion } from "motion/react";
import { TrendingUp, Users, GraduationCap, ShieldCheck, MapPin, ArrowRight, Upload, ChevronDown, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "sonner";

export function CareersPage() {
  const [selectedRole, setSelectedRole] = useState("Select a role");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const position = formData.get('position');
    const message = formData.get('message');
    
    const mailtoUrl = `mailto:acbenterprises16@gmail.com?subject=${encodeURIComponent(`Job Application: ${position}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPosition: ${position}\n\nMessage:\n${message}\n\n[ADMIN NOTE: Please ensure the candidate has attached their resume in this email]`)}`;
    
    window.location.href = mailtoUrl;
    toast.success("Opening email client. Don't forget to attach your resume!");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const positions = [
    {
      title: "Senior Marketing Manager",
      type: "FULL-TIME",
      description: "Lead our brand strategy and digital transformation initiatives for high-end home care products.",
      typeColor: "bg-[#dcfce7] text-[#006c46]",
    },
    {
      title: "Business Development Manager",
      type: "FULL-TIME",
      description: "Identify new business opportunities and manage strategic partnerships for brand growth.",
      typeColor: "bg-[#e0f2fe] text-[#0369a1]",
    },
    {
      title: "Sustainability Lead",
      type: "CONTRACT",
      description: "Driving our eco-friendly initiatives and circular economy packaging solutions.",
      typeColor: "bg-[#f1f5f9] text-[#475569]",
    },
  ];

  const values = [
    {
      title: "Growth Opportunities",
      description: "Fast-track your career in a dynamic FMCG environment that rewards initiative and leadership.",
      icon: TrendingUp,
      bgColor: "bg-[#e9fdf5]",
      iconColor: "text-[#10b981]",
    },
    {
      title: "Supportive Work Culture",
      description: "We foster a collaborative atmosphere where every voice is heard and every team member belongs.",
      icon: Users,
      bgColor: "bg-[#e0f7ff]",
      iconColor: "text-[#0ea5e9]",
    },
    {
      title: "Learning & Development",
      description: "Continuous education programs and mentorship to sharpen your skills and expand your horizon.",
      icon: GraduationCap,
      bgColor: "bg-[#eef2ff]",
      iconColor: "text-[#6366f1]",
    },
    {
      title: "Stability & Trust",
      description: "Join a legacy of excellence backed by Team ACB, ensuring a stable and secure professional future.",
      icon: ShieldCheck,
      bgColor: "bg-[#f1f5f9]",
      iconColor: "text-[#64748b]",
    },
  ];

  return (
    <div className="bg-[#fafafa] min-h-screen pt-32 pb-24 overflow-hidden font-['Poppins']">
      {/* Hero Section */}
      <motion.section
        className="max-w-7xl mx-auto px-6 lg:px-24 mb-24 flex flex-col items-center text-center mt-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          variants={itemVariants}
          className="text-[#191c1e] text-5xl md:text-[80px] font-bold leading-[1.1] tracking-tight mb-8 max-w-4xl"
        >
          Build Your Future with Mulla
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-[#5c6d57] text-[18px] md:text-[22px] max-w-2xl leading-relaxed"
        >
          Join a growing team committed to quality and innovation. At Mulla, we
          redefine pristine living through science and sustainability.
        </motion.p>
      </motion.section>

      {/* Values & Benefits Section */}
      <section className="bg-white py-24">
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-[#006c46] text-[14px] font-bold tracking-[2.4px] uppercase block mb-4">
              Values & Benefits
            </span>
            <h2 className="text-[#191c1e] text-[40px] md:text-[52px] font-bold">
              Why Work With Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="flex flex-col gap-6"
              >
                <div
                  className={`${val.bgColor} w-14 h-14 rounded-full flex items-center justify-center`}
                >
                  <val.icon className={val.iconColor} size={24} />
                </div>
                <div>
                  <h3 className="text-[#191c1e] text-[20px] font-bold mb-3">
                    {val.title}
                  </h3>
                  <p className="text-[#5c6d57] text-[16px] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="h-24 bg-gradient-to-b from-white to-[#fafafa]"></div>

      {/* Open Positions Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-24 mb-32">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#006c46] text-[14px] font-bold tracking-[2.4px] uppercase block mb-4">
            Join Us
          </span>
          <h2 className="text-[#191c1e] text-[40px] md:text-[52px] font-bold">
            Open Positions
          </h2>
        </motion.div>

        <div className="space-y-6">
          {positions.map((pos, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="bg-white border border-[#e6e8ea] rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8 group"
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className={`${pos.typeColor} px-4 py-1 rounded-full text-[12px] font-bold tracking-wider`}
                  >
                    {pos.type}
                  </span>
                </div>
                <h3 className="text-[#191c1e] text-[24px] md:text-[28px] font-bold mb-3 md:group-hover:text-[#006c46] transition-colors">
                  {pos.title}
                </h3>
                <p className="text-[#5c6d57] text-[16px] max-w-xl">
                  {pos.description}
                </p>
              </div>
              <button
                onClick={() => {
                  setSelectedRole(pos.title);
                  const element = document.getElementById('application-form');
                  if (element) {
                    const yOffset = -120; // Accounts for sticky header
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="bg-[#f2f4f6] hover:bg-[#e6e8ea] text-[#191c1e] font-bold px-8 py-4 rounded-full flex items-center gap-2 transition-all group/btn self-start md:self-center"
              >
                Apply Now
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Direct Application Form */}
      <section id="application-form" className="max-w-4xl mx-auto px-6 mb-32">
        <motion.div
          className="bg-white rounded-[48px] p-8 md:p-16 border border-[#e6e8ea] shadow-[0px_20px_40px_0px_rgba(25,28,30,0.04)]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[#191c1e] text-[36px] font-bold mb-10">
            Direct Application
          </h2>

          <form 
            className="space-y-8" 
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[#6f7a6b] text-[12px] font-bold tracking-[1.2px] uppercase ml-1">
                  Full Name
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-[#f2f4f6] text-[#191c1e] text-[16px] h-[65px] px-8 rounded-[24px] outline-none focus:ring-2 focus:ring-[#006c46]/20 transition-all border border-transparent"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[#6f7a6b] text-[12px] font-bold tracking-[1.2px] uppercase ml-1">
                  Email Address
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-[#f2f4f6] text-[#191c1e] text-[16px] h-[65px] px-8 rounded-[24px] outline-none focus:ring-2 focus:ring-[#006c46]/20 transition-all border border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[#6f7a6b] text-[12px] font-bold tracking-[1.2px] uppercase ml-1">
                  Phone Number
                </label>
                <input
                  required
                  name="phone"
                  type="text"
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-[#f2f4f6] text-[#191c1e] text-[16px] h-[65px] px-8 rounded-[24px] outline-none focus:ring-2 focus:ring-[#006c46]/20 transition-all border border-transparent"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[#6f7a6b] text-[12px] font-bold tracking-[1.2px] uppercase ml-1">
                  Position
                </label>
                <div className="relative">
                  <select
                    name="position"
                    value={selectedRole}
                    required
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="w-full bg-[#f2f4f6] text-[#191c1e] text-[16px] h-[65px] px-8 rounded-[24px] outline-none focus:ring-2 focus:ring-[#006c46]/20 transition-all border border-transparent appearance-none cursor-pointer"
                  >
                    <option disabled value="Select a role">Select a role</option>
                    {positions.map(p => <option key={p.title} value={p.title}>{p.title}</option>)}
                    <option value="Other / General Interest">Other / General Interest</option>
                  </select>
                  <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-[#191c1e] pointer-events-none" size={20} />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[#6f7a6b] text-[12px] font-bold tracking-[1.2px] uppercase ml-1">
                Message / Cover Letter
              </label>
              <textarea
                required
                name="message"
                placeholder="Tell us about yourself..."
                rows={5}
                className="w-full bg-[#f2f4f6] text-[#191c1e] text-[20px] rounded-[32px] px-8 py-6 outline-none focus:ring-2 focus:ring-[#006c46]/20 transition-all border border-transparent resize-none border-transparent font-['Roboto',sans-serif] h-[209px]"
              ></textarea>
            </div>

            <div className="bg-[#f2f4f6] rounded-[24px] p-6 text-center border-2 border-dashed border-[#e6e8ea]">
                <p className="text-[#5c6d57] text-[16px]">
                  Note: Please remember to attach your resume (PDF/DOC) manually in the email client before sending.
                </p>
            </div>

            <button 
              type="submit"
              className="w-full bg-gradient-to-br from-[#006c46] to-[#24b078] hover:shadow-[0px_10px_30px_rgba(36,176,120,0.3)] text-white font-bold h-[70px] rounded-full text-[18px] transition-all flex items-center justify-center gap-3"
            >
               Submit via Email
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
