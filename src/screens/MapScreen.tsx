import { motion } from 'motion/react';
import { ScreenProps, glassClass, pageVariants, pageTransition } from '../types';
import { ArrowLeft, MapPin } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export function MapScreen({ setScreen }: ScreenProps) {
  // Lahore, Pakistan coordinates as default
  const position: [number, number] = [31.5204, 74.3587];

  const locations = [
    { id: 1, name: 'Jinnah Hospital', lat: 31.4883, lng: 74.3005, desc: 'Open 24/7' },
    { id: 2, name: 'NADRA Mega Center', lat: 31.5200, lng: 74.3500, desc: 'Closes 5 PM' },
    { id: 3, name: 'Police Station', lat: 31.5300, lng: 74.3400, desc: 'Emergency response' },
  ];

  return (
    <motion.div
      key="map"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="h-full w-full flex flex-col relative overflow-hidden bg-gray-50"
    >
      <div className="absolute top-12 left-6 right-6 z-[1000] flex items-center justify-between">
        <button 
          onClick={() => setScreen('home')} 
          className="w-12 h-12 bg-white/90 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-gray-800 shadow-lg hover:bg-white transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-white/50 flex items-center">
          <MapPin className="w-5 h-5 text-blue-600 mr-2" />
          <span className="font-bold text-gray-800 text-sm">Nearby Services</span>
        </div>
      </div>

      <div className="flex-1 w-full relative">
        <MapContainer 
          center={position} 
          zoom={12} 
          style={{ height: '100%', width: '100%', zIndex: 1 }}
          zoomControl={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {locations.map(loc => (
            <Marker key={loc.id} position={[loc.lat, loc.lng]}>
              <Popup>
                <div className="text-center">
                  <h3 className="font-bold text-gray-800">{loc.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{loc.desc}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 z-[1000] p-6 pb-8 bg-gradient-to-t from-white via-white/90 to-transparent">
        <div className="bg-white rounded-3xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex overflow-x-auto scrollbar-hide gap-4">
          {locations.map(loc => (
             <div key={loc.id} className="min-w-[150px] flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-800 text-sm truncate">{loc.name}</h4>
                </div>
                <p className="text-xs text-gray-500 pl-10">{loc.desc}</p>
             </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}