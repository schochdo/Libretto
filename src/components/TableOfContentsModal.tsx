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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-2xl max-h-[85vh] rounded-2xl border shadow-2xl flex flex-col overflow-hidden"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderColor: 'var(--border-color)',
          color: 'var(--text-primary)'
        }}
      >
        {/* Header */}
        <div 
          className="px-6 py-4 border-b flex items-center justify-between"
          style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-tertiary)' }}
        >
          <div>
            <h3 className="font-display font-bold text-lg" style={{ color: 'var(--accent)' }}>
              {opera.title}
            </h3>
            {opera.originalTitle && opera.originalTitle !== opera.title && (
              <p className="text-xs italic opacity-85 mt-0.5" style={{ color: 'var(--accent)' }}>
                Full original title: {opera.originalTitle}
              </p>
            )}
            <p className="text-xs opacity-75 mt-0.5">
              {opera.composer} · {opera.year} · {opera.languageLabel}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border hover:opacity-75"
            style={{ borderColor: 'var(--border-color)' }}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          
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
      </div>
    </div>
  );
};
