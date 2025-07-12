import { lazy, Suspense } from 'react';
import { fallback } from '@/src/shared/utils/fallback.ts';
import { LoaderComponent } from '@/src/shared/components/loader/loader.component.tsx';

const LayoutComponent = lazy(() =>
  fallback(import('@/src/shared/components/layout/layout.component.tsx'), 1e3)
);

function ShopPage() {
  return (
    <Suspense fallback={<LoaderComponent />}>
      <LayoutComponent>
        <div>shop</div>
      </LayoutComponent>
    </Suspense>
  );
}

export default ShopPage;
