
import { RecitalSection, SectionType, LyricSection, VideoItem } from './types';

export const RECITAL_INFO = {
  title: "4º Recital de Alunos",
  teacher: "Profª Valeria Mitt",
  date: "1º de Dezembro",
  time: "19h30",
  location: "Auditório Trilhar",
  locationUrl: "https://maps.app.goo.gl/x5Lzz7FFRcNc8D47A", 
  // Date: Dec 1, 2025, 19:30 - 21:30 (Approx 2 hours)
  googleCalendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=4%C2%BA%20Recital%20de%20Alunos%20-%20Prof%C2%AA%20Valeria%20Mitt&dates=20251201T193000/20251201T213000&details=Recital%20de%20Piano%20e%20outros%20instrumentos%20com%20alunos%20da%20Prof%C2%AA%20Valeria%20Mitt.&location=Audit%C3%B3rio%20Trilhar",
  photosUrl: "https://photos.app.goo.gl/iQn36kXrvoTpX5k28",
  playlistId: "PLl6vhromWvfZCu-K6tDgUbrCd1AJ3YaFa"
};

export const PROGRAM_DATA: RecitalSection[] = [
  {
    id: 'opening',
    title: "Abertura",
    subtitle: "Boas vindas",
    type: SectionType.OPENING,
    items: [
      {
        id: 'open-1',
        order: 0,
        songs: [
          { title: "Hino Nacional" },
          { title: "Palavra Pastoral" }
        ]
      }
    ]
  },
  {
    id: 'part-1',
    title: "Primeira Parte",
    subtitle: "Piano",
    type: SectionType.PIANO,
    items: [
      {
        id: 'p1',
        order: 1,
        performer: "Anna Mitt Silva",
        songs: [
          { title: "Mazurca, op. 39, nº 10", composer: "P. I. Tschaikowsky" },
          { title: "A Primavera (4 Estações)", composer: "Antonio Vivaldi" }
        ]
      },
      {
        id: 'p2',
        order: 2,
        performer: "Elisa Alves Seitz",
        songs: [
          { title: "Sonatina, op. 36, nº 1", composer: "Muzio Clementi" },
          { title: "Assim ninava mamã", composer: "Heitor Villa-Lobos" }
        ]
      },
      {
        id: 'p3',
        order: 3,
        performer: "Hadassa Maria Mury de Aquino Santos",
        songs: [
          { title: "Aos olhos do Pai" }
        ]
      },
      {
        id: 'p4',
        order: 4,
        performer: "João Carlos Caixeta Lima",
        songs: [
          { title: "Sonatina, op. 36, nº 2", composer: "Muzio Clementi" },
          { title: "Tico-Tico no Fubá", composer: "Zequinha de Abreu" }
        ]
      },
      {
        id: 'p5',
        order: 5,
        performer: "Samuel Rodrigues Glória",
        songs: [
          { title: "Hino Nacional Brasileiro", composer: "J.O. Duque Estrada e F. Manuel da Silva" },
          { title: "Sonata, nº 8, 1º mov. - Patética", composer: "Ludwig Van Beethoven" },
          { title: "Le pétit Ânne Blanc", composer: "Jacques Ibert" }
        ]
      }
    ]
  },
  {
    id: 'part-2',
    title: "Segunda Parte",
    subtitle: "Outros Instrumentos e Vozes",
    type: SectionType.GROUP,
    items: [
      {
        id: 'g1',
        order: 6,
        groupName: "VOCAL - Grupo",
        performer: "Laís, Regiane, Verônica, Valéria, Vanessa, Klévys, Nemuel, Augusto e Renato",
        songs: [
          { title: "O Canto de Maria", composer: "Coral alemão medieval (Alta C. Faireloth/Trad. Joan Sutton)" },
          { title: "Manso é Bom Jesus", composer: "F. A. Gevaert" }
        ]
      },
      {
        id: 'g2',
        order: 7,
        groupName: "FLAUTAS",
        performer: "Nemuel, Valéria, Vanessa, Verônica, Werner, Augusto e Carlos Jamaica",
        songs: [
          { title: "Natal", composer: "Martinho Lutero-1535 / Harm. J. S. Bach-1734" },
          { title: "Exulta, Coração!", composer: "P. Gerhardt-1656 / J.J. Ereling-1666 / Harm. J.S. Bach-1734" }
        ]
      },
      {
        id: 'g3',
        order: 8,
        groupName: "VOCAL e INSTRUMENTAL",
        songs: [
          { title: "Cantai! Que o Salvador chegou!", composer: "Osasco Watts-1719 / G. F. Handel-1742 (HCC106)" },
          { title: "Noite de Paz! Noite de Amor!", composer: "Joseph Mohr-1818 / Franz X. Gruber-1818 (HCC91)" }
        ]
      }
    ]
  }
];

export const LYRICS_DATA: LyricSection[] = [
  {
    title: "Cantai Que o Salvador Chegou!",
    verses: [
      "1. Cantai que o Salvador chegou. Acolha a terra o Rei. Ó vós, nações, a ele só contentes vos rendei, Contentes vos rendei. Oh, sim, contentes vos rendei.",
      "2. Ao mundo as novas proclamai que já raiou a luz. Ó terra, mar e céus, cantai: nasceu o Rei Jesus. Nasceu o Rei Jesus. Nasceu, nasceu o Rei Jesus.",
      "3. Ele venceu a morte e a dor, baniu a maldição. As bênçãos vêm do Redentor em régia profusão, Em régia profusão. Ó sim, em régia profusão.",
      "4. Cristo governa com amor. Os povos provarão que é justo e bom o Salvador e lhe obedecerão, e lhe obedecerão. Sim, todos lhe obedecerão."
    ]
  },
  {
    title: "Noite de Paz! Noite de Amor!",
    verses: [
      "1. Noite de paz! Noite de amor! Dormem todos ao redor. Em Belém Jesus nasceu, Rei da paz, da terra e céu. Nosso Salvador é Jesus, Senhor.",
      "2. 'Glória a Deus! Glória a Deus!' Cantam anjos lá dos céus; Trazem novas de perdão, graça eterna, salvação. Prova deste amor dá o Redentor.",
      "3. Rei da paz, Rei de amor é Jesus, o Salvador. Vinde todos lhe rogar que nos venha abençoar. Deste mundo a luz é o Senhor Jesus."
    ]
  }
];

export const VIDEOS_DATA: VideoItem[] = [];