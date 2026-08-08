import { motion } from 'motion/react';
import { ScreenProps, glassClass, pageVariants, pageTransition, glassInputClass, glassButtonClass } from '../types';
import { ArrowLeft, Search, Plus, MapPin, Clock, Image as ImageIcon, CheckCircle } from 'lucide-react';
import { useState } from 'react';

type ItemType = 'lost' | 'found';

interface Item {
  id: number;
  title: string;
  type: ItemType;
  location: string;
  date: string;
  description: string;
  image?: string;
  status: 'active' | 'resolved';
}

const mockItems: Item[] = [
  { id: 1, title: 'Black Wallet', type: 'lost', location: 'G-9 Markaz, Islamabad', date: '2026-08-05', description: 'Lost my black leather wallet near the metro station. It contains my CNIC and some cards.', status: 'active' },
  { id: 2, title: 'Found Car Keys', type: 'found', location: 'F-7 Jinnah Super', date: '2026-08-04', description: 'Found a set of Honda car keys near the fountain.', status: 'active' },
  { id: 3, title: 'Blue Backpack', type: 'lost', location: 'Centaurus Mall', date: '2026-08-03', description: 'Left my blue backpack in the food court.', status: 'resolved' },
];

export function LostAndFoundScreen({ setScreen }: ScreenProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'lost' | 'found'>('all');
  const [isReporting, setIsReporting] = useState(false);
  const [reportType, setReportType] = useState<ItemType>('lost');
  
  const filteredItems = mockItems.filter(item => activeTab === 'all' || item.type === activeTab);

  if (isReporting) {
    return (
      <motion.div
        key="report-item"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
        className="h-full w-full flex flex-col pt-12 pb-6 relative overflow-y-auto scrollbar-hide px-6"
      >
        <div className="flex items-center mb-6">
          <button onClick={() => setIsReporting(false)} className="w-10 h-10 bg-white/60 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-blue-600 shadow-sm mr-4 hover:bg-white/80 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-2xl font-bold text-blue-800 tracking-tight">Report Item</h2>
        </div>

        <div className={`${glassClass} p-6 rounded-2xl`}>
          <div className="flex space-x-2 mb-6 p-1 bg-white/50 rounded-xl">
            <button 
              onClick={() => setReportType('lost')}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${reportType === 'lost' ? 'bg-red-500 text-white shadow-md' : 'text-gray-500'}`}
            >
              I Lost Something
            </button>
            <button 
              onClick={() => setReportType('found')}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${reportType === 'found' ? 'bg-green-500 text-white shadow-md' : 'text-gray-500'}`}
            >
              I Found Something
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-gray-600 ml-1 mb-1 block">Title</label>
              <input type="text" placeholder="e.g. Black Wallet" className={glassInputClass} />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-600 ml-1 mb-1 block">Location</label>
              <input type="text" placeholder="Where was it lost/found?" className={glassInputClass} />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-600 ml-1 mb-1 block">Date</label>
              <input type="date" className={glassInputClass} />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-600 ml-1 mb-1 block">Description</label>
              <textarea placeholder="Provide more details..." className={`${glassInputClass} min-h-[100px] resize-none`} />
            </div>
            <div className="pt-2">
              <button className="w-full border-2 border-dashed border-gray-300 rounded-2xl p-4 flex flex-col items-center justify-center text-gray-500 hover:bg-white/50 transition-colors">
                <ImageIcon className="w-6 h-6 mb-2" />
                <span className="text-sm font-semibold">Upload Photo</span>
              </button>
            </div>
          </div>

          <button onClick={() => setIsReporting(false)} className={`mt-8 w-full ${reportType === 'lost' ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white font-bold rounded-2xl px-5 py-4 shadow-md transition-colors text-sm uppercase tracking-wider`}>
            Submit Report
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      key="lost-and-found"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="h-full w-full flex flex-col pt-12 pb-6 relative overflow-y-auto scrollbar-hide px-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <button onClick={() => setScreen('services')} className="w-10 h-10 bg-white/60 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-blue-600 shadow-sm mr-4 hover:bg-white/80 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-2xl font-bold text-blue-800 tracking-tight">Lost & Found</h2>
        </div>
        <button onClick={() => setIsReporting(true)} className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-md hover:bg-blue-700 transition-colors">
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search items..." 
          className="w-full bg-white/50 backdrop-blur-xl border border-white/60 shadow-sm focus:border-blue-500 outline-none rounded-2xl pl-10 pr-4 py-3 text-sm text-gray-800 transition-all placeholder:text-gray-500"
        />
      </div>

      <div className="flex gap-2 mb-6">
        <button onClick={() => setActiveTab('all')} className={`flex-1 py-2 px-4 rounded-xl text-sm font-bold transition-colors ${activeTab === 'all' ? 'bg-blue-600 text-white shadow-md' : 'bg-white/60 text-gray-600'}`}>All</button>
        <button onClick={() => setActiveTab('lost')} className={`flex-1 py-2 px-4 rounded-xl text-sm font-bold transition-colors ${activeTab === 'lost' ? 'bg-red-500 text-white shadow-md' : 'bg-white/60 text-gray-600'}`}>Lost</button>
        <button onClick={() => setActiveTab('found')} className={`flex-1 py-2 px-4 rounded-xl text-sm font-bold transition-colors ${activeTab === 'found' ? 'bg-green-500 text-white shadow-md' : 'bg-white/60 text-gray-600'}`}>Found</button>
      </div>

      <div className="space-y-4">
        {filteredItems.map(item => (
          <div key={item.id} className={`${glassClass} p-5 rounded-2xl relative overflow-hidden`}>
            <div className={`absolute top-0 left-0 w-1 h-full ${item.type === 'lost' ? 'bg-red-500' : 'bg-green-500'}`} />
            
            <div className="flex justify-between items-start mb-2">
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${item.type === 'lost' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                {item.type}
              </span>
              {item.status === 'resolved' && (
                <span className="flex items-center text-xs font-bold text-gray-500">
                  <CheckCircle className="w-3 h-3 mr-1" /> Resolved
                </span>
              )}
            </div>
            
            <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
            <p className="text-sm text-gray-600 mb-3 leading-relaxed">{item.description}</p>
            
            <div className="grid grid-cols-1 gap-2 mb-3">
              <div className="flex items-center text-gray-500 text-xs font-medium">
                <MapPin className="w-3.5 h-3.5 mr-1.5 text-gray-400" />
                {item.location}
              </div>
              <div className="flex items-center text-gray-500 text-xs font-medium">
                <Clock className="w-3.5 h-3.5 mr-1.5 text-gray-400" />
                {new Date(item.date).toLocaleDateString()}
              </div>
            </div>

            <button className="w-full py-2 bg-blue-50 text-blue-700 font-bold rounded-xl text-xs hover:bg-blue-100 transition-colors mt-2">
              Contact Reporter
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
