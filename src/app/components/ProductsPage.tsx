import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { LayoutGrid, Sparkles, Droplets, Beaker, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import imgCleaningProduct from "figma:asset/85edf17bf57835c6f1816a8a5817c3e91453805b.png";
import imgChatGptImage from "figma:asset/2d60da04f028ff8c07e7d2eade95e853483f852c.png";
import imgSoapsBars from "figma:asset/c36464a95ae222ed18620d2484c45deec0914159.png";
import imgLiquidCleaners from "figma:asset/e78b091560384562d7d630661a66706237bdebdd.png";

const powderImages = import.meta.glob("/src/assets/detergent powder/*.{jpg,jpeg,png}", { eager: true, import: "default" });
const soapImages = import.meta.glob("/src/assets/luandary soap/*.{jpg,jpeg,png}", { eager: true, import: "default" });
const liquidDetergentImages = import.meta.glob("/src/assets/liquids/detergent liquid/*.{jpg,jpeg,png}", { eager: true, import: "default" });
const dishWashImages = import.meta.glob("/src/assets/liquids/dish wash/*.{jpg,jpeg,png}", { eager: true, import: "default" });
const floorCleanerImages = import.meta.glob("/src/assets/liquids/floor cleaner/*.{jpg,jpeg,png}", { eager: true, import: "default" });
const toiletCleanerImages = import.meta.glob("/src/assets/liquids/toilet cleaner/*.{jpg,jpeg,png}", { eager: true, import: "default" });
const handWashImages = import.meta.glob("/src/assets/liquids/hand wash/*.{jpg,jpeg,png}", { eager: true, import: "default" });

let globalId = 1;

function generateProducts(imagesObj: Record<string, unknown>, category: string, subCategory: string | null, defaultPrice: string, defaultDesc: string) {
  return Object.entries(imagesObj).map(([path, importedModule]) => {
    const url = typeof importedModule === "string" ? importedModule : (importedModule as any)?.default;
    const filenameRaw = path.split("/").pop() || "";
    const filenameNoExt = filenameRaw.replace(/\.[^/.]+$/, "");
    // Handle specific messy filenames like WhatsApp exports before aggressive cleaning
    let finalName = "";
    if (filenameNoExt.toLowerCase().includes("whatsapp") && category === "soaps") {
      finalName = "Gold Star XL Washing Soap";
    }

    if (!finalName) {
      // Clean up filename (replace hyphens, underscores with spaces, Title Case)
      let cleanName = filenameNoExt
        .replace(/[-_]/g, " ")
        .replace(/\d+/g, "") // Remove all digits
        .replace(/\b(mockup|mockups|package|copy|page|sigel|pack|old|new|at|whatsapp|image|rs|₹|lit|ml|r|bottle|jpeg|jpg|png|mock|kg|gram|litre|liter|grams|litres)\b/gi, "")
        .trim()
        .split(/\s+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .filter(word => word.length > 1)
        .join(" ");

      // Generic deduplication
      const words = cleanName.split(" ");
      cleanName = words.filter((word, index) => word.toLowerCase() !== words[index - 1]?.toLowerCase()).join(" ");
      
      finalName = cleanName;
    }

    // Correct brand typos (e.g. Wanto to Wento)
    finalName = finalName.replace(/\bwanto\b/gi, "Wento");

    // Significant Fallback
    if (!finalName || finalName.length < 2) {
      if (category === "powders") finalName = "Premium Detergent Powder";
      else if (category === "soaps") finalName = "Premium Washing Soap";
      else finalName = "Premium Cleaning Liquid";
    }

    return {
      id: globalId++,
      category,
      subCategory,
      name: finalName,
      badge: "PREMIUM",
      price: defaultPrice,
      description: defaultDesc,
      image: url,
    };
  });
}

const PRODUCTS = [
  ...generateProducts(powderImages, "powders", null, "₹125.00", "Premium tough-stain powder for everyday washing."),
  ...generateProducts(soapImages, "soaps", null, "₹50.00", "Tough traditional soap for extreme stains."),
  ...generateProducts(liquidDetergentImages, "liquids", "detergent-liquid", "₹180.00", "Advanced liquid formulation for specialized cleaning."),
  ...generateProducts(handWashImages, "liquids", "hand-wash", "₹85.00", "Refreshing and germ-fighting care for your hands."),
  ...generateProducts(dishWashImages, "liquids", "dish-wash", "₹95.00", "Sparkling clean for all your kitchenware."),
  ...generateProducts(toiletCleanerImages, "liquids", "toilet-cleaner", "₹120.00", "Maximum hygiene for your bathroom."),
  ...generateProducts(floorCleanerImages, "liquids", "floor-cleaner", "₹150.00", "Long-lasting freshness for every surface."),
];

const MAIN_TABS = [
  { id: "all", label: "All", icon: LayoutGrid },
  { id: "powders", label: "Detergent Powders", icon: Sparkles },
  { id: "soaps", label: "Laundry Soaps", icon: Droplets },
  { id: "liquids", label: "Cleaning Liquids", icon: Beaker },
];

const LIQUID_SUB_TABS = [
  { id: "detergent-liquid", label: "Detergent Liquid" },
  { id: "hand-wash", label: "Hand Wash Liquid" },
  { id: "dish-wash", label: "Dish Wash Liquid" },
  { id: "toilet-cleaner", label: "Toilet Cleaner" },
  { id: "floor-cleaner", label: "Floor Cleaner" },
];

export function ProductsPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  
  const initialTab = category && MAIN_TABS.some(t => t.id === category) ? category : "all";
  const [activeTab, setActiveTab] = useState(initialTab);
  const [activeSubTab, setActiveSubTab] = useState("detergent-liquid");

  useEffect(() => {
    if (category && MAIN_TABS.some(t => t.id === category)) {
      setActiveTab(category);
    } else if (!category) {
      setActiveTab("all");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [category]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === "liquids") {
      setActiveSubTab("detergent-liquid");
    }
    navigate(`/products/${tabId === "all" ? "" : tabId}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-white min-h-screen pb-24 overflow-hidden">
      {/* Top Header Background & Filter Section */}
      <motion.div 
        className="bg-gradient-to-b from-white to-[#f2f4f6] rounded-b-[40px] pt-40 pb-12 px-6 lg:px-24"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center gap-8">
          {/* Main Tabs */}
          <div className="flex items-center justify-center gap-2 max-w-full overflow-x-auto no-scrollbar">
            {MAIN_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex items-center gap-2.5 px-8 py-3.5 rounded-full font-['Poppins'] text-[15px] transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-[#1da26e] text-white shadow-[0_10px_25px_-5px_rgba(29,162,110,0.3)] border border-transparent"
                      : "bg-[#e2e4e7] text-[#475569] hover:bg-[#d1d5db]"
                  }`}
                >
                  <Icon size={18} className={isActive ? "text-white" : "text-[#64748b]"} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Sub Tabs for Liquids - Shown only when 'liquids' is selected */}
          <AnimatePresence>
            {activeTab === "liquids" && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="w-full max-w-5xl bg-[#f2f4f6] border border-[#e2e8f0] rounded-[24px] overflow-hidden flex flex-wrap p-1 gap-1"
              >
                {LIQUID_SUB_TABS.map((sub) => {
                  const isSubActive = activeSubTab === sub.id;
                  return (
                    <button
                      key={sub.id}
                      onClick={() => setActiveSubTab(sub.id)}
                      className={`flex-1 min-w-[150px] py-3.5 px-6 text-sm font-semibold rounded-[20px] transition-all relative ${
                        isSubActive 
                          ? "bg-gradient-to-r from-[#19a36e] to-[#006c46] text-white shadow-md shadow-[#006c46]/20" 
                          : "text-[#475569] hover:bg-white hover:text-[#191c1e]"
                      }`}
                    >
                      {sub.label}
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-24 mb-24">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="popLayout">
            {PRODUCTS.filter(p => {
              if (activeTab === "all") return true;
              if (activeTab === "liquids") {
                return p.category === "liquids" && p.subCategory === activeSubTab;
              }
              return p.category === activeTab;
            }).map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                layout
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[32px] px-6 pt-6 pb-12 border border-[#becab9]/20 hover:shadow-xl hover:shadow-[#becab9]/20 transition-shadow group flex flex-col cursor-pointer"
              >
                <div className="h-[256px] w-full flex items-center justify-center mb-8 relative">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <div className="flex flex-col flex-1 mt-auto">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#006c46] text-[10.4px] font-bold tracking-[1.04px] uppercase">
                      {product.badge}
                    </span>
                  </div>
                  <h3 className="text-[#191c1e] text-[20px] font-semibold font-['Poppins'] mb-2 leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-[#3f4a3c] text-[14px] leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Featured Collections Grid */}
      <motion.div 
        className="max-w-7xl mx-auto px-6 lg:px-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 h-auto lg:h-[700px]">
          {/* Main Collection */}
          <motion.div 
            whileHover="hover"
            onClick={() => handleTabChange("powders")}
            className="relative rounded-[48px] overflow-hidden group cursor-pointer h-[400px] lg:h-full"
          >
            <motion.img
              variants={{ hover: { scale: 1.05 } }}
              transition={{ duration: 0.7 }}
              src={imgChatGptImage}
              alt="Premium Detergents"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#191c1e]/90 via-[#191c1e]/30 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
              <p className="text-white/90 text-sm font-medium tracking-[1.5px] uppercase mb-4 font-['Manrope']">
                Collection
              </p>
              <h2 className="text-white text-4xl lg:text-[52px] font-medium font-['Poppins'] mb-8 leading-tight">
                Premium Detergents
              </h2>
              <button 
                onClick={(e) => { e.stopPropagation(); handleTabChange("powders"); }}
                className="bg-white text-[#191c1e] font-bold font-['Manrope'] text-[16px] px-8 py-4 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                Browse Laundry
              </button>
            </div>
          </motion.div>

          {/* Secondary Collections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            <motion.div 
              whileHover="hover" 
              onClick={() => handleTabChange("soaps")}
              className="relative rounded-[48px] overflow-hidden group cursor-pointer h-[300px] lg:h-full"
            >
              <motion.img
                variants={{ hover: { scale: 1.05 } }}
                transition={{ duration: 0.7 }}
                src={imgSoapsBars}
                alt="Soaps & Bars"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#005cae]/40 to-transparent" />
              <div className="absolute bottom-10 left-10">
                <h3 className="text-white text-[28px] font-bold font-['Plus_Jakarta_Sans'] mb-4 flex items-center gap-3">
                  Soaps & Bars
                  <ArrowRight size={20} className="text-white" />
                </h3>
              </div>
            </motion.div>

            <motion.div 
              whileHover="hover" 
              onClick={() => handleTabChange("liquids")}
              className="relative rounded-[48px] overflow-hidden group cursor-pointer h-[300px] lg:h-full"
            >
              <motion.img
                variants={{ hover: { scale: 1.05 } }}
                transition={{ duration: 0.7 }}
                src={imgLiquidCleaners}
                alt="Liquid Cleaners"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#006c46]/40 to-transparent" />
              <div className="absolute bottom-10 left-10">
                <h3 className="text-white text-[28px] font-medium font-['Poppins'] mb-4 flex items-center gap-3">
                  Liquid Cleaners
                  <ArrowRight size={20} className="text-white" />
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
