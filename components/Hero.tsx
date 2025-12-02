import React from 'react';
import { Calendar, Clock, MapPin, Music, CalendarPlus, Camera, ChevronRight, Star } from 'lucide-react';
import { RECITAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-stone-900 text-gold-50 pb-20 pt-24 px-6 rounded-b-[3rem] shadow-xl">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
        <svg viewBox="0 0 400 400" className="w-full h-full object-cover">
          <path d="M0,200 Q100,100 200,200 T400,200" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M0,250 Q100,150 200,250 T400,250" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M0,300 Q100,200 200,300 T400,300" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-20 max-w-3xl mx-auto text-center space-y-6">
        <div className="flex justify-center mb-4">
           <div className="p-3 bg-gold-600 rounded-full bg-opacity-20 backdrop-blur-sm border border-gold-500/30 shadow-glow">
              <Music className="w-8 h-8 text-gold-400" />
           </div>
        </div>
        
        <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-gold-100 to-gold-400 drop-shadow-sm">
          {RECITAL_INFO.title}
        </h1>
        
        <p className="text-xl md:text-2xl font-light tracking-widest uppercase text-gold-200">
          {RECITAL_INFO.teacher}
        </p>

        {/* --- HERO BANNER FOR PHOTOS/VOTING --- */}
        <div className="py-6 w-full flex justify-center">
            <a 
              href={RECITAL_INFO.photosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full max-w-md block transform transition-all hover:scale-105 duration-300"
            >
              {/* Animated Glow Effect behind */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-400 via-yellow-200 to-gold-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              <div className="relative flex items-center bg-stone-900 border border-gold-400/50 rounded-xl px-6 py-5 shadow-2xl overflow-hidden">
                {/* Decorative background circle inside card */}
                <div className="absolute right-0 top-0 -mt-4 -mr-4 w-24 h-24 bg-gold-500/10 rounded-full blur-xl"></div>

                <div className="flex-shrink-0 bg-gradient-to-br from-gold-400 to-gold-600 p-4 rounded-xl shadow-lg text-stone-900 mr-5">
                  <Camera className="w-8 h-8" />
                </div>
                
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <Star className="w-3 h-3 text-gold-400 fill-current animate-pulse" />
                    <span className="text-gold-400 text-xs font-bold tracking-widest uppercase">Área Interativa</span>
                  </div>
                  <h3 className="text-white font-serif text-xl md:text-2xl font-bold leading-none mb-1 group-hover:text-gold-200 transition-colors">
                    Fotos & Videos
                  </h3>
                  <p className="text-stone-400 text-xs md:text-sm">Clique para ver fotos e videos</p>
                </div>

                <ChevronRight className="w-6 h-6 text-gold-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
        </div>
        {/* ------------------------------------- */}

        <div className="flex flex-col items-center gap-6 mt-2">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm md:text-base font-medium text-stone-300">
            <div className="flex items-center gap-2 bg-stone-800/50 px-5 py-2.5 rounded-full border border-stone-700 backdrop-blur-md">
              <Calendar className="w-4 h-4 text-gold-500" />
              <span>{RECITAL_INFO.date}</span>
            </div>
            <div className="flex items-center gap-2 bg-stone-800/50 px-5 py-2.5 rounded-full border border-stone-700 backdrop-blur-md">
              <Clock className="w-4 h-4 text-gold-500" />
              <span>{RECITAL_INFO.time}</span>
            </div>
          </div>
          
          <div className="flex justify-center w-full">
            <a 
              href={RECITAL_INFO.googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-gold-300 border border-gold-800 hover:bg-gold-900/30 hover:text-gold-100 rounded-full transition-all"
            >
              <CalendarPlus className="w-4 h-4" />
              Adicionar à Agenda
            </a>
          </div>
        </div>

        <div className="pt-2 relative z-30">
            <a 
            href={RECITAL_INFO.locationUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-gold-300 hover:text-gold-100 transition-colors cursor-pointer group rounded-lg hover:bg-white/5"
            >
            <MapPin className="w-5 h-5 text-gold-500 group-hover:animate-bounce" />
            <span className="border-b border-dashed border-gold-700 group-hover:border-gold-300 pb-0.5">{RECITAL_INFO.location}</span>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;