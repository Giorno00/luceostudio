import { motion } from 'motion/react';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1a1a1a] text-white pt-24 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-3xl font-serif font-semibold tracking-wide mb-6 block">
              Luceo Studio
            </Link>
            <p className="text-gray-400 font-light leading-relaxed mb-8 max-w-sm">
              შექმენი შენი უნიკალური სივრცე პროფესიონალების დახმარებით.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/luceo_studio00/?__d=dist" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61571032044100" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest font-medium mb-8 text-gray-300">
              სერვისები
            </h4>
            <ul className="flex flex-col gap-4 font-light text-gray-400">
              <li><Link to="/services/interior-design" className="hover:text-white transition-colors">ინტერიერის დიზაინი</Link></li>
              <li><Link to="/services/renovation" className="hover:text-white transition-colors">რემონტი</Link></li>
              <li><Link to="/services/furniture" className="hover:text-white transition-colors">ავეჯის დამზადება</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">კონსულტაცია</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-sm uppercase tracking-widest font-medium mb-8 text-gray-300">
              კონტაქტი
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-6 font-light text-gray-400">
                <div className="flex items-center gap-4">
                  <Phone size={20} className="text-gray-500 shrink-0" />
                  <a href="tel:+995557723365" className="hover:text-white transition-colors">+995 557 723 365</a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail size={20} className="text-gray-500 shrink-0" />
                  <a href="mailto:luceostudio00@gmail.com" className="hover:text-white transition-colors">luceostudio00@gmail.com</a>
                </div>
              </div>
              
              <div className="flex flex-col justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full uppercase tracking-widest text-sm font-medium hover:bg-gray-200 transition-colors w-full sm:w-auto"
                >
                  მოითხოვეთ ზარი
                </Link>
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest text-gray-500">
          <p>&copy; {new Date().getFullYear()} Luceo Studio. ყველა უფლება დაცულია.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-gray-300 transition-colors">კონფიდენციალურობა</Link>
            <Link to="/terms-of-service" className="hover:text-gray-300 transition-colors">წესები და პირობები</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
