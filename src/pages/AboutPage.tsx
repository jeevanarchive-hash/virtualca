import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="pt-16 bg-neutral-50/50">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left text */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-200 rounded-full text-xs font-semibold text-neutral-600">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
                About Us
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
                Welcome To <span className="text-neutral-900">VirtualCA</span>
              </h1>
              <p className="text-lg text-neutral-600 leading-relaxed font-medium">
                VirtualCA serves individual return filings, outsourcing of finance department such as book keeping and compliances and assists start ups and new businesses by providing cost effective solutions to take the right decisions for their financial goals.
              </p>
              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-neutral-900 text-white font-medium rounded-xl hover:bg-neutral-800 transition-colors shadow-sm"
                >
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            {/* Right Image */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-tr from-neutral-200 to-neutral-100 rounded-3xl blur-md opacity-30" />
              <img
                src="/about-hero.png"
                alt="Welcome to VirtualCA"
                className="relative w-full h-auto rounded-2xl border border-neutral-200/60 shadow-xl shadow-neutral-900/5 object-cover max-h-[420px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Approach */}
      <section className="py-16 lg:py-24 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Card */}
            <div className="bg-neutral-50/50 border border-neutral-200/80 rounded-2xl p-8 lg:p-10 hover:border-neutral-300 transition-colors relative overflow-hidden group">
              <div className="w-12 h-12 bg-neutral-900 text-white rounded-xl flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Our Mission</h2>
              <p className="text-neutral-600 leading-relaxed">
                At VirtualCA, we want to provide cost effective financial solutions in a better way by providing the right advice to clients to choose the most suitable services along with adhering to all the statutory provisions and laws.
              </p>
            </div>

            {/* Strategy Card */}
            <div className="bg-neutral-50/50 border border-neutral-200/80 rounded-2xl p-8 lg:p-10 hover:border-neutral-300 transition-colors relative overflow-hidden group">
              <div className="w-12 h-12 bg-neutral-900 text-white rounded-xl flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">How we want to do</h2>
              <p className="text-neutral-600 leading-relaxed">
                VirtualCA is a platform where every client will be assisted with a qualified CA at all the stages of the work to make seem less decision regarding their finance. We use technology to provide more reliable and accessible financial services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History, Achievements & Stats */}
      <section className="py-16 lg:py-24 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Stats Block - lg:col-span-5 */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-sm font-bold text-neutral-400 uppercase tracking-wider block">Gain a Success with Us !</span>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
                  Get to know us better !
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 pt-4">
                {[
                  { value: '500+', label: 'Happy Clients' },
                  { value: '30+', label: 'Business Entities' },
                  { value: '20+', label: 'Companies' }
                ].map((stat) => (
                  <div key={stat.label} className="bg-white border border-neutral-200 rounded-2xl p-6 text-center lg:text-left flex flex-col justify-center shadow-sm">
                    <div className="text-4xl font-black text-neutral-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-neutral-500 font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement Block - lg:col-span-7 */}
            <div className="lg:col-span-7 space-y-8 bg-white border border-neutral-200 rounded-2xl p-8 lg:p-10 shadow-sm">
              <h2 className="text-3xl font-bold text-neutral-900 tracking-tight border-b border-neutral-100 pb-4">
                What we did?
              </h2>
              <div className="space-y-6 text-neutral-600 leading-relaxed text-base">
                <p>
                  Being in this field for around 8 + years, we have realised that taxpayers are not taking the maximum benefits that are available in our laws and statutes. We have assisted the clients to claim maximum tax refund by choosing most beneficial tax saving investments in order to help them to save more money.
                </p>
                <p>
                  We have currently 500+ happy individual ITR filings who have benefitted with maximum tax refunds by adhering to all the governing laws. We are assisting around 30+ business entities of all types who are engaged in Manufacturing, NBFC, Hospitality, Construction, Education, B2B, SMEs, Retailers who have benefitted value added services from us. We have successfully provided start up assistance to 20+ Private Limited Companies, Limited Liability Partnerships, Sole Proprietor ships to start their business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vibe Section */}
      <section className="py-16 lg:py-24 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-neutral-900 tracking-tight mb-4">
              Our Vibe
            </h2>
            <p className="text-neutral-500 font-medium">
              How we approach our relations, communication, and client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                text: "We focus on assisting each client with a Chartered Accountant to help them throughout the process.",
                icon: CheckCircle2
              },
              {
                text: "Many people find difficult to choose right tax saving schemes and we see this as an opportunity to help them.",
                icon: ShieldCheck
              },
              {
                text: "We ensure better communication to understand your financial goals as well as have lesser tax implications.",
                icon: CheckCircle2
              },
              {
                text: "We're excited to simplify the financial issues through guidance and technology.",
                icon: ShieldCheck
              }
            ].map((vibe, idx) => {
              const Icon = vibe.icon;
              return (
                <div key={idx} className="flex gap-4 p-6 bg-neutral-50 border border-neutral-200 rounded-2xl items-start">
                  <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <p className="text-neutral-700 font-medium leading-relaxed">
                    {vibe.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
