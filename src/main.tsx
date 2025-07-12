import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { version } from '@/package.json';
import App from '@/src/app/app.tsx';

createRoot(document.getElementById('_app_emma0_1')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

console.log(`%c[ppc] ${version} @jff`, 'color: #e3e3e8;');
