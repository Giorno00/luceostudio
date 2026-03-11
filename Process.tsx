import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'იდეების და საჭიროებების შესწავლა',
      description: 'საწყის ეტაპზე ვსწავლობთ თქვენს იდეებს, საჭიროებებსა და მოლოდინებს. ამის საფუძველზე ვქმნით დეტალურ გეგმას, რომელიც უზრუნველყოფს პროცესის ეფექტურ და წარმატებულ განვითარებას.'
    },
    {
      number: '02',
      title: 'კონცეფცია და ვიზუალური სტილი',
      description: 'კონცეფცია აერთიანებს ვიზუალური სტილისა და დიზაინის რამდენიმე ვარიანტს. ჩვენ გთავაზობთ დამუშავებულ პრეზენტაციებსა და ინსპირაციებს, რომლებიც შთაგაგონებთ და გაგიმყარებთ ნდობას საბოლოო შედეგის მიმართ.'
    },
    {
      number: '03',
      title: 'დიზაინის განხორციელება და ხარისხის კონტროლი',
      description: 'დიზაინის განხორციელების პროცესში ჩვენი გუნდი ზრუნავს თითოეულ დეტალზე, ახორციელებს ტექნიკური ხარისხის კონტროლს და უზრუნველყოფს სწორ მასალებს, რათა შედეგი იყოს სრულყოფილი.'
    },
    {
      number: '04',
      title: 'რემონტი და ავეჯის მონტაჟი',
      description: 'დასასრულს, რემონტისა და ავეჯის მონტაჟის ეტაპზე ჩვენი სპეციალისტები ზრუნავენ ყველა ელემენტის სწორად მოწყობაზე, რათა უზრუნველყონ მაღალი ხარისხი და მომხმარებლის კმაყოფილება.'
    }
  ];

  return (
    <section id="process" className="section-padding bg-[var(--color-stone)]">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 block">
              როგორ ვმუშაობთ
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-8">
              ჩვენი სამუშაო პროცესები
            </h2>
            <div className="w-16 h-[1px] bg-black mb-8"></div>
            <p className="text-gray-600 font-light leading-relaxed">
              ჩვენი მიზანია შევქმნათ სივრცე, რომელიც სრულად პასუხობს თქვენს მოთხოვნებს. პროცესი დაყოფილია ოთხ ძირითად ეტაპად, რათა უზრუნველვყოთ მაქსიმალური გამჭვირვალობა და ხარისხი.
            </p>
          </div>

          <div className="lg:w-2/3 flex flex-col gap-12 md:gap-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-12 md:pl-20 border-l border-black/10 pb-12 last:pb-0"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 bg-[var(--color-stone)] py-2">
                  <span className="text-3xl md:text-4xl font-serif font-light text-black/20">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif mb-4">{step.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-lg">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
