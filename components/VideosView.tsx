
import React from 'react';
import { VIDEOS_DATA } from '../constants';
import { PlaySquare } from 'lucide-react';

const VideosView: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-2 mb-8">
        <div className="inline-flex items-center justify-center p-3 bg-stone-200 rounded-full mb-2">
            <PlaySquare className="w-6 h-6 text-stone-600" />
        </div>
        <h2 className="font-serif text-3xl font-bold text-stone-800">Galeria de Vídeos</h2>
        <p className="text-stone-500">Momentos especiais e apresentações</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {VIDEOS_DATA.map((video, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg border border-stone-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="relative w-full pt-[56.25%] bg-stone-900">
              <iframe 
                src={video.embedUrl}
                title={video.title} 
                className="absolute top-0 left-0 w-full h-full border-0"
                width="560"
                height="315"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-5 bg-stone-50 flex-1 flex flex-col justify-center">
                <h3 className="font-serif font-bold text-stone-800 text-lg md:text-xl mb-1">{video.title}</h3>
                <p className="text-stone-500 text-sm">{video.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosView;
