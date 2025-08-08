import type { Card } from '@/src/shared/ui/card/card.type.ts';
import { classNames } from '@/src/shared/utils/classNames.ts';
import styles from '@/src/shared/ui/card/card.module.scss';

export const CardComponent = ({ className, children }: Card) => {
  return <div className={classNames(styles.card, className)}>{children}</div>;
};
