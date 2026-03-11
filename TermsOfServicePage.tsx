import { motion } from 'motion/react';

export default function TermsOfServicePage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container-custom max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif mb-8">წესები და პირობები</h1>
          <div className="prose prose-lg text-gray-600 font-light leading-relaxed">
            <p className="mb-6">
              კეთილი იყოს თქვენი მობრძანება Luceo Studio-ს ვებსაიტზე. საიტის გამოყენებით თქვენ ეთანხმებით ქვემოთ მოცემულ წესებსა და პირობებს.
            </p>
            <h2 className="text-2xl font-serif text-black mt-8 mb-4">მომსახურების პირობები</h2>
            <p className="mb-6">
              ჩვენ გთავაზობთ ინტერიერის დიზაინის, რემონტისა და ავეჯის დამზადების მომსახურებას. თითოეული პროექტის დეტალები, ვადები და ღირებულება თანხმდება ინდივიდუალურად, ხელშეკრულების საფუძველზე.
            </p>
            <h2 className="text-2xl font-serif text-black mt-8 mb-4">საავტორო უფლებები</h2>
            <p className="mb-6">
              ვებსაიტზე განთავსებული ყველა მასალა (ტექსტი, ფოტოები, დიზაინი) წარმოადგენს Luceo Studio-ს ინტელექტუალურ საკუთრებას და დაცულია საავტორო უფლებებით. მათი უნებართვო გამოყენება ან კოპირება აკრძალულია.
            </p>
            <h2 className="text-2xl font-serif text-black mt-8 mb-4">პასუხისმგებლობის შეზღუდვა</h2>
            <p className="mb-6">
              ჩვენ არ ვიღებთ პასუხისმგებლობას ვებსაიტის გამოყენებით გამოწვეულ პირდაპირ ან ირიბ ზარალზე. საიტზე განთავსებული ინფორმაცია ატარებს საინფორმაციო ხასიათს.
            </p>
            <p className="mt-12 text-sm text-gray-500">
              ბოლო განახლება: {new Date().toLocaleDateString('ka-GE')}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
