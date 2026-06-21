import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

const navItems = [
  {
    label: 'Startup Services',
    href: '/startup-services',
    children: [
      { label: 'Private Limited Company', href: '/startup-services#pvt-ltd' },
      { label: 'LLP Registration', href: '/startup-services#llp' },
      { label: 'OPC Registration', href: '/startup-services#opc' },
      { label: 'Partnership Firm', href: '/startup-services#partnership' },
      { label: 'Sole Proprietorship', href: '/startup-services#sole' },
      { label: 'Trademark Registration', href: '/startup-services#trademark' },
      { label: 'MSME Registration', href: '/startup-services#msme' },
      { label: 'FSSAI Registration', href: '/startup-services#fssai' },
      { label: 'IEC Registration', href: '/startup-services#iec' },
    ],
  },
  {
    label: 'GST Services',
    href: '/gst-services',
    children: [
      { label: 'GST Registration', href: '/gst-services#registration' },
      { label: 'GST Return Filing', href: '/gst-services#returns' },
      { label: 'GST Compliance', href: '/gst-services#compliance' },
      { label: 'GST Advisory', href: '/gst-services#advisory' },
    ],
  },
  {
    label: 'Income Tax',
    href: '/tax-services',
    children: [
      { label: 'Income Tax Filing', href: '/tax-services#itr' },
      { label: 'Business Tax Filing', href: '/tax-services#business' },
      { label: 'Salaried Tax Filing', href: '/tax-services#salaried' },
      { label: 'Tax Planning', href: '/tax-services#planning' },
      { label: 'Tax Consultation', href: '/tax-services#consultation' },
    ],
  },
  {
    label: 'Compliance',
    href: '/compliance-services',
    children: [
      { label: 'Payroll Management', href: '/compliance-services#payroll' },
      { label: 'Accounting & Bookkeeping', href: '/compliance-services#accounting' },
      { label: 'ROC Compliance', href: '/compliance-services#roc' },
      { label: 'Annual Filings', href: '/compliance-services#annual' },
      { label: 'Virtual CFO Services', href: '/compliance-services#cfo' },
    ],
  },
  { label: 'Calculators', href: '/calculators' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm'
          : 'bg-white border-b border-neutral-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src="/logo.png" alt="VirtualCA" className="h-9 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav ref={dropdownRef} className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <button
                    className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeDropdown === item.label
                        ? 'text-neutral-900 bg-neutral-100'
                        : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                    }`}
                    onClick={() =>
                      setActiveDropdown(activeDropdown === item.label ? null : item.label)
                    }
                    onMouseEnter={() => setActiveDropdown(item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="px-3 py-2 rounded-md text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl border border-neutral-200 shadow-xl shadow-neutral-900/5 py-1.5 z-50"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="flex items-center justify-between px-4 py-2.5 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors group"
                      >
                        <span>{child.label}</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                      </Link>
                    ))}
                    <div className="mx-4 mt-1.5 pt-1.5 border-t border-neutral-100">
                      <Link
                        to={item.href}
                        className="flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 py-1.5 transition-colors"
                      >
                        View all services <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/client-portal"
              className="px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Client Portal
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-neutral-100 bg-white max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50 rounded-lg transition-colors"
                      onClick={() =>
                        setExpandedMobile(expandedMobile === item.label ? null : item.label)
                      }
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          expandedMobile === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {expandedMobile === item.label && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-neutral-100 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-2 py-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="block px-3 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50 rounded-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-neutral-100 space-y-2">
              <Link
                to="/client-portal"
                className="block w-full px-4 py-2.5 text-center text-sm font-medium text-neutral-700 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
              >
                Client Portal
              </Link>
              <Link
                to="/contact"
                className="block w-full px-4 py-2.5 text-center text-sm font-medium text-white bg-neutral-900 rounded-lg hover:bg-neutral-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
