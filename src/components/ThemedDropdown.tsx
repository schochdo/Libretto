import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export interface DropdownOption {
  value: string;
  label: string;
  count?: number;
  badge?: string;
}

interface ThemedDropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: DropdownOption[];
  icon?: React.ReactNode;
  prefix?: string;
  placeholder?: string;
  className?: string;
  menuWidthClass?: string;
  align?: 'left' | 'right';
}

export const ThemedDropdown: React.FC<ThemedDropdownProps> = ({
  value,
  onChange,
  options,
  icon,
  prefix = '',
  placeholder = 'Select...',
  className = '',
  menuWidthClass = 'w-56',
  align = 'left'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Keyboard navigation: Escape closes
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOpen && e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const selectedOption = options.find(o => o.value === value);
  const displayLabel = selectedOption 
    ? (prefix ? `${prefix}${selectedOption.label}` : selectedOption.label)
    : placeholder;

  return (
    <div ref={containerRef} className={`relative inline-block text-left ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs sm:text-sm font-medium transition-all hover:opacity-90 active:scale-98 cursor-pointer shadow-2xs select-none"
        style={{
          backgroundColor: 'var(--bg-primary)',
          borderColor: isOpen ? 'var(--border-active)' : 'var(--border-color)',
          color: 'var(--text-primary)'
        }}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {icon && <span className="shrink-0 opacity-70">{icon}</span>}
        <span className="truncate max-w-[140px] sm:max-w-[180px]">{displayLabel}</span>
        {selectedOption?.count !== undefined && (
          <span 
            className="text-[10px] px-1.5 py-0.2 rounded-full font-sans opacity-70 shrink-0 border"
            style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-tertiary)' }}
          >
            {selectedOption.count}
          </span>
        )}
        <ChevronDown 
          className={`w-3.5 h-3.5 shrink-0 opacity-50 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Popover Menu */}
      {isOpen && (
        <div 
          className={`absolute ${align === 'right' ? 'right-0' : 'left-0'} top-full mt-1.5 ${menuWidthClass} max-h-64 overflow-y-auto rounded-xl border shadow-2xl z-50 p-1 space-y-0.5 animate-fadeIn backdrop-blur-md`}
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border-color)',
            color: 'var(--text-primary)'
          }}
          role="listbox"
        >
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs sm:text-sm transition-all flex items-center justify-between gap-2 cursor-pointer font-serif ${
                  isSelected ? 'font-semibold shadow-2xs' : 'hover:opacity-90'
                }`}
                style={{
                  backgroundColor: isSelected ? 'var(--bg-active)' : 'transparent',
                  color: isSelected ? 'var(--accent)' : 'var(--text-primary)'
                }}
                role="option"
                aria-selected={isSelected}
              >
                <span className="truncate min-w-0">{opt.label}</span>
                <div className="flex items-center gap-1.5 shrink-0">
                  {opt.count !== undefined && (
                    <span 
                      className="text-[10px] px-1.5 py-0.2 rounded-full font-sans opacity-70 border"
                      style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-tertiary)' }}
                    >
                      {opt.count}
                    </span>
                  )}
                  {isSelected && (
                    <Check className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--accent)' }} />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
