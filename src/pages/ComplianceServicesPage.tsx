import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import ServiceCard from '../components/shared/ServiceCard';
import { complianceServices } from '../data/services';

export default function ComplianceServicesPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Link to="/" className="text-sm text-neutral-400 hover:text-neutral-600">Home</Link>
              <span className="text-neutral-300">/</span>
              <span className="text-sm text-neutral-600">Compliance Services</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-200 rounded-full text-xs font-medium text-neutral-500 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              5 Compliance Services
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight mb-6">
              Compliance management,<br />simplified
            </h1>
            <p className="text-xl text-neutral-500 leading-relaxed mb-8">
              Payroll, bookkeeping, ROC filings and Virtual CFO — 
              we handle your complete compliance calendar so you can focus on growth.
            </p>
            <div className="flex flex-wrap gap-4">
              {['Zero Penalties', 'On-time Filings', 'Dedicated CA', 'Monthly Reports', 'Audit Ready'].map((point) => (
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {complianceServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* ROC Calendar */}
      <section className="py-16 lg:py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                ROC Compliance Calendar
              </h2>
              <p className="text-neutral-500 mb-8">
                Non-compliance with MCA filings attracts heavy penalties — ₹100/day per form.
                We track and file all annual returns on your behalf.
              </p>

              <div className="space-y-3">
                {[
                  { form: 'MGT-7/7A', title: 'Annual Return', due: 'Nov 29 (60 days from AGM)', penalty: '₹100/day' },
                  { form: 'AOC-4', title: 'Financial Statements', due: 'Oct 29 (30 days from AGM)', penalty: '₹100/day' },
                  { form: 'DIR-3 KYC', title: 'Director KYC', due: 'Sept 30 (Annual)', penalty: '₹5,000 flat' },
                  { form: 'ADT-1', title: 'Auditor Appointment', due: 'Oct 14 (15 days from AGM)', penalty: '₹200/day' },
                  { form: 'INC-20A', title: 'Business Commencement', due: '180 days from incorporation', penalty: '₹500/day' },
                ].map((item) => (
                  <div key={item.form} className="bg-white border border-neutral-200 rounded-xl p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-bold text-neutral-900">{item.form}</span>
                          <span className="text-xs text-neutral-500">— {item.title}</span>
                        </div>
                        <p className="text-xs text-neutral-500">Due: {item.due}</p>
                      </div>
                      <span className="text-xs font-medium text-red-600 bg-red-50 border border-red-100 px-2 py-1 rounded-md flex-shrink-0">
                        Penalty: {item.penalty}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              {/* Virtual CFO Highlight */}
              <div className="bg-neutral-950 rounded-2xl p-6">
                <div className="text-3xl mb-4">👔</div>
                <h3 className="text-xl font-bold text-white mb-2">Virtual CFO Services</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                  Get board-level financial leadership without the full-time cost. 
                  Our Virtual CFO service includes:
                </p>
                <ul className="space-y-2 mb-5">
                  {[
                    'Monthly MIS & financial reports',
                    'Cash flow planning & forecasting',
                    'Fundraising & investor relations',
                    'Cost optimization strategies',
                    'Board meeting representation',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-neutral-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-neutral-900 text-sm font-medium rounded-lg hover:bg-neutral-100 transition-colors"
                >
                  Explore Virtual CFO <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Penalty calculator teaser */}
              <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                <h3 className="font-bold text-red-900 mb-2">⚠️ Non-Compliance Risk</h3>
                <p className="text-sm text-red-700 mb-3">
                  A company missing its MGT-7 for just 30 days faces penalties of ₹3,000+. 
                  Add AOC-4 and DIR-3 KYC and the total can exceed ₹20,000.
                </p>
                <p className="text-sm font-semibold text-red-800">
                  Our annual compliance package at ₹4,999 keeps you fully protected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
