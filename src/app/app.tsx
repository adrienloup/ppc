import { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from '@/src/app/app.provider.tsx';
import { LoaderComponent } from '@/src/shared/ui/loader/loader.component.tsx';
import { delay } from '@/src/shared/utils/delay.ts';
import '@/src/app/app.scss';

const AppRoutes = lazy(() => delay(import('@/src/app/app.routes.tsx'), 5e3));

function App() {
  return (
    <Suspense fallback={<LoaderComponent />}>
      <AppProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AppProvider>
    </Suspense>
  );
}

export default App;
