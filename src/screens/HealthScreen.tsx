import { motion } from 'motion/react';
import { ScreenProps, glassClass, pageVariants, pageTransition } from '../types';
import { ArrowLeft, Search, Stethoscope, MapPin, Phone, Clock, Plus, Activity, Heart, ShieldPlus } from 'lucide-react';
import { useState } from 'react';

const mockHospitals = [
  { id: 1, name: 'Jinnah Hospital', type: 'Public Hospital', distance: '2.5 km', open: true, rating: 4.2 },
  { id: 2, name: 'Shifa International', type: 'Private Hospital', distance: '4.8 km', open: true, rating: 4.8 },
  { id: 3, name: 'City Clinic', type: 'Clinic', distance: '1.2 km', open: false, rating: 3.9 },
];

export function HealthScreen({ setScreen }: ScreenProps) {
  const [activeTab, setActiveTab] = useState<'hospitals' | 'appointments'>('hospitals');

  return (
    <motion.div
      key="health"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="h-full w-full flex flex-col pt-12 pb-6 relative overflow-y-auto scrollbar-hide px-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <button onClick={() => setScreen('services')} className="w-10 h-10 bg-white/60 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-red-600 shadow-sm mr-4 hover:bg-white/80 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-2xl font-bold text-red-800 tracking-tight">Health</h2>
        </div>
        <button className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white shadow-md hover:bg-red-600 transition-colors">
          <Activity className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className={`${glassClass} p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-white/80 transition-colors`}>
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mb-2">
            <Phone className="w-5 h-5 text-red-500" />
          </div>
          <span className="text-xs font-bold text-gray-800">Ambulance</span>
          <span className="text-[10px] text-gray-500">Call 1122</span>
        </div>
        <div className={`${glassClass} p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-white/80 transition-colors`}>
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
            <ShieldPlus className="w-5 h-5 text-blue-500" />
          </div>
          <span className="text-xs font-bold text-gray-800">Sehat Card</span>
          <span className="text-[10px] text-gray-500">Check Status</span>
        </div>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search hospitals, doctors..." 
          className="w-full bg-white/50 backdrop-blur-xl border border-white/60 shadow-sm focus:border-red-500 outline-none rounded-2xl pl-10 pr-4 py-3 text-sm text-gray-800 transition-all placeholder:text-gray-500"
        />
      </div>

      <div className="flex gap-2 mb-6">
        <button onClick={() => setActiveTab('hospitals')} className={`flex-1 py-2 px-4 rounded-xl text-sm font-bold transition-colors ${activeTab === 'hospitals' ? 'bg-red-500 text-white shadow-md' : 'bg-white/60 text-gray-600'}`}>Facilities</button>
        <button onClick={() => setActiveTab('appointments')} className={`flex-1 py-2 px-4 rounded-xl text-sm font-bold transition-colors ${activeTab === 'appointments' ? 'bg-red-500 text-white shadow-md' : 'bg-white/60 text-gray-600'}`}>Appointments</button>
      </div>

      <div className="space-y-4">
        {activeTab === 'hospitals' ? (
          mockHospitals.map(hospital => (
            <div key={hospital.id} className={`${glassClass} p-5 rounded-2xl relative`}>
              <div className="absolute top-4 right-4 flex items-center">
                <div className={`w-2 h-2 rounded-full mr-1.5 ${hospital.open ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                <span className={`text-[10px] font-bold uppercase ${hospital.open ? 'text-green-600' : 'text-gray-500'}`}>
                  {hospital.open ? 'Open' : 'Closed'}
                </span>
              </div>
              
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mr-4 shrink-0">
                  <Stethoscope className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 pr-12">{hospital.name}</h3>
                  <p className="text-xs text-gray-500 font-medium">{hospital.type}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="flex items-center text-gray-600 text-xs font-medium bg-white/40 p-2 rounded-lg">
                  <MapPin className="w-3.5 h-3.5 mr-1.5 text-gray-400" />
                  {hospital.distance}
                </div>
                <div className="flex items-center text-gray-600 text-xs font-medium bg-white/40 p-2 rounded-lg">
                  <Heart className="w-3.5 h-3.5 mr-1.5 text-yellow-500 fill-yellow-500" />
                  {hospital.rating} Rating
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 py-2.5 bg-red-50 text-red-700 font-bold rounded-xl text-xs hover:bg-red-100 transition-colors">
                  Book Appointment
                </button>
                <button className="w-12 py-2.5 bg-gray-100 text-gray-600 font-bold rounded-xl text-xs hover:bg-gray-200 transition-colors flex justify-center items-center">
                  <MapPin className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-400 mx-auto mb-4">
              <Clock className="w-8 h-8" />
            </div>
            <p className="text-gray-500 font-medium text-sm">No upcoming appointments</p>
            <button className="mt-4 px-6 py-2 bg-red-500 text-white font-bold text-sm rounded-xl hover:bg-red-600">
              Book Now
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
