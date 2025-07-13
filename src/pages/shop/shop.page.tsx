import { lazy, Suspense } from 'react';
import { fallback } from '@/src/shared/utils/fallback.ts';
import { LoaderComponent } from '@/src/shared/ui/loader/loader.component.tsx';
// import { DebugComponent } from '@/src/domains/debug/interfaces/debug.component.tsx';
import { ShopComponent } from '@/src/domains/factory/interfaces/ui/shop/shop.component.tsx';

const LayoutComponent = lazy(() => fallback(import('@/src/shared/ui/layout/layout.component.tsx'), 1e3));

function ShopPage() {
  return (
    <Suspense fallback={<LoaderComponent />}>
      <LayoutComponent>
        {/*<DebugComponent />*/}
        <ShopComponent />
      </LayoutComponent>
    </Suspense>
  );
}

export default ShopPage;
