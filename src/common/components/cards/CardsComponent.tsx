import type { Cards } from '@/src/common/components/cards/Cards.ts';

export const CardsComponent = ({ children, className }: Cards) => {
  return <div className={className}>{children}</div>;
};
