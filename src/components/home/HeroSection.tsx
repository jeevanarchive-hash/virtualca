import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
      
      {/* Subtle radial overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,102,255,0.06) 0%, transparent 70%)'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-neutral-200 rounded-full text-xs font-medium text-neutral-600 mb-8 shadow-sm">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              <span>Trusted by 50,000+ Indian Businesses</span>
            </div>
            <span className="w-px h-3 bg-neutral-200"></span>
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span className="text-amber-600 font-semibold">4.9</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 leading-[1.05] tracking-tight mb-6 text-balance">
            India's Smartest{' '}
            <span className="relative inline-block">
              <span className="relative z-10">CA Platform</span>
              <span
                className="absolute bottom-1 left-0 right-0 h-3 bg-blue-100 -z-0 -rotate-1"
                style={{ borderRadius: '2px' }}
              />
            </span>
            <br />
            for Modern Businesses
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed mb-10">
            Company registrations, GST compliance, income tax filing, and complete financial management — 
            all handled by expert Chartered Accountants. Online, fast, transparent.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to="/startup-services"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-neutral-900 text-white font-medium rounded-xl hover:bg-neutral-700 transition-colors group"
            >
              Start Your Business
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/calculators"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-neutral-200 text-neutral-700 font-medium rounded-xl hover:border-neutral-300 hover:bg-neutral-50 transition-colors"
            >
              Tax Calculators →
            </Link>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-500">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>100% Secure</span>
            </div>
            <div className="w-px h-4 bg-neutral-200"></div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Fast Processing</span>
            </div>
            <div className="w-px h-4 bg-neutral-200"></div>
            <div className="flex items-center gap-2">
              <span className="text-neutral-400">🎓</span>
              <span>Expert CA Team</span>
            </div>
            <div className="w-px h-4 bg-neutral-200"></div>
            <div className="flex items-center gap-2">
              <span className="text-neutral-400">💎</span>
              <span>Transparent Pricing</span>
            </div>
          </div>
        </div>

        {/* Hero Dashboard Preview */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl border border-neutral-200 shadow-2xl shadow-neutral-900/10 overflow-hidden">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-neutral-50 border-b border-neutral-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white border border-neutral-200 rounded-md px-3 py-1 text-xs text-neutral-400 flex items-center gap-2">
                  <Shield className="w-3 h-3 text-green-500" />
                  app.virtualca.in/dashboard
                </div>
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Active Services', value: '4', change: '+1 this month', color: 'text-neutral-900' },
                  { label: 'Next Filing Due', value: 'Feb 20', change: 'GSTR-3B', color: 'text-blue-600' },
                  { label: 'Compliance Score', value: '98%', change: '↑ Excellent', color: 'text-green-600' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-neutral-50 rounded-xl p-4 border border-neutral-100">
                    <p className="text-xs text-neutral-500 mb-1 font-medium">{stat.label}</p>
                    <p className={`text-2xl font-bold ${stat.color} mb-0.5`}>{stat.value}</p>
                    <p className="text-xs text-neutral-400">{stat.change}</p>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Service Progress */}
                <div className="border border-neutral-200 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-neutral-900 mb-4">Active Services</h4>
                  <div className="space-y-3">
                    {[
                      { service: 'Pvt Ltd Registration', progress: 75, status: 'In Progress', color: 'bg-blue-500' },
                      { service: 'GST Registration', progress: 100, status: 'Completed', color: 'bg-green-500' },
                      { service: 'Trademark Filing', progress: 40, status: 'Pending Docs', color: 'bg-amber-500' },
                    ].map((item) => (
                      <div key={item.service}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-medium text-neutral-700">{item.service}</span>
                          <span className={`text-xs font-medium ${
                            item.status === 'Completed' ? 'text-green-600' :
                            item.status === 'In Progress' ? 'text-blue-600' : 'text-amber-600'
                          }`}>{item.status}</span>
                        </div>
                        <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${item.color} rounded-full`}
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="border border-neutral-200 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-neutral-900 mb-4">Recent Activity</h4>
                  <div className="space-y-3">
                    {[
                      { action: 'Document uploaded', detail: 'PAN Card.pdf', time: '2h ago', dot: 'bg-blue-500' },
                      { action: 'GSTIN allotted', detail: '27AAGCS0523Q1Z4', time: '1d ago', dot: 'bg-green-500' },
                      { action: 'Invoice generated', detail: 'INV-2025-0034', time: '2d ago', dot: 'bg-neutral-400' },
                    ].map((activity, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full ${activity.dot} mt-1.5 flex-shrink-0`}></div>
                        <div>
                          <p className="text-xs font-medium text-neutral-700">{activity.action}</p>
                          <p className="text-xs text-neutral-400">{activity.detail} · {activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
