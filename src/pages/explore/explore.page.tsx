import { lazy, Suspense } from 'react';
import { fallback } from '@/src/shared/utils/fallback.ts';
import { LoaderComponent } from '@/src/shared/ui/loader/loader.component.tsx';

const LayoutComponent = lazy(() => fallback(import('@/src/shared/ui/layout/layout.component.tsx'), 1e3));

function ExplorePage() {
  return (
    <Suspense fallback={<LoaderComponent />}>
      <LayoutComponent>
        <div>explore</div>
      </LayoutComponent>
    </Suspense>
  );
}

export default ExplorePage;
