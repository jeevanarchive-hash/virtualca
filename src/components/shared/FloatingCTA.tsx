import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, X, Phone, ArrowRight } from 'lucide-react';

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded options */}
      {isOpen && (
        <div className="bg-white border border-neutral-200 rounded-2xl shadow-2xl shadow-neutral-900/15 p-5 w-72 animate-fade-in">
          <p className="font-bold text-neutral-900 mb-1">Need help?</p>
          <p className="text-sm text-neutral-500 mb-5">Our CA team typically replies in under 2 hours.</p>
          
          <div className="space-y-3">
            <a
              href="tel:+91833300527"
              className="flex items-center gap-3 p-3 bg-neutral-50 border border-neutral-200 rounded-xl hover:bg-neutral-100 transition-colors group"
            >
              <div className="w-9 h-9 bg-neutral-900 rounded-lg flex items-center justify-center">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-900">Call Us</p>
                <p className="text-xs text-neutral-500">+91 83330 0527</p>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-400 ml-auto" />
            </a>
            
            <Link
              to="/contact"
              className="flex items-center gap-3 p-3 bg-neutral-50 border border-neutral-200 rounded-xl hover:bg-neutral-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-9 h-9 bg-neutral-900 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-900">Send Message</p>
                <p className="text-xs text-neutral-500">Free consultation</p>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-400 ml-auto" />
            </Link>
          </div>
          
          <div className="mt-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-neutral-500">CA team is online now</span>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg shadow-neutral-900/20 flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-neutral-200 text-neutral-700' 
            : 'bg-neutral-900 text-white hover:bg-neutral-700'
        }`}
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </button>
    </div>
  );
}
