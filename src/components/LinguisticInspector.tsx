import React from 'react';
import { Line, Token, SupportedLanguage, Character } from '../types/libretto';
import { BookOpen, Sparkles, AlertCircle, X, Volume2 } from 'lucide-react';
import { speakText, getGenderForSpeaker } from '../utils/speech';

interface LinguisticInspectorProps {
  line: Line | null;
  speaker: string;
  pieceTitle?: string;
  language: SupportedLanguage;
  onClose: () => void;
  selectedToken: Token | null;
  onSelectToken: (token: Token) => void;
  characters?: Character[];
}

export const LinguisticInspector: React.FC<LinguisticInspectorProps> = ({
  line,
  speaker,
  pieceTitle,
  language,
  onClose,
  selectedToken,
  onSelectToken,
  characters
}) => {
  if (!line) return null;

  const handleSpeak = (text: string, isFullLine: boolean = false) => {
    const gender = getGenderForSpeaker(speaker, characters);
    speakText(text, language, isFullLine ? 0.85 : 1.0, undefined, isFullLine ? line.transliteration : undefined, gender);
  };

  return (
    <div
      className="flex flex-col flex-1 min-h-0 h-full w-full"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        color: 'var(--text-primary)'
      }}
    >
      {/* Drawer Header */}
      <div 
        className="px-4 py-3 sm:py-3.5 border-b flex items-center justify-between gap-3 shrink-0"
        style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}
      >
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          <BookOpen className="w-4 h-4 shrink-0" style={{ color: 'var(--accent)' }} />
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="font-bold text-sm sm:text-base truncate" style={{ color: 'var(--accent)' }}>
                [{speaker}]
              </span>
              {pieceTitle && (
                <span className="text-xs sm:text-sm opacity-80 italic font-normal truncate">
                  — {pieceTitle}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onClose}
            className="p-2 sm:p-1.5 rounded-lg border hover:opacity-75 active:scale-95 transition-all shrink-0 min-w-[36px] min-h-[36px] flex items-center justify-center cursor-pointer"
            style={{ borderColor: 'var(--border-color)' }}
            aria-label="Close Inspector"
            title="Close Inspector"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Drawer Scrollable Content */}
      <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4 overscroll-contain">
        
        {/* Full Verse Comparison (Stacked for optimal reading width, matching font scale) */}
        <div 
          className="p-4 rounded-xl border space-y-3"
          style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-primary)' }}
        >
          {/* Original Verse */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs uppercase font-bold tracking-wider opacity-75">
                Original Verse ({language.toUpperCase()})
              </span>
              <button
                onClick={() => handleSpeak(line.original, true)}
                className="opacity-75 hover:opacity-100 p-0.5"
                title="Pronounce original verse"
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="font-libretto text-base sm:text-lg font-normal leading-relaxed">
              {line.original}
            </p>
            {line.transliteration && (
              <p className="text-sm italic opacity-85 mt-1 font-sans">
                Transliteration: {line.transliteration}
              </p>
            )}
          </div>

          {/* Divider */}
          <div className="border-t" style={{ borderColor: 'var(--border-color)' }} />

          {/* Literal Translation */}
          <div>
            <span className="text-xs uppercase font-bold tracking-wider opacity-85 block mb-1.5" style={{ color: 'var(--accent)' }}>
              Literal Translation & Syntax
            </span>
            <p className="font-sans text-base sm:text-lg leading-relaxed opacity-95">
              {line.literal}
            </p>
          </div>
        </div>

        {/* Interactive Word Tokens Breakdown */}
        {line.tokens && line.tokens.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
                <Sparkles className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
                Vocabulary & Word Breakdown
              </span>
              <span className="text-xs opacity-75 hidden sm:inline">Tap word to inspect & listen</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {line.tokens.map((tok, idx) => {
                const isSelected = selectedToken?.word === tok.word;

                return (
                  <button
                    key={idx}
                    onClick={() => {
                      onSelectToken(tok);
                      handleSpeak(tok.word, false);
                    }}
                    className={`text-sm px-3 py-1.5 rounded-lg border text-left transition-all flex items-center gap-1.5 ${
                      isSelected 
                        ? 'ring-2 font-semibold' 
                        : 'hover:opacity-85'
                    }`}
                    style={{
                      backgroundColor: isSelected ? 'var(--bg-active)' : 'var(--token-bg)',
                      borderColor: isSelected ? 'var(--border-active)' : 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    <span className="font-semibold">{tok.word}</span>
                    <span className="opacity-75">→ {tok.meaning}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Token Detail Card */}
            {selectedToken && (() => {
              const isVerb = selectedToken.pos.toLowerCase() === 'verb';
              const cleanWord = selectedToken.word.toLowerCase().replace(/\.\.\./g, '').replace(/…/g, '').trim();
              const cleanLemma = selectedToken.lemma.toLowerCase().trim();
              const hasDistinctBase = cleanLemma !== cleanWord;

              return (
                <div 
                  className="mt-3 p-4 rounded-xl border space-y-2.5 animate-fadeIn"
                  style={{
                    backgroundColor: 'var(--bg-tertiary)',
                    borderColor: 'var(--border-color)'
                  }}
                >
                  {/* Header row: Word & Audio Pronunciation */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold font-libretto" style={{ color: 'var(--accent)' }}>
                        {selectedToken.word}
                      </span>
                      <button
                        onClick={() => handleSpeak(selectedToken.word, false)}
                        className="p-1 rounded hover:opacity-80 transition-opacity"
                        style={{ color: 'var(--accent)' }}
                        title="Pronounce word"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>

                    <span className="text-xs px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold opacity-90"
                      style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)' }}
                    >
                      {selectedToken.pos}
                    </span>
                  </div>

                  {/* Base / Infinitive Form (only if different from the word in the verse) */}
                  {hasDistinctBase && (
                    <div className="text-xs opacity-90 flex items-baseline gap-1.5 pt-0.5">
                      <span className="opacity-75 uppercase tracking-wide font-medium">
                        {isVerb ? 'Infinitive:' : 'Base Form:'}
                      </span>
                      <strong className="text-sm font-semibold opacity-100 italic" style={{ color: 'var(--accent)' }}>
                        {selectedToken.lemma}
                      </strong>
                    </div>
                  )}

                  {/* Meaning */}
                  <div className="text-sm sm:text-base leading-snug">
                    <span className="font-semibold opacity-85">Meaning: </span>
                    <span className="opacity-95">{selectedToken.meaning}</span>
                  </div>

                  {/* Notes if available */}
                  {selectedToken.notes && (
                    <p className="text-xs sm:text-sm opacity-90 italic border-l-2 pl-2.5 py-0.5" style={{ borderColor: 'var(--accent)' }}>
                      💡 {selectedToken.notes}
                    </p>
                  )}
                </div>
              );
            })()}
          </div>
        )}

        {/* Grammar and Dramatic Notes (Full width so text is never cramped) */}
        {(line.grammarNote || line.poeticContext) && (
          <div className="space-y-3">
            {line.grammarNote && (
              <div 
                className="p-3.5 rounded-xl border flex gap-3 items-start"
                style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}
              >
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
                <div className="flex-1">
                  <strong className="block text-xs uppercase tracking-wider opacity-80 mb-1.5">
                    Grammar & Linguistic Note
                  </strong>
                  <p className="opacity-95 leading-relaxed text-sm sm:text-base">{line.grammarNote}</p>
                </div>
              </div>
            )}

            {line.poeticContext && (
              <div 
                className="p-3.5 rounded-xl border flex gap-3 items-start"
                style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}
              >
                <BookOpen className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
                <div className="flex-1">
                  <strong className="block text-xs uppercase tracking-wider opacity-80 mb-1.5">
                    Dramatic & Poetic Context
                  </strong>
                  <p className="opacity-95 leading-relaxed text-sm sm:text-base">{line.poeticContext}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Mobile-friendly dismiss button at the bottom of the stream */}
        <div className="pt-2 pb-1 flex justify-center md:hidden">
          <button
            onClick={onClose}
            className="w-full py-2.5 px-4 rounded-xl border text-xs font-semibold uppercase tracking-wider transition-all hover:opacity-85 active:scale-98 shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
            style={{
              backgroundColor: 'var(--bg-primary)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)'
            }}
          >
            <X className="w-3.5 h-3.5" />
            <span>Done / Close Inspector</span>
          </button>
        </div>

      </div>
    </div>
  );
};
