import { useProd } from '@/src/domains/test/production/useProd.ts';

export const ClipComponent = () => {
  console.log('ClipComponent');

  const { clip } = useProd();

  return <div>clips {clip}</div>;
};
