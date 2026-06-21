import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface StatProps {
  value: string;
  label: string;
  suffix?: string;
  prefix?: string;
}

function AnimatedStat({ value, label, suffix = '', prefix = '' }: StatProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });
  const hasAnimated = useRef(false);

  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const isStatic = isNaN(numericValue) || value.includes('/');

  useEffect(() => {
    if (inView && !hasAnimated.current && !isStatic) {
      hasAnimated.current = true;
      const duration = 2000;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * numericValue));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(numericValue);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [inView, numericValue, isStatic]);

  const displayValue = isStatic ? value : count.toLocaleString('en-IN');

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight mb-2 number-ticker">
        {prefix}{displayValue}{suffix}
      </div>
      <p className="text-neutral-500 font-medium">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  const stats = [
    { value: '50000', label: 'Businesses Served', suffix: '+' },
    { value: '98', label: 'Client Satisfaction Rate', suffix: '%' },
    { value: '15', label: 'Expert Chartered Accountants', suffix: '+' },
    { value: '24/7', label: 'Support Available', suffix: '' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="relative">
              <AnimatedStat {...stat} />
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/4 bottom-1/4 w-px bg-neutral-100" />
              )}
            </div>
          ))}
        </div>

        {/* Logos / Partners */}
        <div className="mt-20 pt-12 border-t border-neutral-100">
          <p className="text-center text-sm font-medium text-neutral-400 mb-8 uppercase tracking-widest">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {[
              'TechNova', 'GreenLeaf Exports', 'Bharat Retail', 
              'Wellness Hub', 'EdTech Ventures', 'Apex Industries'
            ].map((company) => (
              <span
                key={company}
                className="text-neutral-300 font-semibold text-sm lg:text-base tracking-wide hover:text-neutral-400 transition-colors cursor-default"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
