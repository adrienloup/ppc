import { classNames } from '@/src/shared/utils/classNames.ts';
import type { CardsType } from '@/src/shared/ui/cards/cards.type.ts';
import styles from '@/src/shared/ui/cards/cards.module.scss';

export const CardsComponent = ({ className, children }: CardsType) => {
  return <div className={classNames(styles.cards, className)}>{children}</div>;
};
