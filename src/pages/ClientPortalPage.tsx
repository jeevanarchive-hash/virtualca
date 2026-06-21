import { useState } from 'react';
import { 
  LayoutDashboard, FileText, Upload, Receipt, 
  Bell, HeadphonesIcon, LogIn, Shield, Check, 
  Clock, AlertCircle, ChevronRight, Download, X
} from 'lucide-react';

// Mock data
const services = [
  { id: '1', name: 'Pvt Ltd Registration', status: 'In Progress', progress: 75, due: 'Feb 28, 2025', lastUpdate: '2 hours ago' },
  { id: '2', name: 'GST Registration', status: 'Completed', progress: 100, due: 'Completed', lastUpdate: '3 days ago' },
  { id: '3', name: 'ITR Filing AY 2024-25', status: 'Pending Documents', progress: 30, due: 'Jul 31, 2025', lastUpdate: '1 week ago' },
  { id: '4', name: 'Trademark Class 35', status: 'Under Review', progress: 55, due: 'Ongoing', lastUpdate: '2 days ago' },
];

const documents = [
  { name: 'PAN Card.pdf', type: 'Identity', uploaded: 'Jan 15, 2025', size: '245 KB', status: 'Verified' },
  { name: 'Aadhaar.pdf', type: 'Identity', uploaded: 'Jan 15, 2025', size: '312 KB', status: 'Verified' },
  { name: 'Address Proof.jpg', type: 'Address', uploaded: 'Jan 16, 2025', size: '1.2 MB', status: 'Verified' },
  { name: 'Bank Statement.pdf', type: 'Financial', uploaded: 'Jan 17, 2025', size: '890 KB', status: 'Under Review' },
];

const notifications = [
  { id: '1', type: 'success', title: 'GST Registration Complete', message: 'Your GSTIN has been allotted: 29AABCS1429B1Z6', time: '3 days ago' },
  { id: '2', type: 'warning', title: 'Document Required', message: 'Please upload your latest utility bill for address verification', time: '1 day ago' },
  { id: '3', type: 'info', title: 'Application Update', message: 'Your Pvt Ltd registration application has been forwarded to MCA', time: '2 hours ago' },
];

const invoices = [
  { id: 'INV-2025-0034', service: 'GST Registration', amount: '₹1,499', date: 'Jan 10, 2025', status: 'Paid' },
  { id: 'INV-2025-0028', service: 'Pvt Ltd Registration', amount: '₹6,999', date: 'Jan 5, 2025', status: 'Paid' },
  { id: 'INV-2025-0019', service: 'ITR Filing', amount: '₹999', date: 'Dec 28, 2024', status: 'Paid' },
];

type Tab = 'dashboard' | 'services' | 'documents' | 'invoices' | 'support';

