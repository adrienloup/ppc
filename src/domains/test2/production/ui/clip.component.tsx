import { useProd } from '@/src/domains/production/useExp.ts';

export const ClipComponent = () => {
  console.log('ClipComponent');

  const { clip } = useProd();

  return <div>clips {clip}</div>;
};
