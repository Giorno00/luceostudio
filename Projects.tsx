import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const projects = [
    {
      id: 'm2-innovations',
      title: 'მ² ინოვაციების ქუჩა',
      category: 'ინტერიერის დიზაინი',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop'
    },
    {
      id: 'krtsanisi',
      title: 'კრწანისის ქუჩა',
      category: 'რემონტი / დიზაინი',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop'
    },
    {
      id: 'mirtskhulava',
      title: 'მირცხულავას ქუჩა',
      category: 'ავეჯის დამზადება',
      image: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=2670&auto=format&fit=crop'
    },
    {
      id: 'bloxy-varketili',
      title: 'ბლოქსი ვარკეთილი',
      category: 'სრული მომსახურება',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2670&auto=format&fit=crop'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 block">
              პორტფოლიო
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light">
              ჩვენი პროექტები
            </h2>
            <div className="w-16 h-[1px] bg-black mt-8"></div>
          </div>
          
          <Link to="/projects" className="group flex items-center gap-3 text-sm uppercase tracking-widest font-medium hover:text-gray-500 transition-colors">
            ყველა პროექტი
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={`/projects/${project.id}`} className="block relative overflow-hidden aspect-[4/3] mb-6 rounded-sm">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="bg-white text-black px-6 py-3 rounded-full uppercase tracking-widest text-xs font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    ნახვა
                  </span>
                </div>
              </Link>
              
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-serif mb-2">
                    <Link to={`/projects/${project.id}`} className="hover:text-gray-600 transition-colors">
                      {project.title}
                    </Link>
                  </h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    {project.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