export default function ClientPortalPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.email === 'demo@virtualca.in' && loginData.password === 'demo123') {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Use demo@virtualca.in / demo123 to access the demo portal');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-green-700 bg-green-50 border-green-200';
      case 'In Progress': return 'text-blue-700 bg-blue-50 border-blue-200';
      case 'Pending Documents': return 'text-amber-700 bg-amber-50 border-amber-200';
      case 'Under Review': return 'text-purple-700 bg-purple-50 border-purple-200';
      default: return 'text-neutral-700 bg-neutral-50 border-neutral-200';
    }
  };

  if (!isLoggedIn) {
    return (
      <main className="pt-16 min-h-screen bg-neutral-50">
        <div className="flex items-center justify-center min-h-[calc(100vh-64px)] px-4">
          <div className="w-full max-w-md">
            {/* Logo */}
            <div className="text-center mb-8">
              <img src="/logo.png" alt="VirtualCA" className="h-12 w-auto object-contain mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-neutral-900">Client Portal</h1>
              <p className="text-neutral-500 text-sm mt-1">Sign in to track your services</p>
            </div>

            {/* Demo notice */}
            <div className="flex items-start gap-2 p-3 bg-blue-50 border border-blue-200 rounded-xl mb-6">
              <Shield className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-blue-700">
                <strong>Demo Access:</strong> Use <code className="bg-blue-100 px-1 rounded">demo@virtualca.in</code> / <code className="bg-blue-100 px-1 rounded">demo123</code>
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="bg-white border border-neutral-200 rounded-2xl p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email Address</label>
                <input
                  type="email"
                  required
                  value={loginData.email}
                  onChange={(e) => setLoginData(p => ({ ...p, email: e.target.value }))}
                  placeholder="demo@virtualca.in"
                  className="input-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">Password</label>
                <input
                  type="password"
                  required
                  value={loginData.password}
                  onChange={(e) => setLoginData(p => ({ ...p, password: e.target.value }))}
                  placeholder="••••••••"
                  className="input-base"
                />
              </div>
              
              {loginError && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <p className="text-xs text-red-700">{loginError}</p>
                </div>
              )}

              <button type="submit" className="w-full py-3 bg-neutral-900 text-white font-medium rounded-xl hover:bg-neutral-700 transition-colors flex items-center justify-center gap-2">
                <LogIn className="w-4 h-4" />
                Sign In
              </button>
              
              <div className="text-center">
                <a href="#" className="text-sm text-neutral-500 hover:text-neutral-700 transition-colors">
                  Forgot password?
                </a>
              </div>
            </form>

            <p className="text-center text-sm text-neutral-500 mt-4">
              Not a client?{' '}
              <a href="/contact" className="text-neutral-900 font-medium hover:underline">
                Get started →
              </a>
            </p>
          </div>
        </div>
      </main>
    );
  }

  const tabs = [
    { id: 'dashboard' as Tab, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'services' as Tab, label: 'My Services', icon: FileText },
    { id: 'documents' as Tab, label: 'Documents', icon: Upload },
    { id: 'invoices' as Tab, label: 'Invoices', icon: Receipt },
    { id: 'support' as Tab, label: 'Support', icon: HeadphonesIcon },
  ];

  return (
    <main className="pt-16 min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-neutral-900">Welcome back, Arjun 👋</h1>
            <p className="text-neutral-500 text-sm mt-1">Here's what's happening with your services</p>
          </div>
          <div className="flex items-center gap-3">
            {/* Notifications */}
            <button className="relative w-9 h-9 border border-neutral-200 rounded-lg bg-white flex items-center justify-center hover:bg-neutral-50 transition-colors">
              <Bell className="w-4 h-4 text-neutral-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">2</span>
              </span>
            </button>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="flex items-center gap-2 px-3 py-2 text-sm text-neutral-600 border border-neutral-200 rounded-lg bg-white hover:bg-neutral-50 transition-colors"
            >
              <X className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <nav className="lg:w-56 flex-shrink-0">
            <div className="bg-white border border-neutral-200 rounded-2xl p-2">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeTab === id
                      ? 'bg-neutral-900 text-white'
                      : 'text-neutral-600 hover:bg-neutral-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>

            {/* Quick contact */}
            <div className="mt-4 bg-neutral-950 rounded-2xl p-4">
              <p className="text-white text-xs font-semibold mb-1">Need help?</p>
              <p className="text-neutral-400 text-xs mb-3">Your CA is available</p>
              <a href="tel:+91833300527" className="text-sm font-medium text-white flex items-center gap-1.5">
                📞 Call Now
              </a>
            </div>
          </nav>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Dashboard */}
            {activeTab === 'dashboard' && (
              <div className="space-y-5">
                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: 'Active Services', value: '4', icon: '🔄', color: 'text-blue-600' },
                    { label: 'Completed', value: '1', icon: '✅', color: 'text-green-600' },
                    { label: 'Compliance Score', value: '98%', icon: '⭐', color: 'text-amber-600' },
                    { label: 'Next Due', value: 'Feb 20', icon: '📅', color: 'text-purple-600' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white border border-neutral-200 rounded-xl p-4">
                      <div className="text-xl mb-2">{stat.icon}</div>
                      <div className={`text-2xl font-black ${stat.color}`}>{stat.value}</div>
                      <div className="text-xs text-neutral-500 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Service Progress */}
                <div className="bg-white border border-neutral-200 rounded-2xl p-6">
                  <h3 className="font-bold text-neutral-900 mb-5">Service Progress</h3>
                  <div className="space-y-4">
                    {services.map((service) => (
                      <div key={service.id} className="flex items-center gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1.5 gap-3">
                            <span className="text-sm font-medium text-neutral-900 truncate">{service.name}</span>
                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full border flex-shrink-0 ${getStatusColor(service.status)}`}>
                              {service.status}
                            </span>
                          </div>
                          <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                service.progress === 100 ? 'bg-green-500' :
                                service.progress >= 50 ? 'bg-blue-500' : 'bg-amber-500'
                              }`}
                              style={{ width: `${service.progress}%` }}
                            />
                          </div>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-xs text-neutral-400">{service.progress}% complete</span>
                            <span className="text-xs text-neutral-400">Updated {service.lastUpdate}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notifications */}
                <div className="bg-white border border-neutral-200 rounded-2xl p-6">
                  <h3 className="font-bold text-neutral-900 mb-5">Recent Notifications</h3>
                  <div className="space-y-3">
                    {notifications.map((notif) => (
                      <div key={notif.id} className={`flex items-start gap-3 p-3 rounded-xl border ${
                        notif.type === 'success' ? 'bg-green-50 border-green-100' :
                        notif.type === 'warning' ? 'bg-amber-50 border-amber-100' :
                        'bg-blue-50 border-blue-100'
                      }`}>
                        <div className="text-base mt-0.5">
                          {notif.type === 'success' ? '✅' : notif.type === 'warning' ? '⚠️' : 'ℹ️'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-neutral-900">{notif.title}</p>
                          <p className="text-xs text-neutral-600 mt-0.5">{notif.message}</p>
                        </div>
                        <span className="text-xs text-neutral-400 flex-shrink-0">{notif.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Services Tab */}
            {activeTab === 'services' && (
              <div className="space-y-4">
                <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden">
                  <div className="px-6 py-4 border-b border-neutral-100">
                    <h3 className="font-bold text-neutral-900">My Services</h3>
                  </div>
                  <div className="divide-y divide-neutral-100">
                    {services.map((service) => (
                      <div key={service.id} className="px-6 py-5 flex items-center gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold text-neutral-900 text-sm">{service.name}</h4>
                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${getStatusColor(service.status)}`}>
                              {service.status}
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-xs text-neutral-400">
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Due: {service.due}</span>
                            <span>{service.progress}% complete</span>
                          </div>
                          <div className="mt-2 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                service.progress === 100 ? 'bg-green-500' :
                                service.progress >= 50 ? 'bg-blue-500' : 'bg-amber-500'
                              }`}
                              style={{ width: `${service.progress}%` }}
                            />
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Documents Tab */}
            {activeTab === 'documents' && (
              <div className="space-y-5">
                {/* Upload zone */}
                <div className="border-2 border-dashed border-neutral-200 rounded-2xl p-8 text-center hover:border-neutral-400 transition-colors cursor-pointer bg-white">
                  <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Upload className="w-6 h-6 text-neutral-500" />
                  </div>
                  <p className="font-semibold text-neutral-900 mb-1">Upload Documents</p>
                  <p className="text-sm text-neutral-500 mb-3">Drag & drop files or click to browse</p>
                  <p className="text-xs text-neutral-400">Supported: PDF, JPG, PNG (Max 10MB per file)</p>
                </div>

                {/* Document list */}
                <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden">
                  <div className="px-6 py-4 border-b border-neutral-100">
                    <h3 className="font-bold text-neutral-900">Uploaded Documents</h3>
                  </div>
                  <div className="divide-y divide-neutral-100">
                    {documents.map((doc) => (
                      <div key={doc.name} className="px-6 py-4 flex items-center gap-4">
                        <div className="w-9 h-9 bg-neutral-100 rounded-lg flex items-center justify-center text-sm flex-shrink-0">
                          {doc.name.endsWith('.pdf') ? '📄' : '🖼️'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-neutral-900 truncate">{doc.name}</p>
                          <p className="text-xs text-neutral-400">{doc.type} · {doc.size} · {doc.uploaded}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${
                            doc.status === 'Verified' ? 'text-green-700 bg-green-50 border-green-200' : 'text-amber-700 bg-amber-50 border-amber-200'
                          }`}>
                            {doc.status === 'Verified' ? (
                              <span className="flex items-center gap-1"><Check className="w-3 h-3" /> Verified</span>
                            ) : 'Under Review'}
                          </span>
                          <button className="w-8 h-8 border border-neutral-200 rounded-lg flex items-center justify-center hover:bg-neutral-50 transition-colors">
                            <Download className="w-4 h-4 text-neutral-500" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Invoices Tab */}
            {activeTab === 'invoices' && (
              <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden">
                <div className="px-6 py-4 border-b border-neutral-100">
                  <h3 className="font-bold text-neutral-900">Invoices & Receipts</h3>
                </div>
                <div className="divide-y divide-neutral-100">
                  {invoices.map((inv) => (
                    <div key={inv.id} className="px-6 py-4 flex items-center gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-neutral-900">{inv.id}</span>
                          <span className="text-xs text-neutral-400">·</span>
                          <span className="text-sm text-neutral-600">{inv.service}</span>
                        </div>
                        <p className="text-xs text-neutral-400">{inv.date}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-neutral-900">{inv.amount}</span>
                        <span className="text-xs font-medium text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
                          {inv.status}
                        </span>
                        <button className="w-8 h-8 border border-neutral-200 rounded-lg flex items-center justify-center hover:bg-neutral-50 transition-colors">
                          <Download className="w-4 h-4 text-neutral-500" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Support Tab */}
            {activeTab === 'support' && (
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { icon: '📞', title: 'Call Us', desc: '+91 83330 0527', sub: 'Mon–Sat 9am–7pm' },
                    { icon: '💬', title: 'Live Chat', desc: 'Average 2 min reply', sub: 'Available 24/7' },
                    { icon: '✉️', title: 'Email', desc: 'hello@virtualca.in', sub: 'Reply within 4 hours' },
                  ].map((opt) => (
                    <button key={opt.title} className="bg-white border border-neutral-200 rounded-2xl p-5 text-left hover:border-neutral-300 transition-colors card-hover">
                      <div className="text-2xl mb-3">{opt.icon}</div>
                      <p className="font-semibold text-neutral-900 text-sm">{opt.title}</p>
                      <p className="text-sm text-neutral-600 mt-1">{opt.desc}</p>
                      <p className="text-xs text-neutral-400 mt-0.5">{opt.sub}</p>
                    </button>
                  ))}
                </div>

                {/* Raise a ticket */}
                <div className="bg-white border border-neutral-200 rounded-2xl p-6">
                  <h3 className="font-bold text-neutral-900 mb-5">Raise a Support Ticket</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Subject</label>
                      <input type="text" placeholder="Brief description of your issue" className="input-base" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Related Service</label>
                      <select className="input-base">
                        {services.map(s => <option key={s.id}>{s.name}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Message</label>
                      <textarea rows={4} placeholder="Describe your issue in detail..." className="input-base resize-none" />
                    </div>
                    <button className="px-6 py-2.5 bg-neutral-900 text-white font-medium text-sm rounded-xl hover:bg-neutral-700 transition-colors">
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
