import { Link } from 'react-router-dom';
import { ArrowRight, Check, Clock, Star } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
  features: string[];
  popular?: boolean;
  compact?: boolean;
}

export default function ServiceCard({
  id,
  title,
  description,
  price,
  duration,
  icon,
  features,
  popular = false,
  compact = false,
}: ServiceCardProps) {
  return (
    <div
      id={id}
      className={`bg-white border rounded-2xl p-6 card-hover relative scroll-mt-24 ${
        popular ? 'border-neutral-300 shadow-lg shadow-neutral-900/5' : 'border-neutral-200'
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-6">
          <span className="flex items-center gap-1 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            <Star className="w-3 h-3 fill-white" />
            Most Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-start gap-3">
          <div className="w-11 h-11 bg-neutral-50 border border-neutral-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
            {icon}
          </div>
          <div>
            <h3 className="font-bold text-neutral-900 text-base leading-tight">{title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <Clock className="w-3 h-3 text-neutral-400" />
              <span className="text-xs text-neutral-400">{duration}</span>
            </div>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="text-xl font-black text-neutral-900">{price}</p>
          <p className="text-xs text-neutral-400">all-inclusive</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-neutral-500 leading-relaxed mb-5">{description}</p>

      {/* Features */}
      {!compact && (
        <ul className="space-y-2 mb-5">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5">
              <div className="w-4 h-4 rounded-full bg-green-50 border border-green-200 flex items-center justify-center flex-shrink-0">
                <Check className="w-2.5 h-2.5 text-green-600" strokeWidth={3} />
              </div>
              <span className="text-xs text-neutral-600">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      <Link
        to="/contact"
        state={{ service: title }}
        className="flex items-center justify-center gap-2 w-full py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-xl hover:bg-neutral-700 transition-colors group"
      >
        Get Started
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  );
}
