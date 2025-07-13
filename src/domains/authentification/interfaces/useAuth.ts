import { useContext } from 'react';
import { AuthContext, AuthDisContext } from '@/src/domains/authentification/infrastructure/auth.context.ts';

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be inside AuthProvider');
  return ctx;
};

export const useAuthDis = () => {
  const ctx = useContext(AuthDisContext);
  if (!ctx) throw new Error('useAuthDis must be inside AuthProvider');
  return ctx;
};
