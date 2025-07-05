import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '@/src/app/app.routes.tsx';
import '@/src/app/app.scss';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
