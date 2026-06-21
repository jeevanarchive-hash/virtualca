import { blogPosts } from '../data/content';
import { Search } from 'lucide-react';
import { useState } from 'react';

const categories = ['All', 'Income Tax', 'GST', 'Startup', 'Tax Planning', 'Compliance'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-200 rounded-full text-xs font-medium text-neutral-500 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
              Insights & Resources
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight mb-4">
              The VirtualCA<br />Blog
            </h1>
            <p className="text-xl text-neutral-500">
              Expert insights on Indian taxation, GST, company law and startup compliance.
              Written by Chartered Accountants for real business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2.5 border border-neutral-200 rounded-xl text-sm text-neutral-900 focus:outline-none focus:border-neutral-400 transition-colors"
              />
            </div>
            
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? 'bg-neutral-900 text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Posts */}
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-neutral-400 text-lg">No articles found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((post, index) => (
                <article
                  key={post.id}
                  className={`bg-white border border-neutral-200 rounded-2xl overflow-hidden card-hover ${
                    index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  {/* Color strip */}
                  <div className={`h-1 ${
                    post.category === 'Income Tax' ? 'bg-purple-400' :
                    post.category === 'GST' ? 'bg-green-400' :
                    post.category === 'Startup' ? 'bg-blue-400' :
                    post.category === 'Tax Planning' ? 'bg-amber-400' :
                    'bg-neutral-300'
                  }`} />
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-medium text-neutral-500 bg-neutral-50 border border-neutral-200 px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-neutral-400">{post.readTime}</span>
                    </div>
                    
                    <h2 className="font-bold text-neutral-900 text-base leading-snug mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                      {post.title}
                    </h2>
                    
                    <p className="text-sm text-neutral-500 leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-neutral-200 flex items-center justify-center">
                          <span className="text-xs font-bold text-neutral-600">
                            {post.author.split(' ').pop()?.[0] || 'C'}
                          </span>
                        </div>
                        <span className="text-xs text-neutral-500 font-medium">{post.author}</span>
                      </div>
                      <span className="text-xs text-neutral-400">{post.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Newsletter CTA */}
          <div className="mt-16 bg-neutral-50 border border-neutral-200 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-neutral-900 mb-2">Never miss a compliance update</h3>
            <p className="text-neutral-500 text-sm mb-6">
              Subscribe to get the latest tax and regulatory updates delivered to your inbox.
            </p>
            <div className="flex gap-3 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-neutral-400 transition-colors"
              />
              <button className="px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-xl hover:bg-neutral-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
