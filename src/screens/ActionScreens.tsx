import { motion, AnimatePresence } from 'motion/react';
import { ScreenProps, glassClass, glassClassDark, pageVariants, pageTransition, glassButtonClass, glassInputClass } from '../types';
import { ShieldAlert, Phone, Ambulance, Flame, HeartPulse, Droplet, Radio, ArrowLeft, CreditCard, CheckCircle2, ShieldCheck, Wallet, FileText, Car, Home, Loader2, X, MapPin, Settings, Bell, HelpCircle, LogOut, FileBadge, ChevronRight, User, Mail, Calendar as CalendarIcon, Edit3, Moon, Globe, Shield, Trash2 } from 'lucide-react';
import { useState } from 'react';

export function Emergency({ setScreen }: ScreenProps) {
  const contacts = [
    { name: 'Police Help', number: '15', icon: ShieldCheck, color: 'text-blue-600', bg: 'bg-blue-100/50' },
    { name: 'Rescue 1122', number: '1122', icon: Ambulance, color: 'text-red-600', bg: 'bg-red-100/50' },
    { name: 'Fire Brigade', number: '16', icon: Flame, color: 'text-orange-600', bg: 'bg-orange-100/50' },
    { name: 'Women Helpline', number: '1043', icon: Phone, color: 'text-pink-600', bg: 'bg-pink-100/50' },
  ];

  const secondaryServices = [
    { name: 'Nearby Hospitals', icon: HeartPulse, color: 'text-rose-600', bg: 'bg-rose-100/50' },
    { name: 'Blood Bank', icon: Droplet, color: 'text-red-600', bg: 'bg-red-100/50' },
    { name: 'Disaster Alerts', icon: Radio, color: 'text-orange-600', bg: 'bg-orange-100/50' },
    { name: 'Emergency Contacts', icon: Phone, color: 'text-indigo-600', bg: 'bg-indigo-100/50' },
  ];

  return (
    <motion.div
      key="emergency"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="h-full w-full flex flex-col pt-12 pb-6 relative overflow-y-auto scrollbar-hide px-6 bg-red-50/30"
    >
      <div className="flex items-center mb-8">
        <button onClick={() => setScreen('home')} className="w-10 h-10 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center text-red-600 shadow-sm mr-4">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold text-red-600 tracking-tight">Emergency Support</h2>
      </div>

      <div className="flex justify-center my-8">
        <button className="relative w-48 h-48 rounded-full bg-gradient-to-br from-red-500 to-red-700 shadow-[0_15px_50px_rgba(239,68,68,0.5)] flex items-center justify-center border-8 border-white/40 active:scale-95 transition-transform group">
          <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-75"></div>
          <div className="flex flex-col items-center">
            <ShieldAlert className="w-16 h-16 text-white mb-2" />
            <span className="text-white font-bold text-xl uppercase tracking-widest">SOS</span>
          </div>
        </button>
      </div>
      
      <p className="text-center text-red-600/80 text-sm font-medium mb-10">Press and hold for 3 seconds to instantly alert all emergency services and contacts.</p>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Direct Lines</h3>
        {contacts.map((contact, i) => (
          <div key={i} className={`${glassClass} p-4 flex items-center justify-between`}>
            <div className="flex items-center">
              <div className={`w-12 h-12 rounded-xl ${contact.bg} flex items-center justify-center mr-4`}>
                <contact.icon className={`w-6 h-6 ${contact.color}`} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">{contact.name}</h4>
                <p className="text-xs text-gray-500 font-semibold">{contact.number}</p>
              </div>
            </div>
            <button className="w-10 h-10 rounded-full bg-green-100/50 flex items-center justify-center">
              <Phone className="w-5 h-5 text-green-600" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">More Services</h3>
        <div className="grid grid-cols-2 gap-4">
          {secondaryServices.map((service, i) => (
            <div key={i} className={`${glassClass} p-4 flex flex-col items-center text-center cursor-pointer hover:bg-white/80 transition-colors`}>
              <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-2`}>
                <service.icon className={`w-6 h-6 ${service.color}`} />
              </div>
              <span className="text-xs font-bold text-gray-800">{service.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}


// Placeholders for Bottom Nav requirements
export function Notifications({ setScreen }: ScreenProps) {
  return (
    <div className="h-full w-full flex items-center justify-center flex-col px-6 text-center">
      <div className="w-20 h-20 bg-white/60 backdrop-blur-xl rounded-3xl flex items-center justify-center mb-6 shadow-sm border border-white/50">
        <ShieldAlert className="w-8 h-8 text-gray-400" />
      </div>
      <h2 className="text-xl font-bold text-gray-800 mb-2">No New Notifications</h2>
      <p className="text-gray-500 text-sm mb-8">You're all caught up with your civic updates.</p>
      <button onClick={() => setScreen('home')} className="px-6 py-3 bg-white/60 border border-white/50 rounded-xl text-[#0B6E4F] font-semibold">Return Home</button>
    </div>
  );
}

export function Profile({ setScreen }: ScreenProps) {
  const profileLinks = [
    { name: 'Personal Information', id: 'personal_info', icon: User, color: 'text-blue-600', bg: 'bg-blue-100/50' },
    { name: 'My Documents', id: 'my_documents', icon: FileBadge, color: 'text-indigo-600', bg: 'bg-indigo-100/50' },
    { name: 'Notifications', icon: Bell, color: 'text-orange-600', bg: 'bg-orange-100/50' },
    { name: 'App Settings', id: 'app_settings', icon: Settings, color: 'text-gray-600', bg: 'bg-gray-100/50' },
    { name: 'Help & Support', icon: HelpCircle, color: 'text-green-600', bg: 'bg-green-100/50' },
  ];

  return (
    <motion.div
      key="profile"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="h-full w-full flex flex-col pt-12 pb-24 relative overflow-y-auto scrollbar-hide px-6"
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-[#0B6E4F] tracking-tight">Profile</h2>
      </div>

      <div className={`${glassClassDark} p-6 mb-8 relative overflow-hidden skyline-bg border-none`}>
         <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-1/4 -translate-y-1/4"></div>
         <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white/20 rounded-full mb-4 border-4 border-white/40 shadow-sm overflow-hidden flex items-center justify-center p-1 backdrop-blur-md">
               <img src="https://ui-avatars.com/api/?name=Ahmed+Hassan&background=0B6E4F&color=fff&size=150" alt="Avatar" className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Ahmed Hassan</h3>
            <p className="text-white/80 text-sm font-medium tracking-wider font-mono">35202-1234567-8</p>
            <div className="mt-4 flex gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">Verified Citizen</span>
            </div>
         </div>
      </div>
      
      <div className="space-y-3 mb-8">
        <div className={`${glassClass} p-4 flex items-center border border-white/50 hover:bg-white/80 transition-colors`}>
           <div className="w-10 h-10 rounded-xl bg-[#0B6E4F]/10 flex items-center justify-center mr-4">
             <Phone className="w-5 h-5 text-[#0B6E4F]"/>
           </div>
           <div>
             <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-0.5">Phone Number</p>
             <p className="font-bold text-gray-800 text-sm">+92 300 1234567</p>
           </div>
        </div>
        <div className={`${glassClass} p-4 flex items-center border border-white/50 hover:bg-white/80 transition-colors`}>
           <div className="w-10 h-10 rounded-xl bg-[#0B6E4F]/10 flex items-center justify-center mr-4">
             <MapPin className="w-5 h-5 text-[#0B6E4F]"/>
           </div>
           <div>
             <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-0.5">Address</p>
             <p className="font-bold text-gray-800 text-sm">Gulberg III, Lahore</p>
           </div>
        </div>
      </div>

      <h3 className="text-lg font-bold text-gray-800 mb-4">Account & Settings</h3>
      <div className="space-y-3 mb-8">
        {profileLinks.map((link, i) => (
          <div 
            key={i} 
            onClick={() => link.id ? setScreen(link.id as any) : null}
            className={`${glassClass} p-4 flex items-center justify-between cursor-pointer hover:bg-white/80 transition-colors`}
          >
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-xl ${link.bg} flex items-center justify-center mr-4`}>
                <link.icon className={`w-5 h-5 ${link.color}`} />
              </div>
              <span className="font-bold text-gray-800 text-sm">{link.name}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        ))}
      </div>

      <button onClick={() => setScreen('login')} className="w-full p-4 rounded-2xl bg-red-50 text-red-600 font-bold border border-red-100 flex items-center justify-center gap-2 hover:bg-red-100 transition-colors mt-auto">
        <LogOut className="w-5 h-5" />
        SIGN OUT
      </button>
    </motion.div>
  );
}

export function PersonalInfo({ setScreen }: ScreenProps) {
  return (
    <motion.div
      key="personal_info"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="h-full w-full flex flex-col pt-12 pb-24 relative overflow-y-auto scrollbar-hide px-6"
    >
      <div className="flex items-center mb-8">
        <button onClick={() => setScreen('profile')} className="w-10 h-10 bg-white/60 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-[#0B6E4F] shadow-sm mr-4 hover:bg-white/80 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold text-[#0B6E4F] tracking-tight">Personal Info</h2>
      </div>

      <div className="flex justify-center mb-8 relative">
        <div className="w-28 h-28 bg-white/20 rounded-full border-4 border-white shadow-lg overflow-hidden flex items-center justify-center p-1 backdrop-blur-md relative">
          <img src="https://ui-avatars.com/api/?name=Ahmed+Hassan&background=0B6E4F&color=fff&size=150" alt="Avatar" className="w-full h-full object-cover rounded-full" />
        </div>
        <button className="absolute bottom-0 right-1/2 translate-x-12 translate-y-2 w-10 h-10 bg-[#0B6E4F] text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white hover:bg-[#095D43] transition-colors z-10">
          <Edit3 className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-4 mb-8">
        <div className={`${glassClass} p-4 flex flex-col border border-white/50`}>
           <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> Full Name</span>
           <span className="font-bold text-gray-800">Ahmed Hassan</span>
        </div>
        <div className={`${glassClass} p-4 flex flex-col border border-white/50 relative overflow-hidden`}>
           <div className="absolute top-0 right-0 w-16 h-16 bg-green-100 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
           <span className="text-xs text-[#0B6E4F] font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> CNIC (Verified)</span>
           <span className="font-bold text-gray-800 font-mono tracking-widest">35202-1234567-8</span>
        </div>
        <div className={`${glassClass} p-4 flex flex-col border border-white/50`}>
           <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> Email Address</span>
           <span className="font-bold text-gray-800">ahmed.hassan@example.pk</span>
        </div>
        <div className={`${glassClass} p-4 flex flex-col border border-white/50`}>
           <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> Phone Number</span>
           <span className="font-bold text-gray-800">+92 300 1234567</span>
        </div>
        <div className={`${glassClass} p-4 flex flex-col border border-white/50`}>
           <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5"><CalendarIcon className="w-3.5 h-3.5" /> Date of Birth</span>
           <span className="font-bold text-gray-800">14 August 1990</span>
        </div>
        <div className={`${glassClass} p-4 flex flex-col border border-white/50`}>
           <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Residential Address</span>
           <span className="font-bold text-gray-800">House 123, Block C, Gulberg III, Lahore, Punjab</span>
        </div>
      </div>

      <button className={glassButtonClass}>
        Save Changes
      </button>
    </motion.div>
  );
}

export function AppSettings({ setScreen }: ScreenProps) {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(document.documentElement.classList.contains('dark'));
  const [language, setLanguage] = useState('English');

  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleLanguage = () => {
    setLanguage(lang => lang === 'English' ? 'Urdu' : 'English');
  };

  return (
    <motion.div
      key="app_settings"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="h-full w-full flex flex-col pt-12 pb-24 relative overflow-y-auto scrollbar-hide px-6"
    >
      <div className="flex items-center mb-8">
        <button onClick={() => setScreen('profile')} className="w-10 h-10 bg-white/60 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-[#0B6E4F] shadow-sm mr-4 hover:bg-white/80 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold text-[#0B6E4F] tracking-tight">App Settings</h2>
      </div>

      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 px-2">Preferences</h3>
          <div className={`${glassClass} rounded-2xl overflow-hidden flex flex-col`}>
            <div className="p-4 flex items-center justify-between border-b border-white/50">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-xl bg-orange-100/50 flex items-center justify-center mr-4">
                  <Bell className="w-5 h-5 text-orange-600" />
                </div>
                <span className="font-bold text-gray-800">Push Notifications</span>
              </div>
              <button onClick={() => setNotifications(!notifications)} className={`w-12 h-6 rounded-full transition-colors relative ${notifications ? 'bg-[#0B6E4F]' : 'bg-gray-300'}`}>
                <div className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${notifications ? 'translate-x-7' : 'translate-x-1'}`} />
              </button>
            </div>
            <div className="p-4 flex items-center justify-between border-b border-white/50">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-xl bg-gray-100/50 flex items-center justify-center mr-4">
                  <Moon className="w-5 h-5 text-gray-600" />
                </div>
                <span className="font-bold text-gray-800">Dark Mode</span>
              </div>
              <button onClick={toggleDarkMode} className={`w-12 h-6 rounded-full transition-colors relative ${darkMode ? 'bg-[#0B6E4F]' : 'bg-gray-300'}`}>
                <div className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${darkMode ? 'translate-x-7' : 'translate-x-1'}`} />
              </button>
            </div>
            <div className="p-4 flex items-center justify-between hover:bg-white/50 cursor-pointer transition-colors" onClick={toggleLanguage}>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-xl bg-blue-100/50 flex items-center justify-center mr-4">
                  <Globe className="w-5 h-5 text-blue-600" />
                </div>
                <span className="font-bold text-gray-800">Language</span>
              </div>
              <div className="flex items-center text-gray-500 font-semibold text-sm">
                {language} <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-red-500 uppercase tracking-wider mb-3 px-2">Danger Zone</h3>
          <div className={`${glassClass} rounded-2xl overflow-hidden flex flex-col border border-red-200`}>
            <div className="p-4 flex items-center justify-between hover:bg-red-50 cursor-pointer transition-colors">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-xl bg-red-100/50 flex items-center justify-center mr-4">
                  <Trash2 className="w-5 h-5 text-red-600" />
                </div>
                <span className="font-bold text-red-600">Delete Account</span>
              </div>
              <ChevronRight className="w-5 h-5 text-red-300" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
