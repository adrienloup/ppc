import { HeaderComponent } from '@/src/components/layout/header/header.component.tsx';
import { MainComponent } from '@/src/components/layout/main/main.component.tsx';
import { FooterComponent } from '@/src/components/layout/footer/footer.component.tsx';
import type { Layout } from '@/src/components/layout/layout.type.ts';

function LayoutComponent({ children }: Layout) {
  return (
    <>
      <HeaderComponent />
      <MainComponent>{children}</MainComponent>
      <FooterComponent />
    </>
  );
}

export default LayoutComponent;
