import { classNames } from '@/src/shared/utils/classNames.ts';
import type { CardType } from '@/src/shared/ui/card/card.type.ts';
import styles from '@/src/shared/ui/card/card.module.scss';

export const CardComponent = ({ className, children }: CardType) => {
  return <div className={classNames(styles.card, className)}>{children}</div>;
};
