import { SupportedLanguage } from '../types/libretto';

const LANGUAGE_PREFIX_MAP: Record<SupportedLanguage, string> = {
  it: 'it',
  de: 'de',
  fr: 'fr',
  ru: 'ru',
  es: 'es',
  en: 'en'
};

export const TARGET_LANG_CODE: Record<SupportedLanguage, string> = {
  it: 'it-IT',
  de: 'de-DE',
  fr: 'fr-FR',
  ru: 'ru-RU',
  es: 'es-ES',
  en: 'en-GB'
};

// Known legacy macOS voice stubs that lack local audio files and silently fall back to English Samantha
const STUB_VOICE_NAMES = ['anna', 'alice', 'thomas'];

export const isStubVoice = (name: string): boolean => {
  const lower = (name || '').toLowerCase().trim();
  // If the user explicitly downloaded the Enhanced or Premium version, it's real!
  if (lower.includes('enhanced') || lower.includes('premium')) return false;
  // Bare legacy names without downloaded packages are stubs on modern macOS
  return STUB_VOICE_NAMES.some(stub => lower === stub || lower.startsWith(stub + ' '));
};

export const isChromiumBlockedVoice = (voice: SpeechSynthesisVoice): boolean => {
  const isChromium = typeof window !== 'undefined' && !!(window as any).chrome;
  if (!isChromium) return false;
  
  const uri = (voice.voiceURI || '').toLowerCase();
  const name = (voice.name || '').toLowerCase();
  
  // Sandbox trap: compact voices fail in Chromium, EXCEPT Samantha which is the ultimate safe default.
  return uri.includes('compact') && !name.includes('samantha');
};

// Prioritize verified working voices installed on macOS / browsers
const PREFERRED_VOICES: Record<SupportedLanguage, string[]> = {
  de: ['Markus', 'Anna', 'Petra', 'Viktor', 'Yannick', 'Helena', 'Google Deutsch'],
  it: ['Alice', 'Luca', 'Federica', 'Chiara', 'Matteo', 'Google italiano'],
  fr: ['Thomas', 'Amélie', 'Audrey', 'Aurélie', 'Google français'],
  ru: ['Milena', 'Yuri', 'Katya', 'Google русский'],
  es: ['Mónica', 'Jorge', 'Paulina', 'Google español'],
  en: ['Daniel', 'Oliver', 'Samantha', 'Serena', 'Google UK English Female', 'Google UK English Male']
};

const REJECTED_VOICE_NAMES = [
  'reed', 'sandy', 'shelley', 'flo', 'eddy', 'rocko',
  'grandma', 'grandpa', 'junior', 'jester', 'bad news', 'bahh', 'bells', 'boing', 'bubbles',
  'cellos', 'deranged', 'good news', 'hysterical', 'pipe organ', 'trinoids',
  'whisper', 'zarvox', 'superstar', 'organ', 'albert', 'wobble'
];

let persistentVoices: SpeechSynthesisVoice[] = [];
const activeUtterances: Set<SpeechSynthesisUtterance> = new Set();

export type SpeechListener = (info: { 
  voiceName: string; 
  lang: string; 
  text: string;
  isError?: boolean;
}) => void;

const listeners: Set<SpeechListener> = new Set();

export const onSpeechStarted = (listener: SpeechListener): (() => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

const notifyListeners = (info: { voiceName: string; lang: string; text: string; isError?: boolean }) => {
  listeners.forEach(fn => fn(info));
};

export const getSafeVoices = (): SpeechSynthesisVoice[] => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return [];
  
  const live = window.speechSynthesis.getVoices();
  if (live && live.length > 0) {
    persistentVoices = live;
  }
  return persistentVoices;
};

// Initial voice loader
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  getSafeVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    getSafeVoices();
  };
}

export const getAvailableVoicesForLanguage = (language: SupportedLanguage, includeCompactIfEnhancedAvailable: boolean = false): SpeechSynthesisVoice[] => {
  const voices = getSafeVoices();
  if (!voices || voices.length === 0) return [];

  const prefix = LANGUAGE_PREFIX_MAP[language];
  const candidates = voices.filter(v => {
    const langCode = (v.lang || '').toLowerCase().replace('_', '-');
    const isLangMatch = langCode.startsWith(prefix);
    const nameLower = (v.name || '').toLowerCase();
    const uriLower = (v.voiceURI || '').toLowerCase();
    const isRejected = REJECTED_VOICE_NAMES.some(rej => nameLower.includes(rej) || uriLower.includes(rej));
    const isStub = isStubVoice(v.name || '');
    return isLangMatch && !isRejected && !isStub && !isChromiumBlockedVoice(v);
  });

  // If high-quality (Enhanced, Premium, or Google Natural) voices are installed for this language,
  // automatically filter out low-quality compact voices so the user never has to hear them!
  if (!includeCompactIfEnhancedAvailable) {
    const hdVoices = candidates.filter(v => {
      const n = (v.name || '').toLowerCase();
      const u = (v.voiceURI || '').toLowerCase();
      return n.includes('enhanced') || n.includes('premium') || n.includes('natural') || n.includes('google') || u.includes('enhanced') || u.includes('premium');
    });

    if (hdVoices.length > 0) {
      return hdVoices;
    }
  }

  return candidates;
};

