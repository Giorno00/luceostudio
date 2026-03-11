import { motion } from 'motion/react';
import Projects from '../components/Projects';

export default function ProjectsPage() {
  return (
    <div className="pt-24 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container-custom py-12 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-serif font-light mb-6">ჩვენი პროექტები</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          დაათვალიერეთ ჩვენი დასრულებული პროექტები, რომლებიც ასახავს ჩვენს მიდგომას და ხარისხს.
        </p>
      </motion.div>
      <Projects />
    </div>
  );
}
