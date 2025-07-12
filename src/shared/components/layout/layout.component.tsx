import { HeaderComponent } from '@/src/shared/components/header/header.component.tsx';
import { MainComponent } from '@/src/shared/components/main/main.component.tsx';
import { FooterComponent } from '@/src/shared/components/footer/footer.component.tsx';
import type { Layout } from '@/src/shared/components/layout/layout.type.ts';

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
