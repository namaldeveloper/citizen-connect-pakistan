import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ScreenProps, Screen, glassClass, glassClassDark, pageVariants, pageTransition } from '../types';
import { Search, GraduationCap, Briefcase, FileWarning, ShieldAlert, Landmark, HeartHandshake, Sparkles, Map, Calendar, Stethoscope, BookOpen, Calculator, MessageSquare, BarChart, ChevronRight, Bell, Building, X, Loader2, CreditCard } from 'lucide-react';

export function Dashboard({ setScreen }: ScreenProps) {
  const quickActions = [
    { name: 'Scholarships', id: 'scholarships', icon: GraduationCap, color: 'text-blue-600', bg: 'bg-blue-100/50' },
    { name: 'Jobs', id: 'jobs', icon: Briefcase, color: 'text-purple-600', bg: 'bg-purple-100/50' },
    { name: 'Govt Schemes', id: 'schemes', icon: Landmark, color: 'text-green-600', bg: 'bg-green-100/50' },
    { name: 'Volunteer', id: 'volunteer', icon: HeartHandshake, color: 'text-pink-600', bg: 'bg-pink-100/50' },
    { name: 'AI Assist', id: 'ai-assistant', icon: Sparkles, color: 'text-[#D4AF37]', bg: 'bg-[#D4AF37]/20' },
    { name: 'Lost & Found', id: 'lost-and-found', icon: Search, color: 'text-blue-600', bg: 'bg-blue-100/50' },
  ];

  return (
    <motion.div
      key="home"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="h-full w-full flex flex-col pt-12 pb-24 relative overflow-y-auto scrollbar-hide"
    >
      {/* Floating SOS Button */}
      <button 
        onClick={() => setScreen('emergency')}
        className="fixed bottom-28 right-6 w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-[0_8px_30px_rgba(239,68,68,0.4)] flex items-center justify-center z-50 active:scale-95 transition-transform border-4 border-white/40"
      >
        <ShieldAlert className="w-7 h-7 text-white fill-red-500/50" />
      </button>

      <div className="px-6 mb-8 flex justify-between items-center">
        <div>
          <p className="text-sm font-medium text-gray-500">Good Morning</p>
          <h2 className="text-2xl font-bold text-[#0B6E4F] tracking-tight">Ahmed Khan</h2>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 shadow-sm flex items-center justify-center relative">
          <Bell className="w-6 h-6 text-[#0B6E4F]" />
          <div className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border border-white"></div>
        </div>
      </div>

      <div className="px-6 mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search services, jobs, schemes..." 
            className="w-full bg-white/50 backdrop-blur-xl border border-white/60 shadow-sm focus:border-[#0B6E4F] outline-none rounded-2xl pl-12 pr-5 py-4 text-gray-800 transition-all placeholder:text-gray-500"
          />
        </div>
      </div>

      <div className="px-6 mb-8">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold text-gray-800">Quick Actions</h3>
          <button onClick={() => setScreen('services')} className="text-sm font-semibold text-[#0B6E4F]">See All</button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {quickActions.map((action, i) => (
            <div key={i} onClick={() => setScreen(action.id as unknown as Screen)} className={`${glassClass} p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-white/80 transition-colors`}>
              <div className={`w-12 h-12 rounded-full ${action.bg} flex items-center justify-center mb-2`}>
                <action.icon className={`w-6 h-6 ${action.color}`} />
              </div>
              <span className="text-xs font-semibold text-gray-700">{action.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 mb-8">
         <h3 className="text-lg font-bold text-gray-800 mb-4">Latest Updates</h3>
         <div onClick={() => setScreen('schemes')} className={`${glassClassDark} p-6 relative overflow-hidden cursor-pointer active:scale-[0.98] transition-transform`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-1/3 -translate-y-1/3"></div>
            <div className="relative z-10 flex justify-between items-center">
              <div>
                <span className="inline-block px-2 py-1 bg-white/20 rounded-lg text-xs font-semibold mb-2">Govt Scheme</span>
                <h4 className="text-xl font-bold mb-1">Prime Minister Youth Loan</h4>
                <p className="text-sm text-white/80 line-clamp-2">Apply now for interest-free loans to start your own business. Applications close soon.</p>
              </div>
              <ChevronRight className="w-6 h-6 text-white/70 ml-4 shrink-0" />
            </div>
         </div>
      </div>

      <div className="px-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Nearby Services</h3>
        <div className={`${glassClass} p-5 flex items-center mb-4`}>
          <div className="w-12 h-12 rounded-xl bg-blue-100/50 flex items-center justify-center mr-4">
            <Stethoscope className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-gray-800">Jinnah Hospital</h4>
            <p className="text-xs text-gray-500">2.5 km away • Open 24/7</p>
          </div>
          <button onClick={() => setScreen('map')} className="px-4 py-2 bg-gray-100/50 rounded-xl text-sm font-semibold text-gray-700">Map</button>
        </div>
        <div className={`${glassClass} p-5 flex items-center`}>
          <div className="w-12 h-12 rounded-xl bg-orange-100/50 flex items-center justify-center mr-4">
            <Building className="w-6 h-6 text-orange-600" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-gray-800">NADRA Mega Center</h4>
            <p className="text-xs text-gray-500">4.1 km away • Closes 5 PM</p>
          </div>
          <button onClick={() => setScreen('map')} className="px-4 py-2 bg-gray-100/50 rounded-xl text-sm font-semibold text-gray-700">Map</button>
        </div>
      </div>
    </motion.div>
  );
}

export function Services({ setScreen }: ScreenProps) {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);

  const allServices = [
    { name: 'Area Map', id: 'area-map', icon: Map, color: 'text-indigo-600' },
    { name: 'Events', id: 'events', icon: Calendar, color: 'text-orange-600' },
    { name: 'Education', id: 'education', icon: BookOpen, color: 'text-yellow-600' },
    { name: 'Health', id: 'health', icon: Stethoscope, color: 'text-red-500' },
    { name: 'Budget', id: 'budget', icon: BarChart, color: 'text-teal-600' },
    { name: 'Feedback', id: 'feedback', icon: MessageSquare, color: 'text-purple-600' },
    { name: 'Polls', id: 'polls', icon: Calculator, color: 'text-cyan-600' },
    { name: 'Payments', id: 'payment', icon: CreditCard, color: 'text-emerald-600' },
  ];

  const handleServiceClick = async (service: any) => {
    if (['jobs', 'schemes', 'scholarships', 'area-map', 'ai-assistant', 'polls', 'lost-and-found', 'events', 'volunteer', 'feedback', 'health', 'education', 'budget', 'payment'].includes(service.id)) {
      setScreen(service.id === 'area-map' ? 'map' : service.id);
      return;
    }

    setActiveService(service.name);
    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch(`/api/services/${service.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setResponse({ success: false, message: 'Failed to connect to service.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      key="services"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="h-full w-full flex flex-col pt-16 pb-24 relative overflow-y-auto scrollbar-hide px-6"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#0B6E4F] tracking-tight">Other Services</h2>
        <p className="text-gray-600 mt-1 text-sm">Explore comprehensive government resources</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {allServices.map((service, i) => (
          <button 
            key={i} 
            onClick={() => handleServiceClick(service)}
            className={`${glassClass} p-5 flex flex-col items-center text-center hover:bg-white/80 transition-colors cursor-pointer w-full`}
          >
            <div className={`w-14 h-14 rounded-2xl bg-white/50 shadow-inner flex items-center justify-center mb-3`}>
              <service.icon className={`w-7 h-7 ${service.color}`} />
            </div>
            <span className="text-sm font-bold text-gray-800">{service.name}</span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl w-full p-6 shadow-2xl relative"
            >
              <button 
                onClick={() => setActiveService(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200"
              >
                <X className="w-5 h-5" />
              </button>
              
              <h3 className="text-xl font-bold text-[#0B6E4F] mb-4 pr-8">{activeService}</h3>
              
              {loading ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <Loader2 className="w-10 h-10 text-[#0B6E4F] animate-spin mb-4" />
                  <p className="text-gray-500 text-sm font-medium animate-pulse">Connecting securely...</p>
                </div>
              ) : response ? (
                <div className="space-y-4">
                  <div className={`p-4 rounded-xl ${response.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                    <p className="font-semibold text-sm">{response.message}</p>
                  </div>
                  {response.data && (
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <p className="text-xs text-gray-500 uppercase font-bold mb-2 tracking-wider">Connection Details</p>
                      <div className="space-y-1">
                        <p className="text-sm font-mono text-gray-700">Status: <span className="text-[#0B6E4F] font-bold">{response.data.status}</span></p>
                        <p className="text-sm font-mono text-gray-700">Req ID: {response.data.requestId}</p>
                        <p className="text-sm font-mono text-gray-700">Time: {new Date(response.data.timestamp).toLocaleTimeString()}</p>
                      </div>
                    </div>
                  )}
                  <button 
                    onClick={() => setActiveService(null)}
                    className="w-full py-3 bg-[#0B6E4F] text-white rounded-xl font-bold mt-2"
                  >
                    Continue
                  </button>
                </div>
              ) : null}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
