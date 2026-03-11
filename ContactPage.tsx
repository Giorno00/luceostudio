import { motion } from 'motion/react';
import { Mail, Phone, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-[var(--color-stone)]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-light mb-6">დაგვიკავშირდით</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            მზად ვართ განვიხილოთ თქვენი იდეები და დაგეხმაროთ მათ განხორციელებაში.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-sm shadow-sm"
          >
            <h2 className="text-3xl font-serif mb-8">მოგვწერეთ</h2>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm uppercase tracking-widest text-gray-500 mb-2">სახელი</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors bg-transparent"
                  placeholder="თქვენი სახელი"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm uppercase tracking-widest text-gray-500 mb-2">ელ. ფოსტა</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors bg-transparent"
                  placeholder="თქვენი ელ. ფოსტა"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm uppercase tracking-widest text-gray-500 mb-2">ტელეფონი</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors bg-transparent"
                  placeholder="თქვენი ტელეფონის ნომერი"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm uppercase tracking-widest text-gray-500 mb-2">შეტყობინება</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors bg-transparent resize-none"
                  placeholder="როგორ შეგვიძლია დაგეხმაროთ?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="mt-4 inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-full uppercase tracking-widest text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                გაგზავნა
                <Send size={16} />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-serif mb-8">საკონტაქტო ინფორმაცია</h2>
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <Phone size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">ტელეფონი</h3>
                  <a href="tel:+995557723365" className="text-lg hover:text-gray-600 transition-colors">+995 557 723 365</a>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <Mail size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">ელ. ფოსტა</h3>
                  <a href="mailto:luceostudio00@gmail.com" className="text-lg hover:text-gray-600 transition-colors">luceostudio00@gmail.com</a>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-6">სამუშაო საათები</h3>
              <ul className="flex flex-col gap-3 text-lg">
                <li className="flex justify-between border-b border-gray-300 pb-2">
                  <span>ორშაბათი - პარასკევი</span>
                  <span>10:00 - 19:00</span>
                </li>
                <li className="flex justify-between border-b border-gray-300 pb-2">
                  <span>შაბათი</span>
                  <span>11:00 - 16:00</span>
                </li>
                <li className="flex justify-between pb-2 text-gray-500">
                  <span>კვირა</span>
                  <span>დასვენება</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

