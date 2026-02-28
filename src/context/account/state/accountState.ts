import { userState } from '@/src/context/account/state/userState.ts';
import type { AccountType } from '@/src/context/account/type/Account.ts';

export const accountState: AccountType = {
  online: null,
  user: userState,
};
