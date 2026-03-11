import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop"
          alt="Minimalist Interior Design"
          className="w-full h-full object-cover opacity-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      <div className="container-custom relative z-10 text-center text-white flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="uppercase tracking-[0.3em] text-sm md:text-base mb-6 block opacity-80">
            ინტერიერის დიზაინის სტუდია
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-tight mb-8 max-w-5xl mx-auto">
            შექმენი შენი უნიკალური სივრცე
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 opacity-90">
            ინტერიერის დიზაინი, რემონტი და ავეჯის დამზადება თბილისში. დაგეგმე და განახორციელე შენი იდეები პროფესიონალების დახმარებით.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/projects"
              className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full uppercase tracking-widest text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              პროექტები
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="group flex items-center gap-3 bg-transparent border border-white text-white px-8 py-4 rounded-full uppercase tracking-widest text-sm font-medium hover:bg-white/10 transition-colors"
            >
              დაგვიკავშირდით
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest">ჩამოსქროლეთ</span>
        <motion.div 
          className="w-[1px] h-12 bg-white/50"
          animate={{ scaleY: [0, 1, 0], originY: [0, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
