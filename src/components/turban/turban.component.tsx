import { classNames } from '@/src/shared/utils/classNames.ts';
import type { Turban } from '@/src/components/turban/turban.type.ts';
import styles from '@/src/components/turban/turban.module.scss';

export const TurbanComponent = ({ children, className }: Turban) => {
  return <div className={classNames([styles.turban, className])}>{children}</div>;
};
