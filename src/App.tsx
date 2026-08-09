import { useState } from 'react';
import { Screen } from './types';
import { Splash, Login, Register, ForgotPassword } from './screens/AuthScreens';
import { Dashboard, Services } from './screens/MainScreens';
import { Emergency, Notifications, Profile, PersonalInfo, AppSettings } from './screens/ActionScreens';
import { Scholarships, Jobs, Schemes } from './screens/InformationScreens';
import { MapScreen } from './screens/MapScreen';
import { AIAssistantScreen } from './screens/AIAssistantScreen';
import { PollsScreen } from './screens/PollsScreen';
import { LostAndFoundScreen } from './screens/LostAndFoundScreen';
import { EventsScreen } from './screens/EventsScreen';
import { VolunteerScreen } from './screens/VolunteerScreen';
import { FeedbackScreen } from './screens/FeedbackScreen';
import { HealthScreen } from './screens/HealthScreen';
import { EducationScreen } from './screens/EducationScreen';
import { BudgetScreen } from './screens/BudgetScreen';
import { PaymentScreen } from './screens/PaymentScreen';
import { MyDocumentsScreen } from './screens/MyDocumentsScreen';
import { Home, Grid, Bell, User, CreditCard } from 'lucide-react';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [screen, setScreen] = useState<Screen>('splash');

  const showBottomNav = ['home', 'services', 'notifications', 'profile'].includes(screen);

  const NavItem = ({ icon: Icon, id, label }: { icon: any, id: Screen, label: string }) => {
    const isActive = screen === id;
    return (
      <button 
        onClick={() => setScreen(id)}
        className="flex flex-col items-center justify-center w-16"
      >
        <div className={`mb-1 transition-all duration-300 ${isActive ? '-translate-y-1' : ''}`}>
          <Icon 
            className={`w-6 h-6 ${isActive ? 'text-[#0B6E4F]' : 'text-gray-400'}`} 
            strokeWidth={isActive ? 2.5 : 1.5}
          />
        </div>
        <span className={`text-[10px] font-semibold transition-colors duration-300 ${isActive ? 'text-[#0B6E4F]' : 'text-gray-400'}`}>
          {label}
        </span>
        {isActive && (
          <div className="w-1 h-1 bg-[#0B6E4F] rounded-full mt-1" />
        )}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-[#F4F8F5] flex justify-center sm:items-center sm:p-8 font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Mobile Device Simulator Wrapper */}
      <div className="fixed inset-0 sm:relative sm:inset-auto sm:h-[600px] sm:w-[320px] sm:rounded-[48px] bg-[#F4F8F5] overflow-hidden sm:border-[8px] border-gray-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15),0_30px_60px_-30px_rgba(0,0,0,0.2)] flex flex-col">
        
        {/* Soft Glassmorphism Background Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#0B6E4F]/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-10%] w-[350px] h-[350px] bg-[#D4AF37]/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Dynamic Screen Content Area */}
        <div className={`flex-1 flex flex-col min-h-0 w-full relative z-10 overflow-hidden ${showBottomNav ? 'pb-24' : ''}`}>
          <AnimatePresence mode="wait">
            {screen === 'splash' && <Splash setScreen={setScreen} />}
            {screen === 'login' && <Login setScreen={setScreen} />}
            {screen === 'forgot_password' && <ForgotPassword setScreen={setScreen} />}
            {screen === 'register' && <Register setScreen={setScreen} />}
            {screen === 'home' && <Dashboard setScreen={setScreen} />}
            {screen === 'services' && <Services setScreen={setScreen} />}
            {screen === 'emergency' && <Emergency setScreen={setScreen} />}
            {screen === 'notifications' && <Notifications setScreen={setScreen} />}
            {screen === 'profile' && <Profile setScreen={setScreen} />}
            {screen === 'personal_info' && <PersonalInfo setScreen={setScreen} />}
            {screen === 'app_settings' && <AppSettings setScreen={setScreen} />}
            {screen === 'scholarships' && <Scholarships setScreen={setScreen} />}
            {screen === 'jobs' && <Jobs setScreen={setScreen} />}
            {screen === 'schemes' && <Schemes setScreen={setScreen} />}
            {screen === 'map' && <MapScreen setScreen={setScreen} />}
            {screen === 'ai-assistant' && <AIAssistantScreen setScreen={setScreen} />}
            {screen === 'polls' && <PollsScreen setScreen={setScreen} />}
            {screen === 'lost-and-found' && <LostAndFoundScreen setScreen={setScreen} />}
            {screen === 'events' && <EventsScreen setScreen={setScreen} />}
            {screen === 'volunteer' && <VolunteerScreen setScreen={setScreen} />}
            {screen === 'feedback' && <FeedbackScreen setScreen={setScreen} />}
            {screen === 'health' && <HealthScreen setScreen={setScreen} />}
            {screen === 'education' && <EducationScreen setScreen={setScreen} />}
            {screen === 'budget' && <BudgetScreen setScreen={setScreen} />}
            {screen === 'payment' && <PaymentScreen setScreen={setScreen} />}
            {screen === 'my_documents' && <MyDocumentsScreen setScreen={setScreen} />}
          </AnimatePresence>
        </div>

        {/* Bottom Navigation */}
        {showBottomNav && (
          <div className="absolute bottom-0 w-full px-6 pb-8 pt-4 bg-white/70 backdrop-blur-2xl border-t border-white/60 z-50 rounded-b-[38px] shadow-[0_-10px_40px_rgba(0,0,0,0.03)] flex justify-around items-center">
            <NavItem icon={Home} id="home" label="Home" />
            <NavItem icon={Grid} id="services" label="Services" />
            <NavItem icon={Bell} id="notifications" label="Alerts" />
            <NavItem icon={User} id="profile" label="Profile" />
          </div>
        )}
      </div>
    </div>
  );
}
