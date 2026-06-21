import { useState } from 'react';
import { testimonials } from '../../data/content';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 rounded-full text-xs font-medium text-neutral-500 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
              Client Stories
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
              Trusted by 50,000+<br />Indian businesses
            </h2>
          </div>
          
          {/* Rating summary */}
          <div className="flex items-center gap-4 bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4">
            <div className="text-center">
              <div className="text-4xl font-black text-neutral-900">4.9</div>
              <div className="flex items-center gap-0.5 mt-1">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs text-neutral-500 mt-1">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-neutral-200" />
            <div className="text-center">
              <div className="text-4xl font-black text-neutral-900">6K+</div>
              <div className="text-xs text-neutral-500 mt-2">Reviews</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white border rounded-2xl p-6 card-hover transition-all duration-300 ${
                index === activeIndex
                  ? 'border-neutral-300 shadow-lg shadow-neutral-900/5'
                  : 'border-neutral-200'
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-neutral-700 text-sm leading-relaxed mb-5">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-neutral-500">{testimonial.role} · {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-neutral-600" />
          </button>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === activeIndex ? 'w-6 bg-neutral-900' : 'w-1.5 bg-neutral-300'
              }`}
            />
          ))}
          <button
            onClick={next}
            className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-neutral-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
