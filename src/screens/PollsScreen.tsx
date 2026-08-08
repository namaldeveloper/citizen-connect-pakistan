import { motion } from 'motion/react';
import type { ScreenProps } from "../types";
import { glassClass, pageVariants, pageTransition } from "../types";
import { ArrowLeft, CheckCircle2, BarChart2 } from 'lucide-react';
import { useState } from 'react';

const mockPolls = [
  {
    id: 1,
    question: 'Should the city park extend its opening hours to 10 PM?',
    options: [
      { id: 'opt1', text: 'Yes, I would visit later.', votes: 450 },
      { id: 'opt2', text: 'No, it should close at 8 PM for maintenance.', votes: 210 },
      { id: 'opt3', text: 'Indifferent', votes: 50 },
    ],
    totalVotes: 710,
    isActive: true,
  },
  {
    id: 2,
    question: 'Which area needs road maintenance on priority?',
    options: [
      { id: 'opt1', text: 'Gulberg', votes: 1200 },
      { id: 'opt2', text: 'DHA', votes: 800 },
      { id: 'opt3', text: 'Model Town', votes: 950 },
    ],
    totalVotes: 2950,
    isActive: true,
  },
  {
    id: 3,
    question: 'Do you support the new garbage collection schedule?',
    options: [
      { id: 'opt1', text: 'Yes', votes: 3400 },
      { id: 'opt2', text: 'No, prefer the old one', votes: 1200 },
    ],
    totalVotes: 4600,
    isActive: false,
  }
];

export function PollsScreen({ setScreen }: ScreenProps) {
  const [polls, setPolls] = useState(mockPolls);
  const [votedPolls, setVotedPolls] = useState<number[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<{ [pollId: number]: string }>({});

  const handleVote = (pollId: number) => {
    if (!selectedOptions[pollId] || votedPolls.includes(pollId)) return;
    
    setPolls(prevPolls => 
      prevPolls.map(poll => {
        if (poll.id === pollId) {
          return {
            ...poll,
            options: poll.options.map(opt => 
              opt.id === selectedOptions[pollId] 
                ? { ...opt, votes: opt.votes + 1 } 
                : opt
            ),
            totalVotes: poll.totalVotes + 1
          };
        }
        return poll;
      })
    );
    
    setVotedPolls(prev => [...prev, pollId]);
  };

  return (
    <motion.div
      key="polls"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="h-full w-full flex flex-col pt-12 pb-6 relative overflow-y-auto scrollbar-hide px-6"
    >
      <div className="flex items-center mb-6">
        <button onClick={() => setScreen('services')} className="w-10 h-10 bg-white/60 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-cyan-600 shadow-sm mr-4 hover:bg-white/80 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Community Polls</h2>
      </div>

      <div className="space-y-6">
        {polls.map((poll) => {
          const hasVoted = votedPolls.includes(poll.id) || !poll.isActive;
          
          return (
            <div key={poll.id} className={`${glassClass} p-5 rounded-3xl relative overflow-hidden`}>
              {!poll.isActive && (
                 <div className="absolute top-0 right-0 bg-gray-200 text-gray-600 text-[10px] font-bold px-3 py-1 rounded-bl-xl">
                   CLOSED
                 </div>
              )}
              {poll.isActive && (
                 <div className="absolute top-0 right-0 bg-cyan-100 text-cyan-700 text-[10px] font-bold px-3 py-1 rounded-bl-xl flex items-center">
                   <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-1.5 animate-pulse" />
                   ACTIVE
                 </div>
              )}
              
              <h3 className="font-bold text-gray-800 mb-4 mt-2 pr-12">{poll.question}</h3>
              
              <div className="space-y-3 mb-4">
                {poll.options.map((opt) => {
                  const percentage = Math.round((opt.votes / poll.totalVotes) * 100) || 0;
                  const isSelected = selectedOptions[poll.id] === opt.id;
                  
                  return (
                    <div 
                      key={opt.id} 
                      onClick={() => {
                        if (!hasVoted) {
                          setSelectedOptions(prev => ({ ...prev, [poll.id]: opt.id }));
                        }
                      }}
                      className={`relative rounded-xl border p-3 transition-colors ${
                        hasVoted 
                          ? 'border-gray-100 bg-gray-50' 
                          : isSelected 
                            ? 'border-cyan-500 bg-cyan-50 cursor-pointer' 
                            : 'border-gray-200 hover:border-cyan-300 cursor-pointer'
                      }`}
                    >
                      {hasVoted && (
                        <div 
                          className="absolute left-0 top-0 bottom-0 bg-cyan-100 rounded-xl transition-all duration-1000" 
                          style={{ width: `${percentage}%` }} 
                        />
                      )}
                      
                      <div className="relative z-10 flex justify-between items-center">
                        <div className="flex items-center flex-1 pr-4">
                           {!hasVoted && (
                             <div className={`w-4 h-4 rounded-full border flex items-center justify-center mr-3 shrink-0 ${
                               isSelected ? 'border-cyan-500' : 'border-gray-300'
                             }`}>
                               {isSelected && <div className="w-2 h-2 rounded-full bg-cyan-500" />}
                             </div>
                           )}
                           <span className={`text-sm ${isSelected ? 'font-semibold text-cyan-800' : 'text-gray-700'}`}>
                             {opt.text}
                           </span>
                        </div>
                        {hasVoted && (
                          <span className="text-sm font-bold text-cyan-700 shrink-0">{percentage}%</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="flex items-center justify-between mt-2 pt-4 border-t border-gray-100/50">
                <div className="flex items-center text-xs text-gray-500 font-medium">
                  <BarChart2 className="w-3.5 h-3.5 mr-1.5" />
                  {poll.totalVotes.toLocaleString()} votes
                </div>
                
                {!hasVoted && poll.isActive && (
                  <button 
                    onClick={() => handleVote(poll.id)}
                    disabled={!selectedOptions[poll.id]}
                    className="px-5 py-2 bg-cyan-600 text-white font-bold rounded-xl text-xs hover:bg-cyan-700 transition-colors disabled:opacity-50 disabled:hover:bg-cyan-600 flex items-center"
                  >
                    Submit Vote
                  </button>
                )}
                {votedPolls.includes(poll.id) && (
                  <div className="flex items-center text-cyan-600 text-xs font-bold bg-cyan-50 px-3 py-1.5 rounded-lg">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                    Voted
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
