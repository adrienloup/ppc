import type { AccountType } from '@/src/context/account/Account.ts';
import { settingsState } from '@/src/context/settings/settingsState.ts';

export const accountState: AccountType = {
  guest: {
    data: '',
    online: false,
    password: 'hJg8YPfarcHLhphiH4AsDZ+aPDwpXIEHSPsEgRXBhuw=',
    settings: settingsState,
  },
};
