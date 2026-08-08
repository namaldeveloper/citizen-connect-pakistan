import { motion } from 'motion/react';
import { ScreenProps, glassClass, glassButtonClass, glassInputClass, pageVariants, pageTransition } from '../types';
import { ArrowLeft, MessageSquare, Send, ThumbsUp, ThumbsDown, Star } from 'lucide-react';
import { useState } from 'react';

export function FeedbackScreen({ setScreen }: ScreenProps) {
  const [rating, setRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setScreen('services');
      }, 2000);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <motion.div
        key="feedback-success"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
        className="h-full w-full flex flex-col items-center justify-center p-6 relative"
      >
        <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-6">
          <ThumbsUp className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">Thank You!</h2>
        <p className="text-gray-600 text-center text-sm">Your feedback helps us improve our services.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      key="feedback"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="h-full w-full flex flex-col pt-12 pb-6 relative overflow-y-auto scrollbar-hide px-6"
    >
      <div className="flex items-center mb-8">
        <button onClick={() => setScreen('services')} className="w-10 h-10 bg-white/60 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-purple-600 shadow-sm mr-4 hover:bg-white/80 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold text-purple-800 tracking-tight">Feedback</h2>
      </div>

      <div className={`${glassClass} p-6 rounded-2xl flex-1`}>
        <div className="mb-6 flex flex-col items-center">
          <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-4">
            <MessageSquare className="w-8 h-8" />
          </div>
          <h3 className="font-bold text-gray-800 text-lg text-center">Rate Your Experience</h3>
          <p className="text-gray-500 text-sm text-center mt-1">How was your experience using our services today?</p>
        </div>

        <div className="flex justify-center space-x-2 mb-8">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className="p-2 transition-transform hover:scale-110 active:scale-95"
            >
              <Star
                className={`w-8 h-8 ${rating >= star ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
              />
            </button>
          ))}
        </div>

        <div className="space-y-4 mb-8">
          <div>
            <label className="text-xs font-bold text-gray-600 ml-1 mb-1 block">Category</label>
            <select className={`${glassInputClass} appearance-none bg-transparent`}>
              <option>General App Experience</option>
              <option>Service Response Time</option>
              <option>Staff Behavior</option>
              <option>Report a Bug</option>
              <option>Suggestion for Improvement</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-bold text-gray-600 ml-1 mb-1 block">Your Comments</label>
            <textarea 
              placeholder="Tell us what you liked or what we can improve..." 
              className={`${glassInputClass} min-h-[120px] resize-none`}
            ></textarea>
          </div>
        </div>

        <button 
          onClick={handleSubmit}
          disabled={rating === 0 || isSubmitting}
          className={`w-full py-4 rounded-2xl font-bold text-white shadow-md transition-all text-sm uppercase tracking-wider flex items-center justify-center ${
            rating === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'
          }`}
        >
          {isSubmitting ? (
            <span className="animate-pulse">Submitting...</span>
          ) : (
            <>
              Submit Feedback <Send className="w-4 h-4 ml-2" />
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}
