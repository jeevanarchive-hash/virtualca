import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../../data/content';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 rounded-full text-xs font-medium text-neutral-500 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
              FAQs
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight mb-6">
              Common questions, answered
            </h2>
            <p className="text-lg text-neutral-500 leading-relaxed mb-8">
              Can't find what you're looking for? Our expert team is just a message away.
            </p>

            {/* Contact options */}
            <div className="space-y-3">
              <a
                href="tel:+91833300527"
                className="flex items-center gap-4 p-4 border border-neutral-200 rounded-xl hover:border-neutral-300 hover:bg-neutral-50 transition-colors group"
              >
                <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center group-hover:bg-neutral-200 transition-colors">
                  <span className="text-lg">📞</span>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">Call us directly</p>
                  <p className="text-sm text-neutral-500">+91 83330 0527 · Mon–Sat 9am–7pm</p>
                </div>
              </a>
              <a
                href="mailto:hello@virtualca.in"
                className="flex items-center gap-4 p-4 border border-neutral-200 rounded-xl hover:border-neutral-300 hover:bg-neutral-50 transition-colors group"
              >
                <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center group-hover:bg-neutral-200 transition-colors">
                  <span className="text-lg">✉️</span>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">Email our team</p>
                  <p className="text-sm text-neutral-500">hello@virtualca.in · Response within 4 hours</p>
                </div>
              </a>
              <button
                className="flex items-center gap-4 p-4 border border-neutral-200 rounded-xl hover:border-neutral-300 hover:bg-neutral-50 transition-colors group w-full text-left"
              >
                <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center group-hover:bg-neutral-200 transition-colors">
                  <span className="text-lg">💬</span>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">Live chat support</p>
                  <p className="text-sm text-neutral-500">Available 24/7 · Average reply in 2 min</p>
                </div>
              </button>
            </div>
          </div>

          {/* Right: FAQ Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'border-neutral-300' : 'border-neutral-200'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className={`font-semibold text-sm leading-snug ${
                    openIndex === index ? 'text-neutral-900' : 'text-neutral-700'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    openIndex === index ? 'bg-neutral-900' : 'bg-neutral-100'
                  }`}>
                    {openIndex === index ? (
                      <Minus className="w-3 h-3 text-white" />
                    ) : (
                      <Plus className="w-3 h-3 text-neutral-600" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-neutral-500 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
