import { classNames } from '../../shared/utils/classNames.ts';
import type { Card } from './card.type.ts';
import styles from './card.module.scss';

export const CardComponent = ({ className, children }: Card) => {
  return <div className={classNames([styles.card, className])}>{children}</div>;
};
