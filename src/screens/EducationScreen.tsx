import { motion } from 'motion/react';
import { ScreenProps, glassClass, pageVariants, pageTransition } from '../types';
import { ArrowLeft, Search, BookOpen, GraduationCap, School, FileText, ChevronRight } from 'lucide-react';

export function EducationScreen({ setScreen }: ScreenProps) {
  const quickLinks = [
    { name: 'Admissions', icon: School, color: 'text-blue-500', bg: 'bg-blue-100' },
    { name: 'Results', icon: FileText, color: 'text-green-500', bg: 'bg-green-100' },
    { name: 'Scholarships', icon: GraduationCap, color: 'text-purple-500', bg: 'bg-purple-100' },
    { name: 'E-Library', icon: BookOpen, color: 'text-orange-500', bg: 'bg-orange-100' },
  ];

  const recentUpdates = [
    { title: 'Matric Annual Results Announced', board: 'Federal Board', date: 'Today' },
    { title: 'University Admissions Open Fall 2026', board: 'HEC', date: 'Yesterday' },
    { title: 'Ehsaas Undergraduate Scholarship', board: 'Govt. of Pakistan', date: '3 days ago' },
  ];

  return (
    <motion.div
      key="education"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="h-full w-full flex flex-col pt-12 pb-6 relative overflow-y-auto scrollbar-hide px-6"
    >
      <div className="flex items-center mb-6">
        <button onClick={() => setScreen('services')} className="w-10 h-10 bg-white/60 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-yellow-600 shadow-sm mr-4 hover:bg-white/80 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold text-yellow-800 tracking-tight">Education</h2>
      </div>

      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search schools, universities, courses..." 
          className="w-full bg-white/50 backdrop-blur-xl border border-white/60 shadow-sm focus:border-yellow-500 outline-none rounded-2xl pl-10 pr-4 py-3 text-sm text-gray-800 transition-all placeholder:text-gray-500"
        />
      </div>

      <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h3>
      <div className="grid grid-cols-2 gap-4 mb-8">
        {quickLinks.map((link, i) => (
          <button 
            key={i}
            onClick={() => link.name === 'Scholarships' && setScreen('scholarships')}
            className={`${glassClass} p-4 flex flex-col items-center justify-center text-center hover:bg-white/80 transition-colors cursor-pointer w-full`}
          >
            <div className={`w-12 h-12 rounded-2xl ${link.bg} flex items-center justify-center mb-3`}>
              <link.icon className={`w-6 h-6 ${link.color}`} />
            </div>
            <span className="text-sm font-bold text-gray-800">{link.name}</span>
          </button>
        ))}
      </div>

      <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Updates</h3>
      <div className="space-y-3">
        {recentUpdates.map((update, i) => (
          <div key={i} className={`${glassClass} p-4 flex items-center cursor-pointer hover:bg-white/80 transition-colors`}>
            <div className="flex-1 pr-4">
              <span className="text-[10px] font-bold text-yellow-600 uppercase tracking-wider mb-1 block">{update.board}</span>
              <h4 className="font-bold text-gray-800 text-sm leading-tight mb-1">{update.title}</h4>
              <span className="text-[10px] text-gray-500">{update.date}</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
