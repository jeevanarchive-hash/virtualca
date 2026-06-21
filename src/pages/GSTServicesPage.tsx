import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import ServiceCard from '../components/shared/ServiceCard';
import { gstServices } from '../data/services';

export default function GSTServicesPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Link to="/" className="text-sm text-neutral-400 hover:text-neutral-600">Home</Link>
              <span className="text-neutral-300">/</span>
              <span className="text-sm text-neutral-600">GST Services</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-200 rounded-full text-xs font-medium text-neutral-500 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              4 GST Services
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight mb-6">
              GST compliance,<br />done right
            </h1>
            <p className="text-xl text-neutral-500 leading-relaxed mb-8">
              From GSTIN registration to monthly return filing and annual compliance — 
              our GST team ensures you're always on the right side of the law.
            </p>
            <div className="flex flex-wrap gap-4">
              {['GSTIN in 3-7 days', 'Monthly Return Filing', 'E-Invoicing Setup', 'ITC Optimization', 'Notice Handling'].map((point) => (
                <div key={point} className="flex items-center gap-2 text-sm text-neutral-600">
                  <Check className="w-4 h-4 text-green-500" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {gstServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* GST Return Calendar */}
      <section className="py-16 lg:py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                GST Return Filing Calendar
              </h2>
              <p className="text-neutral-500 mb-8">
                Missing GST deadlines attracts late fees and interest. Our automated 
                reminders and proactive filing ensure you never miss a due date.
              </p>
              
              <div className="space-y-3">
                {[
                  { form: 'GSTR-1', description: 'Outward supplies statement', due: '11th of next month', frequency: 'Monthly' },
                  { form: 'GSTR-3B', description: 'Summary return + tax payment', due: '20th of next month', frequency: 'Monthly' },
                  { form: 'GSTR-9', description: 'Annual return', due: '31st December', frequency: 'Annual' },
                  { form: 'GSTR-9C', description: 'Reconciliation statement', due: '31st December', frequency: 'Annual (if >₹2Cr)' },
                  { form: 'GSTR-2B', description: 'Auto-drafted ITC statement', due: '14th of next month', frequency: 'Monthly' },
                ].map((item) => (
                  <div key={item.form} className="flex items-start gap-4 p-4 bg-white border border-neutral-200 rounded-xl">
                    <div className="w-16 flex-shrink-0">
                      <span className="text-sm font-bold text-blue-600">{item.form}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-neutral-900">{item.description}</p>
                      <p className="text-xs text-neutral-500 mt-0.5">Due: {item.due}</p>
                    </div>
                    <span className="text-xs text-neutral-400 flex-shrink-0 bg-neutral-50 border border-neutral-100 px-2 py-1 rounded-md">
                      {item.frequency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-white border border-neutral-200 rounded-2xl p-6 mb-5">
                <h3 className="font-bold text-neutral-900 mb-4">Who Needs GST Registration?</h3>
                <div className="space-y-3">
                  {[
                    { condition: 'Annual turnover > ₹40 lakh', note: '(₹20 lakh for services)' },
                    { condition: 'Interstate supply of goods/services', note: 'Regardless of turnover' },
                    { condition: 'E-commerce operators', note: 'TCS provisions apply' },
                    { condition: 'Casual taxable persons', note: 'Temporary registration' },
                    { condition: 'Input service distributors', note: 'ISD registration required' },
                    { condition: 'Reverse charge mechanism', note: 'On specified services' },
                  ].map((item) => (
                    <div key={item.condition} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-50 border border-green-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" strokeWidth={3} />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-neutral-900">{item.condition}</span>
                        <span className="text-xs text-neutral-400 block">{item.note}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-neutral-950 rounded-2xl p-6">
                <div className="text-3xl mb-3">🧾</div>
                <h3 className="font-bold text-white mb-2">Late Filing Penalties</h3>
                <p className="text-neutral-400 text-sm mb-4">
                  Late GST filing attracts ₹50/day (₹20 for nil returns) + 18% interest on unpaid tax.
                </p>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 text-sm font-medium text-white hover:gap-3 transition-all"
                >
                  Get help with compliance <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
