import { lazy, Suspense } from 'react';
// import ExploreComponent from '@/src/domains/explore/explore.component.tsx';
import { useTitle } from '@/src/shared/hooks/useTitle.ts';
// import { LoaderComponent } from '@/src/shared/ui/loader/loader.component.tsx';
import { PageComponent } from '@/src/shared/ui/page/page.component.tsx';
// import { delay } from '@/src/shared/utils/delay.ts';

// const ExploreComponent = lazy(() => delay(import('@/src/domains/explore/explore.component.tsx'), 5e3));
const ExploreComponent = lazy(() => import('@/src/domains/explore/explore.component.tsx'));

function ExplorePage() {
  useTitle('explore');

  return (
    <Suspense fallback={<div>loading...</div>}>
      <PageComponent>
        <ExploreComponent />
      </PageComponent>
    </Suspense>
  );
}

export default ExplorePage;
