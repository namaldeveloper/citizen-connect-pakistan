import { motion } from 'motion/react';
import { ScreenProps, glassClass, pageVariants, pageTransition } from '../types';
import { ArrowLeft, Search, BarChart3, TrendingUp, TrendingDown, PieChart, Wallet, CreditCard, DollarSign } from 'lucide-react';
import { useState } from 'react';

export function BudgetScreen({ setScreen }: ScreenProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'projects'>('overview');

  const budgetCategories = [
    { name: 'Education', allocated: '45B', spent: '20B', percentage: 44, color: 'bg-blue-500' },
    { name: 'Healthcare', allocated: '35B', spent: '25B', percentage: 71, color: 'bg-red-500' },
    { name: 'Infrastructure', allocated: '60B', spent: '15B', percentage: 25, color: 'bg-orange-500' },
    { name: 'Defense', allocated: '80B', spent: '60B', percentage: 75, color: 'bg-green-500' },
  ];

  return (
    <motion.div
      key="budget"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="h-full w-full flex flex-col pt-12 pb-6 relative overflow-y-auto scrollbar-hide px-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <button onClick={() => setScreen('services')} className="w-10 h-10 bg-white/60 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-teal-600 shadow-sm mr-4 hover:bg-white/80 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-2xl font-bold text-teal-800 tracking-tight">Govt Budget</h2>
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        <button onClick={() => setActiveTab('overview')} className={`flex-1 py-2 px-4 rounded-xl text-sm font-bold transition-colors ${activeTab === 'overview' ? 'bg-teal-600 text-white shadow-md' : 'bg-white/60 text-gray-600'}`}>Overview</button>
        <button onClick={() => setActiveTab('projects')} className={`flex-1 py-2 px-4 rounded-xl text-sm font-bold transition-colors ${activeTab === 'projects' ? 'bg-teal-600 text-white shadow-md' : 'bg-white/60 text-gray-600'}`}>Projects</button>
      </div>

      {activeTab === 'overview' ? (
        <div className="space-y-6">
          <div className={`${glassClass} p-6 rounded-3xl relative overflow-hidden bg-teal-600 text-white border-none`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-1/3 -translate-y-1/3"></div>
            <h3 className="text-teal-100 text-sm font-semibold mb-1">Total National Budget 2026-27</h3>
            <div className="text-3xl font-bold mb-4">Rs. 18.5 Trillion</div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-teal-100 text-xs mb-1">Revenue</p>
                <p className="font-bold flex items-center"><TrendingUp className="w-4 h-4 mr-1 text-green-300" /> Rs. 13.0T</p>
              </div>
              <div>
                <p className="text-teal-100 text-xs mb-1">Deficit</p>
                <p className="font-bold flex items-center"><TrendingDown className="w-4 h-4 mr-1 text-red-300" /> Rs. 5.5T</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Allocations</h3>
            <div className="space-y-4">
              {budgetCategories.map((category, i) => (
                <div key={i} className={`${glassClass} p-4 rounded-2xl`}>
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-bold text-gray-800">{category.name}</span>
                    <span className="text-xs font-semibold text-gray-500">{category.spent} / {category.allocated} Spent</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div className={`h-full ${category.color} rounded-full`} style={{ width: `${category.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
           <div className={`${glassClass} p-5 rounded-2xl`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-orange-100 text-orange-600">
                Infrastructure
              </span>
              <span className="text-xs font-bold text-gray-500">20% Complete</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">M-14 Motorway Extension</h3>
            <p className="text-sm text-gray-600 mb-4">Extension of the current motorway linking southern districts.</p>
            <div className="flex items-center text-xs font-bold text-gray-500 bg-gray-50 p-2 rounded-lg justify-between">
              <span>Budget: Rs. 40 Billion</span>
              <span>Est. 2028</span>
            </div>
          </div>

          <div className={`${glassClass} p-5 rounded-2xl`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-600">
                Tech
              </span>
              <span className="text-xs font-bold text-gray-500">60% Complete</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">National Tech Parks</h3>
            <p className="text-sm text-gray-600 mb-4">Establishment of 5 new IT zones across major cities.</p>
            <div className="flex items-center text-xs font-bold text-gray-500 bg-gray-50 p-2 rounded-lg justify-between">
              <span>Budget: Rs. 15 Billion</span>
              <span>Est. 2027</span>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
