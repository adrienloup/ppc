import type { SizeType } from "@/src/shared/type/Size.ts";

export interface ProgressType {
  className?: string;
  duration?: number;
  label: string;
  size?: SizeType;
}
