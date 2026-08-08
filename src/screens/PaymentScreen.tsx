import { motion } from 'motion/react';
import { ScreenProps, glassClass, glassInputClass, pageVariants, pageTransition } from '../types';
import { ArrowLeft, CreditCard, Receipt, FileText, Car, Home, CheckCircle2, ShieldCheck, Lock } from 'lucide-react';
import React, { useState } from 'react';

const paymentItems = [
  { id: 'traffic', title: 'Traffic Challan', amount: 500, icon: Car, ref: 'CHL-892374' },
  { id: 'vehicle', title: 'Vehicle Token Tax', amount: 3500, icon: Receipt, ref: 'VTT-2026' },
  { id: 'property', title: 'Property Tax', amount: 15000, icon: Home, ref: 'PTX-4598' },
];

export function PaymentScreen({ setScreen }: ScreenProps) {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTimeout(() => {
        setScreen('services');
      }, 3000);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <motion.div
        key="payment-success"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
        className="h-full w-full flex flex-col items-center justify-center p-6 relative"
      >
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
          <CheckCircle2 className="w-12 h-12" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">Payment Successful!</h2>
        <p className="text-gray-600 text-center text-sm">Your payment of Rs. {selectedItem?.amount} has been processed securely.</p>
        <div className="mt-8 p-4 bg-gray-50 rounded-2xl w-full">
          <p className="text-xs text-gray-500 uppercase font-bold mb-2">Transaction Details</p>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Reference:</span>
            <span className="font-bold">{selectedItem?.ref}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Date:</span>
            <span className="font-bold">{new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </motion.div>
    );
  }

  if (selectedItem) {
    return (
      <motion.div
        key="payment-checkout"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
        className="h-full w-full flex flex-col pt-12 pb-6 relative overflow-y-auto scrollbar-hide px-6"
      >
        <div className="flex items-center mb-6">
          <button onClick={() => setSelectedItem(null)} className="w-10 h-10 bg-white/60 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-indigo-600 shadow-sm mr-4 hover:bg-white/80 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-2xl font-bold text-indigo-800 tracking-tight">Secure Checkout</h2>
        </div>

        <div className={`${glassClass} p-5 rounded-2xl mb-6`}>
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase">Paying for</p>
              <h3 className="font-bold text-gray-800">{selectedItem.title}</h3>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 font-bold uppercase">Amount</p>
              <h3 className="font-bold text-indigo-600">Rs. {selectedItem.amount}</h3>
            </div>
          </div>
          <div className="flex items-center text-xs text-gray-500 bg-gray-50 p-2 rounded-lg">
            <FileText className="w-4 h-4 mr-2" /> Ref: {selectedItem.ref}
          </div>
        </div>

        <form onSubmit={handlePayment} className={`${glassClass} p-5 rounded-2xl flex-1 flex flex-col`}>
          <div className="flex items-center text-green-600 text-xs font-bold mb-4 bg-green-50 p-2 rounded-lg">
            <ShieldCheck className="w-4 h-4 mr-1" /> 256-bit Secure Encryption
          </div>
          
          <div className="space-y-4 flex-1">
            <div>
              <label className="text-xs font-bold text-gray-600 ml-1 mb-1 block">Card Number</label>
              <div className="relative">
                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input required type="text" placeholder="0000 0000 0000 0000" className={`${glassInputClass} pl-12 font-mono text-sm`} maxLength={19} />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-gray-600 ml-1 mb-1 block">Expiry Date</label>
                <input required type="text" placeholder="MM/YY" className={`${glassInputClass} text-center font-mono text-sm`} maxLength={5} />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-600 ml-1 mb-1 block">CVV</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input required type="password" placeholder="123" className={`${glassInputClass} pl-9 font-mono text-sm`} maxLength={4} />
                </div>
              </div>
            </div>
            
            <div>
              <label className="text-xs font-bold text-gray-600 ml-1 mb-1 block">Cardholder Name</label>
              <input required type="text" placeholder="JOHN DOE" className={`${glassInputClass} uppercase text-sm`} />
            </div>
          </div>

          <button 
            type="submit"
            disabled={isProcessing}
            className={`w-full py-4 rounded-2xl font-bold text-white shadow-md transition-all text-sm uppercase tracking-wider mt-6 ${isProcessing ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'}`}
          >
            {isProcessing ? 'Processing securely...' : `Pay Rs. ${selectedItem.amount}`}
          </button>
        </form>
      </motion.div>
    );
  }

  return (
    <motion.div
      key="payment"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="h-full w-full flex flex-col pt-12 pb-6 relative overflow-y-auto scrollbar-hide px-6"
    >
      <div className="flex items-center mb-8">
        <button onClick={() => setScreen('services')} className="w-10 h-10 bg-white/60 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-indigo-600 shadow-sm mr-4 hover:bg-white/80 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold text-indigo-800 tracking-tight">Payments & Dues</h2>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-gray-800 mb-2">Pending Payments</h3>
        {paymentItems.map(item => (
          <div key={item.id} className={`${glassClass} p-5 rounded-2xl flex items-center`}>
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-500 mr-4 shrink-0">
              <item.icon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-800 text-sm">{item.title}</h4>
              <p className="text-xs text-gray-500 font-mono mt-1">Ref: {item.ref}</p>
            </div>
            <div className="text-right ml-2 flex flex-col items-end">
              <span className="font-bold text-indigo-600 text-sm mb-2">Rs. {item.amount}</span>
              <button 
                onClick={() => setSelectedItem(item)}
                className="px-4 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700 transition-colors"
              >
                Pay Now
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <h3 className="font-bold text-gray-800 mb-4">Payment History</h3>
        <div className="bg-white/40 p-4 rounded-xl text-center">
          <p className="text-gray-500 text-sm">No recent payments found.</p>
        </div>
      </div>
    </motion.div>
  );
}
