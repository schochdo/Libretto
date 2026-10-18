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
  X
} from 'lucide-react';

interface NavbarProps {
  catalog: OperaSummary[];
  currentOpera: Opera | null;
  currentOperaId: string;
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

  const searchResults = React.useMemo(() => {
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
              if (results.length >= 25) return results;
            }
          }
        }
      }
    }
    return results;
  }, [currentOpera, searchQuery]);

  React.useEffect(() => {
    const handleFsChange = () => {
      const doc = document as any;
      setIsFullscreen(!!(
        document.fullscreenElement ||
        doc.webkitFullscreenElement ||
        doc.mozFullScreenElement ||
        doc.msFullscreenElement
      ));
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
  }, []);

  const toggleFullscreen = () => {
    const doc = document as any;
    const docEl = document.documentElement as any;

    const isFs = !!(
      document.fullscreenElement ||
      doc.webkitFullscreenElement ||
      doc.mozFullScreenElement ||
      doc.msFullscreenElement
    );

    if (!isFs) {
      if (docEl.requestFullscreen) {
        docEl.requestFullscreen().catch(() => {});
      } else if (docEl.webkitRequestFullscreen) {
        docEl.webkitRequestFullscreen();
      } else if (docEl.mozRequestFullScreen) {
        docEl.mozRequestFullScreen();
      } else if (docEl.msRequestFullscreen) {
        docEl.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if (doc.webkitExitFullscreen) {
        doc.webkitExitFullscreen();
      } else if (doc.mozCancelFullScreen) {
        doc.mozCancelFullScreen();
      } else if (doc.msExitFullscreen) {
        doc.msExitFullscreen();
      }
    }
  };

  return (
    <header className="sticky top-0 z-30 border-b backdrop-blur-md px-3 sm:px-6 py-2 sm:py-2.5 transition-colors pt-[max(0.5rem,env(safe-area-inset-top))]"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border-color)',
        color: 'var(--text-primary)'
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
        
        {/* Row 1 on Mobile / Left Section on Desktop: Branding, Opera Selector, Synopsis, and Mobile Fullscreen */}
        <div className="flex items-center justify-between sm:justify-start gap-2 shrink-0">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1 sm:flex-initial">
            <div 
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 border select-none shadow-xs"
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--border-color)',
                color: 'var(--accent)'
              }}
              aria-label="Libretto monogram"
            >
              <span className="font-display font-bold text-sm sm:text-base leading-none">L</span>
            </div>
            <div className="hidden md:block shrink-0">
              <span className="font-display font-bold tracking-widest text-sm sm:text-base block leading-tight whitespace-nowrap" style={{ color: 'var(--accent)' }}>
                LIBRETTO
              </span>
              <span className="text-[10px] tracking-wider uppercase opacity-65 whitespace-nowrap font-medium block">
                Study Edition
              </span>
            </div>

            {/* Opera Dropdown (Fine book-binding style) */}
            <div className="relative flex-1 min-w-0 sm:flex-initial">
              <select
                value={currentOperaId}
                onChange={(e) => onSelectOpera(e.target.value)}
                className="w-full sm:w-auto appearance-none font-serif text-xs sm:text-sm py-1.5 pl-3 pr-8 rounded-lg border cursor-pointer focus:outline-none focus:ring-1 transition-all max-w-full sm:max-w-xs md:max-w-md truncate font-medium shadow-xs"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)',
                }}
              >
                {sortedCatalog.map((op) => {
                  const composerLast = op.composer.split(' ').pop() || op.composer;
                  const title = op.id === 'die-zauberfloete'
                    ? 'Die Zauberflöte (The Magic Flute)'
                    : op.title;
                  const label = `${composerLast}: ${title} [${op.languageLabel}]`;
                  return (
                    <option key={op.id} value={op.id}>
                      {label}
                    </option>
                  );
                })}
              </select>
              <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none opacity-50" />
            </div>
          </div>

          {/* Quick Actions (Synopsis, Mobile Search, & Mobile Fullscreen) */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Search Button for Mobile (< lg) */}
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
              className="flex items-center gap-1.5 text-xs sm:text-sm py-1.5 px-2 sm:px-2.5 rounded-lg border transition-colors hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed shrink-0 min-h-[32px]"
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-secondary)'
              }}
              title="View Synopsis and Characters"
            >
              <BookOpen className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
              <span className="font-medium hidden md:inline">Synopsis & Cast</span>
              <span className="font-medium hidden min-[360px]:inline md:hidden">Cast</span>
            </button>

            {/* Mobile Fullscreen Button: Always visible right in the top navbar row on mobile */}
            <button
              onClick={toggleFullscreen}
              className="sm:hidden p-1.5 rounded-lg border transition-colors hover:opacity-80 shrink-0 min-w-[32px] min-h-[32px] flex items-center justify-center cursor-pointer"
              style={{
                backgroundColor: 'var(--bg-tertiary)',
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

        {/* Center / Right: Search Bar with Opera-Wide Results Dropdown (Desktop lg:) */}
        <div ref={searchContainerRef} className="relative flex-1 max-w-sm hidden lg:block">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 opacity-50" />
          <input
            type="text"
            placeholder={currentOpera ? `Search lines, tokens, characters in ${currentOpera.title}...` : 'Search lines, tokens, characters...'}
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
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs opacity-50 hover:opacity-100"
              title="Clear search"
            >
              ✕
            </button>
          )}

          {/* Opera-Wide Search Results Popover */}
          {isSearchFocused && searchQuery.trim().length >= 2 && (
            <div 
              className="absolute top-full left-0 right-0 mt-2 max-h-96 overflow-y-auto rounded-xl shadow-2xl border z-50 p-2 space-y-1 text-xs backdrop-blur-md"
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
                <span>Matches across {currentOpera?.title || 'Opera'}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/10 dark:bg-white/10 font-bold">
                  {searchResults.length} {searchResults.length === 1 ? 'match' : 'matches'}{searchResults.length >= 25 ? '+' : ''}
                </span>
              </div>

              {searchResults.length === 0 ? (
                <div className="p-4 text-center opacity-60 italic">
                  No matching dialogue or lines found for "{searchQuery}".
                </div>
              ) : (
                <div className="space-y-1 pt-1">
                  {searchResults.map((res) => (
                    <button
                      key={res.lineId}
                      onClick={() => {
                        if (onNavigateToLine) {
                          onNavigateToLine(res.actIndex, res.sceneIndex, res.lineId);
                        }
                        setIsSearchFocused(false);
                      }}
                      className="w-full text-left p-2 rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/5 space-y-0.5 cursor-pointer"
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
              )}
            </div>
          )}
        </div>

        {/* Row 2 on Mobile / Right Controls on Desktop: Reading Palette */}
        <div className="flex items-center justify-between sm:justify-end gap-2 pt-1 sm:pt-0 border-t sm:border-t-0 border-[var(--border-color)]/30 sm:border-transparent">
          
          {/* Reading Controls Palette: Font Size & Theme */}
          <div 
            className="flex items-center rounded-lg border shadow-2xs divide-x transition-colors"
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
                className="px-2 py-1 text-xs font-serif font-semibold hover:opacity-75 disabled:opacity-30 transition-opacity"
                title="Decrease font size"
              >
                A-
              </button>
              <button
                onClick={() => onAdjustFontSize(0.1)}
                disabled={fontSizeMultiplier >= 1.5}
                className="px-2 py-1 text-xs font-serif font-semibold hover:opacity-75 disabled:opacity-30 transition-opacity"
                title="Increase font size"
              >
                A+
              </button>
            </div>

            {/* Theme Switcher: Day, Night, Astro Red */}
            <div className="flex items-center p-0.5 gap-0.5" style={{ borderColor: 'var(--border-color)' }}>
              <button
                onClick={() => onSelectTheme('day')}
                className={`p-1.5 rounded-md transition-all ${theme === 'day' ? 'shadow-xs font-semibold' : 'opacity-60 hover:opacity-100'}`}
                style={theme === 'day' ? { backgroundColor: 'var(--bg-tertiary)', color: 'var(--accent)' } : {}}
                title="Day Mode (Warm Parchment)"
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onSelectTheme('night')}
                className={`p-1.5 rounded-md transition-all ${theme === 'night' ? 'shadow-xs font-semibold' : 'opacity-60 hover:opacity-100'}`}
                style={theme === 'night' ? { backgroundColor: 'var(--bg-tertiary)', color: 'var(--accent)' } : {}}
                title="Night Mode (Dark Obsidian)"
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onSelectTheme('astro-red')}
                className={`p-1.5 rounded-md transition-all ${theme === 'astro-red' ? 'shadow-xs font-semibold' : 'opacity-60 hover:opacity-100'}`}
                style={theme === 'astro-red' ? { backgroundColor: '#2d0606', color: '#ef4444' } : {}}
                title="Astro Red (Theater Night Vision)"
              >
                <Eye className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Secondary Utilities: Voice, About, Fullscreen */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={onOpenVoiceSettings}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-lg border transition-all hover:opacity-85 shadow-2xs"
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-secondary)'
              }}
              title="Pronunciation Voice Settings"
            >
              <Volume2 className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--accent)' }} />
              <span className="hidden md:inline font-serif font-medium max-w-[85px] truncate">
                {activeVoiceName || 'Voice'}
              </span>
            </button>

            <button
              onClick={onOpenAbout}
              className="p-1.5 rounded-lg border transition-all hover:opacity-85 shadow-2xs"
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
              className="hidden sm:block p-1.5 rounded-lg border transition-all hover:opacity-85 shadow-2xs"
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--border-color)',
                color: 'var(--accent)'
              }}
              title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
          </div>

        </div>

      </div>

      {/* Mobile Opera Search Modal (< lg) */}
      {isMobileSearchOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
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
                  placeholder={currentOpera ? `Search in ${currentOpera.title}...` : 'Search lines, tokens, characters...'}
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
            <div className="p-3 space-y-1 overflow-y-auto flex-1 min-h-0 overscroll-contain">
              {searchQuery.trim().length < 2 ? (
                <div className="p-6 text-center text-xs opacity-60">
                  Type at least 2 characters to search across {currentOpera?.title || 'the opera'}...
                </div>
              ) : searchResults.length === 0 ? (
                <div className="p-6 text-center text-xs opacity-60 italic">
                  No matching dialogue or lines found for "{searchQuery}".
                </div>
              ) : (
                <div className="space-y-1">
                  <div className="px-2 py-1 text-[11px] font-semibold opacity-70 flex justify-between">
                    <span>Matches across {currentOpera?.title}</span>
                    <span>{searchResults.length} {searchResults.length === 1 ? 'match' : 'matches'}{searchResults.length >= 25 ? '+' : ''}</span>
                  </div>
                  {searchResults.map((res) => (
                    <button
                      key={res.lineId}
                      onClick={() => {
                        if (onNavigateToLine) {
                          onNavigateToLine(res.actIndex, res.sceneIndex, res.lineId);
                        }
                        setIsMobileSearchOpen(false);
                      }}
                      className="w-full text-left p-2.5 rounded-xl border transition-all hover:bg-black/5 dark:hover:bg-white/5 space-y-1 cursor-pointer"
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
              )}
            </div>

            {/* Footer */}
            <div 
              className="px-4 py-2.5 border-t flex items-center justify-between shrink-0"
              style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-tertiary)' }}
            >
              <span className="text-xs opacity-65">
                {searchResults.length} {searchResults.length === 1 ? 'match' : 'matches'}
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
