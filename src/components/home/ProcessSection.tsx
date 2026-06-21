import { processSteps } from '../../data/content';

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-50 border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-200 rounded-full text-xs font-medium text-neutral-500 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
            How It Works
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
            Get started in 4 simple steps
          </h2>
          <p className="text-lg text-neutral-500">
            From document collection to final delivery — our streamlined process 
            makes compliance effortless.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-12 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-px bg-neutral-200 z-0">
            <div className="absolute inset-0 flex items-center justify-between">
              {[0, 1, 2].map((i) => (
                <div key={i} className="w-px h-full bg-neutral-200 flex-1 relative">
                  <div className="absolute top-0 left-1/2 w-8 h-px bg-neutral-200" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative z-10">
            {processSteps.map((step, index) => (
              <div key={step.step} className="flex flex-col items-center text-center lg:items-center">
                {/* Step indicator */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-white border-2 border-neutral-200 flex flex-col items-center justify-center shadow-sm">
                    <span className="text-xs font-bold text-neutral-400 tracking-wider mb-1">STEP</span>
                    <span className="text-3xl font-black text-neutral-900">{step.step}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="lg:hidden absolute top-1/2 -right-3 w-6 h-px bg-neutral-300" />
                  )}
                </div>

                <h3 className="text-lg font-bold text-neutral-900 mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline visual */}
        <div className="mt-16 bg-white rounded-2xl border border-neutral-200 p-8">
          <h3 className="text-lg font-bold text-neutral-900 mb-6">
            Typical Processing Timeline
          </h3>
          <div className="space-y-4">
            {[
              { service: 'Pvt Ltd Company Registration', days: '15-20 days', width: '70%', color: 'bg-blue-500' },
              { service: 'GST Registration', days: '3-7 days', width: '25%', color: 'bg-green-500' },
              { service: 'Trademark Registration', days: '12-18 months', width: '100%', color: 'bg-purple-500' },
              { service: 'Income Tax Filing', days: '1-3 days', width: '12%', color: 'bg-amber-500' },
              { service: 'MSME Registration', days: '1-2 days', width: '8%', color: 'bg-rose-500' },
            ].map((item) => (
              <div key={item.service} className="flex items-center gap-4">
                <div className="w-52 flex-shrink-0 text-sm text-neutral-600 font-medium">{item.service}</div>
                <div className="flex-1 h-6 bg-neutral-50 rounded-lg overflow-hidden border border-neutral-100 relative">
                  <div
                    className={`absolute inset-y-0 left-0 ${item.color} rounded-lg flex items-center pl-3`}
                    style={{ width: item.width, minWidth: '80px' }}
                  >
                    <span className="text-white text-xs font-medium whitespace-nowrap">{item.days}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-neutral-400">
            * Processing times depend on government authority response times. We process your application within 24 hours of document receipt.
          </p>
        </div>
      </div>
    </section>
  );
}
