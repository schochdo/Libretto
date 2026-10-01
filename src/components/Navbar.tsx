import React from 'react';
import { Opera, ThemeMode } from '../types/libretto';
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
  BookOpen
} from 'lucide-react';

interface NavbarProps {
  catalog: Opera[];
  currentOpera: Opera;
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

  const searchResults = React.useMemo(() => {
    if (!searchQuery || searchQuery.trim().length < 2) return [];
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
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <header className="sticky top-0 z-30 border-b backdrop-blur-md px-3 sm:px-6 py-2.5 transition-colors"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border-color)',
        color: 'var(--text-primary)'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        
        {/* Left: Branding & Opera Selector */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xl sm:text-2xl" role="img" aria-label="opera mask">🎭</span>
            <div className="hidden md:block shrink-0">
              <span className="font-display font-bold tracking-wider text-base sm:text-lg block leading-none whitespace-nowrap" style={{ color: 'var(--accent)' }}>
                LIBRETTO
              </span>
              <span className="text-[10px] tracking-widest uppercase opacity-70 whitespace-nowrap">
                Opera Companion
              </span>
            </div>
          </div>

          {/* Opera Dropdown */}
          <div className="relative shrink-0">
            <select
              value={currentOpera.id}
              onChange={(e) => onSelectOpera(e.target.value)}
              className="appearance-none font-medium text-xs sm:text-sm py-1.5 pl-2.5 pr-8 rounded-lg border cursor-pointer focus:outline-none focus:ring-1 transition-colors max-w-[210px] sm:max-w-xs truncate"
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-primary)',
              }}
            >
              {catalog.map((op) => {
                const composerLast = op.composer.split(' ').pop() || op.composer;
                const shortTitle = op.id === 'die-zauberfloete' ? 'Die Zauberflöte' : op.title;
                return (
                  <option key={op.id} value={op.id}>
                    {composerLast}: {shortTitle}
                  </option>
                );
              })}
            </select>
            <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none opacity-60" />
          </div>

          {/* Synopsis & Cast Button */}
          <button
            onClick={onOpenToc}
            className="flex items-center gap-1.5 text-xs sm:text-sm py-1.5 px-2.5 rounded-lg border transition-colors hover:opacity-80"
            style={{
              backgroundColor: 'var(--bg-tertiary)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-secondary)'
            }}
            title="View Synopsis and Characters"
          >
            <BookOpen className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
            <span className="font-medium">Synopsis & Cast</span>
          </button>
        </div>

        {/* Center / Right: Search Bar with Opera-Wide Results Dropdown */}
        <div ref={searchContainerRef} className="relative flex-1 max-w-sm hidden lg:block">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 opacity-50" />
          <input
            type="text"
            placeholder={`Search lines, tokens, characters in ${currentOpera.title}...`}
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
                <span>Matches across {currentOpera.title}</span>
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

        {/* Right Controls: Font Size, Theme Toggles, Info */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          
          {/* Font Size Adjusters */}
          <div className="flex items-center rounded-lg border overflow-hidden"
            style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-tertiary)' }}
          >
            <button
              onClick={() => onAdjustFontSize(-0.1)}
              disabled={fontSizeMultiplier <= 0.8}
              className="px-2 py-1 text-xs font-semibold hover:opacity-80 disabled:opacity-30"
              title="Decrease font size"
            >
              A-
            </button>
            <span className="text-[10px] px-1 opacity-50 select-none">|</span>
            <button
              onClick={() => onAdjustFontSize(0.1)}
              disabled={fontSizeMultiplier >= 1.5}
              className="px-2 py-1 text-xs font-semibold hover:opacity-80 disabled:opacity-30"
              title="Increase font size"
            >
              A+
            </button>
          </div>

          {/* Theme Switcher: Day, Night, Astro Red */}
          <div className="flex items-center p-0.5 rounded-lg border"
            style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-tertiary)' }}
          >
            <button
              onClick={() => onSelectTheme('day')}
              className={`p-1.5 rounded-md transition-all ${theme === 'day' ? 'shadow-sm' : 'opacity-60 hover:opacity-100'}`}
              style={theme === 'day' ? { backgroundColor: 'var(--bg-primary)', color: 'var(--accent)' } : {}}
              title="Day Mode (Parchment)"
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onSelectTheme('night')}
              className={`p-1.5 rounded-md transition-all ${theme === 'night' ? 'shadow-sm' : 'opacity-60 hover:opacity-100'}`}
              style={theme === 'night' ? { backgroundColor: 'var(--bg-secondary)', color: 'var(--accent)' } : {}}
              title="Night Mode (Dark OLED)"
            >
              <Moon className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onSelectTheme('astro-red')}
              className={`p-1.5 rounded-md transition-all ${theme === 'astro-red' ? 'shadow-sm' : 'opacity-60 hover:opacity-100'}`}
              style={theme === 'astro-red' ? { backgroundColor: '#2d0606', color: '#ef4444' } : {}}
              title="Astro Red Mode (Scotopic Night Vision Protection)"
            >
              <Eye className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Audio & Voices Settings Button */}
          <button
            onClick={onOpenVoiceSettings}
            className="flex items-center gap-1.5 px-2 py-1 text-xs rounded-lg border transition-colors hover:opacity-80"
            style={{
              backgroundColor: 'var(--bg-tertiary)',
              borderColor: 'var(--border-color)',
              color: 'var(--accent)'
            }}
            title="Audio & Voice Settings"
          >
            <Volume2 className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden md:inline font-medium max-w-[90px] truncate">
              {activeVoiceName || 'Voice'}
            </span>
          </button>

          {/* About / Guide Button */}
          <button
            onClick={onOpenAbout}
            className="p-1.5 rounded-lg border transition-colors hover:opacity-80"
            style={{
              backgroundColor: 'var(--bg-tertiary)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-secondary)'
            }}
            title="About Libretto & Shortcuts"
          >
            <Info className="w-3.5 h-3.5" />
          </button>

          {/* Fullscreen Button (Completely removes browser frame/tabs/URL bar) */}
          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded-lg border transition-colors hover:opacity-80"
            style={{
              backgroundColor: 'var(--bg-tertiary)',
              borderColor: 'var(--border-color)',
              color: 'var(--accent)'
            }}
            title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen (Hide Browser Tabs & Address Bar)"}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>

      </div>
    </header>
  );
};
