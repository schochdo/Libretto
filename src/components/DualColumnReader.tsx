import React, { useRef, useEffect } from 'react';
import { Scene, Line, Token, Cue, SupportedLanguage, Character } from '../types/libretto';
import { Volume2, Sparkles, Columns, Rows } from 'lucide-react';
import { speakText, getGenderForSpeaker } from '../utils/speech';

import { SceneSettingCard } from './SceneSettingCard';

export type LayoutMode = 'stacked' | 'columns';

interface DualColumnReaderProps {
  scene: Scene;
  actTitle: string;
  actSetting: string;
  actOriginalSetting?: string;
  language: SupportedLanguage;
  activeLineId: string | null;
  onSelectLine: (line: Line, cue: Cue, token?: Token) => void;
  fontSizeMultiplier: number;
  characters?: Character[];
  layoutMode?: LayoutMode;
  onToggleLayoutMode?: (mode: LayoutMode) => void;
}

export const DualColumnReader: React.FC<DualColumnReaderProps> = ({
  scene,
  actTitle,
  actSetting,
  actOriginalSetting,
  language,
  activeLineId,
  onSelectLine,
  fontSizeMultiplier,
  characters,
  layoutMode = 'columns',
  onToggleLayoutMode
}) => {
  const activeLineRef = useRef<HTMLDivElement | null>(null);
  const isInitialSceneMount = useRef(true);
  const currentSceneNumber = useRef(scene.sceneNumber);
  const isStacked = layoutMode === 'stacked';

  // Auto-scroll active line into view smoothly (only during active in-scene navigation)
  useEffect(() => {
    // If scene changed, reset initial mount flag so we do not auto-scroll down
    if (currentSceneNumber.current !== scene.sceneNumber) {
      currentSceneNumber.current = scene.sceneNumber;
      isInitialSceneMount.current = true;
      return;
    }

    if (isInitialSceneMount.current) {
      isInitialSceneMount.current = false;
      return;
    }

    if (activeLineId && activeLineRef.current) {
      activeLineRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }, [activeLineId, scene.sceneNumber]);

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-8 py-6 sm:py-8 pb-24">
      
      {/* Act & Scene Title (Poetic & Minimal) */}
      <header className="mb-8 text-center space-y-3">
        <span className="text-xs sm:text-sm tracking-widest uppercase font-semibold opacity-75 block">
          {actTitle}
        </span>
        <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-wide" style={{ color: 'var(--accent)' }}>
          {scene.title}
        </h2>
        {scene.titleTranslation && (
          <p className="text-base sm:text-xl font-libretto italic opacity-95 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            "{scene.titleTranslation}"
          </p>
        )}

        {/* Enhanced Interactive Scene Setting & Stage Direction Assistant */}
        <SceneSettingCard
          originalDescription={scene.originalDescription}
          description={scene.description}
          settingSegments={scene.settingSegments}
          language={language}
          actOriginalSetting={actOriginalSetting}
          actSetting={actSetting}
          isOpeningScene={scene.sceneNumber === 1}
        />
      </header>

      {/* Reader Layout Guide & View Switcher */}
      <div 
        className="flex items-center justify-between gap-3 pb-3 mb-6 border-b text-xs sm:text-sm transition-colors"
        style={{ borderColor: 'var(--border-color)' }}
      >
        {isStacked ? (
          <div className="flex items-center gap-2 opacity-85">
            <span className="font-bold uppercase tracking-widest text-xs">Interlinear Mode</span>
            <span className="text-xs font-normal lowercase opacity-70 hidden sm:inline">(Original verse with literal syntax below)</span>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:gap-8 flex-1 font-bold uppercase tracking-widest text-xs">
            <div className="flex items-center gap-2 opacity-85">
              <span>Original Text</span>
              <span className="text-xs font-normal lowercase opacity-75 hidden sm:inline">(Tap to inspect)</span>
            </div>
            <div className="flex items-center gap-2 opacity-85" style={{ color: 'var(--accent)' }}>
              <span>Literal Translation</span>
              <span className="text-xs font-normal lowercase opacity-75 hidden sm:inline">(Word-for-word)</span>
            </div>
          </div>
        )}

        {/* Layout Switcher (Columns vs Stacked) */}
        {onToggleLayoutMode && (
          <div 
            className="flex items-center rounded-lg border p-0.5 shrink-0"
            style={{ backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
          >
            <button
              onClick={() => onToggleLayoutMode('columns')}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                !isStacked ? 'shadow-xs font-bold' : 'opacity-65 hover:opacity-100'
              }`}
              style={!isStacked ? { backgroundColor: 'var(--bg-primary)', color: 'var(--accent)' } : {}}
              title="Side-by-side dual columns"
            >
              <Columns className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Columns</span>
            </button>
            <button
              onClick={() => onToggleLayoutMode('stacked')}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                isStacked ? 'shadow-xs font-bold' : 'opacity-65 hover:opacity-100'
              }`}
              style={isStacked ? { backgroundColor: 'var(--bg-primary)', color: 'var(--accent)' } : {}}
              title="Stacked interlinear (optimal for mobile reading)"
            >
              <Rows className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Stacked</span>
            </button>
          </div>
        )}
      </div>

      {/* Cues Stream (Natural Poetic Flow) */}
      <div className="space-y-10">
        {scene.cues.map((cue, cueIdx) => {
          const prevCue = cueIdx > 0 ? scene.cues[cueIdx - 1] : null;
          const isSceneTitleRedundant = cue.pieceTitle && (
            cue.pieceTitle.trim().toLowerCase() === scene.title.trim().toLowerCase() ||
            scene.title.toLowerCase().includes(cue.pieceTitle.toLowerCase()) ||
            cue.pieceTitle.toLowerCase().includes(scene.title.toLowerCase())
          );
          const showPieceTitle = Boolean(
            cue.pieceTitle && 
            !isSceneTitleRedundant && 
            (!prevCue || prevCue.pieceTitle !== cue.pieceTitle)
          );

          return (
            <section key={cue.id} className="space-y-3">
              
              {/* Speaker & Direction for Cues with Sung/Spoken Lines */}
              {cue.lines && cue.lines.length > 0 ? (
                <div className="flex flex-wrap items-baseline gap-2.5 pt-2">
                  <h3 
                    className="font-display font-bold text-sm sm:text-base tracking-wider uppercase"
                    style={{ color: 'var(--accent)' }}
                  >
                    {cue.speaker}
                  </h3>

                  {showPieceTitle && (
                    <span className="text-sm sm:text-base italic font-medium opacity-90">
                      — {cue.pieceTitle}
                    </span>
                  )}

                  {cue.stageDirection && (
                    <span className="text-sm sm:text-base italic font-normal opacity-90" style={{ color: 'var(--text-secondary)' }}>
                      [{cue.stageDirection}{
                        cue.stageDirectionTranslation && 
                        cue.stageDirectionTranslation.trim().toLowerCase() !== cue.stageDirection.trim().toLowerCase()
                          ? ` — ${cue.stageDirectionTranslation}` 
                          : ''
                      }]
                    </span>
                  )}
                </div>
            ) : (
              /* Standalone Stage Action or Transition */
              cue.stageDirection && (
                isStacked ? (
                  <div 
                    className="py-2.5 px-3.5 rounded-lg my-2 italic text-sm sm:text-base border-l-2 space-y-1" 
                    style={{ 
                      borderColor: 'var(--accent)',
                      backgroundColor: 'rgba(var(--accent-rgb, 180, 140, 60), 0.05)'
                    }}
                  >
                    <div>
                      <span className="font-semibold uppercase tracking-wider text-xs block mb-0.5 opacity-75" style={{ color: 'var(--accent)' }}>
                        {cue.speaker !== 'Narrator' ? cue.speaker : 'Stage Action'}
                      </span>
                      <p className="font-libretto leading-relaxed">{cue.stageDirection}</p>
                    </div>
                    {cue.stageDirectionTranslation && cue.stageDirectionTranslation.trim().toLowerCase() !== cue.stageDirection.trim().toLowerCase() && (
                      <div className="pt-0.5" style={{ color: 'var(--text-secondary)' }}>
                        <p className="leading-relaxed opacity-90 text-xs sm:text-sm">
                          ↳ {cue.stageDirectionTranslation}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div 
                    className="grid grid-cols-2 gap-4 sm:gap-8 py-2.5 px-4 rounded-lg my-2 italic text-sm sm:text-base border-l-2" 
                    style={{ 
                      borderColor: 'var(--accent)',
                      backgroundColor: 'rgba(var(--accent-rgb, 180, 140, 60), 0.05)'
                    }}
                  >
                    <div>
                      <span className="font-semibold uppercase tracking-wider text-xs block mb-1 opacity-75" style={{ color: 'var(--accent)' }}>
                        {cue.speaker !== 'Narrator' ? cue.speaker : 'Stage Action'}
                      </span>
                      <p className="font-libretto leading-relaxed">{cue.stageDirection}</p>
                    </div>
                    <div style={{ color: 'var(--text-secondary)' }}>
                      <span className="font-semibold uppercase tracking-wider text-xs block mb-1 opacity-0">
                        Translation
                      </span>
                      <p className="leading-relaxed">{cue.stageDirectionTranslation || cue.stageDirection}</p>
                    </div>
                  </div>
                )
              )
            )}

            {/* Poetic Stanza Lines */}
            <div className="space-y-1.5 sm:space-y-1">
              {cue.lines.map((line) => {
                const isActive = line.id === activeLineId;
                const hasNotes = !!(line.grammarNote || (line.tokens && line.tokens.length > 0));

                if (isStacked) {
                  return (
                    <div
                      key={line.id}
                      id={`line-${line.id}`}
                      ref={isActive ? activeLineRef : null}
                      onClick={() => onSelectLine(line, cue)}
                      className={`group py-2.5 px-3 rounded-xl cursor-pointer transition-all duration-150 border ${
                        isActive 
                          ? 'shadow-sm' 
                          : 'border-transparent hover:bg-black/5 dark:hover:bg-white/5'
                      }`}
                      style={{
                        backgroundColor: isActive ? 'var(--bg-active)' : 'transparent',
                        borderColor: isActive ? 'var(--border-active)' : 'transparent',
                      }}
                    >
                      {/* Top: Original Verse & Action Pills */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <p 
                            className="font-libretto font-normal leading-relaxed tracking-normal"
                            style={{ 
                              fontSize: `${1.2 * fontSizeMultiplier}rem`,
                              lineHeight: 1.6
                            }}
                          >
                            {line.original}
                          </p>
                          
                          {line.transliteration && (
                            <p 
                              className="font-sans italic opacity-85 mt-1"
                              style={{ 
                                fontSize: `${0.95 * fontSizeMultiplier}rem`,
                                lineHeight: 1.4 
                              }}
                            >
                              {line.transliteration}
                            </p>
                          )}
                        </div>

                        {/* Pronounce & Notes action pills (always visible on mobile touch, hover on desktop) */}
                        <div className="flex items-center gap-1 shrink-0 pt-0.5">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              const gender = getGenderForSpeaker(cue.speaker, characters);
                              speakText(line.original, language, 0.85, undefined, line.transliteration, gender);
                            }}
                            className={`p-1.5 rounded-md transition-opacity opacity-75 hover:!opacity-100 ${
                              isActive ? '!opacity-100' : 'sm:opacity-0 sm:group-hover:opacity-80'
                            }`}
                            style={{ color: 'var(--accent)', backgroundColor: 'var(--bg-tertiary)' }}
                            title="Pronounce line"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>

                          {hasNotes && (
                            <span 
                              className={`p-1.5 rounded-md transition-opacity opacity-75 ${
                                isActive ? '!opacity-100' : 'sm:opacity-0 sm:group-hover:opacity-60'
                              }`}
                              style={{ color: 'var(--accent)', backgroundColor: 'var(--bg-tertiary)' }}
                              title="Notes & word breakdown available"
                            >
                              <Sparkles className="w-3.5 h-3.5" />
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Bottom: Literal Machine Translation Stacked Below */}
                      <div className="pt-1.5">
                        <p 
                          className="font-sans font-medium leading-relaxed opacity-95"
                          style={{ 
                            fontSize: `${1.05 * fontSizeMultiplier}rem`,
                            lineHeight: 1.5,
                            color: 'var(--accent)'
                          }}
                        >
                          {line.literal}
                        </p>
                      </div>
                    </div>
                  );
                }

                // Columns Mode
                return (
                  <div
                    key={line.id}
                    id={`line-${line.id}`}
                    ref={isActive ? activeLineRef : null}
                    onClick={() => onSelectLine(line, cue)}
                    className={`group grid grid-cols-2 gap-4 sm:gap-8 py-2 px-3 rounded-lg cursor-pointer transition-all duration-150 ${
                      isActive 
                        ? 'shadow-sm' 
                        : 'hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                    style={{
                      backgroundColor: isActive ? 'var(--bg-active)' : 'transparent',
                    }}
                  >
                    {/* Left: Original Verse */}
                    <div className="relative pr-2 flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <p 
                          className="font-libretto font-normal leading-relaxed tracking-normal"
                          style={{ 
                            fontSize: `${1.2 * fontSizeMultiplier}rem`,
                            lineHeight: 1.6
                          }}
                        >
                          {line.original}
                        </p>
                        
                        {line.transliteration && (
                          <p 
                            className="font-sans italic opacity-85 mt-1"
                            style={{ 
                              fontSize: `${0.95 * fontSizeMultiplier}rem`,
                              lineHeight: 1.4 
                            }}
                          >
                            {line.transliteration}
                          </p>
                        )}
                      </div>

                      {/* Pronounce & Notes action pills (visible on active or hover) */}
                      <div className="flex items-center gap-1 shrink-0 pt-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            const gender = getGenderForSpeaker(cue.speaker, characters);
                            speakText(line.original, language, 0.85, undefined, line.transliteration, gender);
                          }}
                          className={`p-1 rounded-md transition-opacity opacity-0 group-hover:opacity-80 hover:!opacity-100 ${
                            isActive ? '!opacity-80' : ''
                          }`}
                          style={{ color: 'var(--accent)' }}
                          title="Pronounce line"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>

                        {hasNotes && (
                          <span 
                            className={`p-1 opacity-0 group-hover:opacity-60 transition-opacity ${
                              isActive ? '!opacity-80' : ''
                            }`}
                            style={{ color: 'var(--accent)' }}
                            title="Notes available"
                          >
                            <Sparkles className="w-3 h-3" />
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Right: Literal Translation */}
                    <div className="pl-2">
                      <p 
                        className="font-sans font-normal leading-relaxed opacity-90"
                        style={{ 
                          fontSize: `${1.05 * fontSizeMultiplier}rem`,
                          lineHeight: 1.6
                        }}
                      >
                        {line.literal}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>

          </section>
        );
      })}
      </div>

    </div>
  );
};

