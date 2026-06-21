import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-white/70 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
            Compliance Insights Newsletter
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Stay ahead of deadlines
          </h2>
          <p className="text-lg text-neutral-400 mb-10">
            Monthly tax updates, filing reminders, regulatory changes and expert insights — 
            delivered to your inbox. No spam, ever.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-white font-semibold text-lg">You're in!</p>
                <p className="text-neutral-400 text-sm mt-1">
                  Welcome to the VirtualCA newsletter. First email coming next Monday.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-white text-neutral-900 font-medium text-sm rounded-xl hover:bg-neutral-100 transition-colors flex-shrink-0"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-neutral-600">
            Join 12,000+ professionals. Unsubscribe anytime.
          </p>

          {/* Topics */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {['Income Tax Updates', 'GST Changes', 'MCA Amendments', 'Compliance Deadlines', 'Budget Analysis', 'Startup Regulations'].map((topic) => (
              <span
                key={topic}
                className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-neutral-400"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
