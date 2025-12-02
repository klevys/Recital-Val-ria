
import React, { useState } from 'react';
import Hero from './components/Hero';
import PerformanceCard from './components/PerformanceCard';
import LyricsView from './components/LyricsView';
import PhotosView from './components/PhotosView';
import PlaylistView from './components/PlaylistView';
import { PROGRAM_DATA } from './constants';
import { ScrollText, Music2, Image as ImageIcon, Film } from 'lucide-react';

function App() {
  const [activeItemId, setActiveItemId] = useState<string | null>(null);
  const [completedItems, setCompletedItems] = useState<string[]>([]);
  const [view, setView] = useState<'program' | 'lyrics' | 'photos' | 'playlist'>('program');

  const handleItemClick = (id: string) => {
    if (activeItemId === id) {
      // Toggle off
      setActiveItemId(null);
      // If it was active and we click it, maybe mark as done?
      if (!completedItems.includes(id)) {
        setCompletedItems([...completedItems, id]);
      }
    } else {
      setActiveItemId(id);
      // When setting a new active, assume previous ones might be done? 
      // For simplicity, let's just make it a manual tracker.
    }
  };

  return (
    <div className="min-h-screen pb-24">
      <Hero />

      <main className="max-w-4xl mx-auto px-4 -mt-10 relative z-10 space-y-16">
        
        {/* Navigation Tabs */}
        <div className="flex justify-center w-full">
            <div className="bg-white p-1.5 rounded-full shadow-lg border border-stone-200 flex flex-wrap justify-center gap-1 sm:gap-2 max-w-full">
                <button 
                    onClick={() => setView('program')}
                    className={`flex items-center gap-2 px-3 sm:px-5 py-2.5 rounded-full font-medium text-xs sm:text-base transition-all ${view === 'program' ? 'bg-gold-500 text-white shadow-md' : 'text-stone-500 hover:bg-stone-50'}`}
                >
                    <ScrollText className="w-4 h-4" />
                    Programa
                </button>
                <button 
                    onClick={() => setView('lyrics')}
                    className={`flex items-center gap-2 px-3 sm:px-5 py-2.5 rounded-full font-medium text-xs sm:text-base transition-all ${view === 'lyrics' ? 'bg-gold-500 text-white shadow-md' : 'text-stone-500 hover:bg-stone-50'}`}
                >
                    <Music2 className="w-4 h-4" />
                    Letras
                </button>
                <button 
                    onClick={() => setView('playlist')}
                    className={`flex items-center gap-2 px-3 sm:px-5 py-2.5 rounded-full font-medium text-xs sm:text-base transition-all ${view === 'playlist' ? 'bg-gold-500 text-white shadow-md' : 'text-stone-500 hover:bg-stone-50'}`}
                >
                    <Film className="w-4 h-4" />
                    Vídeos
                </button>
                <button 
                    onClick={() => setView('photos')}
                    className={`flex items-center gap-2 px-3 sm:px-5 py-2.5 rounded-full font-medium text-xs sm:text-base transition-all ${view === 'photos' ? 'bg-gold-500 text-white shadow-md' : 'text-stone-500 hover:bg-stone-50'}`}
                >
                    <ImageIcon className="w-4 h-4" />
                    Fotos
                </button>
            </div>
        </div>

        {view === 'program' && (
            <div className="space-y-12">
            {PROGRAM_DATA.map((section) => (
                <section key={section.id} className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="h-px bg-gold-300 flex-1"></div>
                    <div className="text-center">
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-800">
                        {section.title}
                        </h2>
                        {section.subtitle && (
                        <p className="text-gold-600 font-medium uppercase tracking-widest text-xs mt-1">
                            {section.subtitle}
                        </p>
                        )}
                    </div>
                    <div className="h-px bg-gold-300 flex-1"></div>
                </div>

                <div className="grid gap-4 md:grid-cols-1">
                    {section.items.map((item) => (
                    <PerformanceCard
                        key={item.id}
                        item={item}
                        isActive={activeItemId === item.id}
                        isCompleted={completedItems.includes(item.id)}
                        onClick={() => handleItemClick(item.id)}
                    />
                    ))}
                </div>
                </section>
            ))}
            </div>
        )}

        {view === 'lyrics' && <LyricsView />}
        {view === 'playlist' && <PlaylistView />}
        {view === 'photos' && <PhotosView />}
        
      </main>

      <footer className="mt-20 py-8 text-center text-stone-400 text-sm">
        <p>© 2025 CRESCER. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
