export type SupportedLanguage = 'it' | 'de' | 'fr' | 'ru' | 'es' | 'en';

export interface Token {
  word: string;
  lemma: string;
  pos: 'noun' | 'verb' | 'adjective' | 'adverb' | 'pronoun' | 'preposition' | 'conjunction' | 'interjection' | 'particle' | 'idiom';
  meaning: string;
  notes?: string; // Archaic, poetic, or etymological note
}

export interface Line {
  id: string;
  original: string;
  literal: string;
  tokens?: Token[];
  grammarNote?: string;
  poeticContext?: string;
  transliteration?: string; // Useful for Russian Cyrillic (e.g. Eugene Onegin)
}

export interface Cue {
  id: string;
  speaker: string;
  stageDirection?: string;
  stageDirectionTranslation?: string;
  pieceTitle?: string; // Aria, Recitative, Duet, Chorus title
  lines: Line[];
}

export interface SettingSegment {
  original: string;
  translation: string;
}

export interface Scene {
  sceneNumber: number;
  title: string;
  titleTranslation?: string;
  originalDescription?: string;
  description?: string;
  settingSegments?: SettingSegment[];
  cues: Cue[];
}

export interface Act {
  actNumber: number;
  title: string;
  originalSetting?: string;
  setting: string;
  scenes: Scene[];
}

export interface Character {
  name: string;
  voiceType: 'Soprano' | 'Mezzo-Soprano' | 'Contralto' | 'Tenor' | 'Baritone' | 'Bass-Baritone' | 'Bass' | 'Spoken' | 'Chorus';
  description: string;
}

export interface OperaSummary {
  id: string;
  title: string;
  originalTitle?: string;
  composer: string;
  librettists: string[];
  language: SupportedLanguage;
  languageLabel: string;
  year: number;
  actsCount?: number;
  scenesCount?: number;
  celebratedPieces?: string[];
  synopsisSnippet?: string;
}

export interface Opera extends OperaSummary {
  synopsis: string;
  characters: Character[];
  acts: Act[];
  sourceCitation?: string;
  sourceUrl?: string;
  sourceName?: string;
  publicDomainNotice?: string;
}

export type ThemeMode = 'day' | 'night' | 'astro-red';
