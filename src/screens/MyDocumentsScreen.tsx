import { motion } from 'motion/react';
import { ScreenProps, glassClass, pageVariants, pageTransition } from '../types';
import { ArrowLeft, FileText, Upload, Plus, Download, Trash2, Eye } from 'lucide-react';
import React, { useState } from 'react';

interface DocumentItem {
  id: string;
  name: string;
  type: string;
  size: string;
  date: string;
}

export function MyDocumentsScreen({ setScreen }: ScreenProps) {
  const [documents, setDocuments] = useState<DocumentItem[]>([
    { id: '1', name: 'CNIC Copy.pdf', type: 'PDF', size: '1.2 MB', date: '10 Aug 2026' },
    { id: '2', name: 'Property Documents.pdf', type: 'PDF', size: '4.5 MB', date: '05 Aug 2026' },
    { id: '3', name: 'Degree Certificate.jpg', type: 'Image', size: '2.1 MB', date: '12 Jul 2026' }
  ]);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setIsUploading(true);
      const file = e.target.files[0];
      
      // Simulate upload delay
      setTimeout(() => {
        const newDoc: DocumentItem = {
          id: Math.random().toString(),
          name: file.name,
          type: file.type.includes('image') ? 'Image' : 'PDF',
          size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
          date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
        };
        
        setDocuments([newDoc, ...documents]);
        setIsUploading(false);
      }, 1500);
    }
  };

  const handleDelete = (id: string) => {
    setDocuments(documents.filter(doc => doc.id !== id));
  };

  return (
    <motion.div
      key="my_documents"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="h-full w-full flex flex-col pt-12 pb-6 relative overflow-y-auto scrollbar-hide px-6"
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <button onClick={() => setScreen('profile')} className="w-10 h-10 bg-white/60 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-indigo-600 shadow-sm mr-4 hover:bg-white/80 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-2xl font-bold text-indigo-800 tracking-tight">My Documents</h2>
        </div>
        
        <div className="relative">
          <input 
            type="file" 
            id="file-upload" 
            className="hidden" 
            onChange={handleUpload}
            disabled={isUploading}
          />
          <label 
            htmlFor="file-upload" 
            className={`w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-sm cursor-pointer hover:bg-indigo-700 transition-colors ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isUploading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Plus className="w-5 h-5" />
            )}
          </label>
        </div>
      </div>

      <div className="space-y-4">
        {documents.length === 0 ? (
          <div className="text-center py-12 text-gray-500 bg-white/40 rounded-2xl">
            <FileText className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p>No documents found.</p>
            <p className="text-sm mt-2">Tap the + button to upload</p>
          </div>
        ) : (
          documents.map(doc => (
            <div key={doc.id} className={`${glassClass} p-4 rounded-2xl flex items-center`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 shrink-0 ${doc.type === 'PDF' ? 'bg-red-100 text-red-500' : 'bg-blue-100 text-blue-500'}`}>
                <FileText className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-gray-800 text-sm truncate">{doc.name}</h4>
                <div className="flex items-center text-[10px] font-bold text-gray-500 mt-1 uppercase tracking-wider space-x-2">
                  <span>{doc.type}</span>
                  <span>•</span>
                  <span>{doc.size}</span>
                  <span>•</span>
                  <span>{doc.date}</span>
                </div>
              </div>
              <div className="flex items-center ml-2 space-x-1">
                <button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
                <button onClick={() => handleDelete(doc.id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      
      <div className="mt-8 p-5 bg-indigo-50 rounded-2xl border border-indigo-100">
        <div className="flex items-center text-indigo-800 mb-2">
          <Upload className="w-5 h-5 mr-2" />
          <h3 className="font-bold text-sm">Secure Vault</h3>
        </div>
        <p className="text-xs text-indigo-600/80 leading-relaxed font-medium">
          All documents are encrypted and securely stored. They can be used for verification across different government services.
        </p>
      </div>
    </motion.div>
  );
}
