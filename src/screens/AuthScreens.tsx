import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ScreenProps, glassClass, glassInputClass, glassButtonClass, pageVariants, pageTransition } from '../types';
import { Fingerprint, ScanFace, Landmark, ArrowRight, Mail, Lock, User, Phone, MapPin, Building, CheckCircle2 } from 'lucide-react';

export function Splash({ setScreen }: ScreenProps) {
  return (
    <motion.div
      key="splash"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full w-full bg-white flex flex-col items-center relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 right-0 h-[45%] opacity-40 pointer-events-none">
        <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover object-bottom" preserveAspectRatio="none">
          <path d="M0,200 L400,200 L400,140 C380,120 360,130 350,110 C340,90 330,130 310,120 C290,110 280,70 260,80 C240,90 230,110 210,100 C190,90 180,60 160,70 C140,80 130,120 110,110 C90,100 80,60 60,70 C40,80 30,120 10,110 C5,107 2,105 0,103 Z" fill="url(#paint0_linear)"/>
          <path d="M40,160 L45,100 L55,100 L60,160 Z" fill="#0B6E4F"/>
          <path d="M45,100 L50,60 L55,100 Z" fill="#0B6E4F"/>
          <path d="M220,160 L220,110 C220,95 240,95 240,110 L240,160 Z" fill="#0B6E4F"/>
          <circle cx="230" cy="90" r="15" fill="#0B6E4F"/>
          <path d="M300,160 L300,80 L320,80 L320,160 Z" fill="#0B6E4F"/>
          <path d="M310,40 L310,80 M290,60 L330,60" stroke="#0B6E4F" strokeWidth="2"/>
          <path d="M120,160 L120,130 L140,130 L140,160 Z" fill="#0B6E4F"/>
          <circle cx="130" cy="115" r="10" fill="#0B6E4F"/>
          <path d="M360,160 L360,120 L370,120 L370,160 Z" fill="#0B6E4F"/>
          <path d="M180,160 L180,140 L190,140 L190,160 Z" fill="#0B6E4F"/>
          <defs>
            <linearGradient id="paint0_linear" x1="200" y1="50" x2="200" y2="200" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0B6E4F" stopOpacity="0"/>
              <stop offset="1" stopColor="#0B6E4F" stopOpacity="0.8"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center mt-[15%] z-10 w-full px-8"
      >
        <div className="w-32 h-32 rounded-full border-2 border-[#0B6E4F] flex items-center justify-center mb-6 relative overflow-hidden bg-white">
          <svg viewBox="0 0 100 100" className="w-full h-full p-3 text-[#0B6E4F]" fill="currentColor">
             <path d="M50 15a15 15 0 1 0 0 30 15 15 0 0 0 0-30zm0 6c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9z"/>
             <path d="M25 45a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm50 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/>
             <path d="M50 50c-12 0-20 10-20 25h40c0-15-8-25-20-25zM20 65c-6 0-10 6-10 15h20c0-9-4-15-10-15zm60 0c-6 0-10 6-10 15h20c0-9-4-15-10-15z"/>
             <path d="M10 70 q 40 40 80 0 q -20 20 -40 20 q -20 0 -40 -20z" fill="#0B6E4F"/>
          </svg>
        </div>
        
        <h1 className="text-3xl font-extrabold text-[#0B6E4F] tracking-tight leading-tight text-center">
          Citizen Connect<br/>Pakistan
        </h1>
        
        <div className="mt-4 text-center">
          <p className="text-gray-600 font-medium text-sm">Your Gateway to<br/>Public Services</p>
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-10 left-6 right-6 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <button 
          onClick={() => setScreen('login')}
          className="w-full py-4 bg-gradient-to-r from-[#0B6E4F] to-[#1e8b62] text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-between px-6"
        >
          <span>Get Started</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
    </motion.div>
  );
}

