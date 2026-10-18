import React from 'react';
import { Opera } from '../types/libretto';
import { X, Users, BookOpen, ShieldCheck, ExternalLink } from 'lucide-react';

interface TableOfContentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  opera: Opera;
}

export const TableOfContentsModal: React.FC<TableOfContentsModalProps> = ({
  isOpen,
  onClose,
  opera
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl max-h-[min(90dvh,calc(100dvh-2rem))] rounded-2xl border shadow-2xl flex flex-col overflow-hidden my-auto"
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
          <div className="min-w-0 flex-1">
            <h3 className="font-display font-bold text-base sm:text-lg truncate" style={{ color: 'var(--accent)' }}>
              {opera.title}
            </h3>
            {opera.originalTitle && opera.originalTitle !== opera.title && (
              <p className="text-xs italic opacity-85 mt-0.5 truncate" style={{ color: 'var(--accent)' }}>
                Full original title: {opera.originalTitle}
              </p>
            )}
            <p className="text-xs opacity-75 mt-0.5">
              {opera.composer} · {opera.year} · {opera.languageLabel}
            </p>
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

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6 flex-1 min-h-0 overscroll-contain">
          
          {/* Synopsis */}
          <div className="p-4 rounded-xl border" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1.5" style={{ color: 'var(--accent)' }}>
              <BookOpen className="w-3.5 h-3.5" /> Synopsis
            </h4>
            <p className="text-sm sm:text-base leading-relaxed opacity-95 font-sans">
              {opera.synopsis}
            </p>
          </div>

          {/* Dramatis Personae (Characters) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-2.5 flex items-center gap-1.5" style={{ color: 'var(--accent)' }}>
              <Users className="w-3.5 h-3.5" /> Dramatis Personae (Characters)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {opera.characters.map((char, idx) => (
                <div 
                  key={idx} 
                  className="p-3 rounded-lg border text-sm"
                  style={{ backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <strong className="font-bold text-sm sm:text-base">{char.name}</strong>
                    <span className="text-xs uppercase font-semibold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: 'var(--speaker-badge)', color: 'var(--speaker-text)' }}
                    >
                      {char.voiceType}
                    </span>
                  </div>
                  <p className="opacity-85 text-xs sm:text-sm">{char.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Historical Source & Public Domain Provenance */}
          {(opera.sourceCitation || opera.publicDomainNotice) && (
            <div className="p-4 rounded-xl border space-y-2" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}>
              <h4 className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5" style={{ color: 'var(--accent)' }}>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Historical Edition & Public Domain Provenance
              </h4>
              {opera.sourceCitation && (
                <p className="text-xs sm:text-sm leading-relaxed opacity-95">
                  <strong>Source Text:</strong> {opera.sourceCitation}{' '}
                  {opera.sourceUrl && (
                    <a
                      href={opera.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline inline-flex items-center gap-0.5 font-medium hover:opacity-80 ml-1"
                      style={{ color: 'var(--accent)' }}
                    >
                      {opera.sourceName || (opera.sourceUrl.includes('librettoarchive.com') ? 'LibrettoArchive' : 'Historical Edition')}
                      <ExternalLink className="w-3 h-3 inline ml-0.5" />
                    </a>
                  )}
                </p>
              )}
              {opera.publicDomainNotice && (
                <p className="text-xs leading-relaxed opacity-80 pt-2 border-t" style={{ borderColor: 'var(--border-color)' }}>
                  {opera.publicDomainNotice}
                </p>
              )}
            </div>
          )}

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
