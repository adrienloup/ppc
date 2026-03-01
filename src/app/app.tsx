import '@/src/app/App.scss';
import { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from '@/src/app/AppProvider.tsx';
import { Loader } from '@/src/shared/ui/loader/Loader.tsx';
import { delay } from '@/src/shared/utils/delay.ts';

const AppRouter = lazy(() => delay(import('@/src/app/AppRouter.tsx'), 5e3));

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Suspense fallback={<Loader />}>
          <AppRouter />
        </Suspense>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
