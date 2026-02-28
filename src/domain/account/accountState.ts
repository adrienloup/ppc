import type { AccountType } from '@/src/domain/account/type/Account.ts';
import { settingsState } from '@/src/domain/settings/settingsState.ts';

export const accountState: AccountType = {
  guest: {
    data: '',
    online: false,
    password: 'guest',
    settings: settingsState,
  },
};
