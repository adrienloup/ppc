import { lazy, Suspense } from 'react';
import { useTitle } from '@/src/shared/hooks/useTitle.ts';
import { LoaderComponent } from '@/src/shared/ui/loader/loader.component.tsx';
import { PageComponent } from '@/src/shared/ui/page/page.component.tsx';
import { delay } from '@/src/shared/utils/delay.ts';

const FactoryComponent = lazy(() =>
  delay(import('@/src/domains/factory/ui/factory/factory.component.tsx'), 5e3)
);

function FactoryPage() {
  useTitle('factory');

  return (
    <Suspense fallback={<LoaderComponent />}>
      <PageComponent>
        <FactoryComponent />
      </PageComponent>
    </Suspense>
  );
}

export default FactoryPage;
