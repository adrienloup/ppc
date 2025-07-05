import type { Title } from '@/src/components/title/title.type.ts';

export const TitleComponent = ({ className, children, tag: Tag = 'h1' }: Title) => {
  return <Tag className={className}>{children}</Tag>;
};
