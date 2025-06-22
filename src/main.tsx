import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { version } from '@/package.json';
import { Providers } from '@/src/providers.tsx';
import '@/src/main.scss';
import '@/src/common/i18n';
import App from '@/src/common/app/App.tsx';

createRoot(document.getElementById('_ppc_3mma_0')!).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>
);

console.log(`%c[ppc] ${version} @jff`, 'font-weight: bold; color: #e3e3e8;');
