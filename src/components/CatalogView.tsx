import React, { useState, useMemo } from 'react';
import { OperaSummary } from '../types/libretto';
import { Search, BookOpen, Music, Globe, ListFilter, ArrowRight } from 'lucide-react';

interface CatalogViewProps {
  catalog: OperaSummary[];
  onSelectOpera: (id: string) => void;
  onOpenAbout: () => void;
}

type SortOption = 'composer' | 'year-asc' | 'year-desc' | 'title';

export const CatalogView: React.FC<CatalogViewProps> = ({
  catalog,
  onSelectOpera,
  onOpenAbout
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [selectedComposer, setSelectedComposer] = useState<string>('all');
  const [sortBy, setSortBy] = useState<SortOption>('composer');

  // Unique composers sorted by surname
  const composers = useMemo(() => {
    const set = new Set<string>();
    catalog.forEach(o => set.add(o.composer));
    return Array.from(set).sort((a, b) => {
      const surnameA = a.split(' ').pop() || a;
      const surnameB = b.split(' ').pop() || b;
      return surnameA.localeCompare(surnameB);
    });
  }, [catalog]);

  // Unique languages
  const languages = useMemo(() => {
    const map = new Map<string, string>();
    catalog.forEach(o => map.set(o.language, o.languageLabel));
    return Array.from(map.entries()).map(([code, label]) => ({ code, label }));
  }, [catalog]);

  // Filter and sort catalog
  const filteredCatalog = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return catalog
      .filter(opera => {
        // Language filter
        if (selectedLanguage !== 'all' && opera.language !== selectedLanguage) {
          return false;
        }

        // Composer filter
        if (selectedComposer !== 'all' && opera.composer !== selectedComposer) {
          return false;
        }

        // Search query filter (matches title, original title, composer, librettists, synopsis, or celebrated pieces)
        if (q) {
          const matchTitle = opera.title.toLowerCase().includes(q);
          const matchOrig = opera.originalTitle?.toLowerCase().includes(q) || false;
          const matchComp = opera.composer.toLowerCase().includes(q);
          const matchLib = opera.librettists.some(l => l.toLowerCase().includes(q));
          const matchSyn = opera.synopsisSnippet?.toLowerCase().includes(q) || false;
          const matchPieces = opera.celebratedPieces?.some(p => p.toLowerCase().includes(q)) || false;

          if (!matchTitle && !matchOrig && !matchComp && !matchLib && !matchSyn && !matchPieces) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'year-asc') {
          return a.year - b.year;
        }
        if (sortBy === 'year-desc') {
          return b.year - a.year;
        }
        if (sortBy === 'title') {
          return a.title.localeCompare(b.title);
        }
        // Default: Composer surname then title
        const compA = a.composer.split(' ').pop() || a.composer;
        const compB = b.composer.split(' ').pop() || b.composer;
        const cmp = compA.localeCompare(compB);
        if (cmp !== 0) return cmp;
        return a.title.localeCompare(b.title);
      });
  }, [catalog, searchQuery, selectedLanguage, selectedComposer, sortBy]);

  return (
    <div 
      className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 transition-colors"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)'
      }}
    >
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
        
        {/* Editorial Masthead */}
        <div className="border-b pb-8 sm:pb-10" style={{ borderColor: 'var(--border-color)' }}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span 
                className="text-xs uppercase tracking-widest font-semibold block"
                style={{ color: 'var(--accent)' }}
              >
                The Classical Operatic Canon
              </span>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Libretto Library
              </h1>
              <p className="text-sm sm:text-base opacity-75 font-serif leading-relaxed">
                Word-by-word interlinear translations, morphological annotations, and literal syntax-faithful study editions for performers, scholars, and opera lovers.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenAbout}
                className="px-4 py-2 rounded-lg border text-xs sm:text-sm font-medium transition-all hover:opacity-85 active:scale-98 cursor-pointer flex items-center gap-2 shadow-xs"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)'
                }}
              >
                <BookOpen className="w-4 h-4 opacity-70" />
                <span>Editorial Principles</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div 
          className="p-4 sm:p-5 rounded-2xl border shadow-xs space-y-4 transition-colors"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border-color)'
          }}
        >
          {/* Main Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 opacity-45 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by opera title, composer, celebrated aria (e.g., 'Nessun dorma', 'Casta diva'), or theme..."
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border text-sm font-serif focus:outline-none focus:ring-1 transition-all"
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-primary)'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs opacity-50 hover:opacity-90 px-1.5 py-0.5 rounded cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filtering and Sorting Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t" style={{ borderColor: 'var(--border-color)' }}>
            
            {/* Filter Pills / Selects */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
              
              {/* Language Filter */}
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 opacity-55" />
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="px-2.5 py-1.5 rounded-lg border bg-transparent font-medium cursor-pointer focus:outline-none"
                  style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                >
                  <option value="all">All Languages ({catalog.length})</option>
                  {languages.map(l => (
                    <option key={l.code} value={l.code}>
                      {l.label} ({catalog.filter(o => o.language === l.code).length})
                    </option>
                  ))}
                </select>
              </div>

              {/* Composer Filter */}
              <div className="flex items-center gap-1.5">
                <Music className="w-3.5 h-3.5 opacity-55" />
                <select
                  value={selectedComposer}
                  onChange={(e) => setSelectedComposer(e.target.value)}
                  className="px-2.5 py-1.5 rounded-lg border bg-transparent font-medium cursor-pointer focus:outline-none"
                  style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                >
                  <option value="all">All Composers ({composers.length})</option>
                  {composers.map(c => (
                    <option key={c} value={c}>
                      {c} ({catalog.filter(o => o.composer === c).length})
                    </option>
                  ))}
                </select>
              </div>

              {/* Reset Filters button if any active */}
              {(selectedLanguage !== 'all' || selectedComposer !== 'all' || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedLanguage('all');
                    setSelectedComposer('all');
                    setSearchQuery('');
                  }}
                  className="px-2.5 py-1.5 rounded-lg border text-xs font-medium opacity-70 hover:opacity-100 transition-all cursor-pointer"
                  style={{ borderColor: 'var(--border-color)' }}
                >
                  Reset filters
                </button>
              )}
            </div>

            {/* Sort Dropdown & Count */}
            <div className="flex items-center gap-3 text-xs">
              <span className="opacity-60 font-serif">
                {filteredCatalog.length} of {catalog.length} operas
              </span>

              <div className="flex items-center gap-1.5">
                <ListFilter className="w-3.5 h-3.5 opacity-55" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="px-2.5 py-1.5 rounded-lg border bg-transparent font-medium cursor-pointer focus:outline-none"
                  style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                >
                  <option value="composer">Sort: Composer Surname</option>
                  <option value="year-asc">Sort: Chronological (Earliest)</option>
                  <option value="year-desc">Sort: Chronological (Latest)</option>
                  <option value="title">Sort: Title (A–Z)</option>
                </select>
              </div>
            </div>

          </div>
        </div>

        {/* Opera Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredCatalog.map(opera => (
            <div
              key={opera.id}
              onClick={() => onSelectOpera(opera.id)}
              className="group rounded-2xl border p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
              }}
            >
              <div className="space-y-4">
                
                {/* Card Top: Composer & Year */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span 
                      className="font-serif font-bold text-xs uppercase tracking-wider block"
                      style={{ color: 'var(--accent)' }}
                    >
                      {opera.composer}
                    </span>
                    <h2 className="font-display font-bold text-xl sm:text-2xl mt-1 leading-snug group-hover:underline decoration-1 underline-offset-4">
                      {opera.title}
                    </h2>
                  </div>
                  
                  <span 
                    className="px-2 py-0.5 rounded-md text-[11px] font-mono shrink-0 border opacity-75"
                    style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-tertiary)' }}
                  >
                    {opera.year}
                  </span>
                </div>

                {/* Original Subtitle */}
                {opera.originalTitle && opera.originalTitle !== opera.title && (
                  <p className="text-xs italic opacity-70 font-serif line-clamp-1">
                    {opera.originalTitle}
                  </p>
                )}

                {/* Badges: Language, Acts, Scenes */}
                <div className="flex flex-wrap items-center gap-2 text-xs opacity-80 pt-1">
                  <span 
                    className="px-2 py-0.5 rounded border text-[11px] font-medium"
                    style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-primary)' }}
                  >
                    {opera.languageLabel}
                  </span>
                  {opera.actsCount && (
                    <span className="text-[11px] opacity-75">
                      {opera.actsCount} {opera.actsCount === 1 ? 'Act' : 'Acts'}
                    </span>
                  )}
                  {opera.scenesCount && (
                    <>
                      <span className="opacity-35">•</span>
                      <span className="text-[11px] opacity-75">
                        {opera.scenesCount} Scenes
                      </span>
                    </>
                  )}
                </div>

                {/* Synopsis Teaser */}
                {opera.synopsisSnippet && (
                  <p className="text-xs sm:text-sm font-serif opacity-75 leading-relaxed line-clamp-3 pt-1">
                    {opera.synopsisSnippet}
                  </p>
                )}

                {/* Celebrated Pieces Highlights */}
                {opera.celebratedPieces && opera.celebratedPieces.length > 0 && (
                  <div className="pt-2 space-y-1.5 border-t" style={{ borderColor: 'var(--border-color)' }}>
                    <span className="text-[10px] uppercase font-bold tracking-wider opacity-60 block">
                      Celebrated Pieces
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {opera.celebratedPieces.slice(0, 3).map((piece, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-2 py-0.5 rounded text-[11px] font-serif border truncate max-w-full"
                          style={{
                            borderColor: 'var(--border-color)',
                            backgroundColor: 'var(--bg-primary)'
                          }}
                        >
                          {piece}
                        </span>
                      ))}
                      {opera.celebratedPieces.length > 3 && (
                        <span className="text-[10px] opacity-60 self-center pl-1">
                          +{opera.celebratedPieces.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer Action */}
              <div className="pt-5 mt-5 border-t flex items-center justify-between text-xs font-medium" style={{ borderColor: 'var(--border-color)' }}>
                <span className="opacity-60 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-serif">
                  Open study edition
                </span>
                <span 
                  className="flex items-center gap-1 font-semibold group-hover:translate-x-1 transition-transform"
                  style={{ color: 'var(--accent)' }}
                >
                  <span>Read Libretto</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search Results State */}
        {filteredCatalog.length === 0 && (
          <div 
            className="py-16 text-center rounded-2xl border space-y-3"
            style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
          >
            <p className="font-display font-semibold text-lg">No operas match your filter criteria.</p>
            <p className="text-xs opacity-70 font-serif">Try clearing your search query or selecting "All Composers" / "All Languages".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedLanguage('all');
                setSelectedComposer('all');
              }}
              className="mt-2 px-4 py-2 rounded-lg border text-xs font-semibold cursor-pointer"
              style={{ borderColor: 'var(--border-color)' }}
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
