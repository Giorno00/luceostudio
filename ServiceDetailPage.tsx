import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

export default function ServiceDetailPage() {
  const { id } = useParams();

  const servicesData: Record<string, any> = {
    'interior-design': {
      title: 'ინტერიერის დიზაინი',
      description: 'ჩვენ ვქმნით უნიკალურ და ფუნქციურ დიზაინს, რომელიც ასახავს თქვენს პიროვნებას და ცხოვრების სტილს. თითოეული დეტალი გათვლილია მაქსიმალურ კომფორტზე.',
      fullDescription: 'ჩვენი ინტერიერის დიზაინის სერვისი მოიცავს სივრცის დაგეგმარებას, მასალების შერჩევას, 3D ვიზუალიზაციას და პროექტის სრულ მენეჯმენტს. ჩვენი გუნდი მუშაობს თქვენთან ერთად, რათა შეიქმნას იდეალური გარემო, რომელიც სრულად პასუხობს თქვენს მოთხოვნებს.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2600&auto=format&fit=crop'
    },
    'renovation': {
      title: 'რემონტი',
      description: 'გთავაზობთ სრულ სარემონტო მომსახურებას მაღალი ხარისხის მასალებით და პროფესიონალთა გუნდით. ჩვენ ვზრუნავთ პროცესის ყველა ეტაპზე.',
      fullDescription: 'ჩვენი სარემონტო გუნდი უზრუნველყოფს მაღალი ხარისხის შესრულებას დათქმულ ვადებში. ვიყენებთ მხოლოდ სერტიფიცირებულ მასალებს და ვახორციელებთ მკაცრ ხარისხის კონტროლს პროცესის ყველა ეტაპზე.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop'
    },
    'furniture': {
      title: 'ავეჯის დამზადება',
      description: 'ინდივიდუალური დიზაინით შექმნილი ავეჯი, რომელიც იდეალურად ერგება თქვენს სივრცეს. ვიყენებთ მხოლოდ საუკეთესო ხარისხის მასალებს.',
      fullDescription: 'ჩვენ ვამზადებთ ნებისმიერი სირთულის ავეჯს ინდივიდუალური შეკვეთით. ჩვენი სპეციალისტები დაგეხმარებიან მასალების, ფერების და მექანიზმების შერჩევაში, რათა მიიღოთ მაქსიმალურად ფუნქციური და გამძლე ავეჯი.',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2670&auto=format&fit=crop'
    }
  };

  const service = id ? servicesData[id] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">სერვისი არ მოიძებნა</h1>
          <Link to="/services" className="text-gray-500 hover:text-black underline">დაბრუნება სერვისების გვერდზე</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="container-custom">
        <Link to="/services" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gray-500 hover:text-black transition-colors mb-12">
          <ArrowLeft size={16} />
          უკან დაბრუნება
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-8">{service.title}</h1>
            <div className="w-16 h-[1px] bg-black mb-8"></div>
            <p className="text-xl text-gray-600 font-light leading-relaxed mb-6">
              {service.description}
            </p>
            <p className="text-gray-600 font-light leading-relaxed mb-10">
              {service.fullDescription}
            </p>
            
            <Link to="/contact" className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full uppercase tracking-widest text-sm font-medium hover:bg-gray-800 transition-colors">
              დაგვიკავშირდით
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[4/5] rounded-sm overflow-hidden"
          >
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
