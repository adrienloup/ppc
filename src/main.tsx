import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { version } from '@/package.json';
import '@/src/main.scss';
import '@/src/common/i18n';
import App from '@/src/app/App.tsx';

createRoot(document.getElementById('_ppc_3mma_0')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

console.log(`%c[ppc] ${version} @jff`, 'font-weight: bold; color: #6300ff;');
