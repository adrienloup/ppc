import { classNames } from '../../shared/utils/classNames.ts';
import type { CardType } from './card.type.ts';
import styles from './card.module.scss';

export const CardComponent = ({ className, children }: CardType) => {
  return <div className={classNames([styles.card, className])}>{children}</div>;
};
