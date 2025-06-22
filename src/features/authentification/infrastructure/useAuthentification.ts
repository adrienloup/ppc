import { useContext } from 'react';
import { AuthentificationContext } from '@/src/features/authentification/infrastructure/AuthentificationContext.ts';

export const useAuthentification = () => {
  const context = useContext(AuthentificationContext);
  if (!context) {
    throw new Error('useAuthentification must be used within a AuthentificationProvider');
  }
  return context;
};
