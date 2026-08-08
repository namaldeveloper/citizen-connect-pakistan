import { motion } from 'motion/react';
import { ScreenProps, pageVariants, pageTransition } from '../types';
import { ArrowLeft, Send, Sparkles, User, Bot, Loader2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

export function AIAssistantScreen({ setScreen }: ScreenProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I am your AI Assistant. How can I help you with citizen services, scholarships, or jobs today?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue.trim()
    };
    
    // Create history format for API
    const history = messages.map(m => ({ role: m.role, content: m.content }));

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMsg.content, history })
      });
      
      const data = await res.json();
      
      if (res.ok && data.text) {
        setMessages(prev => [...prev, {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.text
        }]);
      } else {
        throw new Error(data.error || 'Failed to get response');
      }
    } catch (err) {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'I am sorry, I encountered an error. Please try again.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      key="ai-assistant"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="h-full w-full flex flex-col bg-white relative"
    >
      <div className="absolute inset-0 bg-[#F4F8F5] pointer-events-none" />
      
      <div className="pt-12 pb-4 px-6 relative z-10 bg-white/70 backdrop-blur-xl border-b border-gray-100 shadow-sm flex items-center">
        <button 
          onClick={() => setScreen('home')} 
          className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#D4AF37] shadow-sm mr-4 hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mr-3">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-800 tracking-tight leading-none">AI Assistant</h2>
            <p className="text-xs text-[#D4AF37] font-semibold mt-1">Powered by Gemini</p>
          </div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-6 py-6 space-y-6 relative z-10 scrollbar-hide pb-32"
      >
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div className={`flex items-end max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-[#0B6E4F] ml-2' 
                  : 'bg-[#D4AF37] mr-2'
              }`}>
                {msg.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
              </div>
              
              <div className={`p-4 rounded-2xl shadow-sm text-sm whitespace-pre-wrap leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-[#0B6E4F] text-white rounded-br-sm'
                  : 'bg-white border border-gray-100 text-gray-800 rounded-bl-sm'
              }`}>
                {msg.content}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex flex-col items-start">
            <div className="flex items-end max-w-[85%] flex-row">
              <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center shrink-0 shadow-sm mr-2">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="p-4 rounded-2xl rounded-bl-sm shadow-sm text-sm bg-white border border-gray-100 text-gray-800">
                <Loader2 className="w-5 h-5 text-[#D4AF37] animate-spin" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/70 backdrop-blur-2xl border-t border-gray-100 z-50">
        <form onSubmit={handleSubmit} className="flex items-center gap-2 max-w-full">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask me anything..."
            disabled={isLoading}
            className="flex-1 bg-gray-100/80 border border-transparent focus:bg-white focus:border-[#0B6E4F] outline-none rounded-2xl px-5 py-4 text-sm text-gray-800 transition-all placeholder:text-gray-500 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className="w-14 h-14 bg-[#D4AF37] text-white rounded-2xl flex items-center justify-center hover:bg-[#c4a132] transition-colors disabled:opacity-50 disabled:hover:bg-[#D4AF37] shrink-0"
          >
            <Send className="w-5 h-5 ml-1" />
          </button>
        </form>
      </div>
    </motion.div>
  );
}