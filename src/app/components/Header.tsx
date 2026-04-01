import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "figma:asset/486392a4c6b9ac8a312c538f03886e1e4b650a2a.png";

export function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPath]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-50">
        <Link to="/" className="w-[120px]">
          <img src={logo} alt="Mulla Logo" className="h-12 w-auto object-contain" />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 bg-[#f1f3f5] rounded-full px-8 py-3">
          <Link to="/" className={`${currentPath === '/' ? 'text-[#15803d] font-medium border-b-2 border-[#16a34a] pb-1' : 'text-[#475569] hover:text-[#15803d] transition-colors'} text-[14px]`}>Home</Link>
          <Link to="/products" className={`${currentPath === '/products' ? 'text-[#15803d] font-medium border-b-2 border-[#16a34a] pb-1' : 'text-[#475569] hover:text-[#15803d] transition-colors'} text-[14px]`}>Products</Link>
          <Link to="/about" className={`${currentPath === '/about' ? 'text-[#15803d] font-medium border-b-2 border-[#16a34a] pb-1' : 'text-[#475569] hover:text-[#15803d] transition-colors'} text-[14px]`}>About</Link>
          <Link to="/contact" className={`${currentPath === '/contact' ? 'text-[#15803d] font-medium border-b-2 border-[#16a34a] pb-1' : 'text-[#475569] hover:text-[#15803d] transition-colors'} text-[14px]`}>Contact</Link>
        </nav>
        
        <div className="w-[120px] flex justify-end">
          <button 
            className="md:hidden text-[#15803d] hover:bg-black/5 p-2 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl rounded-b-[48px] pt-32 pb-12 z-40 md:hidden"
          >
            <nav className="flex flex-col gap-8 items-center">
              <Link to="/" className={`${currentPath === '/' ? 'text-[#15803d] font-semibold' : 'text-[#475569] hover:text-[#15803d]'} text-2xl transition-colors`}>Home</Link>
              <Link to="/products" className={`${currentPath === '/products' ? 'text-[#15803d] font-semibold' : 'text-[#475569] hover:text-[#15803d]'} text-2xl transition-colors`}>Products</Link>
              <Link to="/about" className={`${currentPath === '/about' ? 'text-[#15803d] font-semibold' : 'text-[#475569] hover:text-[#15803d]'} text-2xl transition-colors`}>About</Link>
              <Link to="/contact" className={`${currentPath === '/contact' ? 'text-[#15803d] font-semibold' : 'text-[#475569] hover:text-[#15803d]'} text-2xl transition-colors`}>Contact</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
