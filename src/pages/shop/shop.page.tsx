import { lazy, Suspense } from 'react';
import { fallback } from '@/src/shared/utils/fallback.ts';
import { LoaderComponent } from '@/src/components/common/loader/loader.component.tsx';
import { DebugComponent } from '@/src/components/debug/debug.component.tsx';
import { ShopComponent } from '@/src/components/shop/shop.component.tsx';

const LayoutComponent = lazy(() => fallback(import('@/src/components/layout/layout.component.tsx'), 15e2));

function ShopPage() {
  return (
    <Suspense fallback={<LoaderComponent />}>
      <LayoutComponent>
        <DebugComponent />
        <ShopComponent />
      </LayoutComponent>
    </Suspense>
  );
}

export default ShopPage;
