export type Screen = 'splash' | 'login' | 'register' | 'home' | 'services' | 'emergency' | 'notifications' | 'profile' | 'personal_info' | 'app_settings' | 'scholarships' | 'jobs' | 'schemes' | 'map' | 'ai-assistant' | 'polls' | 'lost-and-found' | 'events' | 'forgot_password' | 'volunteer' | 'feedback' | 'health' | 'education' | 'budget' |'payment' |'my_documents';

export const theme = {
  primary: '#0B6E4F',
  secondary: '#2E8B57',
  accent: '#D4AF37',
  bg: '#F4F8F5',
};

// Premium Glassmorphism Utility Classes
export const glassClass = "bg-white/70 backdrop-blur-[20px] border border-white/40 shadow-[0_8px_32px_0_rgba(11,110,79,0.08)] rounded-[28px]";
export const glassClassDark = "bg-[#0B6E4F]/85 backdrop-blur-[15px] border border-white/10 rounded-[28px] text-white";
export const glassInputClass = "w-full bg-white/70 backdrop-blur-[20px] border border-white/40 focus:border-[#0B6E4F] outline-none rounded-2xl px-5 py-4 text-gray-800 transition-all placeholder:text-gray-500 shadow-[0_8px_32px_0_rgba(11,110,79,0.08)]";
export const glassButtonClass = "w-full bg-[#0B6E4F] text-white font-bold rounded-2xl px-5 py-4 shadow-md hover:bg-[#095D43] transition-colors text-sm uppercase tracking-wider";

export interface ScreenProps {
  setScreen: (screen: Screen) => void;
}

// Micro Animations for Page Transitions
export const pageVariants = {
  initial: { opacity: 0, y: 15, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -10, scale: 0.98 }
};

export const pageTransition = {
  type: "spring" as const,
  damping: 20,
  stiffness: 100,
};