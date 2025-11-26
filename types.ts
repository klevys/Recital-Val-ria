export enum SectionType {
  OPENING = 'OPENING',
  PIANO = 'PIANO',
  GROUP = 'GROUP',
  LYRICS = 'LYRICS'
}

export interface Song {
  title: string;
  composer?: string;
  details?: string;
}

export interface Performance {
  id: string;
  performer?: string; // Optional for group acts
  groupName?: string;
  songs: Song[];
  order: number;
}

export interface RecitalSection {
  id: string;
  title: string;
  subtitle?: string;
  type: SectionType;
  items: Performance[];
}

export interface LyricSection {
  title: string;
  verses: string[]; // Each string is a stanza
}