import { lazy, Suspense } from 'react';
import { LoaderComponent } from '@/src/shared/ui/loader/loader.component.tsx';
import { PageComponent } from '@/src/shared/ui/page/page.component.tsx';
import { delay } from '@/src/shared/utils/delay.ts';

const HomeComponent = lazy(() => delay(import('@/src/domains/home/home.component.tsx'), 5e3));

function HomePage() {
  return (
    <Suspense fallback={<LoaderComponent />}>
      <PageComponent>
        <HomeComponent />
      </PageComponent>
    </Suspense>
  );
}

export default HomePage;
