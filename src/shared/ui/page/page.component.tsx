import { useEffect } from 'react';
import { FooterComponent } from '@/src/shared/ui/footer/footer.component.tsx';
import { HeaderComponent } from '@/src/shared/ui/header/header.component.tsx';
import { MainComponent } from '@/src/shared/ui/main/main.component.tsx';
import type { PageType } from '@/src/shared/ui/page/page.type.ts';

export const PageComponent = ({ children }: PageType) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <HeaderComponent />
      <MainComponent>{children}</MainComponent>
      <FooterComponent />
    </>
  );
};
