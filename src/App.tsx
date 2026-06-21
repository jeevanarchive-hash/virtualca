import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingCTA from './components/shared/FloatingCTA';
import HomePage from './pages/HomePage';
import StartupServicesPage from './pages/StartupServicesPage';
import GSTServicesPage from './pages/GSTServicesPage';
import TaxServicesPage from './pages/TaxServicesPage';
import ComplianceServicesPage from './pages/ComplianceServicesPage';
import CalculatorsPage from './pages/CalculatorsPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ClientPortalPage from './pages/ClientPortalPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/startup-services" element={<Layout><StartupServicesPage /></Layout>} />
        <Route path="/gst-services" element={<Layout><GSTServicesPage /></Layout>} />
        <Route path="/tax-services" element={<Layout><TaxServicesPage /></Layout>} />
        <Route path="/compliance-services" element={<Layout><ComplianceServicesPage /></Layout>} />
        <Route path="/calculators" element={<Layout><CalculatorsPage /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/client-portal" element={<Layout><ClientPortalPage /></Layout>} />
        <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
      </Routes>
    </Router>
  );
}

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="text-6xl font-black text-neutral-100 mb-4">404</div>
      <h1 className="text-2xl font-bold text-neutral-900 mb-3">Page not found</h1>
      <p className="text-neutral-500 mb-8">The page you're looking for doesn't exist.</p>
      <a
        href="/"
        className="px-6 py-3 bg-neutral-900 text-white font-medium rounded-xl hover:bg-neutral-700 transition-colors"
      >
        Back to Home
      </a>
    </div>
  );
}
