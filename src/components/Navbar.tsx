import React from 'react';
import { Opera, OperaSummary, ThemeMode } from '../types/libretto';
import { 
  Sun, 
  Moon, 
  Eye, 
  Search, 
  Info, 
  ChevronDown,
  Volume2,
  Maximize2,
  Minimize2,
  BookOpen,
  Library,
  Check,
  Music,
  ArrowRight,
  X
} from 'lucide-react';

interface NavbarProps {
  catalog: OperaSummary[];
  currentOpera: Opera | null;
  currentOperaId: string;
  currentView: 'catalog' | 'reader';
  onNavigateToCatalog: () => void;
  onSelectOpera: (id: string) => void;
  theme: ThemeMode;
  onSelectTheme: (t: ThemeMode) => void;
  fontSizeMultiplier: number;
  onAdjustFontSize: (delta: number) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onNavigateToLine?: (actIndex: number, sceneIndex: number, lineId: string) => void;
  onOpenToc: () => void;
  onOpenAbout: () => void;
  onOpenVoiceSettings: () => void;
  activeVoiceName?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  catalog,
  currentOpera,
  currentOperaId,
  currentView,
  onNavigateToCatalog,
  onSelectOpera,
  theme,
  onSelectTheme,
  fontSizeMultiplier,
  onAdjustFontSize,
  searchQuery,
  onSearchChange,
  onNavigateToLine,
  onOpenToc,
  onOpenAbout,
  onOpenVoiceSettings,
  activeVoiceName
}) => {
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const [isSearchFocused, setIsSearchFocused] = React.useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = React.useState(false);
  const searchContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const sortedCatalog = React.useMemo(() => {
    return [...catalog].sort((a, b) => {
      const compA = a.composer.split(' ').pop() || a.composer;
      const compB = b.composer.split(' ').pop() || b.composer;
      const cmp = compA.localeCompare(compB);
      if (cmp !== 0) return cmp;
      return a.title.localeCompare(b.title);
    });
  }, [catalog]);

  const [isOperaDropdownOpen, setIsOperaDropdownOpen] = React.useState(false);
  const [operaFilterQuery, setOperaFilterQuery] = React.useState('');
  const operaDropdownRef = React.useRef<HTMLDivElement>(null);

  // Click outside to close opera dropdown
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (operaDropdownRef.current && !operaDropdownRef.current.contains(e.target as Node)) {
        setIsOperaDropdownOpen(false);
      }
    };
    if (isOperaDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOperaDropdownOpen]);

  // Escape key to close opera dropdown
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOperaDropdownOpen && e.key === 'Escape') {
        setIsOperaDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOperaDropdownOpen]);

  const currentSummary = React.useMemo(() => {
    return catalog.find(o => o.id === currentOperaId);
  }, [catalog, currentOperaId]);

  const currentComposerLast = currentSummary 
    ? (currentSummary.composer.split(' ').pop() || currentSummary.composer)
    : '';

  const currentTitle = currentSummary
    ? (currentSummary.id === 'die-zauberfloete' ? 'Die Zauberflöte' : currentSummary.title)
    : '';

  const filteredDropdownCatalog = React.useMemo(() => {
    if (!operaFilterQuery.trim()) return sortedCatalog;
    const q = operaFilterQuery.toLowerCase().trim();
    return sortedCatalog.filter(op => 
      op.title.toLowerCase().includes(q) ||
      op.composer.toLowerCase().includes(q) ||
      op.originalTitle?.toLowerCase().includes(q) ||
      op.languageLabel.toLowerCase().includes(q)
    );
  }, [sortedCatalog, operaFilterQuery]);

  // 1. Matches across all 21 operas in library catalog (Titles, Composers, Celebrated Arias, Languages, Synopses)
  const matchingOperas = React.useMemo(() => {
    if (!searchQuery || searchQuery.trim().length < 2) return [];
    const q = searchQuery.toLowerCase().trim();

    return catalog.filter(op => {
      const matchTitle = op.title.toLowerCase().includes(q);
      const matchOrig = op.originalTitle?.toLowerCase().includes(q);
      const matchComp = op.composer.toLowerCase().includes(q);
      const matchLang = op.languageLabel.toLowerCase().includes(q);
      const matchPieces = op.celebratedPieces?.some(p => p.toLowerCase().includes(q));
      const matchSynopsis = op.synopsisSnippet?.toLowerCase().includes(q);
      return matchTitle || matchOrig || matchComp || matchLang || matchPieces || matchSynopsis;
    });
  }, [catalog, searchQuery]);

  // 2. Matches across dialogue/lines in the currently loaded opera (if any)
  const matchingLines = React.useMemo(() => {
    if (!currentOpera || !searchQuery || searchQuery.trim().length < 2) return [];
    const q = searchQuery.toLowerCase().trim();
    const results: Array<{
      actIndex: number;
      actTitle: string;
      sceneIndex: number;
      sceneTitle: string;
      speaker: string;
      lineId: string;
      original: string;
      literal: string;
    }> = [];

    for (let aIdx = 0; aIdx < currentOpera.acts.length; aIdx++) {
      const act = currentOpera.acts[aIdx];
      for (let sIdx = 0; sIdx < act.scenes.length; sIdx++) {
        const scene = act.scenes[sIdx];
        for (const cue of scene.cues) {
          const speakerMatch = cue.speaker.toLowerCase().includes(q);
          const pieceMatch = cue.pieceTitle?.toLowerCase().includes(q);
          for (const line of cue.lines) {
            const origMatch = line.original.toLowerCase().includes(q);
            const litMatch = line.literal.toLowerCase().includes(q);
            const tokenMatch = line.tokens?.some(t => 
              t.word.toLowerCase().includes(q) || t.meaning.toLowerCase().includes(q)
            );

            if (speakerMatch || pieceMatch || origMatch || litMatch || tokenMatch) {
              results.push({
                actIndex: aIdx,
                actTitle: act.title,
                sceneIndex: sIdx,
                sceneTitle: scene.title,
                speaker: cue.speaker,
                lineId: line.id,
                original: line.original,
                literal: line.literal
              });
              if (results.length >= 20) return results;
            }
          }
        }
      }
    }
    return results;
  }, [currentOpera, searchQuery]);

  const isIOSTouch = React.useCallback(() => {
    if (typeof window === 'undefined') return false;
    return (
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    );
  }, []);

  React.useEffect(() => {
    const handleFsChange = () => {
      const doc = document as any;
      const isNativeFs = !!(
        document.fullscreenElement ||
        doc.webkitFullscreenElement ||
        doc.mozFullScreenElement ||
        doc.msFullscreenElement
      );
      if (!isIOSTouch()) {
        setIsFullscreen(isNativeFs);
      }
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    document.addEventListener('webkitfullscreenchange', handleFsChange);
    document.addEventListener('mozfullscreenchange', handleFsChange);
    document.addEventListener('MSFullscreenChange', handleFsChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFsChange);
      document.removeEventListener('webkitfullscreenchange', handleFsChange);
      document.removeEventListener('mozfullscreenchange', handleFsChange);
      document.removeEventListener('MSFullscreenChange', handleFsChange);
    };
  }, [isIOSTouch]);

  // Escape key listener to exit fullscreen on all platforms (including iPad external keyboards)
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        if (!isIOSTouch()) {
          const doc = document as any;
          if (document.fullscreenElement || doc.webkitFullscreenElement) {
            if (document.exitFullscreen) document.exitFullscreen().catch(() => {});
            else if (doc.webkitExitFullscreen) doc.webkitExitFullscreen();
          }
        }
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, isIOSTouch]);

  const toggleFullscreen = () => {
    // If on iOS / iPadOS Safari, DO NOT call webkitRequestFullscreen because Apple
    // forcibly injects a large native 'X' overlay over the logo and exits on any scroll gesture.
    // Instead, toggle in-app Immersive Fullscreen which sticks 100% reliably.
    if (isIOSTouch()) {
      setIsFullscreen(prev => !prev);
      return;
    }

    // On Desktop platforms (Mac Safari, Chrome, Edge, Firefox):
    const doc = document as any;
    const docEl = document.documentElement as any;

    const isNativeFs = !!(
      document.fullscreenElement ||
      doc.webkitFullscreenElement ||
      doc.mozFullScreenElement ||
      doc.msFullscreenElement
    );

    if (!isNativeFs) {
      if (docEl.requestFullscreen) {
        docEl.requestFullscreen().catch(() => {});
      } else if (docEl.webkitRequestFullscreen) {
        docEl.webkitRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if (doc.webkitExitFullscreen) {
        doc.webkitExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  const headerPaddingTop = React.useMemo(() => {
    // Natural hardware safe area clearance (e.g. Dynamic Island or notch if present, otherwise 0.5rem)
    return 'max(0.5rem, env(safe-area-inset-top))';
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b px-3 sm:px-6 py-2 sm:py-2.5 transition-all"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border-color)',
        color: 'var(--text-primary)',
        paddingTop: headerPaddingTop
      }}
    >
      {isFullscreen ? (
        /* Immersive Fullscreen Reading Bar (Single Row, Streamlined, No Clutter) */
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 min-h-[36px]">
          {/* Left: Branding & Current Opera / Scene */}
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1">
            <button
              onClick={onNavigateToCatalog}
              className="flex items-center gap-2 text-left cursor-pointer hover:opacity-85 transition-opacity shrink-0"
              title="Return to Opera Library Catalog"
              aria-label="Libretto Library Catalog"
            >
              <div 
                className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border shadow-xs"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--accent)'
                }}
              >
                <span className="font-display font-bold text-sm leading-none">L</span>
              </div>
              <span className="font-display font-bold tracking-widest text-sm hidden sm:inline" style={{ color: 'var(--accent)' }}>
                LIBRETTO
              </span>
            </button>

            {currentOpera ? (
              <div className="flex items-center gap-1.5 min-w-0 truncate">
                <span className="opacity-30 text-xs hidden sm:inline">•</span>
                <span className="font-serif font-semibold text-xs sm:text-sm truncate" style={{ color: 'var(--text-primary)' }}>
                  {currentOpera.title}
                </span>
                <span className="text-[11px] opacity-60 truncate hidden md:inline font-serif italic">
                  — {currentComposerLast}
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 min-w-0 truncate">
                <span className="opacity-30 text-xs hidden sm:inline">•</span>
                <span className="font-serif font-medium text-xs sm:text-sm truncate opacity-80">
                  Opera Library Catalog
                </span>
              </div>
            )}
          </div>

          {/* Right: Essential Reading Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {currentOpera && (
              <button
                onClick={onOpenToc}
                className="flex items-center gap-1.5 text-xs py-1.5 px-2 sm:px-2.5 rounded-lg border transition-colors hover:opacity-80 shrink-0 min-h-[32px] cursor-pointer"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-secondary)'
                }}
                title="View Synopsis and Characters"
              >
                <BookOpen className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
                <span className="font-medium hidden sm:inline">Cast</span>
              </button>
            )}

            {/* Font Size Adjusters */}
            <div 
              className="flex items-center rounded-lg border divide-x shadow-2xs"
              style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-primary)' }}
            >
              <button
                onClick={() => onAdjustFontSize(-0.1)}
                disabled={fontSizeMultiplier <= 0.8}
                className="px-2 py-1 text-xs font-serif font-semibold hover:opacity-75 disabled:opacity-30 transition-opacity cursor-pointer"
                title="Decrease font size"
              >
                A-
              </button>
              <button
                onClick={() => onAdjustFontSize(0.1)}
                disabled={fontSizeMultiplier >= 1.5}
                className="px-2 py-1 text-xs font-serif font-semibold hover:opacity-75 disabled:opacity-30 transition-opacity cursor-pointer"
                title="Increase font size"
              >
                A+
              </button>
            </div>

            {/* Quick Theme Toggle */}
            <div 
              className="flex items-center p-0.5 gap-0.5 rounded-lg border shadow-2xs" 
              style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-primary)' }}
            >
              <button
                onClick={() => onSelectTheme('day')}
                className={`p-1.5 rounded-md transition-all cursor-pointer ${theme === 'day' ? 'shadow-xs font-semibold' : 'opacity-60 hover:opacity-100'}`}
                style={theme === 'day' ? { backgroundColor: 'var(--bg-tertiary)', color: 'var(--accent)' } : {}}
                title="Day Mode (Warm Parchment)"
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onSelectTheme('night')}
                className={`p-1.5 rounded-md transition-all cursor-pointer ${theme === 'night' ? 'shadow-xs font-semibold' : 'opacity-60 hover:opacity-100'}`}
                style={theme === 'night' ? { backgroundColor: 'var(--bg-tertiary)', color: 'var(--accent)' } : {}}
                title="Night Mode (Dark Obsidian)"
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onSelectTheme('astro-red')}
                className={`p-1.5 rounded-md transition-all cursor-pointer ${theme === 'astro-red' ? 'shadow-xs font-semibold' : 'opacity-60 hover:opacity-100'}`}
                style={theme === 'astro-red' ? { backgroundColor: '#2d0606', color: '#ef4444' } : {}}
                title="Astro Red (Theater Night Vision)"
              >
                <Eye className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Exit Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-lg border font-medium transition-all hover:opacity-90 active:scale-95 shadow-2xs cursor-pointer min-h-[32px]"
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--border-active)',
                color: 'var(--accent)'
              }}
              title="Exit Fullscreen (or press Escape)"
              aria-label="Exit Fullscreen"
            >
              <Minimize2 className="w-3.5 h-3.5" />
              <span className="font-serif hidden sm:inline text-xs font-semibold">Exit Fullscreen</span>
            </button>
          </div>
        </div>
      ) : (
        /* Normal Mode Layout (Rows 1 & 2) */
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 lg:gap-3">
        
        {/* Row 1 on Mobile & Tablet Portrait / Left Section on Desktop: Branding, Opera Selector, Synopsis, and Mobile Search */}
        <div className="flex items-center justify-between lg:justify-start gap-2 min-w-0 flex-1 lg:flex-initial">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1 lg:flex-initial">
            <button
              onClick={onNavigateToCatalog}
              className="flex items-center gap-2 sm:gap-2.5 text-left cursor-pointer hover:opacity-85 transition-opacity select-none group shrink-0"
              title="Return to Opera Library Catalog"
              aria-label="Libretto Library Catalog"
            >
              <div 
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 border shadow-xs group-hover:scale-105 transition-transform"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--accent)'
                }}
              >
                <span className="font-display font-bold text-sm sm:text-base leading-none">L</span>
              </div>
              <div className="hidden sm:block shrink-0">
                <span className="font-display font-bold tracking-widest text-sm sm:text-base block leading-tight whitespace-nowrap" style={{ color: 'var(--accent)' }}>
                  LIBRETTO
                </span>
                <span className="text-[10px] tracking-wider uppercase opacity-65 whitespace-nowrap font-medium hidden sm:block lg:hidden xl:block">
                  Study Edition
                </span>
              </div>
            </button>

            {/* Catalog Button */}
            <button
              onClick={onNavigateToCatalog}
              className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs sm:text-sm font-medium transition-all shrink-0 cursor-pointer shadow-xs ${currentView === 'catalog' ? 'font-bold' : 'opacity-80 hover:opacity-100'}`}
              style={{
                backgroundColor: currentView === 'catalog' ? 'var(--bg-tertiary)' : 'var(--bg-primary)',
                borderColor: currentView === 'catalog' ? 'var(--border-active)' : 'var(--border-color)',
                color: currentView === 'catalog' ? 'var(--accent)' : 'var(--text-primary)'
              }}
              title="Browse complete catalog of 21 operas"
            >
              <Library className="w-3.5 h-3.5" />
              <span>Catalog</span>
            </button>

            {/* Themed Opera Dropdown (Fine book-binding style) */}
            <div ref={operaDropdownRef} className="relative flex-1 min-w-0 max-w-full sm:max-w-md lg:max-w-[210px] xl:max-w-xs 2xl:max-w-md">
              <button
                type="button"
                onClick={() => {
                  setIsOperaDropdownOpen(!isOperaDropdownOpen);
                  setOperaFilterQuery('');
                }}
                className="w-full flex items-center justify-between gap-1.5 font-serif text-xs sm:text-sm py-1.5 pl-3 pr-2.5 rounded-lg border cursor-pointer focus:outline-none transition-all truncate font-medium shadow-xs select-none hover:opacity-95 active:scale-98"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderColor: isOperaDropdownOpen ? 'var(--border-active)' : 'var(--border-color)',
                  color: 'var(--text-primary)',
                }}
                title={currentView === 'catalog' ? 'Opera Library (21 Operas)' : `${currentSummary?.composer}: ${currentTitle}`}
                aria-haspopup="listbox"
                aria-expanded={isOperaDropdownOpen}
              >
                <div className="flex items-center gap-1.5 truncate min-w-0 flex-1">
                  {currentView === 'catalog' ? (
                    <span className="truncate flex items-center gap-1 font-semibold" style={{ color: 'var(--accent)' }}>
                      <span>✦</span>
                      <span>Browse Library (21 Operas)</span>
                    </span>
                  ) : (
                    <>
                      <span style={{ color: 'var(--accent)' }} className="font-bold shrink-0">
                        {currentComposerLast}:
                      </span>
                      <span className="truncate">
                        {currentTitle}
                      </span>
                      {currentSummary?.languageLabel && (
                        <span 
                          className="text-[10px] px-1.5 py-0.2 rounded border opacity-65 shrink-0 hidden md:inline font-sans"
                          style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-tertiary)' }}
                        >
                          {currentSummary.languageLabel}
                        </span>
                      )}
                    </>
                  )}
                </div>
                <ChevronDown className={`w-3.5 h-3.5 shrink-0 opacity-50 transition-transform duration-200 ${isOperaDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Themed Opera Popover Menu */}
              {isOperaDropdownOpen && (
                <div 
                  className="absolute left-0 top-full mt-1.5 w-[min(94vw,22rem)] sm:w-[26rem] md:w-[28rem] rounded-xl border shadow-2xl z-50 overflow-hidden animate-fadeIn backdrop-blur-md flex flex-col"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                  role="listbox"
                >
                  {/* Top Browse Library Option */}
                  <div className="p-1.5 border-b shrink-0" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-tertiary)' }}>
                    <button
                      type="button"
                      onClick={() => {
                        onNavigateToCatalog();
                        setIsOperaDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center justify-between gap-2.5 cursor-pointer ${
                        currentView === 'catalog' ? 'font-bold shadow-2xs' : 'hover:opacity-90'
                      }`}
                      style={{
                        backgroundColor: currentView === 'catalog' ? 'var(--bg-active)' : 'var(--bg-primary)',
                        borderColor: currentView === 'catalog' ? 'var(--border-active)' : 'var(--border-color)',
                        color: currentView === 'catalog' ? 'var(--accent)' : 'var(--text-primary)'
                      }}
                    >
                      <div className="flex items-center gap-2 min-w-0 flex-1">
                        <Library className="w-4 h-4 shrink-0" style={{ color: 'var(--accent)' }} />
                        <div className="min-w-0">
                          <div className="font-semibold text-xs sm:text-sm">✦ Browse Library (21 Operas)</div>
                          <div className="text-[11px] opacity-70 font-sans truncate">View full catalog gallery, composers & synopses</div>
                        </div>
                      </div>
                      {currentView === 'catalog' && (
                        <Check className="w-4 h-4 shrink-0" style={{ color: 'var(--accent)' }} />
                      )}
                    </button>
                  </div>

                  {/* Filter Input */}
                  <div className="p-2 border-b shrink-0" style={{ borderColor: 'var(--border-color)' }}>
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 opacity-50" />
                      <input
                        type="text"
                        autoFocus
                        value={operaFilterQuery}
                        onChange={(e) => setOperaFilterQuery(e.target.value)}
                        placeholder="Filter 21 operas or composers..."
                        className="w-full text-xs py-1.5 pl-8 pr-7 rounded-lg border focus:outline-none transition-colors"
                        style={{
                          backgroundColor: 'var(--bg-primary)',
                          borderColor: 'var(--border-color)',
                          color: 'var(--text-primary)'
                        }}
                      />
                      {operaFilterQuery && (
                        <button
                          type="button"
                          onClick={() => setOperaFilterQuery('')}
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-xs opacity-50 hover:opacity-100 p-0.5 cursor-pointer"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Scrollable Opera List */}
                  <div className="max-h-[min(60dvh,20rem)] overflow-y-auto p-1.5 space-y-0.5 divide-y divide-[var(--border-color)]/25 overscroll-contain">
                    {filteredDropdownCatalog.length === 0 ? (
                      <div className="p-4 text-center text-xs opacity-60 italic font-serif">
                        No operas match "{operaFilterQuery}"
                      </div>
                    ) : (
                      filteredDropdownCatalog.map((op) => {
                        const isCurrent = currentView === 'reader' && op.id === currentOperaId;
                        const compLast = op.composer.split(' ').pop() || op.composer;
                        const dispTitle = op.id === 'die-zauberfloete'
                          ? 'Die Zauberflöte (The Magic Flute)'
                          : op.title;

                        return (
                          <button
                            key={op.id}
                            type="button"
                            onClick={() => {
                              onSelectOpera(op.id);
                              setIsOperaDropdownOpen(false);
                            }}
                            className={`w-full text-left px-2.5 py-2 rounded-lg text-xs sm:text-sm transition-all flex items-center justify-between gap-2.5 cursor-pointer ${
                              isCurrent ? 'font-semibold shadow-2xs' : 'hover:opacity-90'
                            }`}
                            style={{
                              backgroundColor: isCurrent ? 'var(--bg-active)' : 'transparent',
                              color: 'var(--text-primary)'
                            }}
                            role="option"
                            aria-selected={isCurrent}
                          >
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-1.5">
                                <span 
                                  className="font-serif font-bold text-[11px] uppercase tracking-wider shrink-0"
                                  style={{ color: 'var(--accent)' }}
                                >
                                  {compLast}
                                </span>
                                <span className="opacity-30 text-[10px]">•</span>
                                <span 
                                  className="text-[10px] px-1.5 py-0.2 rounded font-sans opacity-75 shrink-0 border"
                                  style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-tertiary)' }}
                                >
                                  {op.languageLabel}
                                </span>
                              </div>
                              <div className="font-display font-medium text-xs sm:text-sm leading-snug truncate mt-0.5">
                                {dispTitle}
                              </div>
                            </div>
                            {isCurrent && (
                              <Check className="w-4 h-4 shrink-0" style={{ color: 'var(--accent)' }} />
                            )}
                          </button>
                        );
                      })
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions (Search for < lg, Synopsis & Cast) */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Search Button for Mobile & Tablet (< lg) */}
            <button
              onClick={() => setIsMobileSearchOpen(true)}
              className="lg:hidden p-1.5 rounded-lg border transition-colors hover:opacity-80 shrink-0 cursor-pointer min-w-[32px] min-h-[32px] flex items-center justify-center"
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                borderColor: 'var(--border-color)',
                color: 'var(--accent)'
              }}
              title="Search lines & vocabulary in opera"
              aria-label="Search lines in opera"
            >
              <Search className="w-3.5 h-3.5" />
            </button>

            {/* Synopsis & Cast Button */}
            <button
              onClick={onOpenToc}
              disabled={!currentOpera}
              className="flex items-center gap-1.5 text-xs sm:text-sm py-1.5 px-2 sm:px-2.5 rounded-lg border transition-colors hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed shrink-0 min-h-[32px] cursor-pointer"
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-secondary)'
              }}
              title="View Synopsis and Characters"
            >
              <BookOpen className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
              <span className="font-medium hidden sm:inline lg:hidden xl:inline">Synopsis & Cast</span>
              <span className="font-medium hidden min-[360px]:inline sm:hidden lg:inline xl:hidden">Cast</span>
            </button>
          </div>
        </div>

        {/* Center / Right: Search Bar with Omni-Search Results Dropdown (Desktop lg:) */}
        <div ref={searchContainerRef} className="relative flex-1 min-w-[150px] max-w-[220px] xl:max-w-xs 2xl:max-w-sm hidden lg:block">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 opacity-50" />
          <input
            type="text"
            placeholder="Search 21 operas, composers, arias, lines..."
            value={searchQuery}
            onFocus={() => setIsSearchFocused(true)}
            onChange={(e) => {
              onSearchChange(e.target.value);
              setIsSearchFocused(true);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Escape') setIsSearchFocused(false);
            }}
            className="w-full text-xs py-1.5 pl-8 pr-8 rounded-lg border focus:outline-none transition-colors"
            style={{
              backgroundColor: 'var(--bg-primary)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)'
            }}
          />
          {searchQuery && (
            <button
              onClick={() => {
                onSearchChange('');
                setIsSearchFocused(false);
              }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs opacity-50 hover:opacity-100 cursor-pointer"
              title="Clear search"
            >
              ✕
            </button>
          )}

          {/* Omni-Search Results Popover */}
          {isSearchFocused && searchQuery.trim().length >= 2 && (
            <div 
              className="absolute top-full left-0 right-0 mt-2 max-h-[min(70dvh,26rem)] overflow-y-auto rounded-xl shadow-2xl border z-50 p-2 space-y-2.5 text-xs backdrop-blur-md"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-primary)'
              }}
            >
              <div 
                className="px-2 py-1.5 border-b flex items-center justify-between font-semibold tracking-wider text-[11px] opacity-75"
                style={{ borderColor: 'var(--border-color)' }}
              >
                <span>Omni-Search Results</span>
                <span 
                  className="text-[10px] px-1.5 py-0.5 rounded-full font-bold border"
                  style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-tertiary)', color: 'var(--accent)' }}
                >
                  {matchingOperas.length + matchingLines.length} {matchingOperas.length + matchingLines.length === 1 ? 'match' : 'matches'}{matchingLines.length >= 20 ? '+' : ''}
                </span>
              </div>

              {matchingOperas.length === 0 && matchingLines.length === 0 ? (
                <div className="p-4 text-center space-y-1">
                  <p className="opacity-60 italic">No operas, arias, or dialogue lines match "{searchQuery}".</p>
                  <p className="text-[10px] opacity-45">Search by composer (Puccini, Verdi), title (Tosca, Carmen), or aria (Nessun dorma).</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {/* Operas Section */}
                  {matchingOperas.length > 0 && (
                    <div className="space-y-1">
                      <div className="px-2 text-[10px] uppercase font-bold tracking-wider opacity-60 flex items-center justify-between">
                        <span>Operas & Library ({matchingOperas.length})</span>
                        <span className="text-[9px] font-normal lowercase opacity-75">Click to switch opera</span>
                      </div>
                      <div className="space-y-1">
                        {matchingOperas.map((op) => {
                          const q = searchQuery.toLowerCase().trim();
                          const matchedPiece = op.celebratedPieces?.find(p => p.toLowerCase().includes(q));
                          const compLast = op.composer.split(' ').pop() || op.composer;
                          const dispTitle = op.id === 'die-zauberfloete'
                            ? 'Die Zauberflöte (The Magic Flute)'
                            : op.title;

                          return (
                            <button
                              key={op.id}
                              onClick={() => {
                                onSelectOpera(op.id);
                                onSearchChange('');
                                setIsSearchFocused(false);
                              }}
                              className="w-full text-left p-2 rounded-lg border transition-all hover:bg-[var(--bg-tertiary)] flex items-center justify-between gap-2 cursor-pointer group"
                              style={{
                                backgroundColor: 'var(--bg-primary)',
                                borderColor: 'var(--border-color)'
                              }}
                            >
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-1.5">
                                  <span className="font-serif font-bold text-[11px] uppercase tracking-wider shrink-0" style={{ color: 'var(--accent)' }}>
                                    {compLast}
                                  </span>
                                  <span className="opacity-30 text-[10px]">•</span>
                                  <span 
                                    className="text-[10px] px-1 py-0.2 rounded border opacity-75 shrink-0"
                                    style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-tertiary)' }}
                                  >
                                    {op.languageLabel}
                                  </span>
                                  <span className="opacity-40 text-[10px] shrink-0">{op.year}</span>
                                </div>
                                <div className="font-display font-medium text-xs truncate mt-0.5">
                                  {dispTitle}
                                </div>
                                {matchedPiece && (
                                  <div className="text-[10px] flex items-center gap-1 font-sans italic opacity-85 mt-0.5" style={{ color: 'var(--accent)' }}>
                                    <Music className="w-2.5 h-2.5 shrink-0" />
                                    <span className="truncate">Piece: {matchedPiece}</span>
                                  </div>
                                )}
                              </div>
                              <ArrowRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" style={{ color: 'var(--accent)' }} />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Lines Section */}
                  {matchingLines.length > 0 && (
                    <div className="space-y-1">
                      <div className="px-2 text-[10px] uppercase font-bold tracking-wider opacity-60">
                        Lines in {currentOpera?.title} ({matchingLines.length}{matchingLines.length >= 20 ? '+' : ''})
                      </div>
                      <div className="space-y-1">
                        {matchingLines.map((res) => (
                          <button
                            key={res.lineId}
                            onClick={() => {
                              if (onNavigateToLine) {
                                onNavigateToLine(res.actIndex, res.sceneIndex, res.lineId);
                              }
                              setIsSearchFocused(false);
                            }}
                            className="w-full text-left p-2 rounded-lg transition-colors hover:bg-[var(--bg-tertiary)] space-y-0.5 cursor-pointer"
                          >
                            <div className="flex items-center justify-between text-[10px] opacity-70">
                              <span className="font-semibold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>
                                {res.actTitle} • {res.sceneTitle}
                              </span>
                              <span className="font-medium">{res.speaker}</span>
                            </div>
                            <p className="font-libretto text-xs line-clamp-1 italic font-medium">
                              {res.original}
                            </p>
                            <p className="text-[11px] opacity-75 line-clamp-1">
                              {res.literal}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Row 2 on Mobile & Tablet Portrait / Right Controls on Desktop: Reading Palette & Utilities */}
        <div className="flex items-center justify-between lg:justify-end gap-2 pt-1.5 lg:pt-0 border-t lg:border-t-0 border-[var(--border-color)]/30 lg:border-transparent shrink-0">
          
          {/* Reading Controls Palette: Font Size & Theme */}
          <div 
            className="flex items-center rounded-lg border shadow-2xs divide-x transition-colors shrink-0"
            style={{ 
              borderColor: 'var(--border-color)', 
              backgroundColor: 'var(--bg-primary)' 
            }}
          >
            {/* Font Size Adjusters */}
            <div className="flex items-center px-0.5">
              <button
                onClick={() => onAdjustFontSize(-0.1)}
                disabled={fontSizeMultiplier <= 0.8}
                className="px-2 py-1 text-xs font-serif font-semibold hover:opacity-75 disabled:opacity-30 transition-opacity cursor-pointer"
                title="Decrease font size"
              >
                A-
              </button>
              <button
                onClick={() => onAdjustFontSize(0.1)}
                disabled={fontSizeMultiplier >= 1.5}
                className="px-2 py-1 text-xs font-serif font-semibold hover:opacity-75 disabled:opacity-30 transition-opacity cursor-pointer"
                title="Increase font size"
              >
                A+
              </button>
            </div>

            {/* Theme Switcher: Day, Night, Astro Red */}
            <div className="flex items-center p-0.5 gap-0.5" style={{ borderColor: 'var(--border-color)' }}>
              <button
                onClick={() => onSelectTheme('day')}
                className={`p-1.5 rounded-md transition-all cursor-pointer ${theme === 'day' ? 'shadow-xs font-semibold' : 'opacity-60 hover:opacity-100'}`}
                style={theme === 'day' ? { backgroundColor: 'var(--bg-tertiary)', color: 'var(--accent)' } : {}}
                title="Day Mode (Warm Parchment)"
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onSelectTheme('night')}
                className={`p-1.5 rounded-md transition-all cursor-pointer ${theme === 'night' ? 'shadow-xs font-semibold' : 'opacity-60 hover:opacity-100'}`}
                style={theme === 'night' ? { backgroundColor: 'var(--bg-tertiary)', color: 'var(--accent)' } : {}}
                title="Night Mode (Dark Obsidian)"
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onSelectTheme('astro-red')}
                className={`p-1.5 rounded-md transition-all cursor-pointer ${theme === 'astro-red' ? 'shadow-xs font-semibold' : 'opacity-60 hover:opacity-100'}`}
                style={theme === 'astro-red' ? { backgroundColor: '#2d0606', color: '#ef4444' } : {}}
                title="Astro Red (Theater Night Vision)"
              >
                <Eye className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Secondary Utilities: Voice, About, Fullscreen (Always rendered & never cropped) */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={onOpenVoiceSettings}
              className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 text-xs rounded-lg border transition-all hover:opacity-85 shadow-2xs cursor-pointer min-h-[32px]"
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-secondary)'
              }}
              title="Pronunciation Voice Settings"
            >
              <Volume2 className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--accent)' }} />
              <span className="hidden sm:inline lg:hidden xl:inline font-serif font-medium max-w-[85px] truncate">
                {activeVoiceName || 'Voice'}
              </span>
            </button>

            <button
              onClick={onOpenAbout}
              className="p-1.5 rounded-lg border transition-all hover:opacity-85 shadow-2xs cursor-pointer min-w-[32px] min-h-[32px] flex items-center justify-center"
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-secondary)'
              }}
              title="About Libretto & Shortcuts"
            >
              <Info className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={toggleFullscreen}
              className="p-1.5 rounded-lg border transition-all hover:opacity-85 shadow-2xs cursor-pointer min-w-[32px] min-h-[32px] flex items-center justify-center"
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--border-color)',
                color: 'var(--accent)'
              }}
              title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
              aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
          </div>

        </div>

      </div>
      )}

      {/* Mobile Opera Search Modal (< lg) */}
      {isMobileSearchOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-fadeIn overflow-y-auto"
          onClick={() => setIsMobileSearchOpen(false)}
        >
          <div 
            className="w-full max-w-lg max-h-[min(88dvh,calc(100dvh-2rem))] rounded-2xl border shadow-2xl flex flex-col overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)'
            }}
          >
            {/* Header / Search Input */}
            <div 
              className="px-4 py-3 border-b flex items-center justify-between gap-2.5 shrink-0"
              style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-tertiary)' }}
            >
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 opacity-50" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search 21 operas, composers, arias, lines..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full text-xs sm:text-sm py-2 pl-9 pr-8 rounded-lg border focus:outline-none transition-colors"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                />
                {searchQuery && (
                  <button
                    onClick={() => onSearchChange('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs opacity-50 hover:opacity-100 p-1 cursor-pointer"
                    title="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              <button
                onClick={() => setIsMobileSearchOpen(false)}
                className="p-2 rounded-lg border hover:opacity-75 active:scale-95 transition-all shrink-0 min-w-[36px] min-h-[36px] flex items-center justify-center cursor-pointer"
                style={{ borderColor: 'var(--border-color)' }}
                aria-label="Close search"
                title="Close search"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Live Search Results */}
            <div className="p-3 space-y-3 overflow-y-auto flex-1 min-h-0 overscroll-contain">
              {searchQuery.trim().length < 2 ? (
                <div className="p-6 text-center text-xs opacity-60 space-y-1">
                  <p>Type at least 2 characters to search across 21 operas, composers, arias, or lines...</p>
                  <p className="text-[11px] opacity-45 font-sans">Examples: "Tosca", "Puccini", "Nessun dorma", "Carmen", "Verdi"</p>
                </div>
              ) : matchingOperas.length === 0 && matchingLines.length === 0 ? (
                <div className="p-6 text-center text-xs opacity-60 italic space-y-1">
                  <p>No operas, arias, or dialogue lines match "{searchQuery}".</p>
                  <p className="text-[11px] opacity-45 font-sans">Try searching by composer (Puccini, Verdi), title (Tosca, Carmen), or aria (Nessun dorma).</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Operas Section */}
                  {matchingOperas.length > 0 && (
                    <div className="space-y-1.5">
                      <div className="px-1 text-[11px] font-bold uppercase tracking-wider opacity-65 flex justify-between">
                        <span>Operas & Library ({matchingOperas.length})</span>
                        <span className="text-[10px] font-normal lowercase opacity-70">Tap to open</span>
                      </div>
                      <div className="space-y-1.5">
                        {matchingOperas.map((op) => {
                          const q = searchQuery.toLowerCase().trim();
                          const matchedPiece = op.celebratedPieces?.find(p => p.toLowerCase().includes(q));
                          const compLast = op.composer.split(' ').pop() || op.composer;
                          const dispTitle = op.id === 'die-zauberfloete'
                            ? 'Die Zauberflöte (The Magic Flute)'
                            : op.title;

                          return (
                            <button
                              key={op.id}
                              onClick={() => {
                                onSelectOpera(op.id);
                                onSearchChange('');
                                setIsMobileSearchOpen(false);
                              }}
                              className="w-full text-left p-2.5 rounded-xl border transition-all active:scale-[0.99] flex items-center justify-between gap-2 cursor-pointer"
                              style={{
                                backgroundColor: 'var(--bg-primary)',
                                borderColor: 'var(--border-color)'
                              }}
                            >
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-1.5">
                                  <span className="font-serif font-bold text-xs uppercase tracking-wider shrink-0" style={{ color: 'var(--accent)' }}>
                                    {compLast}
                                  </span>
                                  <span className="opacity-30 text-[10px]">•</span>
                                  <span 
                                    className="text-[10px] px-1.5 py-0.2 rounded border opacity-75 shrink-0"
                                    style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-tertiary)' }}
                                  >
                                    {op.languageLabel}
                                  </span>
                                  <span className="opacity-40 text-[10px] shrink-0">{op.year}</span>
                                </div>
                                <div className="font-display font-medium text-sm leading-snug truncate mt-0.5">
                                  {dispTitle}
                                </div>
                                {matchedPiece && (
                                  <div className="text-[11px] flex items-center gap-1 font-sans italic opacity-85 mt-1" style={{ color: 'var(--accent)' }}>
                                    <Music className="w-3 h-3 shrink-0" />
                                    <span className="truncate">Piece: {matchedPiece}</span>
                                  </div>
                                )}
                              </div>
                              <ArrowRight className="w-4 h-4 opacity-50 shrink-0" style={{ color: 'var(--accent)' }} />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Lines Section */}
                  {matchingLines.length > 0 && (
                    <div className="space-y-1.5">
                      <div className="px-1 text-[11px] font-bold uppercase tracking-wider opacity-65 flex justify-between">
                        <span>Lines in {currentOpera?.title}</span>
                        <span>{matchingLines.length}{matchingLines.length >= 20 ? '+' : ''}</span>
                      </div>
                      <div className="space-y-1.5">
                        {matchingLines.map((res) => (
                          <button
                            key={res.lineId}
                            onClick={() => {
                              if (onNavigateToLine) {
                                onNavigateToLine(res.actIndex, res.sceneIndex, res.lineId);
                              }
                              setIsMobileSearchOpen(false);
                            }}
                            className="w-full text-left p-2.5 rounded-xl border transition-all hover:bg-[var(--bg-tertiary)] space-y-1 cursor-pointer"
                            style={{
                              backgroundColor: 'var(--bg-primary)',
                              borderColor: 'var(--border-color)'
                            }}
                          >
                            <div className="flex items-center justify-between text-[11px] opacity-75">
                              <span className="font-semibold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>
                                {res.actTitle} • {res.sceneTitle}
                              </span>
                              <span className="font-medium">[{res.speaker}]</span>
                            </div>
                            <p className="font-libretto text-xs sm:text-sm italic font-medium leading-snug">
                              {res.original}
                            </p>
                            <p className="text-xs opacity-80 font-sans leading-snug">
                              {res.literal}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            <div 
              className="px-4 py-2.5 border-t flex items-center justify-between shrink-0"
              style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-tertiary)' }}
            >
              <span className="text-xs opacity-65">
                {matchingOperas.length + matchingLines.length} {matchingOperas.length + matchingLines.length === 1 ? 'match' : 'matches'}{matchingLines.length >= 20 ? '+' : ''}
              </span>
              <button
                onClick={() => setIsMobileSearchOpen(false)}
                className="px-4 py-1.5 rounded-lg text-xs font-semibold border hover:opacity-85 active:scale-98 transition-all cursor-pointer"
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
      )}
    </header>
  );
};
