import { useState } from 'react';
import { Check, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { allServices } from '../data/services';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main className="pt-16">
      {/* Header */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-200 rounded-full text-xs font-medium text-neutral-500 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              We're online — typical reply in 2 hours
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight mb-4">
              Let's talk
            </h1>
            <p className="text-xl text-neutral-500">
              Get a free consultation with our CA team. We'll understand your requirements 
              and recommend the right services.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-green-600" strokeWidth={2.5} />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-3">Thank you!</h2>
                  <p className="text-neutral-500 max-w-md mx-auto">
                    We've received your enquiry. A CA from our team will reach out within 2 business hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', service: '', message: '' }); }}
                    className="mt-8 px-6 py-3 bg-neutral-900 text-white font-medium rounded-xl hover:bg-neutral-700 transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => update('name', e.target.value)}
                        placeholder="Rahul Sharma"
                        className="input-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => update('email', e.target.value)}
                        placeholder="rahul@company.com"
                        className="input-base"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        placeholder="+91 98765 43210"
                        className="input-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Service Required *</label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => update('service', e.target.value)}
                        className="input-base"
                      >
                        <option value="">Select a service</option>
                        <optgroup label="Startup Services">
                          {allServices.filter(s => s.category === 'startup').map(s => (
                            <option key={s.id} value={s.title}>{s.title}</option>
                          ))}
                        </optgroup>
                        <optgroup label="Tax Services">
                          {allServices.filter(s => s.category === 'tax').map(s => (
                            <option key={s.id} value={s.title}>{s.title}</option>
                          ))}
                        </optgroup>
                        <optgroup label="GST Services">
                          {allServices.filter(s => s.category === 'gst').map(s => (
                            <option key={s.id} value={s.title}>{s.title}</option>
                          ))}
                        </optgroup>
                        <optgroup label="Compliance Services">
                          {allServices.filter(s => s.category === 'compliance').map(s => (
                            <option key={s.id} value={s.title}>{s.title}</option>
                          ))}
                        </optgroup>
                        <option value="Other">Other / Not Sure</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => update('message', e.target.value)}
                      placeholder="Tell us about your business and what you need help with..."
                      rows={5}
                      className="input-base resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" required id="consent" className="mt-1 accent-neutral-900" />
                    <label htmlFor="consent" className="text-sm text-neutral-500">
                      I agree to be contacted by VirtualCA regarding my enquiry. 
                      I understand my data will be handled as per the Privacy Policy.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900 text-white font-medium rounded-xl hover:bg-neutral-700 transition-colors"
                  >
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Contact details */}
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6">
                <h3 className="font-bold text-neutral-900 mb-5">Contact Details</h3>
                <div className="space-y-4">
                  <a href="tel:+91833300527" className="flex items-center gap-3 text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    <div className="w-9 h-9 bg-white border border-neutral-200 rounded-lg flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    +91 83330 0527
                  </a>
                  <a href="mailto:support@virtualca.in" className="flex items-center gap-3 text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                    <div className="w-9 h-9 bg-white border border-neutral-200 rounded-lg flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    support@virtualca.in
                  </a>
                  <div className="flex items-start gap-3 text-sm text-neutral-600">
                    <div className="w-9 h-9 bg-white border border-neutral-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    Banjara Hills, Hyderabad<br />Telangana 500034
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-600">
                    <div className="w-9 h-9 bg-white border border-neutral-200 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4" />
                    </div>
                    Mon–Sat: 9am – 7pm IST
                  </div>
                </div>
              </div>

              {/* Response time */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-6">
                <h4 className="font-bold text-neutral-900 mb-4">What happens next?</h4>
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'We review your enquiry', time: 'Within 2 hours' },
                    { step: '2', title: 'CA calls you', time: 'Same day' },
                    { step: '3', title: 'Free 30-min consultation', time: 'Scheduled by you' },
                    { step: '4', title: 'Proposal & kickoff', time: 'Within 24 hours' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-neutral-900 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">{item.step}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-neutral-900">{item.title}</p>
                        <p className="text-xs text-neutral-400">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular services */}
              <div className="bg-neutral-950 rounded-2xl p-6">
                <h4 className="font-bold text-white mb-4 text-sm">Popular Quick Services</h4>
                <div className="space-y-2">
                  {[
                    { name: 'Pvt Ltd Registration', price: '₹6,999' },
                    { name: 'GST Registration', price: '₹1,499' },
                    { name: 'ITR Filing', price: '₹999' },
                    { name: 'MSME Registration', price: '₹999' },
                  ].map((service) => (
                    <div key={service.name} className="flex items-center justify-between py-2 border-b border-neutral-800 last:border-0">
                      <span className="text-neutral-400 text-sm">{service.name}</span>
                      <span className="text-white font-semibold text-sm">{service.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
