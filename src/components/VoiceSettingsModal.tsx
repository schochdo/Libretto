import React, { useState, useEffect } from 'react';
import { SupportedLanguage } from '../types/libretto';
import { 
  getAvailableVoicesForLanguage, 
  getSelectedVoiceURI, 
  setSelectedVoiceURI, 
  speakText, 
  getBestVoiceForLanguage 
} from '../utils/speech';
import { X, Volume2, Play, Check, Sliders, ExternalLink } from 'lucide-react';

interface VoiceSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: SupportedLanguage;
  languageLabel: string;
  onVoiceChanged?: (uri: string) => void;
}

const TEST_PHRASES: Record<SupportedLanguage, string> = {
  it: 'Che gelida manina, se la lasci riscaldar.',
  de: 'Der Vogelfänger bin ich ja, stets lustig, hei hopsasa!',
  fr: "L'amour est un oiseau rebelle que nul ne peut apprivoiser.",
  ru: 'Куда, куда вы удалились, весны моей златые дни?',
  es: 'De España vengo, soy española, en mis ojos luz de sol.',
  en: 'I am the very model of a modern Major-General.'
};

export const VoiceSettingsModal: React.FC<VoiceSettingsModalProps> = ({
  isOpen,
  onClose,
  language,
  languageLabel,
  onVoiceChanged
}) => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceURI, setSelectedVoice] = useState<string>('');
  const [speechRate, setSpeechRate] = useState<number>(0.85);
  const [hdOnly, setHdOnly] = useState<boolean>(true);

  useEffect(() => {
    if (!isOpen) return;

    const updateVoices = () => {
      const allAvail = getAvailableVoicesForLanguage(language, true);

      // Sort voices: Premium > Enhanced > Google > Compact
      const sorted = [...allAvail].sort((a, b) => {
        const aName = (a.name || '').toLowerCase() + (a.voiceURI || '').toLowerCase();
        const bName = (b.name || '').toLowerCase() + (b.voiceURI || '').toLowerCase();
        const getTier = (n: string) => {
          if (n.includes('premium')) return 4;
          if (n.includes('enhanced')) return 3;
          if (n.includes('google') || n.includes('natural')) return 2;
          return 1;
        };
        return getTier(bName) - getTier(aName);
      });

      setVoices(sorted);
      
      const currentURI = getSelectedVoiceURI(language);
      if (currentURI) {
        setSelectedVoice(currentURI);
      } else {
        const best = getBestVoiceForLanguage(language);
        if (best) {
          setSelectedVoice(best.voiceURI);
          setSelectedVoiceURI(language, best.voiceURI);
          onVoiceChanged?.(best.voiceURI);
        }
      }
    };

    updateVoices();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }
  }, [isOpen, language, onVoiceChanged]);

  if (!isOpen) return null;

  const handleSelectVoice = (uri: string) => {
    setSelectedVoice(uri);
    setSelectedVoiceURI(language, uri);
    onVoiceChanged?.(uri);
    const voiceObj = voices.find(v => v.voiceURI === uri);
    if (voiceObj) {
      speakText(TEST_PHRASES[language], language, speechRate, voiceObj);
    }
  };

  const handleTestVoice = (voice: SpeechSynthesisVoice) => {
    setSelectedVoice(voice.voiceURI);
    setSelectedVoiceURI(language, voice.voiceURI);
    onVoiceChanged?.(voice.voiceURI);
    speakText(TEST_PHRASES[language], language, speechRate, voice);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-lg max-h-[min(90dvh,calc(100dvh-2rem))] rounded-2xl border shadow-2xl flex flex-col overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderColor: 'var(--border-color)',
          color: 'var(--text-primary)'
        }}
      >
        {/* Header */}
        <div 
          className="px-4 sm:px-6 py-3.5 sm:py-4 border-b flex items-center justify-between gap-3 shrink-0"
          style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-tertiary)' }}
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <Volume2 className="w-5 h-5 shrink-0" style={{ color: 'var(--accent)' }} />
            <div className="min-w-0">
              <h3 className="font-display font-bold text-base truncate" style={{ color: 'var(--accent)' }}>
                Audio & Voice Settings
              </h3>
              <p className="text-xs opacity-75 truncate">
                Current Language: <span className="font-semibold">{languageLabel}</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 sm:p-1.5 rounded-lg border hover:opacity-75 active:scale-95 transition-all shrink-0 min-w-[36px] min-h-[36px] flex items-center justify-center cursor-pointer"
            style={{ borderColor: 'var(--border-color)' }}
            aria-label="Close dialog"
            title="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-5 overflow-y-auto flex-1 min-h-0 overscroll-contain">
          
          {/* Speed slider */}
          <div className="p-3.5 rounded-xl border" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
                Speech Speed ({speechRate.toFixed(2)}×)
              </span>
              <span className="text-xs opacity-75">
                {speechRate <= 0.8 ? 'Slow (Learning)' : speechRate <= 0.95 ? 'Moderate' : 'Natural'}
              </span>
            </div>
            <input 
              type="range" 
              min="0.65" 
              max="1.15" 
              step="0.05"
              value={speechRate}
              onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
              className="w-full accent-amber-600 cursor-pointer"
            />
          </div>

          {/* Detected Voices List */}
          <div>
            {(() => {
              const hasHdVoices = voices.some(v => {
                const n = (v.name || '').toLowerCase() + (v.voiceURI || '').toLowerCase();
                return n.includes('enhanced') || n.includes('premium') || n.includes('google');
              });
              const displayedVoices = (hdOnly && hasHdVoices)
                ? voices.filter(v => {
                    const n = (v.name || '').toLowerCase() + (v.voiceURI || '').toLowerCase();
                    return n.includes('enhanced') || n.includes('premium') || n.includes('google');
                  })
                : voices;

              return (
                <>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider opacity-75">
                      Available {languageLabel} Voices ({displayedVoices.length})
                    </h4>
                    {hasHdVoices && (
                      <label className="flex items-center gap-1.5 text-xs cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={hdOnly}
                          onChange={(e) => setHdOnly(e.target.checked)}
                          className="rounded accent-amber-600 cursor-pointer"
                        />
                        <span className="opacity-90 font-medium">Enhanced / Premium Only</span>
                      </label>
                    )}
                  </div>

                  {displayedVoices.length === 0 ? (
                    <div className="p-4 rounded-xl border text-center text-sm opacity-80" style={{ borderColor: 'var(--border-color)' }}>
                      No {hdOnly ? 'Enhanced or Premium' : 'native'} {languageLabel} voices found.
                    </div>
                  ) : (
                    <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
                      {displayedVoices.map((voice) => {
                        const isSelected = selectedVoiceURI === voice.voiceURI;
                        const nLower = (voice.name || '').toLowerCase() + (voice.voiceURI || '').toLowerCase();
                        const isPremium = nLower.includes('premium');
                        const isEnhanced = !isPremium && nLower.includes('enhanced');
                        const isGoogle = nLower.includes('google');
                        const isCompact = !isPremium && !isEnhanced && !isGoogle;

                        return (
                          <div
                            key={voice.voiceURI}
                            onClick={() => handleSelectVoice(voice.voiceURI)}
                            className={`p-2.5 rounded-lg border text-sm flex items-center justify-between cursor-pointer transition-all ${
                              isSelected ? 'ring-1 font-semibold' : 'hover:opacity-85'
                            }`}
                            style={{
                              backgroundColor: isSelected ? 'var(--bg-active)' : 'var(--bg-primary)',
                              borderColor: isSelected ? 'var(--border-active)' : 'var(--border-color)'
                            }}
                          >
                            <div className="flex items-center gap-2 overflow-hidden pr-2">
                              <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                                isSelected ? 'bg-amber-600 border-amber-600 text-white' : 'border-gray-500'
                              }`}>
                                {isSelected && <Check className="w-2.5 h-2.5" />}
                              </div>
                              <div className="truncate flex items-center gap-1.5 flex-wrap">
                                <span className="font-medium">{voice.name}</span>
                                {isPremium && (
                                  <span className="text-[10px] uppercase px-1.5 py-0.5 rounded font-bold bg-purple-500/20 text-purple-400 border border-purple-500/30">
                                    ★ Premium HD
                                  </span>
                                )}
                                {isEnhanced && (
                                  <span className="text-[10px] uppercase px-1.5 py-0.5 rounded font-bold bg-amber-500/20 text-amber-500 border border-amber-500/30">
                                    Enhanced
                                  </span>
                                )}
                                {isGoogle && (
                                  <span className="text-[10px] uppercase px-1.5 py-0.5 rounded font-bold bg-emerald-500/20 text-emerald-500 border border-emerald-500/30">
                                    Natural
                                  </span>
                                )}
                                {isCompact && (
                                  <span className="text-[10px] uppercase px-1.5 py-0.5 rounded font-semibold opacity-60 bg-gray-500/10 text-gray-400">
                                    Standard
                                  </span>
                                )}
                              </div>
                            </div>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleTestVoice(voice);
                              }}
                              className="px-2.5 py-1 rounded border text-xs flex items-center gap-1 hover:opacity-100 shrink-0 opacity-80"
                              style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-tertiary)' }}
                              title="Test voice"
                            >
                              <Play className="w-2.5 h-2.5 fill-current" />
                              <span>Test</span>
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </>
              );
            })()}
          </div>

          {/* Mac Spoken Content Guide */}
          <div className="p-3.5 rounded-xl border text-sm space-y-2"
            style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}
          >
            <div className="flex items-center gap-1.5 font-bold" style={{ color: 'var(--accent)' }}>
              <ExternalLink className="w-3.5 h-3.5" />
              <span>How to unlock Apple's HD Natural Voices on Mac:</span>
            </div>
            <ol className="list-decimal list-inside space-y-1 opacity-85 leading-relaxed text-xs sm:text-sm">
              <li>Press <kbd className="px-1 py-0.5 rounded bg-black/20 font-mono">⌘ Space</kbd> (Spotlight), type <strong>Spoken Content</strong>, and press Enter.</li>
              <li>Or open <strong>System Settings → Accessibility → Spoken Content</strong>.</li>
              <li>Click the <strong>System Voice</strong> dropdown menu.</li>
              <li>Select <strong>Manage Voices...</strong>.</li>
              <li>Find <strong>Italian, German, or French</strong>, click the arrow, and click the cloud download icon next to the <strong>"Enhanced"</strong> or <strong>"Premium"</strong> voices (e.g. <em>Alice</em>, <em>Anna</em>, <em>Thomas</em>).</li>
            </ol>
          </div>

        </div>

        {/* Footer */}
        <div 
          className="px-4 sm:px-6 py-3 border-t flex items-center justify-end shrink-0"
          style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-tertiary)' }}
        >
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold border hover:opacity-85 active:scale-98 transition-all cursor-pointer"
            style={{ 
              backgroundColor: 'var(--bg-primary)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)'
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
