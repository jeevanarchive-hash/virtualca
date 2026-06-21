import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const serviceCategories = [
  {
    id: 'startup',
    icon: '🚀',
    title: 'Startup Services',
    description: 'From company incorporation to licensing — everything to launch your business legally.',
    href: '/startup-services',
    services: ['Pvt Ltd Company', 'LLP Registration', 'OPC', 'Trademark', 'MSME', 'FSSAI'],
    color: 'border-blue-100 hover:border-blue-200',
    badge: '9 Services',
  },
  {
    id: 'tax',
    icon: '📊',
    title: 'Income Tax',
    description: 'Expert ITR filing for individuals, salaried employees and businesses with maximum savings.',
    href: '/tax-services',
    services: ['ITR Filing', 'Business Tax', 'Salaried Filing', 'Tax Planning', 'Consultation'],
    color: 'border-purple-100 hover:border-purple-200',
    badge: '5 Services',
  },
  {
    id: 'gst',
    icon: '🧾',
    title: 'GST Services',
    description: 'Complete GST management — registration, monthly returns and compliance made easy.',
    href: '/gst-services',
    services: ['GST Registration', 'GSTR-1 & 3B', 'Annual Returns', 'E-Invoicing', 'Advisory'],
    color: 'border-green-100 hover:border-green-200',
    badge: '4 Services',
  },
  {
    id: 'compliance',
    icon: '⚖️',
    title: 'Compliance',
    description: 'End-to-end compliance management — payroll, ROC filings, bookkeeping and virtual CFO.',
    href: '/compliance-services',
    services: ['Payroll', 'Bookkeeping', 'ROC Compliance', 'Annual Filings', 'Virtual CFO'],
    color: 'border-amber-100 hover:border-amber-200',
    badge: '5 Services',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-50 border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-200 rounded-full text-xs font-medium text-neutral-500 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
            Everything your business<br />needs, in one place
          </h2>
          <p className="text-lg text-neutral-500">
            23 services across 4 categories. Expert CAs handle everything 
            while you focus on growing your business.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {serviceCategories.map((cat, index) => (
            <Link
              key={cat.id}
              to={cat.href}
              className={`group bg-white rounded-2xl border-2 ${cat.color} p-6 card-hover block`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon + Badge */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 bg-neutral-50 border border-neutral-100 rounded-xl flex items-center justify-center text-2xl">
                  {cat.icon}
                </div>
                <span className="text-xs font-medium text-neutral-400 bg-neutral-50 border border-neutral-100 px-2.5 py-1 rounded-full">
                  {cat.badge}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-neutral-900 mb-2">{cat.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-5">{cat.description}</p>

              {/* Services list */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {cat.services.map((service) => (
                  <span
                    key={service}
                    className="text-xs text-neutral-600 bg-neutral-50 border border-neutral-100 px-2 py-1 rounded-md"
                  >
                    {service}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-1.5 text-sm font-medium text-neutral-900 group-hover:gap-2.5 transition-all">
                Explore services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-neutral-500">
            Not sure what you need?{' '}
            <Link to="/contact" className="text-neutral-900 font-medium hover:underline">
              Talk to a CA expert →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
