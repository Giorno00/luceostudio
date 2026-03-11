import { motion } from 'motion/react';
import { Palette, Hammer, Armchair } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: 'interior-design',
      title: 'ინტერიერის დიზაინი',
      description: 'ჩვენ ვქმნით უნიკალურ და ფუნქციურ დიზაინს, რომელიც ასახავს თქვენს პიროვნებას და ცხოვრების სტილს. თითოეული დეტალი გათვლილია მაქსიმალურ კომფორტზე.',
      icon: <Palette size={40} strokeWidth={1} />,
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2600&auto=format&fit=crop'
    },
    {
      id: 'renovation',
      title: 'რემონტი',
      description: 'გთავაზობთ სრულ სარემონტო მომსახურებას მაღალი ხარისხის მასალებით და პროფესიონალთა გუნდით. ჩვენ ვზრუნავთ პროცესის ყველა ეტაპზე.',
      icon: <Hammer size={40} strokeWidth={1} />,
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop'
    },
    {
      id: 'furniture',
      title: 'ავეჯის დამზადება',
      description: 'ინდივიდუალური დიზაინით შექმნილი ავეჯი, რომელიც იდეალურად ერგება თქვენს სივრცეს. ვიყენებთ მხოლოდ საუკეთესო ხარისხის მასალებს.',
      icon: <Armchair size={40} strokeWidth={1} />,
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2670&auto=format&fit=crop'
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 block">
            რას გთავაზობთ
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light">
            ჩვენი სერვისები
          </h2>
          <div className="w-16 h-[1px] bg-black mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group flex flex-col"
            >
              <Link to={`/services/${service.id}`} className="block relative overflow-hidden aspect-[4/5] mb-8 rounded-sm">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-full text-black">
                  {service.icon}
                </div>
              </Link>
              
              <h3 className="text-2xl font-serif mb-4">
                <Link to={`/services/${service.id}`} className="hover:text-gray-600 transition-colors">
                  {service.title}
                </Link>
              </h3>
              <p className="text-gray-600 font-light leading-relaxed flex-grow">
                {service.description}
              </p>
              
              <Link to={`/services/${service.id}`} className="inline-flex items-center gap-2 mt-6 text-sm uppercase tracking-widest font-medium hover:text-gray-500 transition-colors">
                გაიგეთ მეტი
                <div className="w-8 h-[1px] bg-current transition-all group-hover:w-12"></div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
