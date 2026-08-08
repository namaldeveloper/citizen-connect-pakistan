import { motion } from 'motion/react';
import { ScreenProps, glassClass, pageVariants, pageTransition } from '../types';
import { ArrowLeft, Search, Calendar, MapPin, Clock, Users, Plus } from 'lucide-react';
import { useState } from 'react';

const mockEvents = [
  { id: 1, title: 'City Tech Conference', date: '2026-08-15', time: '09:00 AM', location: 'Convention Center', attendees: 120, image: 'bg-blue-100', icon: 'text-blue-500', category: 'Technology' },
  { id: 2, title: 'Local Farmers Market', date: '2026-08-10', time: '07:00 AM', location: 'Central Square', attendees: 350, image: 'bg-green-100', icon: 'text-green-500', category: 'Community' },
  { id: 3, title: 'Art & Culture Festival', date: '2026-08-22', time: '10:00 AM', location: 'Heritage Museum', attendees: 500, image: 'bg-purple-100', icon: 'text-purple-500', category: 'Culture' },
];

export function EventsScreen({ setScreen }: ScreenProps) {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past' | 'my-events'>('upcoming');
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (selectedEvent) {
    return (
      <motion.div
        key="event-rsvp"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
        className="h-full w-full flex flex-col pt-12 pb-6 relative overflow-y-auto scrollbar-hide px-6"
      >
        <div className="flex items-center mb-6">
          <button onClick={() => setSelectedEvent(null)} className="w-10 h-10 bg-white/60 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-orange-600 shadow-sm mr-4 hover:bg-white/80 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-2xl font-bold text-orange-800 tracking-tight">RSVP</h2>
        </div>

        <div className={`${glassClass} p-6 rounded-2xl`}>
          <div className="mb-6">
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded inline-block mb-2 ${selectedEvent.image} ${selectedEvent.icon}`}>
              {selectedEvent.category}
            </span>
            <h3 className="font-bold text-gray-800 text-lg leading-tight mb-2">{selectedEvent.title}</h3>
            
            <div className="grid grid-cols-1 gap-2 mt-4">
              <div className="flex items-center text-gray-600 text-sm font-medium">
                <Calendar className="w-4 h-4 mr-2 text-orange-500" />
                {new Date(selectedEvent.date).toLocaleDateString()} at {selectedEvent.time}
              </div>
              <div className="flex items-center text-gray-600 text-sm font-medium">
                <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                {selectedEvent.location}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-gray-600 ml-1 mb-1 block">Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full bg-white/70 backdrop-blur-[20px] border border-white/40 focus:border-orange-500 outline-none rounded-2xl px-5 py-3 text-gray-800 transition-all placeholder:text-gray-500 shadow-sm" />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-600 ml-1 mb-1 block">Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full bg-white/70 backdrop-blur-[20px] border border-white/40 focus:border-orange-500 outline-none rounded-2xl px-5 py-3 text-gray-800 transition-all placeholder:text-gray-500 shadow-sm" />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-600 ml-1 mb-1 block">Phone Number</label>
              <input type="tel" placeholder="+92 300 1234567" className="w-full bg-white/70 backdrop-blur-[20px] border border-white/40 focus:border-orange-500 outline-none rounded-2xl px-5 py-3 text-gray-800 transition-all placeholder:text-gray-500 shadow-sm" />
            </div>
          </div>

          <button 
            onClick={() => {
              setIsSubmitting(true);
              setTimeout(() => {
                setIsSubmitting(false);
                setSelectedEvent(null);
                setActiveTab('my-events');
              }, 1500);
            }}
            disabled={isSubmitting}
            className={`mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl px-5 py-4 shadow-md transition-colors text-sm uppercase tracking-wider ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Confirming...' : 'Confirm RSVP'}
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      key="events"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="h-full w-full flex flex-col pt-12 pb-6 relative overflow-y-auto scrollbar-hide px-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <button onClick={() => setScreen('services')} className="w-10 h-10 bg-white/60 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-orange-600 shadow-sm mr-4 hover:bg-white/80 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-2xl font-bold text-orange-800 tracking-tight">Events</h2>
        </div>
        <button className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white shadow-md hover:bg-orange-700 transition-colors">
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search events..." 
          className="w-full bg-white/50 backdrop-blur-xl border border-white/60 shadow-sm focus:border-orange-500 outline-none rounded-2xl pl-10 pr-4 py-3 text-sm text-gray-800 transition-all placeholder:text-gray-500"
        />
      </div>

      <div className="flex gap-2 mb-6">
        <button onClick={() => setActiveTab('upcoming')} className={`flex-1 py-2 px-4 rounded-xl text-sm font-bold transition-colors ${activeTab === 'upcoming' ? 'bg-orange-600 text-white shadow-md' : 'bg-white/60 text-gray-600'}`}>Upcoming</button>
        <button onClick={() => setActiveTab('my-events')} className={`flex-1 py-2 px-4 rounded-xl text-sm font-bold transition-colors ${activeTab === 'my-events' ? 'bg-orange-600 text-white shadow-md' : 'bg-white/60 text-gray-600'}`}>My Events</button>
        <button onClick={() => setActiveTab('past')} className={`flex-1 py-2 px-4 rounded-xl text-sm font-bold transition-colors ${activeTab === 'past' ? 'bg-orange-600 text-white shadow-md' : 'bg-white/60 text-gray-600'}`}>Past</button>
      </div>

      <div className="space-y-4">
        {mockEvents.map(event => (
          <div key={event.id} className={`${glassClass} p-5 rounded-2xl`}>
            <div className="flex items-center justify-between mb-3">
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${event.image} ${event.icon}`}>
                {event.category}
              </span>
              <span className="flex items-center text-xs font-bold text-gray-500">
                <Users className="w-3 h-3 mr-1" /> {event.attendees}
              </span>
            </div>
            
            <h3 className="font-bold text-gray-800 mb-2">{event.title}</h3>
            
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="flex items-center text-gray-500 text-xs font-medium">
                <Calendar className="w-3.5 h-3.5 mr-1.5 text-gray-400" />
                {new Date(event.date).toLocaleDateString()}
              </div>
              <div className="flex items-center text-gray-500 text-xs font-medium">
                <Clock className="w-3.5 h-3.5 mr-1.5 text-gray-400" />
                {event.time}
              </div>
            </div>
            
            <div className="flex items-center text-gray-500 text-xs font-medium mb-4">
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-gray-400" />
              {event.location}
            </div>

            <button onClick={() => setSelectedEvent(event)} className="w-full py-2 bg-orange-50 text-orange-700 font-bold rounded-xl text-xs hover:bg-orange-100 transition-colors">
              RSVP Now
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
