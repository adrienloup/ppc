import type { LangType } from "@/src/domain/settings/type/Lang.ts";
import type { ModeType } from "@/src/domain/settings/type/Mode.ts";

export interface SettingsType {
  date: string;
  lang: LangType;
  mode: ModeType;
}

export type SettingsDispatchType =
  | { type: "SET_LANG"; lang: LangType }
  | { type: "SET_MODE"; mode: ModeType };
