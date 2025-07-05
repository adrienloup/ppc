import type { TitleType } from '@/src/components/title/title.type.ts';

export const TitleComponent = ({ className, children, tag: Tag = 'h1' }: TitleType) => {
  return <Tag className={className}>{children}</Tag>;
};
