import { motion } from 'motion/react';
import { ScreenProps, glassClass, pageVariants, pageTransition } from '../types';
import { ArrowLeft, Search, HeartHandshake, MapPin, Clock, Users, Plus, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const mockOpportunities = [
  { id: 1, title: 'Community Cleanup', date: '2026-08-15', time: '08:00 AM', location: 'F-9 Park, Islamabad', volunteersNeeded: 50, volunteersRegistered: 32, category: 'Environment', status: 'open' },
  { id: 2, title: 'Food Drive', date: '2026-08-20', time: '10:00 AM', location: 'Blue Area', volunteersNeeded: 20, volunteersRegistered: 20, category: 'Social Work', status: 'full' },
  { id: 3, title: 'Senior Care Assist', date: '2026-08-25', time: '02:00 PM', location: 'Edhi Home', volunteersNeeded: 15, volunteersRegistered: 8, category: 'Care', status: 'open' },
];

export function VolunteerScreen({ setScreen }: ScreenProps) {
  const [activeTab, setActiveTab] = useState<'discover' | 'my-tasks'>('discover');
  const [selectedTask, setSelectedTask] = useState<any>(null);
  const [isApplying, setIsApplying] = useState(false);

  if (selectedTask) {
    return (
      <motion.div
        key="volunteer-apply"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
        className="h-full w-full flex flex-col pt-12 pb-6 relative overflow-y-auto scrollbar-hide px-6"
      >
        <div className="flex items-center mb-6">
          <button onClick={() => setSelectedTask(null)} className="w-10 h-10 bg-white/60 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-pink-600 shadow-sm mr-4 hover:bg-white/80 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-2xl font-bold text-pink-800 tracking-tight">Apply to Volunteer</h2>
        </div>

        <div className={`${glassClass} p-6 rounded-2xl`}>
          <div className="mb-6">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded inline-block mb-2 bg-pink-100 text-pink-600">
              {selectedTask.category}
            </span>
            <h3 className="font-bold text-gray-800 text-lg leading-tight mb-2">{selectedTask.title}</h3>
            
            <div className="grid grid-cols-1 gap-2 mt-4">
              <div className="flex items-center text-gray-600 text-sm font-medium">
                <Clock className="w-4 h-4 mr-2 text-pink-500" />
                {new Date(selectedTask.date).toLocaleDateString()} at {selectedTask.time}
              </div>
              <div className="flex items-center text-gray-600 text-sm font-medium">
                <MapPin className="w-4 h-4 mr-2 text-pink-500" />
                {selectedTask.location}
              </div>
              <div className="flex items-center text-gray-600 text-sm font-medium">
                <Users className="w-4 h-4 mr-2 text-pink-500" />
                {selectedTask.volunteersRegistered} / {selectedTask.volunteersNeeded} Volunteers
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-gray-600 ml-1 mb-1 block">Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full bg-white/70 backdrop-blur-[20px] border border-white/40 focus:border-pink-500 outline-none rounded-2xl px-5 py-3 text-gray-800 transition-all placeholder:text-gray-500 shadow-sm" />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-600 ml-1 mb-1 block">Phone Number</label>
              <input type="tel" placeholder="+92 300 1234567" className="w-full bg-white/70 backdrop-blur-[20px] border border-white/40 focus:border-pink-500 outline-none rounded-2xl px-5 py-3 text-gray-800 transition-all placeholder:text-gray-500 shadow-sm" />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-600 ml-1 mb-1 block">Why do you want to volunteer?</label>
              <textarea placeholder="Briefly explain your motivation..." className="w-full bg-white/70 backdrop-blur-[20px] border border-white/40 focus:border-pink-500 outline-none rounded-2xl px-5 py-3 text-gray-800 transition-all placeholder:text-gray-500 shadow-sm min-h-[80px] resize-none" />
            </div>
          </div>

          <button 
            onClick={() => {
              setIsApplying(true);
              setTimeout(() => {
                setIsApplying(false);
                setSelectedTask(null);
                setActiveTab('my-tasks');
              }, 1500);
            }}
            disabled={isApplying}
            className={`mt-8 w-full bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-2xl px-5 py-4 shadow-md transition-colors text-sm uppercase tracking-wider ${isApplying ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isApplying ? 'Applying...' : 'Submit Application'}
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      key="volunteer"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="h-full w-full flex flex-col pt-12 pb-6 relative overflow-y-auto scrollbar-hide px-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <button onClick={() => setScreen('home')} className="w-10 h-10 bg-white/60 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-pink-600 shadow-sm mr-4 hover:bg-white/80 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-2xl font-bold text-pink-800 tracking-tight">Volunteer</h2>
        </div>
        <button className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white shadow-md hover:bg-pink-700 transition-colors">
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search opportunities..." 
          className="w-full bg-white/50 backdrop-blur-xl border border-white/60 shadow-sm focus:border-pink-500 outline-none rounded-2xl pl-10 pr-4 py-3 text-sm text-gray-800 transition-all placeholder:text-gray-500"
        />
      </div>

      <div className="flex gap-2 mb-6">
        <button onClick={() => setActiveTab('discover')} className={`flex-1 py-2 px-4 rounded-xl text-sm font-bold transition-colors ${activeTab === 'discover' ? 'bg-pink-600 text-white shadow-md' : 'bg-white/60 text-gray-600'}`}>Discover</button>
        <button onClick={() => setActiveTab('my-tasks')} className={`flex-1 py-2 px-4 rounded-xl text-sm font-bold transition-colors ${activeTab === 'my-tasks' ? 'bg-pink-600 text-white shadow-md' : 'bg-white/60 text-gray-600'}`}>My Tasks</button>
      </div>

      <div className="space-y-4">
        {mockOpportunities.map(task => (
          <div key={task.id} className={`${glassClass} p-5 rounded-2xl relative overflow-hidden`}>
            {task.status === 'full' && (
              <div className="absolute top-3 right-3 flex items-center text-[10px] font-bold text-gray-500 uppercase">
                <CheckCircle className="w-3 h-3 mr-1" /> Full
              </div>
            )}
            
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-pink-100 text-pink-600">
                {task.category}
              </span>
            </div>
            
            <h3 className="font-bold text-gray-800 mb-2 pr-10">{task.title}</h3>
            
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="flex items-center text-gray-500 text-xs font-medium">
                <Clock className="w-3.5 h-3.5 mr-1.5 text-gray-400" />
                {new Date(task.date).toLocaleDateString()}
              </div>
              <div className="flex items-center text-gray-500 text-xs font-medium">
                <Users className="w-3.5 h-3.5 mr-1.5 text-gray-400" />
                {task.volunteersRegistered}/{task.volunteersNeeded}
              </div>
            </div>
            
            <div className="flex items-center text-gray-500 text-xs font-medium mb-4">
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-gray-400" />
              {task.location}
            </div>

            <button 
              onClick={() => setSelectedTask(task)}
              disabled={task.status === 'full'}
              className={`w-full py-2 font-bold rounded-xl text-xs transition-colors ${task.status === 'full' ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-pink-50 text-pink-700 hover:bg-pink-100'}`}
            >
              {task.status === 'full' ? 'Registration Closed' : 'Apply Now'}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
