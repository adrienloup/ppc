import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '@/src/app/AppRoutes.tsx';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
