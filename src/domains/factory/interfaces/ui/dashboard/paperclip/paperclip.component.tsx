import { useFactory } from '@/src/domains/factory/interfaces/useFactory.ts';
import { BannerComponent } from '@/src/shared/ui/banner/banner.component.tsx';

export const PaperclipComponent = () => {
  const { clip } = useFactory();

  return (
    <BannerComponent
      title={`paperclips ${clip}`}
      button="shop"
    />
  );
};
