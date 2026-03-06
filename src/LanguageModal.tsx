import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from './LanguageContext';

export const LanguageModal = () => {
  const { showModal, setLanguage } = useLanguage();

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-darker/95 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="bg-dark border border-gold/30 p-8 md:p-12 rounded-2xl max-w-lg w-full text-center shadow-2xl relative overflow-hidden"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold rounded-tl-xl opacity-50 m-2"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold rounded-tr-xl opacity-50 m-2"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold rounded-bl-xl opacity-50 m-2"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold rounded-br-xl opacity-50 m-2"></div>

            <h2 className="font-serif text-2xl md:text-3xl text-white mb-2">Select your language</h2>
            <h2 className="font-serif text-xl md:text-2xl text-gold italic mb-10">Sélectionnez votre langue</h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
              <button 
                onClick={() => setLanguage('en')}
                className="group flex flex-col items-center space-y-4 p-6 rounded-xl hover:bg-white/5 transition-all duration-300 w-full sm:w-auto border border-transparent hover:border-white/10"
              >
                <img src="https://flagcdn.com/w160/gb.png" alt="English Flag" className="w-16 md:w-20 h-auto group-hover:scale-110 transition-transform duration-300 shadow-lg rounded-sm" referrerPolicy="no-referrer" />
                <span className="text-white tracking-widest uppercase text-sm font-medium group-hover:text-gold transition-colors">English</span>
              </button>

              <div className="w-px h-16 bg-white/10 hidden sm:block"></div>
              <div className="h-px w-16 bg-white/10 block sm:hidden"></div>

              <button 
                onClick={() => setLanguage('fr')}
                className="group flex flex-col items-center space-y-4 p-6 rounded-xl hover:bg-white/5 transition-all duration-300 w-full sm:w-auto border border-transparent hover:border-white/10"
              >
                <img src="https://flagcdn.com/w160/fr.png" alt="French Flag" className="w-16 md:w-20 h-auto group-hover:scale-110 transition-transform duration-300 shadow-lg rounded-sm" referrerPolicy="no-referrer" />
                <span className="text-white tracking-widest uppercase text-sm font-medium group-hover:text-gold transition-colors">Français</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
