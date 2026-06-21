import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Check } from 'lucide-react';
import ServiceCard from '../components/shared/ServiceCard';
import { startupServices } from '../data/services';

const companyComparison = [
  { feature: 'Min. Members', pvt: '2', llp: '2', opc: '1', partner: '2', sole: '1' },
  { feature: 'Liability', pvt: 'Limited', llp: 'Limited', opc: 'Limited', partner: 'Unlimited', sole: 'Unlimited' },
  { feature: 'Funding Ease', pvt: '⭐⭐⭐⭐⭐', llp: '⭐⭐⭐', opc: '⭐⭐', partner: '⭐⭐', sole: '⭐' },
  { feature: 'Compliance', pvt: 'High', llp: 'Medium', opc: 'Medium', partner: 'Low', sole: 'Minimal' },
  { feature: 'Tax Rate', pvt: '22-25%', llp: '30%', opc: '22-25%', partner: '30%', sole: 'Slab' },
  { feature: 'Ideal For', pvt: 'Startups', llp: 'Professionals', opc: 'Solo founders', partner: 'Small firms', sole: 'Freelancers' },
];

export default function StartupServicesPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Link to="/" className="text-sm text-neutral-400 hover:text-neutral-600 transition-colors">Home</Link>
              <span className="text-neutral-300">/</span>
              <span className="text-sm text-neutral-600">Startup Services</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-200 rounded-full text-xs font-medium text-neutral-500 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              9 Startup Services
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight mb-6">
              Launch your business,<br />the right way
            </h1>
            <p className="text-xl text-neutral-500 leading-relaxed mb-8">
              From company registration to trademark protection — we handle all the legal 
              and regulatory requirements so you can focus on building your product.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                MCA Certified Process
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-500" />
                Fast Processing
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-neutral-400" />
                Expert CA Guidance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {startupServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 lg:py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight mb-3">
              Choose the right structure
            </h2>
            <p className="text-neutral-500">Compare business structures to find the best fit.</p>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-neutral-500 bg-neutral-50">Feature</th>
                    <th className="px-6 py-4 text-sm font-semibold text-neutral-900 bg-blue-50">Pvt Ltd</th>
                    <th className="px-6 py-4 text-sm font-semibold text-neutral-700">LLP</th>
                    <th className="px-6 py-4 text-sm font-semibold text-neutral-700">OPC</th>
                    <th className="px-6 py-4 text-sm font-semibold text-neutral-700">Partnership</th>
                    <th className="px-6 py-4 text-sm font-semibold text-neutral-700">Sole Proprietorship</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {companyComparison.map((row) => (
                    <tr key={row.feature} className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-neutral-600">{row.feature}</td>
                      <td className="px-6 py-4 text-sm text-center font-medium text-blue-700 bg-blue-50/50">{row.pvt}</td>
                      <td className="px-6 py-4 text-sm text-center text-neutral-600">{row.llp}</td>
                      <td className="px-6 py-4 text-sm text-center text-neutral-600">{row.opc}</td>
                      <td className="px-6 py-4 text-sm text-center text-neutral-600">{row.partner}</td>
                      <td className="px-6 py-4 text-sm text-center text-neutral-600">{row.sole}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-neutral-500 text-sm mb-4">
              Not sure which structure is right for you?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white font-medium rounded-xl hover:bg-neutral-700 transition-colors"
            >
              Get a free consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process for Company Registration */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight mb-3">
              Private Limited Company Registration Process
            </h2>
            <p className="text-neutral-500">15-20 days from document submission to certificate.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'Name Approval', desc: 'We check name availability and apply for SPICe+ Part A.' },
              { step: '02', title: 'DSC & DIN', desc: 'Digital Signature Certificates and Director Identification Numbers.' },
              { step: '03', title: 'MOA & AOA', desc: 'We draft Memorandum and Articles of Association.' },
              { step: '04', title: 'Certificate of Incorporation', desc: 'MCA issues the CIN and your company is officially born.' },
            ].map((item) => (
              <div key={item.step} className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5">
                <div className="text-3xl font-black text-neutral-200 mb-3">{item.step}</div>
                <h3 className="font-bold text-neutral-900 mb-2 text-sm">{item.title}</h3>
                <p className="text-sm text-neutral-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
