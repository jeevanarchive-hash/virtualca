import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-16 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-xs font-medium uppercase tracking-widest">Now accepting new clients</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to get compliant?<br />
              <span className="text-neutral-400">Start with a free consultation.</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              to="/startup-services"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-neutral-900 font-medium rounded-xl hover:bg-neutral-100 transition-colors"
            >
              Register a Company
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 border border-white/20 text-white font-medium rounded-xl hover:bg-white/15 transition-colors"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
