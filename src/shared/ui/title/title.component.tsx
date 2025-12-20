import type { TitleType } from '@/src/shared/ui/title/title.type.ts';

export const TitleComponent = ({ children, className, tag: Tag = 'h1' }: TitleType) => {
  return <Tag className={className}>{children}</Tag>;
};
