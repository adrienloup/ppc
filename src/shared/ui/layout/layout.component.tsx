import { useEffect } from 'react';
import { FooterComponent } from '@/src/shared/ui/footer/footer.component.tsx';
import { HeaderComponent } from '@/src/shared/ui/header/header.component.tsx';
import { MainComponent } from '@/src/shared/ui/main/main.component.tsx';
import type { Layout } from '@/src/shared/ui/layout/layout.type.ts';

function LayoutComponent({ children }: Layout) {
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
}

export default LayoutComponent;
