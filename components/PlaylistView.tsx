
import React from 'react';
import { RECITAL_INFO } from '../constants';
import { Youtube, ExternalLink, PlayCircle } from 'lucide-react';

const PlaylistView: React.FC = () => {
  const playlistUrl = `https://www.youtube.com/playlist?list=${RECITAL_INFO.playlistId}`;

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2 mb-8">
        <div className="inline-flex items-center justify-center p-3 bg-stone-200 rounded-full mb-2">
            <Youtube className="w-6 h-6 text-stone-600" />
        </div>
        <h2 className="font-serif text-3xl font-bold text-stone-800">Vídeos do Recital</h2>
        <p className="text-stone-500">Assista à playlist completa</p>
      </div>

      <div className="max-w-xl mx-auto">
        <a 
          href={playlistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative bg-stone-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-red-900/20 transition-all duration-300 transform hover:-translate-y-1"
        >
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-stone-900/80 z-10"></div>
            
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-red-600/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl z-0"></div>

            <div className="relative z-20 p-8 md:p-12 text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl mx-auto flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
                    <PlayCircle className="w-10 h-10 text-white" />
                </div>

                <div className="space-y-2">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-white group-hover:text-gold-200 transition-colors">
                        Playlist Oficial
                    </h3>
                    <p className="text-stone-300 text-sm md:text-base max-w-xs mx-auto">
                        Acesse o YouTube para assistir a todas as apresentações na sequência.
                    </p>
                </div>

                <div className="inline-flex items-center gap-2 px-6 py-3 bg-white text-stone-900 font-bold rounded-full hover:bg-gold-50 transition-colors">
                    Assistir no YouTube
                    <ExternalLink className="w-4 h-4" />
                </div>
            </div>
        </a>
      </div>
    </div>
  );
};

export default PlaylistView;
