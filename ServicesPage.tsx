import { motion } from 'motion/react';
import Services from '../components/Services';

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container-custom py-12 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-serif font-light mb-6">ყველა სერვისი</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          ჩვენ გთავაზობთ სრულყოფილ მომსახურებას ინტერიერის დიზაინის, რემონტისა და ავეჯის დამზადების მიმართულებით.
        </p>
      </motion.div>
      <Services />
    </div>
  );
}
