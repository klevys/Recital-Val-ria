import React from 'react';
import { LYRICS_DATA } from '../constants';
import { MessageSquareQuote } from 'lucide-react';

const LyricsView: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-2 mb-8">
        <div className="inline-flex items-center justify-center p-3 bg-stone-200 rounded-full mb-2">
            <MessageSquareQuote className="w-6 h-6 text-stone-600" />
        </div>
        <h2 className="font-serif text-3xl font-bold text-stone-800">Letras</h2>
        <p className="text-stone-500">Acompanhe e cante junto</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {LYRICS_DATA.map((song, index) => (
          <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200">
            <h3 className="font-serif text-xl font-bold text-gold-700 mb-6 border-b border-gold-100 pb-2">
              {song.title}
            </h3>
            <div className="space-y-6 text-stone-700 leading-relaxed text-sm md:text-base">
              {song.verses.map((verse, vIndex) => (
                <p key={vIndex}>{verse}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LyricsView;