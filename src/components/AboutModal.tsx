import React from 'react';
import { X, ShieldCheck, Eye, Keyboard, Volume2 } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-lg rounded-2xl border shadow-2xl flex flex-col overflow-hidden"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderColor: 'var(--border-color)',
          color: 'var(--text-primary)'
        }}
      >
        <div 
          className="px-6 py-4 border-b flex items-center justify-between"
          style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-tertiary)' }}
        >
          <div className="flex items-center gap-2">
            <span className="text-xl">🎭</span>
            <h3 className="font-display font-bold text-base sm:text-lg" style={{ color: 'var(--accent)' }}>
              About Libretto
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border hover:opacity-75"
            style={{ borderColor: 'var(--border-color)' }}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-5 text-sm overflow-y-auto max-h-[75vh]">
          
          <div>
            <h4 className="font-bold text-base mb-1.5" style={{ color: 'var(--accent)' }}>
              Language Learning Through Opera
            </h4>
            <p className="leading-relaxed opacity-95">
              Libretto is designed as a companion app for watching opera performances. Unlike standard theatrical supertitles—which are paraphrased for singing meter and basic plot gist—Libretto provides <strong>exact, syntax-faithful literal translations</strong> and grammatical breakdowns to help you truly learn Italian, German, French, and Russian.
            </p>
          </div>

          {/* Astronomy Red Vision Mode Callout */}
          <div className="p-4 rounded-xl border" style={{ backgroundColor: '#1a0303', borderColor: '#450a0a', color: '#fca5a5' }}>
            <h5 className="font-bold text-xs uppercase tracking-wide flex items-center gap-1.5 mb-1.5 text-red-400">
              <Eye className="w-4 h-4 text-red-500" /> Astronomy / Red Theater Mode
            </h5>
            <p className="text-sm leading-relaxed opacity-95">
              Watching an opera in a dark room? Tap the eye icon in the top right to switch into <strong>Pure Red Vision Mode</strong>. Using a 100% OLED black background and red wavelength text, it preserves the <em>rhodopsin</em> in your eyes, protecting your scotopic night vision and preventing screen glare in the room.
            </p>
          </div>

          {/* Audio Pronunciation Guide */}
          <div>
            <h5 className="font-bold text-xs uppercase tracking-wide flex items-center gap-1.5 mb-1.5" style={{ color: 'var(--accent)' }}>
              <Volume2 className="w-4 h-4" /> High-Quality Native Pronunciation
            </h5>
            <p className="text-sm leading-relaxed opacity-90 mb-1.5">
              Libretto automatically selects native speaker voices for Italian (<em>Alice</em>), German (<em>Anna</em>), French (<em>Thomas</em>), and Russian (<em>Milena</em>), filtering out novelty and mismatched voices.
            </p>
            <p className="text-xs opacity-75 italic">
              💡 <strong>Pro-Tip for macOS & iPad:</strong> In <em>System Settings → Accessibility → Spoken Content → System Voice</em>, you can download Apple's free "Enhanced" or "Premium" voice packs for stunningly natural, human pronunciation.
            </p>
          </div>

          {/* Keyboard & Remote Navigation */}
          <div>
            <h5 className="font-bold text-xs uppercase tracking-wide flex items-center gap-1.5 mb-2" style={{ color: 'var(--accent)' }}>
              <Keyboard className="w-4 h-4" /> Tap-Along & Remote Navigation
            </h5>
            <ul className="space-y-2 opacity-90 text-sm">
              <li>• <strong>Tap any line:</strong> Highlights the verse in both columns and opens the word-by-word breakdown.</li>
              <li>• <strong>Spacebar or Down Arrow:</strong> Advances to the next verse (ideal with a bluetooth keyboard or remote).</li>
              <li>• <strong>Up Arrow:</strong> Returns to previous verse.</li>
              <li>• <strong>Escape:</strong> Closes drawers and modals.</li>
            </ul>
          </div>

          {/* Public Domain & IP Statement */}
          <div className="p-4 rounded-xl border space-y-2.5 text-xs sm:text-sm"
            style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}
          >
            <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wide text-emerald-500">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Public Domain Provenance & Intellectual Property Safety</span>
            </div>
            <p className="leading-relaxed opacity-95">
              <strong>Worldwide Public Domain Sourcing:</strong> All libretto texts, spoken dialogue, and stage directions are sourced exclusively from authentic 18th- and 19th-century historical editions (e.g. Emanuel Schikaneder 1791, Sonnleithner/Treitschke 1814, Richard Wagner 1845, Arrigo Boito 1893) digitized by LibrettoArchive, IMSLP, and public research archives. Because all original authors and composers passed away more than 100 to 200 years ago, their original texts and stage directions are in the public domain worldwide.
            </p>
            <p className="leading-relaxed opacity-95">
              <strong>Original Proprietary Translations:</strong> Standard theater supertitles and commercial translations are protected by 20th- and 21st-century copyrights. To ensure 100% legal freedom and pedagogical precision, <em>every single English translation, word-by-word grammatical token, syntactic gloss, and cultural note in Libretto is newly generated and proprietary to this project</em>. No copyrighted translations or commercial supertitles are used.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
