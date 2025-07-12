import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from '@/src/app/app.provider.tsx';
import { AppRoutes } from '@/src/app/app.routes.tsx';
import '@/src/app/app.scss';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
