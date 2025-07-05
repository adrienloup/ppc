import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { version } from '@/package.json';
import { Provider } from '@/src/provider.tsx';
import App from '@/src/app/app.tsx';

createRoot(document.getElementById('_app_3emma_1')!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);

console.log(`%c[ppc] ${version} @jff`, 'color: #e3e3e8;');
