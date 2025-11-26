import React from 'react';
import { Performance } from '../types';
import { PlayCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface PerformanceCardProps {
  item: Performance;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
}

const PerformanceCard: React.FC<PerformanceCardProps> = ({ item, isActive, isCompleted, onClick }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={onClick}
      className={`
        relative p-6 rounded-2xl transition-all duration-300 cursor-pointer border
        ${isActive 
          ? 'bg-white shadow-lg border-gold-400 scale-[1.02] z-10' 
          : isCompleted
            ? 'bg-stone-100 opacity-60 border-transparent hover:opacity-80'
            : 'bg-white shadow-sm border-stone-200 hover:border-gold-300'
        }
      `}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          {/* Order Badge */}
          <div className="flex items-center gap-3 mb-2">
            <span className={`
              text-xs font-bold px-2 py-1 rounded-md
              ${isActive ? 'bg-gold-500 text-white' : 'bg-stone-200 text-stone-600'}
            `}>
              {String(item.order).padStart(2, '0')}
            </span>
            {isActive && (
              <span className="text-xs font-semibold text-gold-600 animate-pulse flex items-center gap-1">
                <PlayCircle className="w-3 h-3" /> Acontecendo agora
              </span>
            )}
            {isCompleted && (
               <span className="text-xs font-semibold text-stone-500 flex items-center gap-1">
               <CheckCircle2 className="w-3 h-3" /> Apresentado
             </span>
            )}
          </div>

          {/* Performer Name */}
          <h3 className={`
            font-serif text-lg md:text-xl font-bold mb-3 leading-tight
            ${isActive ? 'text-stone-900' : 'text-stone-700'}
          `}>
            {item.performer || item.groupName}
          </h3>

          {/* Songs List */}
          <div className="space-y-3">
            {item.songs.map((song, idx) => (
              <div key={idx} className="border-l-2 border-gold-200 pl-3">
                <p className="font-medium text-stone-800 leading-snug">
                  {song.title}
                </p>
                {song.composer && (
                  <p className="text-sm text-stone-500 mt-0.5 italic">
                    {song.composer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceCard;