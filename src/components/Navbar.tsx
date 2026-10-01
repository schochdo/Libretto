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
  onOpenToc,
  onOpenAbout,
  onOpenVoiceSettings,
  activeVoiceName
}) => {
  const [isFullscreen, setIsFullscreen] = React.useState(false);

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
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl" role="img" aria-label="opera mask">🎭</span>
            <div className="hidden md:block">
              <span className="font-display font-bold tracking-wider text-base sm:text-lg block leading-none" style={{ color: 'var(--accent)' }}>
                LIBRETTO
              </span>
              <span className="text-[10px] tracking-widest uppercase opacity-70">
                Opera Companion
              </span>
            </div>
          </div>

          {/* Opera Dropdown */}
          <div className="relative">
            <select
              value={currentOpera.id}
              onChange={(e) => onSelectOpera(e.target.value)}
              className="appearance-none font-medium text-xs sm:text-sm py-1.5 pl-2.5 pr-8 rounded-lg border cursor-pointer focus:outline-none focus:ring-1 transition-colors"
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-primary)',
              }}
            >
              {catalog.map((op) => (
                <option key={op.id} value={op.id}>
                  {op.title} ({op.languageLabel})
                </option>
              ))}
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

        {/* Center / Right: Search Bar */}
        <div className="relative flex-1 max-w-xs hidden lg:block">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 opacity-50" />
          <input
            type="text"
            placeholder="Search aria, line, character..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full text-xs py-1.5 pl-8 pr-3 rounded-lg border focus:outline-none transition-colors"
            style={{
              backgroundColor: 'var(--bg-primary)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)'
            }}
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs opacity-50 hover:opacity-100"
            >
              ✕
            </button>
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
