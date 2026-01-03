import { lazy, Suspense } from 'react';
// import FactoryComponent from '@/src/domains/factory/factory/factory.component.tsx';
import { useTitle } from '@/src/shared/hooks/useTitle.ts';
// import { LoaderComponent } from '@/src/shared/ui/loader/loader.component.tsx';
import { PageComponent } from '@/src/shared/ui/page/page.component.tsx';
// import { delay } from '@/src/shared/utils/delay.ts';

// const FactoryComponent = lazy(() =>
//   delay(import('@/src/domains/factory/factory/factory.component.tsx'), 5e3)
// );

const FactoryComponent = lazy(() => import('@/src/domains/factory/factory/factory.component.tsx'));

function FactoryPage() {
  useTitle('factory');

  return (
    <Suspense fallback={<div>loading...</div>}>
      <PageComponent>
        <FactoryComponent />
      </PageComponent>
    </Suspense>
  );
}

export default FactoryPage;
