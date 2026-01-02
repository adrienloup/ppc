import { lazy, Suspense } from 'react';
import { useTitle } from '@/src/shared/hooks/useTitle.ts';
import { LoaderComponent } from '@/src/shared/ui/loader/loader.component.tsx';
import { PageComponent } from '@/src/shared/ui/page/page.component.tsx';
import { delay } from '@/src/shared/utils/delay.ts';

const StoreComponent = lazy(() => delay(import('@/src/domains/store/store.component.tsx'), 5e3));

function StorePage() {
  useTitle('store');

  return (
    <Suspense fallback={<LoaderComponent />}>
      <PageComponent>
        <StoreComponent />
      </PageComponent>
    </Suspense>
  );
}

export default StorePage;
