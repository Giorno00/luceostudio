import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

export default function ProjectDetailPage() {
  const { id } = useParams();

  const projectsData: Record<string, any> = {
    'm2-innovations': {
      title: 'მ² ინოვაციების ქუჩა',
      category: 'ინტერიერის დიზაინი',
      description: 'თანამედროვე და მინიმალისტური ინტერიერის დიზაინი მ²-ის კომპლექსში. პროექტი მოიცავს სრულ დაგეგმარებას და ავეჯის დიზაინს.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=2670&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2670&auto=format&fit=crop'
      ]
    },
    'krtsanisi': {
      title: 'კრწანისის ქუჩა',
      category: 'რემონტი / დიზაინი',
      description: 'სრული სარემონტო და სადიზაინერო მომსახურება კრწანისის ქუჩაზე. გამოყენებულია პრემიუმ ხარისხის მასალები.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2670&auto=format&fit=crop'
      ]
    },
    'mirtskhulava': {
      title: 'მირცხულავას ქუჩა',
      category: 'ავეჯის დამზადება',
      description: 'ინდივიდუალური შეკვეთით დამზადებული სამზარეულო და ჩაშენებული კარადები მირცხულავას ქუჩაზე.',
      image: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=2670&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2670&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop'
      ]
    },
    'bloxy-varketili': {
      title: 'ბლოქსი ვარკეთილი',
      category: 'სრული მომსახურება',
      description: 'ბლოქსის კომპლექსში განხორციელებული სრული პროექტი: დიზაინი, რემონტი და ავეჯის დამზადება.',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2670&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop'
      ]
    }
  };

  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">პროექტი არ მოიძებნა</h1>
          <Link to="/projects" className="text-gray-500 hover:text-black underline">დაბრუნება პროექტების გვერდზე</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="container-custom">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gray-500 hover:text-black transition-colors mb-12">
          <ArrowLeft size={16} />
          ყველა პროექტი
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 block">
            {project.category}
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-light mb-8">{project.title}</h1>
          <div className="w-16 h-[1px] bg-black mb-8"></div>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-16 max-w-3xl">
            {project.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-video mb-12 rounded-sm overflow-hidden"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {project.gallery && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((img: string, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="aspect-[4/3] rounded-sm overflow-hidden"
              >
                <img 
                  src={img} 
                  alt={`${project.title} gallery ${idx + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
