import { lazy, Suspense } from 'react';
import { useTitle } from '@/src/shared/hooks/useTitle.ts';
import { LoaderComponent } from '@/src/shared/ui/loader/loader.component.tsx';
import { PageComponent } from '@/src/shared/ui/page/page.component.tsx';
import { delay } from '@/src/shared/utils/delay.ts';

const ProfileComponent = lazy(() => delay(import('@/src/domains/explore/explore.component.tsx'), 5e3));

function ExplorePage() {
  useTitle('explore');

  return (
    <Suspense fallback={<LoaderComponent />}>
      <PageComponent>
        <ProfileComponent />
      </PageComponent>
    </Suspense>
  );
}

export default ExplorePage;