export function Login({ setScreen }: ScreenProps) {
  return (
    <motion.div
      key="login"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="h-full w-full flex flex-col justify-end p-6 pb-12 relative"
    >
      {/* Background illustration area */}
      <div className="absolute top-0 left-0 w-full h-[45%] bg-gradient-to-b from-[#0B6E4F]/10 to-transparent flex flex-col items-center pt-24">
        <div className="w-20 h-20 rounded-3xl bg-[#0B6E4F] flex items-center justify-center shadow-xl mb-6">
          <Landmark className="w-10 h-10 text-white" strokeWidth={1.5} />
        </div>
        <h2 className="text-3xl font-bold text-[#0B6E4F] tracking-tight">Welcome Back</h2>
        <p className="text-gray-600 mt-2 text-sm">Secure access to your government services</p>
      </div>

      <div className={`${glassClass} p-8 relative z-10 mt-auto`}>
        <div className="space-y-4 mb-6">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="text" placeholder="Email / CNIC" className={`${glassInputClass} pl-12`} />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="password" placeholder="Password" className={`${glassInputClass} pl-12`} />
          </div>
          <div className="flex justify-end">
            <button onClick={() => setScreen('forgot_password')} className="text-sm font-medium text-[#0B6E4F] hover:text-[#2E8B57]">Forgot Password?</button>
          </div>
        </div>
        <button onClick={() => setScreen('home')} className={glassButtonClass}>
          Login
        </button>

        <div className="mt-8 flex flex-col items-center space-y-4">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Or login with</p>
          <div className="flex space-x-4">
            <button onClick={() => setScreen('home')} className="w-14 h-14 rounded-2xl bg-white/50 backdrop-blur-md border border-white/60 shadow-sm flex items-center justify-center hover:bg-white/70 transition-colors">
              <ScanFace className="w-6 h-6 text-[#0B6E4F]" />
            </button>
            <button onClick={() => setScreen('home')} className="w-14 h-14 rounded-2xl bg-white/50 backdrop-blur-md border border-white/60 shadow-sm flex items-center justify-center hover:bg-white/70 transition-colors">
              <Fingerprint className="w-6 h-6 text-[#0B6E4F]" />
            </button>
            <button onClick={() => setScreen('home')} className="w-14 h-14 rounded-2xl bg-white/50 backdrop-blur-md border border-white/60 shadow-sm flex items-center justify-center hover:bg-white/70 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0112 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115z"/>
                <path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 01-6.723-4.806L1.24 17.35C3.198 21.3 7.27 24 12 24c3.24 0 5.966-1.08 7.977-2.914l-3.937-3.073z"/>
                <path fill="#4A90E2" d="M19.977 21.086C22.205 19.11 23.5 15.905 23.5 12c0-.827-.086-1.636-.25-2.409H12v4.545h6.477a5.523 5.523 0 01-2.437 3.877l3.937 3.073z"/>
                <path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 014.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 000 12c0 1.92.445 3.73 1.237 5.35l4.04-3.082z"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <button onClick={() => setScreen('register')} className="font-semibold text-[#0B6E4F] hover:underline">
              Create Account
            </button>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function Register({ setScreen }: ScreenProps) {
  const [step, setStep] = useState(1);

  return (
    <motion.div
      key="register"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="h-full w-full flex flex-col p-6 pt-16 relative"
    >
      <button onClick={() => setScreen('login')} className="absolute top-12 left-6 w-10 h-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-[#0B6E4F] shadow-sm">
        <ArrowRight className="w-5 h-5 rotate-180" />
      </button>

      <div className="mt-12 mb-8">
        <h2 className="text-3xl font-bold text-[#0B6E4F] tracking-tight">Create Account</h2>
        <p className="text-gray-600 mt-2 text-sm">Join Citizen Connect Pakistan today.</p>
        
        <div className="flex space-x-2 mt-6">
          <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-[#0B6E4F]' : 'bg-gray-200'}`} />
          <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? 'bg-[#0B6E4F]' : 'bg-gray-200'}`} />
        </div>
      </div>

      <div className={`${glassClass} p-6 flex-1 overflow-y-auto scrollbar-hide`}>
        {step === 1 ? (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input type="text" placeholder="Full Name" className={`${glassInputClass} pl-12`} />
            </div>
            <div className="relative">
              <CheckCircle2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input type="text" placeholder="CNIC Number" className={`${glassInputClass} pl-12`} />
            </div>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input type="tel" placeholder="Phone Number" className={`${glassInputClass} pl-12`} />
            </div>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input type="email" placeholder="Email Address" className={`${glassInputClass} pl-12`} />
            </div>
            
            <button onClick={() => setStep(2)} className={`mt-8 ${glassButtonClass}`}>
              Next Step
            </button>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select defaultValue="" className={`${glassInputClass} pl-12 appearance-none bg-transparent`}>
                <option value="" disabled>Select Province</option>
                <option>Punjab</option>
                <option>Sindh</option>
                <option>KPK</option>
                <option>Balochistan</option>
                <option>Gilgit-Baltistan</option>
              </select>
            </div>
            <div className="relative">
              <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input type="text" placeholder="City" className={`${glassInputClass} pl-12`} />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input type="password" placeholder="Password" className={`${glassInputClass} pl-12`} />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input type="password" placeholder="Confirm Password" className={`${glassInputClass} pl-12`} />
            </div>

            <div className="flex space-x-3 mt-8">
              <button onClick={() => setStep(1)} className="w-14 h-[56px] rounded-2xl bg-white/50 backdrop-blur-md border border-white/60 shadow-sm flex items-center justify-center hover:bg-white/70">
                <ArrowRight className="w-5 h-5 rotate-180 text-[#0B6E4F]" />
              </button>
              <button onClick={() => setScreen('home')} className={`flex-1 ${glassButtonClass}`}>
                Complete Register
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export function ForgotPassword({ setScreen }: ScreenProps) {
  const [isSent, setIsSent] = useState(false);

  return (
    <motion.div
      key="forgot_password"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="h-full w-full flex flex-col p-6 pt-16 relative"
    >
      <button onClick={() => setScreen('login')} className="absolute top-12 left-6 w-10 h-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-[#0B6E4F] shadow-sm">
        <ArrowRight className="w-5 h-5 rotate-180" />
      </button>
      
      <div className="mt-12 mb-8">
        <h2 className="text-3xl font-bold text-[#0B6E4F] tracking-tight">Reset Password</h2>
        <p className="text-gray-600 mt-2 text-sm">Enter your email or CNIC to receive reset instructions.</p>
      </div>

      <div className={`${glassClass} p-8 relative z-10 flex-1 flex flex-col`}>
        {isSent ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 bg-[#0B6E4F]/10 rounded-full flex items-center justify-center text-[#0B6E4F] mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-gray-800 text-xl">Reset Link Sent</h3>
            <p className="text-sm text-gray-600">Please check your email or SMS for instructions to reset your password.</p>
            <button onClick={() => setScreen('login')} className={`mt-8 ${glassButtonClass}`}>
              Back to Login
            </button>
          </motion.div>
        ) : (
          <div className="space-y-6 flex-1">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input type="text" placeholder="Email / CNIC" className={`${glassInputClass} pl-12`} />
            </div>
            <button onClick={() => setIsSent(true)} className={glassButtonClass}>
              Send Reset Link
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