export const getSelectedVoiceURI = (language: SupportedLanguage): string | null => {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem(`libretto_voice_${language}`);
  if (stored && isStubVoice(stored)) {
    // Automatically purge broken stub from localStorage so it doesn't keep poisoning playback
    localStorage.removeItem(`libretto_voice_${language}`);
    return null;
  }
  return stored;
};

export const setSelectedVoiceURI = (language: SupportedLanguage, voiceURI: string): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(`libretto_voice_${language}`, voiceURI);
};

export const KNOWN_MALE_VOICES = [
  // German
  'markus', 'viktor', 'yannick', 'martin', 'stefan', 'hans', 'florian', 'eddy', 'flo', 'reed', 'rocko',
  // Italian
  'luca', 'matteo', 'alessandro', 'paolo', 'roberto', 'diego', 'cosimo',
  // French
  'thomas', 'jacques', 'nicolas', 'pierre', 'antoine', 'henri',
  // Russian
  'yuri', 'dmitry', 'alexander', 'ilya', 'pavel', 'boris',
  // English / Multi-lang Eloquence
  'daniel', 'oliver', 'george', 'arthur', 'rishi', 'lee', 'tom', 'jorge', 'grandpa', 'mac', 'xander', 'aaron'
];

export const KNOWN_FEMALE_VOICES = [
  // German
  'anna', 'petra', 'helena', 'marlene', 'claudia', 'sandy', 'shelley',
  // Italian
  'alice', 'federica', 'chiara', 'paola', 'elsa',
  // French
  'amélie', 'amelie', 'aurélie', 'aurelie', 'audrey', 'charlotte', 'marie',
  // Russian
  'milena', 'katya', 'tatyana', 'elena', 'olga',
  // English / Multi-lang Eloquence
  'samantha', 'serena', 'karen', 'moira', 'fiona', 'tessa', 'stephanie', 'kate', 'victoria', 'grandma', 'zoe', 'luciana', 'tina', 'laura', 'joana', 'ioana'
];

export const isVoiceMale = (voice: SpeechSynthesisVoice): boolean => {
  const name = (voice.name || '').toLowerCase();
  if (name.includes('male') && !name.includes('female')) return true;
  if (name.includes('männlich') || name.includes('uomo') || name.includes('homme')) return true;
  return KNOWN_MALE_VOICES.some(n => name.includes(n));
};

export const isVoiceFemale = (voice: SpeechSynthesisVoice): boolean => {
  const name = (voice.name || '').toLowerCase();
  if (name.includes('female') || name.includes('weiblich') || name.includes('donna') || name.includes('femme')) return true;
  return KNOWN_FEMALE_VOICES.some(n => name.includes(n));
};

export const getGenderForSpeaker = (speakerName: string, characters?: { name: string; voiceType: string }[]): 'male' | 'female' | undefined => {
  const lower = (speakerName || '').toLowerCase().trim();
  if (lower.includes('lady') || lower.includes('dame') || lower.includes('königin') || lower.includes('queen') || lower.includes('pamina') || lower.includes('papagena') || lower.includes('leonore') || lower.includes('fidelio') || lower.includes('marzelline') || lower.includes('elisabeth') || lower.includes('venus') || lower.includes('shepherd') || lower.includes('siren') || lower.includes('alice') || lower.includes('nannetta') || lower.includes('meg') || lower.includes('quickly') || lower.includes('comari') || lower.includes('wives')) {
    return 'female';
  }
  if (lower.includes('knabe') || lower.includes('boy')) {
    return 'female'; // High treble / soprano
  }
  if (lower.includes('tamino') || lower.includes('papageno') || lower.includes('sarastro') || lower.includes('monostatos') || lower.includes('speaker') || lower.includes('sprecher') || lower.includes('geharnischte') || lower.includes('armed men') || lower.includes('priest') || lower.includes('priester') || lower.includes('florestan') || lower.includes('rocco') || lower.includes('jaquino') || lower.includes('pizarro') || lower.includes('fernando') || lower.includes('gefangene') || lower.includes('prisoner') || lower.includes('tannhäuser') || lower.includes('tannhaeuser') || lower.includes('heinrich') || lower.includes('wolfram') || lower.includes('landgraf') || lower.includes('hermann') || lower.includes('walther') || lower.includes('biterolf') || lower.includes('falstaff') || lower.includes('ford') || lower.includes('fenton') || lower.includes('caius') || lower.includes('bardolfo') || lower.includes('pistola')) {
    return 'male';
  }
  if (!characters) return undefined;
  const char = characters.find(c => {
    const cLower = c.name.toLowerCase().trim();
    return cLower === lower || lower.includes(cLower) || cLower.includes(lower);
  });
  if (!char) return undefined;
  if (['Soprano', 'Mezzo-Soprano', 'Contralto'].includes(char.voiceType)) return 'female';
  if (['Tenor', 'Baritone', 'Bass-Baritone', 'Bass'].includes(char.voiceType)) return 'male';
  return undefined;
};

