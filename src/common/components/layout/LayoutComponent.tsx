import { HeaderComponent } from '@/src/common/components/header/HeaderComponent.tsx';
import { FooterComponent } from '@/src/common/components/footer/FooterComponent.tsx';
import type { Layout } from '@/src/common/components/layout/Layout.ts';

function LayoutComponent({ children }: Layout) {
  return (
    <>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </>
  );
}

export default LayoutComponent;
