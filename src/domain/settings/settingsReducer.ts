import type {
  SettingsDispatchType,
  SettingsType,
} from "@/src/domain/settings/type/Settings.ts";

export const settingsReducer = (
  state: SettingsType,
  action: SettingsDispatchType,
): SettingsType => {
  switch (action.type) {
    case "SET_LANG":
      return { ...state, lang: action.lang };
    case "SET_MODE":
      return { ...state, mode: action.mode };
    default:
      return state;
  }
};
