import { useAccount } from '@/src/context/account/useAccount';

export function useUser(): string | null {
  const account = useAccount();

  return Object.keys(account).find((user) => account[user].online) ?? null;
}
