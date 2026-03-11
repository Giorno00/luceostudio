import { motion } from 'motion/react';

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container-custom max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif mb-8">კონფიდენციალურობის პოლიტიკა</h1>
          <div className="prose prose-lg text-gray-600 font-light leading-relaxed">
            <p className="mb-6">
              Luceo Studio-სთვის მნიშვნელოვანია თქვენი კონფიდენციალურობა. წინამდებარე დოკუმენტი აღწერს, თუ როგორ ვაგროვებთ, ვიყენებთ და ვიცავთ თქვენს პირად მონაცემებს ჩვენი ვებსაიტის გამოყენებისას.
            </p>
            <h2 className="text-2xl font-serif text-black mt-8 mb-4">მონაცემთა შეგროვება</h2>
            <p className="mb-6">
              ჩვენ ვაგროვებთ მხოლოდ იმ ინფორმაციას, რომელსაც თქვენ ნებაყოფლობით გვაწვდით საკონტაქტო ფორმის შევსებისას (სახელი, ელ. ფოსტა, ტელეფონის ნომერი).
            </p>
            <h2 className="text-2xl font-serif text-black mt-8 mb-4">მონაცემთა გამოყენება</h2>
            <p className="mb-6">
              თქვენს მიერ მოწოდებული ინფორმაცია გამოიყენება მხოლოდ თქვენთან დასაკავშირებლად და თქვენთვის სასურველი მომსახურების გასაწევად. ჩვენ არ გადავცემთ თქვენს მონაცემებს მესამე პირებს თქვენი თანხმობის გარეშე.
            </p>
            <h2 className="text-2xl font-serif text-black mt-8 mb-4">უსაფრთხოება</h2>
            <p className="mb-6">
              ჩვენ ვიღებთ ყველა გონივრულ ზომას თქვენი პირადი მონაცემების დასაცავად არაავტორიზებული წვდომისგან, შეცვლისგან ან განადგურებისგან.
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