export const getBestVoiceForLanguage = (language: SupportedLanguage, requestedGender?: 'male' | 'female'): SpeechSynthesisVoice | null => {
  const voices = getSafeVoices();
  if (!voices || voices.length === 0) return null;

  // 1. Check if user explicitly selected a voice in settings (and verify not a stub/blocked)
  const customVoiceURI = getSelectedVoiceURI(language);
  if (customVoiceURI) {
    const custom = voices.find(v => (v.voiceURI === customVoiceURI || v.name === customVoiceURI) && !isStubVoice(v.name) && !isChromiumBlockedVoice(v));
    if (custom) {
      // If a specific gender is requested, ignore the global custom voice if it strongly contradicts the gender
      if (requestedGender) {
        const isMale = isVoiceMale(custom);
        const isFemale = isVoiceFemale(custom);
        if ((requestedGender === 'male' && !isFemale) || (requestedGender === 'female' && !isMale)) {
          return custom;
        }
      } else {
        return custom;
      }
    }
  }

  const matchingVoices = getAvailableVoicesForLanguage(language);
  if (matchingVoices.length === 0) {
    const prefix = LANGUAGE_PREFIX_MAP[language];
    const fallback = voices.filter(v => (v.lang || '').toLowerCase().replace('_', '-').startsWith(prefix) && !isStubVoice(v.name) && !isChromiumBlockedVoice(v));
    return fallback[0] || null;
  }

  const preferred = PREFERRED_VOICES[language] || [];

  // Score matching voices
  const scored = matchingVoices.map(v => {
    let score = 0;
    const nameLower = (v.name || '').toLowerCase();
    const uriLower = (v.voiceURI || '').toLowerCase();

    // Check if on preferred list
    preferred.forEach((pref, idx) => {
      if (nameLower.includes(pref.toLowerCase())) {
        score += 500 - idx * 20;
      }
    });

    // Massive tiered scoring for high definition:
    if (nameLower.includes('premium') || uriLower.includes('premium')) {
      score += 10000;
    } else if (nameLower.includes('enhanced') || uriLower.includes('enhanced')) {
      score += 8000;
    } else if (nameLower.includes('natural') || nameLower.includes('google') || nameLower.includes('siri')) {
      score += 5000;
    } else if (nameLower.includes('compact') || uriLower.includes('compact')) {
      score -= 8000; // Strong penalty against low-quality compact voices
    }

    // Strict gender filtering:
    if (requestedGender === 'male') {
      if (isVoiceMale(v)) {
        score += 4000;
      } else if (isVoiceFemale(v)) {
        score -= 20000; // Absolute disqualification of female voice when male requested
      }
    } else if (requestedGender === 'female') {
      if (isVoiceFemale(v)) {
        score += 4000;
      } else if (isVoiceMale(v)) {
        score -= 20000; // Absolute disqualification of male voice when female requested
      }
    }

    return { voice: v, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored[0]?.voice || matchingVoices[0];
};

export const speakText = (
  text: string, 
  language: SupportedLanguage, 
  rate: number = 0.85,
  explicitVoice?: SpeechSynthesisVoice,
  fallbackPhoneticText?: string,
  gender?: 'male' | 'female'
): boolean => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('[Libretto TTS] Speech synthesis not supported');
    return false;
  }

  const cleanText = text.replace(/[«»""„“()\[\]]/g, '').trim();
  if (!cleanText) return false;

  // Stop any active speech cleanly
  if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
    window.speechSynthesis.cancel();
  }

  const allVoices = getSafeVoices();
  const targetBcp47 = TARGET_LANG_CODE[language] || 'en-GB';

  // 1. Resolve voice strictly matching the language
  let voiceToUse: SpeechSynthesisVoice | null = null;

  if (explicitVoice) {
    voiceToUse = explicitVoice;
  } else {
    voiceToUse = getBestVoiceForLanguage(language, gender);
  }

  // Double check that voiceToUse is tied to current live safe voices
  if (voiceToUse && allVoices.length > 0) {
    const liveMatch = allVoices.find(v => v.voiceURI === voiceToUse!.voiceURI || v.name === voiceToUse!.name);
    if (liveMatch) {
      voiceToUse = liveMatch;
    }
  }

  // Detect Chromium browsers (Chrome, Brave, Edge) which suffer from macOS Sandbox bugs
  const isChromium = typeof window !== 'undefined' && !!(window as any).chrome;
  
  // Chromium's sandbox strictly blocks macOS "Compact" voices from playing (falling back to Samantha).
  // "Enhanced" or "Premium" voices bypass this bug.
  const isBlockedCompactVoice = isChromium && voiceToUse && voiceToUse.voiceURI.toLowerCase().includes('compact');

  // Special Handling for Russian:
  // If the voice is uninstalled (stub) OR blocked by the Chromium Sandbox trap, 
  // do NOT let Samantha spell out Cyrillic Unicode names! Speak the phonetic transliteration.
  if (language === 'ru') {
    const isStub = !voiceToUse || isStubVoice(voiceToUse.name);
    
    if ((isStub || isBlockedCompactVoice) && fallbackPhoneticText) {
      const phoneticClean = fallbackPhoneticText.replace(/[«»""„“()\[\]]/g, '').trim();
      const phoneticUtterance = new SpeechSynthesisUtterance(phoneticClean);
      phoneticUtterance.rate = rate;
      phoneticUtterance.lang = 'en-US';

      notifyListeners({
        voiceName: 'Blocked by Brave (Download Enhanced Milena)',
        lang: 'ru',
        text: phoneticClean.length > 35 ? phoneticClean.slice(0, 35) + '…' : phoneticClean
      });

      activeUtterances.add(phoneticUtterance);
      phoneticUtterance.onend = () => activeUtterances.delete(phoneticUtterance);
      phoneticUtterance.onerror = (e) => {
        activeUtterances.delete(phoneticUtterance);
        console.error('[Libretto TTS Error]', e);
      };

      setTimeout(() => {
        window.speechSynthesis.speak(phoneticUtterance);
      }, 20);

      return true;
    }
  }

  // CRITICAL GUARD: Never allow an English voice to speak Italian, German, French, or Russian!
  if (language !== 'en') {
    const prefix = LANGUAGE_PREFIX_MAP[language];
    const voiceLangPrefix = (voiceToUse?.lang || '').toLowerCase().replace('_', '-');
    
    if (!voiceToUse || !voiceLangPrefix.startsWith(prefix) || isStubVoice(voiceToUse.name)) {
      console.error(`[Libretto TTS BLOCKED] Refusing to speak ${language} using stub or mismatched voice "${voiceToUse?.name}".`);
      notifyListeners({
        voiceName: `No working ${language.toUpperCase()} voice ready`,
        lang: targetBcp47,
        text: `Download an enhanced voice in macOS Settings → Accessibility → Spoken Content`,
        isError: true
      });
      return false;
    }
  }

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.rate = rate;

  // Modulate pitch according to character gender
  if (gender === 'male') {
    if (voiceToUse && isVoiceFemale(voiceToUse)) {
      utterance.pitch = 0.72; // Pitch down female voice to sound masculine
    } else {
      utterance.pitch = 0.92; // Natural masculine depth
    }
  } else if (gender === 'female') {
    if (voiceToUse && isVoiceMale(voiceToUse)) {
      utterance.pitch = 1.35; // Pitch up male voice to sound feminine
    } else {
      utterance.pitch = 1.05; // Natural feminine pitch
    }
  }

  if (voiceToUse) {
    const normalizedLang = (voiceToUse.lang || targetBcp47).replace('_', '-');
    utterance.lang = normalizedLang;
    utterance.voice = voiceToUse;

    notifyListeners({
      voiceName: voiceToUse.name,
      lang: normalizedLang,
      text: cleanText.length > 35 ? cleanText.slice(0, 35) + '…' : cleanText
    });

    console.log(`[Libretto TTS] Speaking "${cleanText}" with voice: "${voiceToUse.name}" (${normalizedLang})`);
  } else {
    utterance.lang = targetBcp47;
    notifyListeners({
      voiceName: targetBcp47,
      lang: targetBcp47,
      text: cleanText.length > 35 ? cleanText.slice(0, 35) + '…' : cleanText
    });
  }

  // Prevent Garbage Collection in Chromium
  activeUtterances.add(utterance);
  utterance.onend = () => {
    activeUtterances.delete(utterance);
  };
  utterance.onerror = (e) => {
    activeUtterances.delete(utterance);
    console.error('[Libretto TTS Error]', e);
  };

  // Brief delay to ensure cancel() has cleared before dispatching new speech
  setTimeout(() => {
    window.speechSynthesis.speak(utterance);
  }, 20);

  return true;
};
