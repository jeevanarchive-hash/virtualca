import { Link } from 'react-router-dom';
import { ArrowRight, AlertCircle } from 'lucide-react';
import ServiceCard from '../components/shared/ServiceCard';
import { taxServices } from '../data/services';

const itrTypes = [
  { form: 'ITR-1', name: 'Sahaj', for: 'Salaried individuals, one house property, other sources < ₹50L' },
  { form: 'ITR-2', name: '', for: 'Individuals with capital gains, multiple properties, foreign income' },
  { form: 'ITR-3', name: '', for: 'Individuals with business/profession income' },
  { form: 'ITR-4', name: 'Sugam', for: 'Presumptive income scheme (44AD, 44ADA, 44AE)' },
  { form: 'ITR-5', name: '', for: 'LLPs, partnership firms, AOPs, BOIs' },
  { form: 'ITR-6', name: '', for: 'Companies (other than claiming exemption u/s 11)' },
];

export default function TaxServicesPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Link to="/" className="text-sm text-neutral-400 hover:text-neutral-600">Home</Link>
              <span className="text-neutral-300">/</span>
              <span className="text-sm text-neutral-600">Income Tax Services</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-200 rounded-full text-xs font-medium text-neutral-500 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
              5 Tax Services
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight mb-6">
              Expert tax filing,<br />maximum savings
            </h1>
            <p className="text-xl text-neutral-500 leading-relaxed mb-8">
              Our Chartered Accountants file your income tax returns accurately, 
              identify every deduction you're entitled to, and help you plan taxes for future years.
            </p>

            {/* Due dates alert */}
            <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-amber-900">Filing Deadlines</p>
                <p className="text-sm text-amber-700 mt-0.5">
                  ITR for AY 2024-25: July 31, 2024 (Individuals) · October 31, 2024 (Audit cases)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {taxServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* ITR Form Guide */}
      <section className="py-16 lg:py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                Which ITR form applies to you?
              </h2>
              <p className="text-neutral-500 mb-8">
                Filing the wrong ITR form can lead to notices from the Income Tax Department. 
                Our experts select the correct form based on your income sources.
              </p>

              <div className="space-y-3">
                {itrTypes.map((itr) => (
                  <div key={itr.form} className="flex items-start gap-4 p-4 bg-white border border-neutral-200 rounded-xl">
                    <div className="w-14 flex-shrink-0">
                      <span className="text-sm font-black text-neutral-900">{itr.form}</span>
                      {itr.name && <span className="block text-xs text-neutral-400">{itr.name}</span>}
                    </div>
                    <p className="text-sm text-neutral-600">{itr.for}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              {/* Deductions Guide */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-6">
                <h3 className="font-bold text-neutral-900 mb-4">Key Deductions We Optimize</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { section: '80C', desc: 'LIC, PPF, ELSS, NSC', limit: '₹1.5L' },
                    { section: '80D', desc: 'Health Insurance', limit: '₹50K' },
                    { section: '80E', desc: 'Education Loan', limit: 'Unlimited' },
                    { section: '80G', desc: 'Donations', limit: 'Varies' },
                    { section: '10(13A)', desc: 'HRA Exemption', limit: 'Varies' },
                    { section: '24(b)', desc: 'Home Loan Interest', limit: '₹2L' },
                  ].map((item) => (
                    <div key={item.section} className="bg-neutral-50 rounded-lg p-3 border border-neutral-100">
                      <p className="text-xs font-bold text-blue-600">Sec. {item.section}</p>
                      <p className="text-xs text-neutral-600 mt-0.5">{item.desc}</p>
                      <p className="text-xs font-semibold text-neutral-900 mt-1">Max: {item.limit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* New vs Old regime */}
              <div className="bg-neutral-950 rounded-2xl p-6">
                <h3 className="font-bold text-white mb-2">New vs Old Tax Regime</h3>
                <p className="text-neutral-400 text-sm mb-4">
                  Confused about which regime saves more tax? Use our calculator to compare.
                </p>
                <Link
                  to="/calculators"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-neutral-900 text-sm font-medium rounded-lg hover:bg-neutral-100 transition-colors"
                >
                  Open Calculator <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
