import HeroSection from '../components/home/HeroSection';
import ServicesOverview from '../components/home/ServicesOverview';
import StatsSection from '../components/home/StatsSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ProcessSection from '../components/home/ProcessSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import PricingPreview from '../components/home/PricingPreview';
import FAQSection from '../components/home/FAQSection';
import NewsletterSection from '../components/home/NewsletterSection';
import CTABanner from '../components/home/CTABanner';
import { blogPosts } from '../data/content';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function BlogPreviewSection() {
  const featured = blogPosts.slice(0, 3);
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 rounded-full text-xs font-medium text-neutral-500 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
              From the Blog
            </div>
            <h2 className="text-4xl font-bold text-neutral-900 tracking-tight">
              Compliance insights<br />& expert guides
            </h2>
          </div>
          <Link to="/blog" className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">
            View all articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((post) => (
            <article key={post.id} className="bg-neutral-50 border border-neutral-200 rounded-2xl overflow-hidden card-hover">
              {/* Category bar */}
              <div className="h-1 bg-neutral-200" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium text-neutral-500 bg-white border border-neutral-200 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-neutral-400">{post.readTime}</span>
                </div>
                <h3 className="font-bold text-neutral-900 text-base leading-snug mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-5 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-neutral-300 flex items-center justify-center">
                      <span className="text-xs font-bold text-neutral-600">
                        {post.author.split(' ')[1]?.[0] || post.author[0]}
                      </span>
                    </div>
                    <span className="text-xs text-neutral-500">{post.author}</span>
                  </div>
                  <span className="text-xs text-neutral-400">{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="sm:hidden mt-6 text-center">
          <Link to="/blog" className="text-sm font-medium text-neutral-900 hover:underline">
            View all articles →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesOverview />
      <StatsSection />
      <WhyChooseUs />
      <ProcessSection />
      <TestimonialsSection />
      <PricingPreview />
      <BlogPreviewSection />
      <CTABanner />
      <FAQSection />
      <NewsletterSection />
    </main>
  );
}
