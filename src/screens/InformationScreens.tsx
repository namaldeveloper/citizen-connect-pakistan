import { motion } from 'motion/react';
import { ScreenProps, glassClass, pageVariants, pageTransition } from '../types';
import { ArrowLeft, GraduationCap, Briefcase, Landmark, ExternalLink, Bookmark, Clock, MapPin, Search, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

function AIRedirectOverlay({ url, onCancel, colorClass, bgClass }: { url: string, onCancel: () => void, colorClass: string, bgClass: string }) {
  const [dots, setDots] = useState('');
  
  useEffect(() => {
    const int = setInterval(() => setDots(p => p.length < 3 ? p + '.' : ''), 500);
    const timer = setTimeout(() => {
      window.open(url, '_blank');
      onCancel();
    }, 2500);
    return () => { clearInterval(int); clearTimeout(timer); };
  }, [url, onCancel]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-[100] bg-[#F4F8F5]/95 backdrop-blur-xl flex flex-col items-center justify-center p-6 text-center"
    >
      <div className={`w-24 h-24 ${bgClass} rounded-full flex items-center justify-center mb-6 relative shadow-inner`}>
         <div className="absolute inset-0 rounded-full border-4 border-white opacity-50 border-t-transparent animate-spin" />
         <Sparkles className={`w-10 h-10 ${colorClass} animate-pulse`} />
      </div>
      <h2 className={`text-2xl font-bold ${colorClass} mb-3`}>AI Routing{dots}</h2>
      <p className="text-gray-600 mb-8 max-w-[85%] leading-relaxed font-medium text-sm">Securely connecting to the official portal to continue...</p>
      <button onClick={onCancel} className="px-8 py-3 bg-white text-gray-700 font-bold rounded-full text-sm hover:bg-gray-50 transition-colors shadow-sm border border-gray-200">
        Cancel
      </button>
    </motion.div>
  );
}

const mockScholarships = [
  { id: 1, title: 'National Merit Scholarship', organization: 'HEC Pakistan', amount: 'Rs. 50,000/yr', deadline: '2026-09-15', tags: ['Undergraduate', 'Merit Based'], url: 'https://www.hec.gov.pk/' },
  { id: 2, title: 'Need-based Financial Aid', organization: 'Ehsaas Program', amount: 'Full Tuition', deadline: '2026-10-01', tags: ['All Levels', 'Need Based'], url: 'https://bisp.gov.pk/' },
  { id: 3, title: 'Women in STEM', organization: 'Ministry of IT', amount: 'Rs. 75,000/yr', deadline: '2026-11-20', tags: ['Postgraduate', 'Women'], url: 'https://moitt.gov.pk/' }
];

export function Scholarships({ setScreen }: ScreenProps) {
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

  return (
    <motion.div
      key="scholarships"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="h-full w-full flex flex-col pt-12 pb-6 relative overflow-y-auto scrollbar-hide px-6"
    >
      {redirectUrl && (
        <AIRedirectOverlay 
          url={redirectUrl} 
          onCancel={() => setRedirectUrl(null)} 
          colorClass="text-blue-600" 
          bgClass="bg-blue-100" 
        />
      )}
      
      <div className="flex items-center mb-6">
        <button onClick={() => setScreen('home')} className="w-10 h-10 bg-white/60 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-blue-600 shadow-sm mr-4 hover:bg-white/80 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold text-blue-800 tracking-tight">Scholarships</h2>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search scholarships..." 
          className="w-full bg-white/50 backdrop-blur-xl border border-white/60 shadow-sm focus:border-blue-500 outline-none rounded-2xl pl-10 pr-4 py-3 text-sm text-gray-800 transition-all placeholder:text-gray-500"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-6 pb-2">
        <span className="px-4 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-full whitespace-nowrap">All</span>
        <span className="px-4 py-1.5 bg-white/60 text-gray-600 text-xs font-bold rounded-full whitespace-nowrap border border-white">Undergraduate</span>
        <span className="px-4 py-1.5 bg-white/60 text-gray-600 text-xs font-bold rounded-full whitespace-nowrap border border-white">Masters</span>
        <span className="px-4 py-1.5 bg-white/60 text-gray-600 text-xs font-bold rounded-full whitespace-nowrap border border-white">Ph.D</span>
      </div>

      <div className="space-y-4">
        {mockScholarships.map(scholarship => (
          <div key={scholarship.id} onClick={() => setRedirectUrl(scholarship.url)} className={`${glassClass} p-5 rounded-2xl cursor-pointer hover:bg-white/80 transition-colors`}>
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-100 px-2 py-0.5 rounded">{scholarship.organization}</span>
              <button className="text-gray-400 hover:text-blue-500 transition-colors" onClick={(e) => e.stopPropagation()}>
                <Bookmark className="w-5 h-5" />
              </button>
            </div>
            
            <h3 className="font-bold text-gray-800 mb-1">{scholarship.title}</h3>
            
            <div className="flex items-center text-gray-500 text-xs font-medium mb-4">
              <Clock className="w-3.5 h-3.5 mr-1 text-gray-400" />
              Deadline: {new Date(scholarship.deadline).toLocaleDateString()}
            </div>
            
            <div className="flex items-center justify-between mt-2 pt-4 border-t border-white/40">
              <span className="text-xs font-bold text-gray-800">{scholarship.amount}</span>
              <button onClick={(e) => { e.stopPropagation(); setRedirectUrl(scholarship.url); }} className="px-4 py-1.5 bg-blue-50 text-blue-700 font-bold rounded-xl text-xs flex items-center">
                Apply <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

const mockJobs = [
  { id: 1, title: 'Data Analyst', company: 'Punjab IT Board', location: 'Lahore', type: 'Full-time', salary: 'Rs. 90,000/mo', url: 'https://pitb.gov.pk/jobs' },
  { id: 2, title: 'Primary Teacher', company: 'Federal Directorate of Education', location: 'Islamabad', type: 'Contract', salary: 'Rs. 45,000/mo', url: 'https://fde.gov.pk/' },
  { id: 3, title: 'Software Engineer', company: 'NADRA', location: 'Karachi', type: 'Full-time', salary: 'Rs. 120,000/mo', url: 'https://nadra.gov.pk/careers/' }
];

export function Jobs({ setScreen }: ScreenProps) {
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

  return (
    <motion.div
      key="jobs"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="h-full w-full flex flex-col pt-12 pb-6 relative overflow-y-auto scrollbar-hide px-6"
    >
      {redirectUrl && (
        <AIRedirectOverlay 
          url={redirectUrl} 
          onCancel={() => setRedirectUrl(null)} 
          colorClass="text-purple-600" 
          bgClass="bg-purple-100" 
        />
      )}

      <div className="flex items-center mb-6">
        <button onClick={() => setScreen('home')} className="w-10 h-10 bg-white/60 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-purple-600 shadow-sm mr-4 hover:bg-white/80 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold text-purple-800 tracking-tight">Govt Jobs</h2>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search jobs..." 
          className="w-full bg-white/50 backdrop-blur-xl border border-white/60 shadow-sm focus:border-purple-500 outline-none rounded-2xl pl-10 pr-4 py-3 text-sm text-gray-800 transition-all placeholder:text-gray-500"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-6 pb-2">
        <span className="px-4 py-1.5 bg-purple-600 text-white text-xs font-bold rounded-full whitespace-nowrap">All Jobs</span>
        <span className="px-4 py-1.5 bg-white/60 text-gray-600 text-xs font-bold rounded-full whitespace-nowrap border border-white">IT & Tech</span>
        <span className="px-4 py-1.5 bg-white/60 text-gray-600 text-xs font-bold rounded-full whitespace-nowrap border border-white">Education</span>
        <span className="px-4 py-1.5 bg-white/60 text-gray-600 text-xs font-bold rounded-full whitespace-nowrap border border-white">Healthcare</span>
      </div>

      <div className="space-y-4">
        {mockJobs.map(job => (
          <div key={job.id} onClick={() => setRedirectUrl(job.url)} className={`${glassClass} p-5 rounded-2xl cursor-pointer hover:bg-white/80 transition-colors`}>
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-gray-800">{job.title}</h3>
              <button className="text-gray-400 hover:text-purple-500 transition-colors" onClick={(e) => e.stopPropagation()}>
                <Bookmark className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-sm text-purple-700 font-semibold mb-3">{job.company}</p>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="flex items-center text-gray-500 text-xs font-medium">
                <MapPin className="w-4 h-4 mr-1.5 text-gray-400" />
                {job.location}
              </div>
              <div className="flex items-center text-gray-500 text-xs font-medium">
                <Briefcase className="w-4 h-4 mr-1.5 text-gray-400" />
                {job.type}
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-2 pt-4 border-t border-white/40">
              <span className="text-xs font-bold text-gray-800">{job.salary}</span>
              <button onClick={(e) => { e.stopPropagation(); setRedirectUrl(job.url); }} className="px-4 py-1.5 bg-purple-50 text-purple-700 font-bold rounded-xl text-xs flex items-center">
                Apply <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

const mockSchemes = [
  { id: 1, title: 'Kamyab Jawan Program', category: 'Youth Empowerment', description: 'Financial support and training for youth entrepreneurship.', active: true, url: 'https://kamyabjawan.gov.pk/' },
  { id: 2, title: 'Naya Pakistan Housing', category: 'Housing', description: 'Affordable housing scheme for low-income citizens.', active: true, url: 'https://nphp.nadra.gov.pk/' },
  { id: 3, title: 'Sehat Sahulat Program', category: 'Healthcare', description: 'Health insurance initiative for indoor healthcare services.', active: true, url: 'https://www.pmhealthprogram.gov.pk/' }
];

export function Schemes({ setScreen }: ScreenProps) {
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

  return (
    <motion.div
      key="schemes"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="h-full w-full flex flex-col pt-12 pb-6 relative overflow-y-auto scrollbar-hide px-6"
    >
      {redirectUrl && (
        <AIRedirectOverlay 
          url={redirectUrl} 
          onCancel={() => setRedirectUrl(null)} 
          colorClass="text-green-600" 
          bgClass="bg-green-100" 
        />
      )}

      <div className="flex items-center mb-6">
        <button onClick={() => setScreen('home')} className="w-10 h-10 bg-white/60 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-green-600 shadow-sm mr-4 hover:bg-white/80 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold text-green-800 tracking-tight">Govt Schemes</h2>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input 
          type="text" 
          placeholder="Find schemes..." 
          className="w-full bg-white/50 backdrop-blur-xl border border-white/60 shadow-sm focus:border-green-500 outline-none rounded-2xl pl-10 pr-4 py-3 text-sm text-gray-800 transition-all placeholder:text-gray-500"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-6 pb-2">
        <span className="px-4 py-1.5 bg-green-600 text-white text-xs font-bold rounded-full whitespace-nowrap">All Schemes</span>
        <span className="px-4 py-1.5 bg-white/60 text-gray-600 text-xs font-bold rounded-full whitespace-nowrap border border-white">Youth</span>
        <span className="px-4 py-1.5 bg-white/60 text-gray-600 text-xs font-bold rounded-full whitespace-nowrap border border-white">Health</span>
        <span className="px-4 py-1.5 bg-white/60 text-gray-600 text-xs font-bold rounded-full whitespace-nowrap border border-white">Housing</span>
      </div>

      <div className="space-y-4">
        {mockSchemes.map(scheme => (
          <div key={scheme.id} onClick={() => setRedirectUrl(scheme.url)} className={`${glassClass} p-5 rounded-2xl border-l-4 ${scheme.active ? 'border-l-green-500' : 'border-l-gray-300'} cursor-pointer hover:bg-white/80 transition-colors`}>
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-green-600 bg-green-100 px-2 py-0.5 rounded text-center">{scheme.category}</span>
              {scheme.active && (
                <span className="flex items-center text-[10px] font-bold text-green-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></span>
                  Active
                </span>
              )}
            </div>
            
            <h3 className="font-bold text-gray-800 mb-2">{scheme.title}</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">{scheme.description}</p>
            
            <button onClick={(e) => { e.stopPropagation(); setRedirectUrl(scheme.url); }} className="w-full py-2.5 bg-green-50 text-green-700 font-bold rounded-xl text-sm hover:bg-green-100 transition-colors flex items-center justify-center">
              Visit Official Site <ExternalLink className="w-4 h-4 ml-2" />
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
