import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { OPERA_CATALOG, loadOperaById, getOperaSummaryById, getCachedOpera } from './data/operas';
import { Opera, Line, Token, Cue, ThemeMode } from './types/libretto';
import { Navbar } from './components/Navbar';
import { DualColumnReader } from './components/DualColumnReader';
import { LinguisticInspector } from './components/LinguisticInspector';
import { TableOfContentsModal } from './components/TableOfContentsModal';
import { AboutModal } from './components/AboutModal';
import { VoiceSettingsModal } from './components/VoiceSettingsModal';
import { getBestVoiceForLanguage } from './utils/speech';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

export const App: React.FC = () => {
  const mainScrollRef = useRef<HTMLElement | null>(null);

  // Persistence state
  const [currentOperaId, setCurrentOperaId] = useState<string>(() => {
    return localStorage.getItem('libretto_opera') || 'die-zauberfloete';
  });

  const [theme, setTheme] = useState<ThemeMode>(() => {
    return (localStorage.getItem('libretto_theme') as ThemeMode) || 'night';
  });

  const [fontSizeMultiplier, setFontSizeMultiplier] = useState<number>(() => {
    const saved = localStorage.getItem('libretto_font_size');
    return saved ? parseFloat(saved) : 1.0;
  });

  const [currentOpera, setCurrentOpera] = useState<Opera | null>(() => {
    return getCachedOpera(currentOperaId) || null;
  });
  const [isLoadingOpera, setIsLoadingOpera] = useState<boolean>(!currentOpera);

  useEffect(() => {
    let isCancelled = false;
    const cached = getCachedOpera(currentOperaId);
    if (cached) {
      setCurrentOpera(cached);
      setIsLoadingOpera(false);
      return;
    }

    setIsLoadingOpera(true);
    loadOperaById(currentOperaId)
      .then((opera) => {
        if (!isCancelled) {
          setCurrentOpera(opera);
          setIsLoadingOpera(false);
        }
      })
      .catch((err) => {
        console.error('Failed to load opera', err);
        if (!isCancelled) {
          setIsLoadingOpera(false);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [currentOperaId]);

  const currentSummary = useMemo(() => getOperaSummaryById(currentOperaId), [currentOperaId]);

  const [currentActIndex, setCurrentActIndex] = useState<number>(0);
  const [currentSceneIndex, setCurrentSceneIndex] = useState<number>(0);
  const [activeLineId, setActiveLineId] = useState<string | null>(null);
  const [activeLine, setActiveLine] = useState<Line | null>(null);
  const [activeCue, setActiveCue] = useState<Cue | null>(null);
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isTocOpen, setIsTocOpen] = useState<boolean>(false);
  const [isAboutOpen, setIsAboutOpen] = useState<boolean>(false);
  const [isVoiceSettingsOpen, setIsVoiceSettingsOpen] = useState<boolean>(false);
  const [isScenePickerOpen, setIsScenePickerOpen] = useState<boolean>(false);
  const [voiceVersion, setVoiceVersion] = useState<number>(0);

  const currentAct = currentOpera ? (currentOpera.acts[currentActIndex] || currentOpera.acts[0]) : null;
  const currentScene = currentAct ? (currentAct.scenes[currentSceneIndex] || currentAct.scenes[0]) : null;

  // Scroll reader pane to top when opera, act, or scene changes
  useEffect(() => {
    if (mainScrollRef.current) {
      mainScrollRef.current.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [currentOperaId, currentActIndex, currentSceneIndex]);

  const activeVoiceName = useMemo(() => {
    const lang = currentOpera ? currentOpera.language : currentSummary.language;
    const v = getBestVoiceForLanguage(lang);
    return v ? v.name : '';
  }, [currentOpera, currentSummary.language, voiceVersion]);

  // Apply theme class to document body and update browser tab color
  useEffect(() => {
    document.body.className = `theme-${theme}`;
    localStorage.setItem('libretto_theme', theme);

    // Update browser theme color to match the Navbar's --bg-secondary
    const metaThemeColor = document.getElementById('meta-theme-color');
    if (metaThemeColor) {
      if (theme === 'day') metaThemeColor.setAttribute('content', '#f4f1ea');
      else if (theme === 'night') metaThemeColor.setAttribute('content', '#14161a');
      else if (theme === 'astro-red') metaThemeColor.setAttribute('content', '#0a0202');
    }
  }, [theme]);

  // Persist font size
  useEffect(() => {
    localStorage.setItem('libretto_font_size', fontSizeMultiplier.toString());
  }, [fontSizeMultiplier]);

  // Persist current opera
  useEffect(() => {
    localStorage.setItem('libretto_opera', currentOperaId);
  }, [currentOperaId]);


  // Flattened list of lines in current scene for keyboard navigation
  const flatLines = useMemo(() => {
    if (!currentScene) return [];
    const list: { line: Line; cue: Cue }[] = [];
    currentScene.cues.forEach(cue => {
      cue.lines.forEach(line => {
        list.push({ line, cue });
      });
    });
    return list;
  }, [currentScene]);

  // Line selection handler
  const handleSelectLine = useCallback((line: Line, cue: Cue, token?: Token) => {
    setActiveLineId(line.id);
    setActiveLine(line);
    setActiveCue(cue);
    setSelectedToken(token || line.tokens?.[0] || null);
  }, []);

  // Keyboard navigation (Space, ArrowDown, ArrowUp)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger navigation if typing inside search input
      if (document.activeElement?.tagName === 'INPUT') return;

      if (e.key === 'ArrowDown' || e.code === 'Space') {
        e.preventDefault();
        const currentIndex = flatLines.findIndex(item => item.line.id === activeLineId);
        if (currentIndex === -1 || !activeLineId) {
          if (flatLines.length > 0) {
            handleSelectLine(flatLines[0].line, flatLines[0].cue);
          }
        } else if (currentIndex < flatLines.length - 1) {
          const next = flatLines[currentIndex + 1];
          handleSelectLine(next.line, next.cue);
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const currentIndex = flatLines.findIndex(item => item.line.id === activeLineId);
        if (currentIndex > 0) {
          const prev = flatLines[currentIndex - 1];
          handleSelectLine(prev.line, prev.cue);
        }
      } else if (e.key === 'Escape') {
        setIsTocOpen(false);
        setIsAboutOpen(false);
        setIsVoiceSettingsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [flatLines, activeLineId, handleSelectLine]);

  // Opera switch
  const handleSelectOpera = (id: string) => {
    if (id === currentOperaId) return;
    setCurrentOperaId(id);
    setCurrentActIndex(0);
    setCurrentSceneIndex(0);
    setActiveLineId(null);
    setActiveLine(null);
    setActiveCue(null);
    setSelectedToken(null);
    setSearchQuery('');
  };

  // Scene switch
  const handleSelectActScene = (actIdx: number, sceneIdx: number) => {
    setCurrentActIndex(actIdx);
    setCurrentSceneIndex(sceneIdx);
    setActiveLineId(null);
    setActiveLine(null);
    setActiveCue(null);
    setSelectedToken(null);
  };

  const hasPrevScene = currentOpera ? (currentActIndex > 0 || currentSceneIndex > 0) : false;
  const hasNextScene = currentOpera ? (
    currentActIndex < currentOpera.acts.length - 1 || 
    (Boolean(currentAct) && currentSceneIndex < (currentAct?.scenes.length ?? 0) - 1)
  ) : false;

  const handlePrevScene = () => {
    if (!currentOpera) return;
    if (currentSceneIndex > 0) {
      handleSelectActScene(currentActIndex, currentSceneIndex - 1);
    } else if (currentActIndex > 0) {
      const prevAct = currentOpera.acts[currentActIndex - 1];
      handleSelectActScene(currentActIndex - 1, prevAct.scenes.length - 1);
    }
  };

  const handleNextScene = () => {
    if (!currentOpera) return;
    if (currentAct && currentSceneIndex < currentAct.scenes.length - 1) {
      handleSelectActScene(currentActIndex, currentSceneIndex + 1);
    } else if (currentActIndex < currentOpera.acts.length - 1) {
      handleSelectActScene(currentActIndex + 1, 0);
    }
  };

  // Adjust font size
  const handleAdjustFontSize = (delta: number) => {
    setFontSizeMultiplier(prev => Math.min(1.5, Math.max(0.8, parseFloat((prev + delta).toFixed(2)))));
  };

  // Navigate directly to line from global search
  const handleNavigateToLine = useCallback((actIndex: number, sceneIndex: number, lineId: string) => {
    if (!currentOpera) return;
    setCurrentActIndex(actIndex);
    setCurrentSceneIndex(sceneIndex);
    setActiveLineId(lineId);

    const act = currentOpera.acts[actIndex];
    const scene = act?.scenes[sceneIndex];
    if (scene) {
      for (const cue of scene.cues) {
        const found = cue.lines.find(l => l.id === lineId);
        if (found) {
          setActiveCue(cue);
          setActiveLine(found);
          if (found.tokens && found.tokens.length > 0) {
            setSelectedToken(found.tokens[0]);
          }
          break;
        }
      }
    }

    setTimeout(() => {
      const el = document.getElementById(`line-${lineId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);
  }, [currentOpera]);

  // Filtered scene cues based on search query
  const displayedScene = useMemo(() => {
    if (!currentScene) return null;
    if (!searchQuery.trim()) return currentScene;

    const q = searchQuery.toLowerCase();
    const filteredCues = currentScene.cues
      .map(cue => {
        const matchesSpeaker = cue.speaker.toLowerCase().includes(q);
        const matchesPiece = cue.pieceTitle?.toLowerCase().includes(q);
        const matchingLines = cue.lines.filter(l => 
          l.original.toLowerCase().includes(q) ||
          l.literal.toLowerCase().includes(q) ||
          l.tokens?.some(t => t.word.toLowerCase().includes(q) || t.meaning.toLowerCase().includes(q))
        );

        if (matchesSpeaker || matchesPiece || matchingLines.length > 0) {
          return {
            ...cue,
            lines: matchingLines.length > 0 ? matchingLines : cue.lines
          };
        }
        return null;
      })
      .filter((cue): cue is Cue => cue !== null);

    return {
      ...currentScene,
      cues: filteredCues
    };
  }, [currentScene, searchQuery]);

  return (
    <div className="h-screen flex flex-col overflow-hidden transition-colors selection:bg-amber-500/20">
      
      {/* Top Navigation Bar */}
      <Navbar
        catalog={OPERA_CATALOG}
        currentOpera={currentOpera}
        currentOperaId={currentOperaId}
        onSelectOpera={handleSelectOpera}
        theme={theme}
        onSelectTheme={setTheme}
        fontSizeMultiplier={fontSizeMultiplier}
        onAdjustFontSize={handleAdjustFontSize}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onNavigateToLine={handleNavigateToLine}
        onOpenToc={() => setIsTocOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenVoiceSettings={() => setIsVoiceSettingsOpen(true)}
        activeVoiceName={activeVoiceName}
      />

      <div className="flex-1 flex overflow-hidden">
        {/* Main Reader Column */}
        <section className="flex-1 flex flex-col overflow-hidden min-w-0">
          {/* Pinned Top Scene Navigation Bar - cleanly positioned above the scroll container */}
          {displayedScene && currentOpera && (
            <div 
              className="px-4 sm:px-6 py-2.5 border-b shadow-xs flex items-center justify-between gap-3 shrink-0 transition-colors"
              style={{ 
                backgroundColor: 'var(--bg-secondary)', 
                borderColor: 'var(--border-color)' 
              }}
            >
              <button
                onClick={handlePrevScene}
                disabled={!hasPrevScene}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs sm:text-sm font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-80 active:scale-95"
                style={{ 
                  backgroundColor: 'var(--bg-primary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)'
                }}
                title="Go to previous scene"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Previous Scene</span>
                <span className="sm:hidden">Prev</span>
              </button>

              {/* Center Scene/Act Interactive Dropdown Button */}
              <div className="relative">
                <button
                  onClick={() => setIsScenePickerOpen(!isScenePickerOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs sm:text-sm font-semibold transition-all hover:opacity-90 active:scale-98 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl truncate cursor-pointer"
                  style={{ 
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: isScenePickerOpen ? 'var(--border-active)' : 'var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                  title="Click to jump directly to any Act or Scene"
                >
                  <span style={{ color: 'var(--accent)' }}>{currentAct?.title}</span>
                  <span className="opacity-40">•</span>
                  <span className="truncate">Scene {displayedScene.sceneNumber}: {displayedScene.title}</span>
                  {displayedScene.titleTranslation && (
                    <span className="hidden lg:inline opacity-70 italic truncate">
                      — "{displayedScene.titleTranslation}"
                    </span>
                  )}
                  <ChevronDown className={`w-3.5 h-3.5 shrink-0 opacity-60 transition-transform duration-200 ${isScenePickerOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Instant Scene Jump Dropdown Menu */}
                {isScenePickerOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setIsScenePickerOpen(false)} 
                    />
                    <div 
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 sm:w-96 max-h-[70vh] overflow-y-auto rounded-xl border shadow-2xl z-50 p-2 space-y-3 animate-fadeIn"
                      style={{ 
                        backgroundColor: 'var(--bg-secondary)', 
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-primary)' 
                      }}
                    >
                      {currentOpera.acts.map((act, aIdx) => (
                        <div key={act.actNumber} className="space-y-1">
                          <div className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider opacity-75">
                            {act.title}
                          </div>
                          {act.scenes.map((sc, sIdx) => {
                            const isCurrent = aIdx === currentActIndex && sIdx === currentSceneIndex;
                            return (
                              <button
                                key={sc.sceneNumber}
                                onClick={() => {
                                  handleSelectActScene(aIdx, sIdx);
                                  setIsScenePickerOpen(false);
                                }}
                                className={`w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm border transition-all flex items-start justify-between gap-2 cursor-pointer ${
                                  isCurrent ? 'ring-1 font-semibold' : 'hover:opacity-85'
                                }`}
                                style={{ 
                                  backgroundColor: isCurrent ? 'var(--bg-active)' : 'var(--bg-primary)',
                                  borderColor: isCurrent ? 'var(--border-active)' : 'var(--border-color)',
                                  color: 'var(--text-primary)'
                                }}
                              >
                                <div className="min-w-0 flex-1">
                                  <div className="font-medium truncate">
                                    Scene {sc.sceneNumber}: {sc.title}
                                  </div>
                                  {sc.titleTranslation && (
                                    <div className="text-xs sm:text-sm font-sans italic opacity-85 truncate mt-0.5">
                                      "{sc.titleTranslation}"
                                    </div>
                                  )}
                                </div>
                                {isCurrent && (
                                  <span className="text-xs uppercase font-bold px-1.5 py-0.5 rounded shrink-0" style={{ color: 'var(--accent)' }}>
                                    Current
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <button
                onClick={handleNextScene}
                disabled={!hasNextScene}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs sm:text-sm font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-80 active:scale-95"
                style={{ 
                  backgroundColor: 'var(--bg-primary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)'
                }}
                title="Go to next scene"
              >
                <span className="hidden sm:inline">Next Scene</span>
                <span className="sm:hidden">Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Scrollable Libretto Reader Pane */}
          <main 
            ref={mainScrollRef}
            className="flex-1 overflow-y-auto relative flex flex-col"
            style={{ backgroundColor: 'var(--bg-primary)' }}
          >
            <div className="flex-1">
              {isLoadingOpera || !currentOpera ? (
                <div className="flex flex-col items-center justify-center py-32 px-4 gap-4 opacity-80">
                  <div className="w-9 h-9 border-3 border-current border-t-transparent rounded-full animate-spin" style={{ color: 'var(--accent)' }} />
                  <div className="text-center space-y-1">
                    <h3 className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Loading {currentSummary.title}...
                    </h3>
                    <p className="text-xs opacity-60">Preparing libretto, linguistic tokens, and lexicon...</p>
                  </div>
                </div>
              ) : displayedScene ? (
                <DualColumnReader
                  key={`reader-${voiceVersion}`}
                  scene={displayedScene}
                  actTitle={currentAct?.title || ''}
                  actSetting={currentAct?.setting || ''}
                  actOriginalSetting={currentAct?.originalSetting}
                  language={currentOpera.language}
                  activeLineId={activeLineId}
                  onSelectLine={handleSelectLine}
                  fontSizeMultiplier={fontSizeMultiplier}
                  characters={currentOpera.characters}
                />
              ) : (
                <div className="text-center py-20 opacity-60">
                  No scene available
                </div>
              )}
            </div>
          </main>
        </section>

        {/* Linguistic Deep Dive Inspector Side Panel */}
        {activeLine && currentOpera && (
          <aside 
            className="w-full sm:w-[24rem] md:w-[28rem] lg:w-[32rem] shrink-0 border-l shadow-2xl flex flex-col z-20" 
            style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
          >
            <LinguisticInspector
              key={`inspector-${voiceVersion}`}
              line={activeLine}
              speaker={activeCue?.speaker || ''}
              pieceTitle={activeCue?.pieceTitle}
              language={currentOpera.language}
              onClose={() => {
                setActiveLine(null);
                setActiveLineId(null);
                setSelectedToken(null);
              }}
              selectedToken={selectedToken}
              onSelectToken={setSelectedToken}
              characters={currentOpera.characters}
            />
          </aside>
        )}
      </div>

      {/* Synopsis & Cast Modal */}
      {currentOpera && (
        <TableOfContentsModal
          isOpen={isTocOpen}
          onClose={() => setIsTocOpen(false)}
          opera={currentOpera}
        />
      )}

      {/* About & Shortcuts Modal */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />

      {/* Audio & Voice Settings Modal */}
      <VoiceSettingsModal
        isOpen={isVoiceSettingsOpen}
        onClose={() => setIsVoiceSettingsOpen(false)}
        language={currentOpera?.language || currentSummary.language}
        languageLabel={currentOpera?.languageLabel || currentSummary.languageLabel}
        onVoiceChanged={() => setVoiceVersion(v => v + 1)}
      />

    </div>
  );
};

export default App;
