import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary';
import './index.css';

// Automatically handle and recover from stale dynamic import chunks on iOS / WebKit
window.addEventListener('vite:preloadError', (event) => {
  event.preventDefault();
  const retryKey = 'libretto_chunk_retry';
  if (!sessionStorage.getItem(retryKey)) {
    sessionStorage.setItem(retryKey, '1');
    window.location.reload();
  }
});

// Clear retry marker on clean load
window.addEventListener('load', () => {
  sessionStorage.removeItem('libretto_chunk_retry');
});

// Reset retry flag if page was restored from iOS bfcache (back-forward cache)
window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    sessionStorage.removeItem('libretto_chunk_retry');
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
