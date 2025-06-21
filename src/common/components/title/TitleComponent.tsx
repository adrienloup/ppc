import type { Title } from '@/src/common/components/title/Title.ts';

export const TitleComponent = ({ className, children, tag: Tag = 'h1' }: Title) => {
  return <Tag className={className}>{children}</Tag>;
};
