import { useContext } from 'react';
import { AuthContext, AuthDisContext } from '@/src/domains/auth/infrastructure/auth.context.ts';

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be inside AuthProvider');
  return ctx;
};

export const useAuthDispatch = () => {
  const ctx = useContext(AuthDisContext);
  if (!ctx) throw new Error('useAuthDispatch must be inside AuthProvider');
  return ctx;
};
