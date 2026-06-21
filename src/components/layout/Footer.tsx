import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  'Startup Services': [
    { label: 'Pvt Ltd Registration', href: '/startup-services#pvt-ltd' },
    { label: 'LLP Registration', href: '/startup-services#llp' },
    { label: 'OPC Registration', href: '/startup-services#opc' },
    { label: 'Trademark Registration', href: '/startup-services#trademark' },
    { label: 'MSME Registration', href: '/startup-services#msme' },
    { label: 'FSSAI Registration', href: '/startup-services#fssai' },
  ],
  'Tax Services': [
    { label: 'Income Tax Filing', href: '/tax-services#itr' },
    { label: 'Business Tax Filing', href: '/tax-services#business' },
    { label: 'Salaried Tax Filing', href: '/tax-services#salaried' },
    { label: 'Tax Planning', href: '/tax-services#planning' },
    { label: 'Tax Consultation', href: '/tax-services#consultation' },
  ],
  'GST Services': [
    { label: 'GST Registration', href: '/gst-services#registration' },
    { label: 'GST Return Filing', href: '/gst-services#returns' },
    { label: 'GST Compliance', href: '/gst-services#compliance' },
    { label: 'GST Advisory', href: '/gst-services#advisory' },
  ],
  'Compliance': [
    { label: 'Payroll Management', href: '/compliance-services#payroll' },
    { label: 'Accounting & Bookkeeping', href: '/compliance-services#accounting' },
    { label: 'ROC Compliance', href: '/compliance-services#roc' },
    { label: 'Virtual CFO Services', href: '/compliance-services#cfo' },
  ],
  'Company': [
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
    { label: 'Client Portal', href: '/client-portal' },
    { label: 'Calculators', href: '/calculators' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center bg-white p-2 rounded-lg mb-6">
              <img src="/logo.png" alt="VirtualCA" className="h-8 w-auto object-contain" />
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              India's premium online CA platform. Helping 50,000+ businesses with registrations, 
              taxation, GST and compliance — done right.
            </p>
            
            {/* Contact */}
            <div className="space-y-3">
              <a href="tel:+91833300527" className="flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +91 83330 0527
              </a>
              <a href="mailto:support@virtualca.in" className="flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                support@virtualca.in
              </a>
              <div className="flex items-start gap-3 text-sm text-neutral-400">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                Hyderabad, Telangana — India
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { label: '𝕏', href: '#', title: 'Twitter' },
                { label: 'in', href: '#', title: 'LinkedIn' },
                { label: '▶', href: '#', title: 'YouTube' },
                { label: '◎', href: '#', title: 'Instagram' },
              ].map(({ label, href, title }) => (
                <a
                  key={title}
                  href={href}
                  aria-label={title}
                  className="w-9 h-9 rounded-lg bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors text-neutral-400 text-xs font-bold"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-neutral-400 text-sm hover:text-white transition-colors hover-underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-12 border-t border-neutral-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h4 className="font-semibold text-white mb-1">Stay Compliance-Ready</h4>
              <p className="text-sm text-neutral-400">Get tax updates, filing reminders and regulatory news — monthly.</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 sm:w-64 px-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors"
              />
              <button className="px-5 py-2.5 bg-white text-neutral-900 text-sm font-medium rounded-lg hover:bg-neutral-100 transition-colors flex-shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-10 pt-8 border-t border-neutral-800">
          <div className="flex flex-wrap items-center gap-6 mb-8">
            {['ISO 27001 Certified', 'MCA Partner', 'GSTN Registered', '256-bit SSL Secured', 'ICAI Member Firm'].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                <span className="text-xs text-neutral-500 font-medium">{badge}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-neutral-500">
              © {new Date().getFullYear()} VirtualCA India Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {['Privacy Policy', 'Terms of Service', 'Refund Policy', 'Disclaimer'].map((item) => (
                <Link key={item} to="#" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>
          
          <p className="mt-4 text-xs text-neutral-600">
            VirtualCA is not a law firm or CA firm but connects users with licensed professionals. 
            Services provided through our network of registered Chartered Accountants and Company Secretaries across India.
          </p>
        </div>
      </div>
    </footer>
  );
}
