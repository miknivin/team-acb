import { Link } from "react-router";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Globe } from "lucide-react";
import footerLogo from "figma:asset/486392a4c6b9ac8a312c538f03886e1e4b650a2a.png";

export function Footer() {
  return (
    <footer className="bg-[#1da26e] rounded-t-[48px] text-white pt-20 pb-8 px-6 lg:px-24 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <img src={footerLogo} alt="Mulla Logo" className="h-16 w-auto object-contain mb-6" />
            <p className="text-white/80 text-sm leading-relaxed mb-8 max-w-xs">
              Making everyday household care straightforward and reliable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white text-[#1da26e] p-2 rounded-full hover:bg-white/90 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white text-[#1da26e] p-2 rounded-full hover:bg-white/90 transition-colors">
                <Instagram size={20} />
              </a>

            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-white/80 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="text-white/80 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-wider text-sm">Product Categories</h4>
            <ul className="space-y-4">
              <li><Link to="/products/powders" className="text-white/80 hover:text-white transition-colors">Detergent Powders</Link></li>
              <li><Link to="/products/liquids" className="text-white/80 hover:text-white transition-colors">Cleaning Liquids</Link></li>
              <li><Link to="/products/soaps" className="text-white/80 hover:text-white transition-colors">Laundry Soaps</Link></li>
              <li><Link to="/products/hand-wash" className="text-white/80 hover:text-white transition-colors">Hand Wash</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-wider text-sm">Contact Information</h4>
            <ul className="space-y-4">
              <li><span className="text-white/80 uppercase tracking-wider text-[13px] font-semibold block mb-2">ACB Group</span></li>
              <li className="flex items-center gap-3 text-white/80">
                <MapPin size={16} />
                <span>Kerala, India</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Phone size={16} />
                <span>+91 7025984447</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Mail size={16} />
                <a href="mailto:acbenterprises16@gmail.com" className="hover:text-white transition-colors">acbenterprises16@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Globe size={16} />
                <a href="https://www.teamacb.com" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-1 transition-colors">www.teamacb.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/20">
          <p className="text-white/60 text-sm">
            © 2026 Mulla Products by Team ACB. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
