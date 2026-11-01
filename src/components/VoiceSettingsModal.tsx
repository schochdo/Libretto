import React, { useState, useEffect } from 'react';
import { SupportedLanguage } from '../types/libretto';
import { 
  getAvailableVoicesForLanguage, 
  getSelectedVoiceURI, 
  setSelectedVoiceURI, 
  speakText, 
  getBestVoiceForLanguage,
  getVoiceQualityScore,
  getBaseVoiceName,
  isIOS
} from '../utils/speech';
import { X, Volume2, Play, Check, Sliders, HelpCircle } from 'lucide-react';

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
  const isDeviceIOS = isIOS();

  useEffect(() => {
    if (!isOpen) return;

    const updateVoices = () => {
      const allAvail = getAvailableVoicesForLanguage(language, true);

      // Sort voices: Premium > Enhanced > Natural/Siri > Standard > Compact, then alphabetically by name
      const sorted = [...allAvail].sort((a, b) => {
        const scoreDiff = getVoiceQualityScore(b) - getVoiceQualityScore(a);
        if (scoreDiff !== 0) return scoreDiff;
        const aName = getBaseVoiceName(a.name || a.voiceURI);
        const bName = getBaseVoiceName(b.name || b.voiceURI);
        return aName.localeCompare(bName);
      });

      setVoices(sorted);
      
      const currentURI = getSelectedVoiceURI(language);
      const isCurrentInSorted = currentURI && sorted.some(v => v.voiceURI === currentURI);

      if (isCurrentInSorted) {
        setSelectedVoice(currentURI);
      } else if (currentURI) {
        // If saved URI was compact/standard and an Enhanced/Premium version is now available, auto-migrate
        const baseCurrent = getBaseVoiceName(currentURI).toLowerCase();
        const matchingUpgraded = sorted.find(v => {
          const baseV = getBaseVoiceName(v.name || v.voiceURI).toLowerCase();
          return baseV === baseCurrent || currentURI.toLowerCase().includes(baseV);
        });
        if (matchingUpgraded) {
          setSelectedVoice(matchingUpgraded.voiceURI);
          setSelectedVoiceURI(language, matchingUpgraded.voiceURI);
          onVoiceChanged?.(matchingUpgraded.voiceURI);
        } else {
          const best = getBestVoiceForLanguage(language);
          if (best) {
            setSelectedVoice(best.voiceURI);
            setSelectedVoiceURI(language, best.voiceURI);
            onVoiceChanged?.(best.voiceURI);
          }
        }
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
              const hasHdVoices = voices.some(v => getVoiceQualityScore(v) >= 2);
              const displayedVoices = (hdOnly && hasHdVoices)
                ? voices.filter(v => getVoiceQualityScore(v) >= 2)
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
                        const score = getVoiceQualityScore(voice);
                        const isPremium = score === 4;
                        const isEnhanced = score === 3;
                        const isNatural = score === 2;
                        const isCompact = score <= 1;
                        const displayName = getBaseVoiceName(voice.name) || voice.name || 'Voice';

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
                                <span className="font-medium">{displayName}</span>
                                {isPremium && (
                                  <span className="text-[10px] uppercase px-1.5 py-0.5 rounded font-bold bg-purple-500/20 text-purple-400 border border-purple-500/30">
                                    ★ Premium HD
                                  </span>
                                )}
                                {isEnhanced && (
                                  <span className="text-[10px] uppercase px-1.5 py-0.5 rounded font-bold bg-amber-500/20 text-amber-500 border border-amber-500/30">
                                    ★ Enhanced HD
                                  </span>
                                )}
                                {isNatural && (
                                  <span className="text-[10px] uppercase px-1.5 py-0.5 rounded font-bold bg-emerald-500/20 text-emerald-500 border border-emerald-500/30">
                                    Natural
                                  </span>
                                )}
                                {isCompact && (
                                  <span 
                                    className="text-[10px] uppercase px-1.5 py-0.5 rounded font-semibold opacity-70 border"
                                    style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
                                  >
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

          {/* Apple High-Definition Voice Guide */}
          <div className="p-3.5 rounded-xl border text-xs sm:text-sm space-y-3"
            style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 font-bold" style={{ color: 'var(--accent)' }}>
                <HelpCircle className="w-4 h-4 shrink-0" />
                <span>How Apple Enhanced Voices Work</span>
              </div>
              {isDeviceIOS && (
                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded border"
                  style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}>
                  iPad / iOS
                </span>
              )}
            </div>

            <div className="space-y-2.5 opacity-90 leading-relaxed text-xs">
              <div className="p-2.5 rounded-lg border" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-tertiary)' }}>
                <p className="font-semibold mb-1" style={{ color: 'var(--accent)' }}>
                  On iPad & iPhone (iOS):
                </p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Open the <strong>Settings</strong> app.</li>
                  <li>Go to <strong>Accessibility → Spoken Content → Voices</strong>.</li>
                  <li>Select <strong>{languageLabel}</strong> (or your target language).</li>
                  <li>Tap your preferred character (e.g. <em>Alice</em>, <em>Anna</em>, <em>Luca</em>, <em>Markus</em>) and tap the <strong>cloud icon</strong> to download <strong>Enhanced</strong> or <strong>Premium</strong>.</li>
                </ol>
                <p className="mt-1.5 text-[11px] opacity-75 italic">
                  Note: In Safari and iOS browsers, WebKit automatically upgrades voice synthesis to the downloaded HD audio model. Libretto automatically pairs with your highest quality voice.
                </p>
              </div>

              <div className="p-2.5 rounded-lg border" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-tertiary)' }}>
                <p className="font-semibold mb-1 opacity-90">
                  On Mac (macOS):
                </p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Open <strong>System Settings → Accessibility → Spoken Content</strong>.</li>
                  <li>Click <strong>System Voice → Manage Voices...</strong>.</li>
                  <li>Download <strong>Enhanced</strong> or <strong>Premium</strong> for {languageLabel}.</li>
                </ol>
              </div>
            </div>
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
