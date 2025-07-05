import { classNames } from '@/src/shared/utils/classNames.ts';
import type { TurbanType } from '@/src/components/turban/turban.type.ts';
import styles from '@/src/components/turban/turban.module.scss';

export const TurbanComponent = ({ children, className }: TurbanType) => {
  return <div className={classNames([styles.turban, className])}>{children}</div>;
};
