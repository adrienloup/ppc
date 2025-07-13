import { useReso } from '@/src/domains/test/resources/useReso.ts';

export const WireComponent = () => {
  console.log('WireComponent');
  const { wire } = useReso();

  return <div>wire {wire}</div>;
};
