import { classNames } from '@/src/shared/utils/classNames.ts';
import type { Cards } from '@/src/components/common/cards/cards.type.ts';
import styles from '@/src/components/common/cards/cards.module.scss';

export const CardsComponent = ({ className, children }: Cards) => {
  return <div className={classNames([styles.cards, className])}>{children}</div>;
};
