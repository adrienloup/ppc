import type { UserType } from '@/src/context/account/type/User.ts';
import { dataState } from '@/src/context/data/dataState.ts';
import { settingsState } from '@/src/context/settings/settingsState.ts';

export const userState: UserType = {
  guest: {
    data: dataState,
    password: 'hJg8YPfarcHLhphiH4AsDZ+aPDwpXIEHSPsEgRXBhuw=',
    settings: settingsState,
  },
};
