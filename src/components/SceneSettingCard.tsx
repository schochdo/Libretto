import React, { useState } from 'react';
import { Volume2, BookOpen, Layers, AlignLeft } from 'lucide-react';
import { SupportedLanguage, SettingSegment } from '../types/libretto';
import { speakText } from '../utils/speech';

interface SceneSettingCardProps {
  originalDescription?: string;
  description?: string;
  settingSegments?: SettingSegment[];
  language: SupportedLanguage;
  actOriginalSetting?: string;
  actSetting?: string;
  isOpeningScene?: boolean;
}

interface AlignedSegment {
  id: string;
  original: string;
  translation: string;
}

interface SectionData {
  title?: string;
  originalParagraph: string;
  translationParagraph: string;
  segments: AlignedSegment[];
}

/**
 * Splits text into sentences by sentence-ending punctuation, preserving
 * common abbreviations, honorifics, and quotations.
 */
function splitIntoSentences(text: string): string[] {
  if (!text) return [];

  // Protect common honorifics & abbreviations across English, German, Italian, French
  const abbrList = [
    'Dr.', 'Mr.', 'Mrs.', 'Ms.', 'Prof.', 'Sr.', 'Jr.', 'St.',
    'M.', 'Mme.', 'Mlle.', 'Sig.', 'Sig.ra', 'Dott.',
    'z. B.', 'd. h.', 'u. a.', 'ca.', 'etc.', 'vs.'
  ];

  let clean = text.trim();
  const placeholders: { placeholder: string; original: string }[] = [];

  abbrList.forEach((abbr, idx) => {
    if (clean.includes(abbr)) {
      const ph = `__ABBR_${idx}__`;
      placeholders.push({ placeholder: ph, original: abbr });
      clean = clean.split(abbr).join(ph);
    }
  });

  // Protect quoted exclamations or repeated punctuation
  clean = clean.replace(/([!?]+(?:\.{2,})?)\s+(?=[a-zà-öø-ÿ])/gi, '$1 ');

  // Split on sentence-ending punctuation (. ! ?) followed by whitespace and a capitalized word or quote opening
  const raw = clean.split(/(?<=[.!?]["'»”]?)\s+(?=[A-ZÄÖÜÀ-ÖØ-ß"“'«(—])/g);

  return raw
    .map(s => {
      let restored = s.trim();
      placeholders.forEach(({ placeholder, original }) => {
        restored = restored.split(placeholder).join(original);
      });
      return restored;
    })
    .filter(Boolean);
}

/**
 * Proportionally pairs original sentences with translation sentences
 */
function alignSentences(origSentences: string[], transSentences: string[], sectionPrefix: string): AlignedSegment[] {
  if (origSentences.length === 0 && transSentences.length === 0) return [];
  
  if (origSentences.length === 0) {
    return transSentences.map((t, idx) => ({
      id: `${sectionPrefix}_t${idx}`,
      original: '',
      translation: t
    }));
  }

  if (transSentences.length === 0) {
    return origSentences.map((o, idx) => ({
      id: `${sectionPrefix}_o${idx}`,
      original: o,
      translation: ''
    }));
  }

  // Exact 1-to-1 match
  if (origSentences.length === transSentences.length) {
    return origSentences.map((orig, idx) => ({
      id: `${sectionPrefix}_s${idx}`,
      original: orig,
      translation: transSentences[idx]
    }));
  }

  // If counts differ, cluster proportionally so every sentence has a corresponding translation
  const segments: AlignedSegment[] = [];
  const oLen = origSentences.length;
  const tLen = transSentences.length;

  if (oLen > tLen) {
    // Group original sentences to match translation sentences
    let oIdx = 0;
    for (let tIdx = 0; tIdx < tLen; tIdx++) {
      const nextOIdx = Math.round(((tIdx + 1) / tLen) * oLen);
      const oGroup = origSentences.slice(oIdx, nextOIdx).join(' ');
      segments.push({
        id: `${sectionPrefix}_map_${tIdx}`,
        original: oGroup,
        translation: transSentences[tIdx]
      });
      oIdx = nextOIdx;
    }
  } else {
    // Group translation sentences to match original sentences
    let tIdx = 0;
    for (let curO = 0; curO < oLen; curO++) {
      const nextTIdx = Math.round(((curO + 1) / oLen) * tLen);
      const tGroup = transSentences.slice(tIdx, nextTIdx).join(' ');
      segments.push({
        id: `${sectionPrefix}_map_${curO}`,
        original: origSentences[curO],
        translation: tGroup
      });
      tIdx = nextTIdx;
    }
  }

  return segments;
}

/**
 * Builds aligned sections from multi-paragraph or single-paragraph descriptions,
 * or utilizes explicit pre-aligned segments if available.
 */
function buildSections(originalText?: string, translationText?: string, preAligned?: SettingSegment[]): SectionData[] {
  if (preAligned && preAligned.length > 0) {
    return [{
      originalParagraph: originalText || preAligned.map(s => s.original).join(' '),
      translationParagraph: translationText || preAligned.map(s => s.translation).join(' '),
      segments: preAligned.map((s, idx) => ({
        id: `seg_${idx}`,
        original: s.original,
        translation: s.translation
      }))
    }];
  }

  if (!originalText && !translationText) return [];

  const origParas = (originalText || '').split(/\n\n+/).map(p => p.trim()).filter(Boolean);
  const transParas = (translationText || '').split(/\n\n+/).map(p => p.trim()).filter(Boolean);

  const numSections = Math.max(origParas.length, transParas.length);
  const sections: SectionData[] = [];

  // Known movement titles for extensive multi-paragraph descriptions (e.g. Tannhäuser Bacchanal)
  const movementTitles = [
    'Stage Setting & Scenic Layout',
    'Choreography & Bacchanale',
    'Intervention of the Graces & Cupids',
    'Europa Vision & Descending Mist',
  ];

  for (let i = 0; i < numSections; i++) {
    const origP = origParas[i] || '';
    const transP = transParas[i] || '';
    const oSens = splitIntoSentences(origP);
    const tSens = splitIntoSentences(transP);

    sections.push({
      title: numSections > 1 ? (movementTitles[i] || `Section ${i + 1}`) : undefined,
      originalParagraph: origP,
      translationParagraph: transP,
      segments: alignSentences(oSens, tSens, `sec${i}`)
    });
  }

  return sections;
}

export const SceneSettingCard: React.FC<SceneSettingCardProps> = ({
  originalDescription,
  description,
  settingSegments,
  language,
  actOriginalSetting,
  actSetting,
  isOpeningScene
}) => {
  const [viewMode, setViewMode] = useState<'aligned' | 'paragraph'>('aligned');
  const [hoveredSegmentId, setHoveredSegmentId] = useState<string | null>(null);
  const [activeAudioId, setActiveAudioId] = useState<string | null>(null);

  const sections = buildSections(originalDescription, description, settingSegments);
  const hasDescription = sections.length > 0;
  const hasActSetting = isOpeningScene && (Boolean(actOriginalSetting) || Boolean(actSetting));

  if (!hasDescription && !hasActSetting) return null;

  const handleSpeak = (text: string, id: string) => {
    setActiveAudioId(id);
    speakText(text, language, 0.85);
    setTimeout(() => {
      setActiveAudioId(null);
    }, 2500);
  };

  return (
    <div className="space-y-4 my-6">
      
      {/* Overarching Act Setting (Only on Opening Scene) */}
      {hasActSetting && (
        <div 
          className="rounded-xl p-4 sm:p-5 border transition-all text-left shadow-sm"
          style={{
            borderColor: 'var(--border-color)',
            backgroundColor: 'rgba(var(--accent-rgb, 180, 140, 60), 0.04)'
          }}
        >
          <div className="flex items-center justify-between pb-2 mb-2 border-b" style={{ borderColor: 'var(--border-color)' }}>
            <span className="font-display font-bold uppercase tracking-wider text-xs flex items-center gap-1.5" style={{ color: 'var(--accent)' }}>
              <BookOpen className="w-3.5 h-3.5" />
              General Act Setting
            </span>
            {actOriginalSetting && (
              <button
                onClick={() => handleSpeak(actOriginalSetting, 'act_setting')}
                className="p-1 rounded-md opacity-75 hover:opacity-100 transition-opacity flex items-center gap-1 text-xs"
                style={{ color: 'var(--accent)' }}
                title="Pronounce Act Setting"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Listen</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-sm sm:text-base leading-relaxed">
            {actOriginalSetting && (
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider block mb-1 opacity-70">
                  Original Setting
                </span>
                <p className="font-libretto italic text-base sm:text-lg opacity-95">
                  {actOriginalSetting}
                </p>
              </div>
            )}
            {actSetting && (
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider block mb-1 opacity-70" style={{ color: 'var(--accent)' }}>
                  Setting Translation
                </span>
                <p className="opacity-90 font-sans leading-relaxed">
                  {actSetting}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Scene Setting & Action Card */}
      {hasDescription && (
        <div 
          className="rounded-xl border transition-all text-left shadow-sm overflow-hidden"
          style={{
            borderColor: 'var(--border-color)',
            backgroundColor: 'rgba(var(--accent-rgb, 180, 140, 60), 0.03)'
          }}
        >
          {/* Card Header & View Switcher */}
          <div 
            className="px-4 sm:px-5 py-3 border-b flex flex-wrap items-center justify-between gap-3"
            style={{ 
              borderColor: 'var(--border-color)',
              backgroundColor: 'rgba(var(--accent-rgb, 180, 140, 60), 0.05)'
            }}
          >
            <div className="flex items-center gap-2">
              <span 
                className="font-display font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center gap-1.5"
                style={{ color: 'var(--accent)' }}
              >
                <Layers className="w-4 h-4" />
                Scene Action & Stage Directions
              </span>
              <span className="text-xs opacity-65 hidden sm:inline">
                ({sections.reduce((acc, s) => acc + s.segments.length, 0)} aligned sentences)
              </span>
            </div>

            {/* View Mode Controls */}
            <div 
              className="inline-flex items-center rounded-lg p-0.5 border text-xs font-medium shrink-0"
              style={{ borderColor: 'var(--border-color)' }}
            >
              <button
                onClick={() => setViewMode('aligned')}
                className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'aligned' 
                    ? 'shadow-xs font-semibold' 
                    : 'opacity-70 hover:opacity-100'
                }`}
                style={{
                  backgroundColor: viewMode === 'aligned' ? 'var(--bg-active)' : 'transparent',
                  color: viewMode === 'aligned' ? 'var(--accent)' : 'inherit'
                }}
                title="View sentence-by-sentence translation pairs"
              >
                <Layers className="w-3 h-3" />
                <span className="hidden sm:inline">Aligned Sentences</span>
                <span className="sm:hidden">Aligned</span>
              </button>

              <button
                onClick={() => setViewMode('paragraph')}
                className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'paragraph' 
                    ? 'shadow-xs font-semibold' 
                    : 'opacity-70 hover:opacity-100'
                }`}
                style={{
                  backgroundColor: viewMode === 'paragraph' ? 'var(--bg-active)' : 'transparent',
                  color: viewMode === 'paragraph' ? 'var(--accent)' : 'inherit'
                }}
                title="View as continuous paragraphs with interactive hover sync"
              >
                <AlignLeft className="w-3 h-3" />
                <span className="hidden sm:inline">Paragraph Flow</span>
                <span className="sm:hidden">Paragraph</span>
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-4 sm:p-5 space-y-6">
            {sections.map((section, secIdx) => (
              <div key={secIdx} className="space-y-3">
                {/* Movement / Paragraph Heading (if multi-paragraph) */}
                {section.title && (
                  <div className="flex items-center gap-2 pt-1 pb-1 border-b" style={{ borderColor: 'var(--border-color)' }}>
                    <span 
                      className="text-xs uppercase font-bold tracking-widest px-2 py-0.5 rounded"
                      style={{ 
                        backgroundColor: 'rgba(var(--accent-rgb, 180, 140, 60), 0.12)', 
                        color: 'var(--accent)' 
                      }}
                    >
                      {section.title}
                    </span>
                  </div>
                )}

                {/* View 1: Sentence-by-Sentence Aligned Pairs */}
                {viewMode === 'aligned' ? (
                  <div className="space-y-2">
                    {section.segments.map((seg, sIdx) => {
                      const isHovered = hoveredSegmentId === seg.id;
                      const isPlaying = activeAudioId === seg.id;

                      return (
                        <div
                          key={seg.id}
                          onMouseEnter={() => setHoveredSegmentId(seg.id)}
                          onMouseLeave={() => setHoveredSegmentId(null)}
                          className={`grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-3 rounded-lg border transition-all duration-150 ${
                            isHovered 
                              ? 'shadow-xs scale-[1.003]' 
                              : 'border-transparent'
                          }`}
                          style={{
                            borderColor: isHovered ? 'var(--accent)' : 'var(--border-color)',
                            backgroundColor: isHovered ? 'var(--bg-active)' : 'rgba(var(--accent-rgb, 180, 140, 60), 0.02)'
                          }}
                        >
                          {/* Original German/Italian Sentence */}
                          <div className="flex items-start gap-2.5">
                            <span 
                              className="text-xs font-mono font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 opacity-75"
                              style={{ 
                                backgroundColor: 'rgba(var(--accent-rgb, 180, 140, 60), 0.15)',
                                color: 'var(--accent)'
                              }}
                            >
                              {sIdx + 1}
                            </span>
                            <div className="flex-1">
                              <p className="font-libretto italic text-base sm:text-lg opacity-95 leading-relaxed">
                                {seg.original}
                              </p>
                            </div>
                            {seg.original && (
                              <button
                                onClick={() => handleSpeak(seg.original, seg.id)}
                                className={`p-1 rounded-md shrink-0 transition-opacity ${
                                  isHovered || isPlaying ? 'opacity-100' : 'opacity-0 md:opacity-40'
                                }`}
                                style={{ color: 'var(--accent)' }}
                                title="Listen to this sentence"
                              >
                                <Volume2 className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>

                          {/* Corresponding Aligned English Translation */}
                          <div className="pl-7 md:pl-0 border-t md:border-t-0 pt-2 md:pt-0" style={{ borderColor: 'var(--border-color)' }}>
                            <p className="font-sans text-sm sm:text-base opacity-90 leading-relaxed">
                              {seg.translation}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  /* View 2: Continuous Paragraph Flow with Interactive Sentence Hover Sync */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 leading-relaxed">
                    {/* Original Column */}
                    <div>
                      <span className="font-semibold uppercase tracking-wider text-xs block mb-2 opacity-75" style={{ color: 'var(--accent)' }}>
                        Original Direction (Hover sentence to match)
                      </span>
                      <div className="font-libretto italic text-base sm:text-lg opacity-95 space-y-1">
                        {section.segments.map((seg) => {
                          const isHovered = hoveredSegmentId === seg.id;
                          return (
                            <span
                              key={seg.id}
                              onMouseEnter={() => setHoveredSegmentId(seg.id)}
                              onMouseLeave={() => setHoveredSegmentId(null)}
                              onClick={() => seg.original && handleSpeak(seg.original, seg.id)}
                              className={`cursor-pointer rounded px-1 transition-colors duration-150 inline ${
                                isHovered ? 'underline decoration-2' : ''
                              }`}
                              style={{
                                backgroundColor: isHovered ? 'var(--bg-active)' : 'transparent',
                                textDecorationColor: isHovered ? 'var(--accent)' : 'transparent'
                              }}
                              title="Click to listen; hover to align translation"
                            >
                              {seg.original}{' '}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {/* Translation Column */}
                    <div>
                      <span className="font-semibold uppercase tracking-wider text-xs block mb-2 opacity-75" style={{ color: 'var(--accent)' }}>
                        Aligned Translation
                      </span>
                      <div className="font-sans text-sm sm:text-base opacity-90 space-y-1">
                        {section.segments.map((seg) => {
                          const isHovered = hoveredSegmentId === seg.id;
                          return (
                            <span
                              key={seg.id}
                              onMouseEnter={() => setHoveredSegmentId(seg.id)}
                              onMouseLeave={() => setHoveredSegmentId(null)}
                              className={`rounded px-1 transition-colors duration-150 inline ${
                                isHovered ? 'font-medium' : ''
                              }`}
                              style={{
                                backgroundColor: isHovered ? 'var(--bg-active)' : 'transparent',
                                color: isHovered ? 'var(--accent)' : 'inherit'
                              }}
                            >
                              {seg.translation}{' '}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer Guide Note */}
          <div 
            className="px-4 py-2 border-t text-xs opacity-70 flex items-center justify-between"
            style={{ borderColor: 'var(--border-color)', backgroundColor: 'rgba(var(--accent-rgb, 180, 140, 60), 0.02)' }}
          >
            <span>
              💡 Tip: Hover any sentence to highlight its exact bilingual counterpart; tap the speaker icon to hear authentic pronunciation.
            </span>
          </div>
        </div>
      )}

    </div>
  );
};
