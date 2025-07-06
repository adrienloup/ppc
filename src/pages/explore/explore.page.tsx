import { lazy, Suspense } from 'react';
import { fallback } from '@/src/shared/utils/fallback.ts';
import { LoaderComponent } from '@/src/components/common/loader/loader.component.tsx';
import { ExploreComponent } from '@/src/components/explore/explore.component.tsx';

const LayoutComponent = lazy(() => fallback(import('@/src/components/layout/layout.component.tsx'), 15e2));

function ExplorePage() {
  return (
    <Suspense fallback={<LoaderComponent />}>
      <LayoutComponent>
        <ExploreComponent />
      </LayoutComponent>
    </Suspense>
  );
}

export default ExplorePage;
