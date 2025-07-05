import { useContext } from 'react';
import { AuthContext } from '@/src/features/authentification/auth.context.ts';

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be inside AuthProvider');
  return ctx;
};
