import { Component, ErrorInfo, ReactNode } from 'react';
import { RefreshCw, BookOpen } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Libretto Uncaught Runtime Error:', error, errorInfo);
  }

  private handleReload = () => {
    try {
      sessionStorage.clear();
    } catch (_) {}
    window.location.reload();
  };

  private handleResetToCatalog = () => {
    try {
      localStorage.removeItem('libretto_opera');
      sessionStorage.clear();
      window.location.href = window.location.origin;
    } catch (_) {
      window.location.reload();
    }
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div 
          className="min-h-screen min-h-[100dvh] flex items-center justify-center p-4 transition-colors select-none"
          style={{
            backgroundColor: 'var(--bg-primary, #0a0b0d)',
            color: 'var(--text-primary, #f1f5f9)'
          }}
        >
          <div 
            className="max-w-md w-full p-6 sm:p-8 rounded-2xl border shadow-2xl text-center space-y-5 animate-fadeIn"
            style={{
              backgroundColor: 'var(--bg-secondary, #14161a)',
              borderColor: 'var(--border-color, #262930)'
            }}
          >
            {/* Libretto Emblem */}
            <div 
              className="w-12 h-12 rounded-xl mx-auto flex items-center justify-center border shadow-xs"
              style={{
                backgroundColor: 'var(--bg-primary, #0a0b0d)',
                borderColor: 'var(--border-color, #262930)',
                color: 'var(--accent, #f59e0b)'
              }}
            >
              <span className="font-display font-bold text-xl">L</span>
            </div>

            <div className="space-y-2">
              <h2 className="font-display font-bold text-lg sm:text-xl tracking-tight">
                Unable to Load Edition
              </h2>
              <p className="text-xs sm:text-sm opacity-75 font-serif leading-relaxed">
                A connection or asset cache sync error occurred while opening the libretto study companion.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2">
              <button
                type="button"
                onClick={this.handleReload}
                className="w-full sm:w-auto px-4 py-2 rounded-lg text-xs font-semibold border flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:opacity-85 active:scale-98 transition-all"
                style={{
                  backgroundColor: 'var(--bg-primary, #0a0b0d)',
                  borderColor: 'var(--border-active, #d97706)',
                  color: 'var(--accent, #f59e0b)'
                }}
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reload Edition</span>
              </button>

              <button
                type="button"
                onClick={this.handleResetToCatalog}
                className="w-full sm:w-auto px-4 py-2 rounded-lg text-xs font-medium border flex items-center justify-center gap-2 cursor-pointer hover:opacity-80 active:scale-98 transition-all"
                style={{
                  backgroundColor: 'var(--bg-tertiary, #1e2127)',
                  borderColor: 'var(--border-color, #262930)',
                  color: 'var(--text-secondary, #cbd5e1)'
                }}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Return to Catalog</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
