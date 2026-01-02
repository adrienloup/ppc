import { useContext } from 'react';
import { AuthContext, AuthDispatchContext } from '@/src/domains/auth/interface/auth.context.tsx';

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be inside AuthProvider');
  return ctx;
};

export const useAuthDispatch = () => {
  const ctx = useContext(AuthDispatchContext);
  if (!ctx) throw new Error('useAuthDispatch must be inside AuthProvider');
  return ctx;
};
