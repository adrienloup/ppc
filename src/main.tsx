import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { version } from '@/package.json';
import App from '@/src/app/app.tsx';

createRoot(document.getElementById('_ppc_emma0_1')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

console.info(`[ppc] ${version} %c@jff`, 'padding: 1px 3px; background-color: #4600ff; color: #fff;');
