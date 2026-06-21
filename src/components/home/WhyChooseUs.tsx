import { trustPoints } from '../../data/content';

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 rounded-full text-xs font-medium text-neutral-500 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
              Why VirtualCA
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight mb-6">
              Your compliance,<br />done right — every time
            </h2>
            <p className="text-lg text-neutral-500 leading-relaxed mb-8">
              We combine technology with expert CA oversight to deliver a compliance 
              experience that's faster, more transparent, and more reliable than 
              traditional CA firms.
            </p>

            {/* Key differentiators */}
            <div className="space-y-4">
              {[
                { title: 'No Physical Visits Required', desc: 'Everything done digitally. Submit documents from your phone.' },
                { title: 'Real-Time Progress Tracking', desc: 'Know exactly where your application stands, always.' },
                { title: 'Fixed Pricing, Zero Surprises', desc: 'Prices shown upfront. No hidden fees, ever.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-neutral-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 text-sm">{item.title}</p>
                    <p className="text-sm text-neutral-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Trust Points Grid */}
          <div className="grid grid-cols-2 gap-4">
            {trustPoints.map((point, index) => (
              <div
                key={point.title}
                className={`bg-neutral-50 border border-neutral-200 rounded-2xl p-5 card-hover ${
                  index === 0 ? 'col-span-2' : ''
                }`}
              >
                <div className="text-2xl mb-3">{point.icon}</div>
                <h3 className="font-semibold text-neutral-900 text-sm mb-1.5">{point.title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom comparison */}
        <div className="mt-20 bg-neutral-950 rounded-2xl p-8 lg:p-10">
          <h3 className="text-white font-bold text-xl lg:text-2xl mb-8 text-center">
            VirtualCA vs Traditional CA Firm
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left text-neutral-400 text-sm font-medium pb-4 pr-6"></th>
                  <th className="text-center pb-4 px-4">
                    <span className="text-white font-semibold text-sm bg-blue-600 px-3 py-1 rounded-md">VirtualCA</span>
                  </th>
                  <th className="text-center pb-4 px-4">
                    <span className="text-neutral-400 font-medium text-sm">Traditional CA</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800">
                {[
                  ['Processing Time', '3-20 days', '30-60 days'],
                  ['Price Transparency', '100% upfront', 'Often unclear'],
                  ['Online Access', '24/7 portal', 'Office hours only'],
                  ['Progress Tracking', 'Real-time dashboard', 'Manual updates'],
                  ['Document Security', 'Bank-grade encryption', 'Physical files'],
                  ['Support', '24/7 chat + call', 'Appointment-based'],
                ].map(([feature, vc, trad]) => (
                  <tr key={feature}>
                    <td className="py-3 pr-6 text-neutral-400 text-sm">{feature}</td>
                    <td className="py-3 px-4 text-center">
                      <span className="text-green-400 text-sm font-medium">{vc}</span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className="text-neutral-500 text-sm">{trad}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
