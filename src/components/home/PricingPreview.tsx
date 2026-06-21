import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { pricingPlans } from '../../data/content';

export default function PricingPreview() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-50 border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-200 rounded-full text-xs font-medium text-neutral-500 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
            Pricing
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
            Transparent pricing,<br />no hidden fees
          </h2>
          <p className="text-lg text-neutral-500">
            Choose a plan or pay per service. Every price is fixed and displayed upfront.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-6 relative ${
                plan.popular
                  ? 'bg-neutral-900 text-white border border-neutral-800'
                  : 'bg-white border border-neutral-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name */}
              <div className="mb-4">
                <h3 className={`text-lg font-bold mb-1 ${plan.popular ? 'text-white' : 'text-neutral-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-neutral-700/30">
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-black tracking-tight ${plan.popular ? 'text-white' : 'text-neutral-900'}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-sm ${plan.popular ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.popular ? 'bg-white/20' : 'bg-neutral-100'
                    }`}>
                      <Check className={`w-2.5 h-2.5 ${plan.popular ? 'text-white' : 'text-neutral-600'}`} strokeWidth={3} />
                    </div>
                    <span className={`text-sm ${plan.popular ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to="/contact"
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-medium text-sm transition-colors ${
                  plan.popular
                    ? 'bg-white text-neutral-900 hover:bg-neutral-100'
                    : 'bg-neutral-900 text-white hover:bg-neutral-700'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-neutral-500 mt-8">
          Need a one-time service?{' '}
          <Link to="/startup-services" className="text-neutral-900 font-medium hover:underline">
            Browse individual services →
          </Link>
        </p>
      </div>
    </section>
  );
}
