import { classNames } from '@/src/common/shared/utils/classNames.ts';
import type { Cards } from '@/src/common/components/cards/Cards.ts';
import styles from '@/src/common/components/cards/CardsComponent.module.scss';

export const CardsComponent = ({ children, className }: Cards) => {
  return <div className={classNames([styles.cards, className])}>{children}</div>;
};
