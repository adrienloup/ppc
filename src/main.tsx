import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { version } from '@/package.json';
import App from '@/src/app/App.tsx';
import '@/src/shared/i18n';

createRoot(document.getElementById('_app_ppc03_1')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

console.info(`[ppc] ${version} %c@jff`, 'padding: 1px 3px; background-color: #3100ff; color: #fff;');
