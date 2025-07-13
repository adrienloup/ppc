import { lazy, Suspense } from 'react';
import { fallback } from '@/src/shared/utils/fallback.ts';
import { LoaderComponent } from '@/src/shared/ui/loader/loader.component.tsx';
import { TestComponent } from '@/src/domains/test/test.component.tsx';

const LayoutComponent = lazy(() => fallback(import('@/src/shared/ui/layout/layout.component.tsx'), 1e3));

function TestPage() {
  return (
    <Suspense fallback={<LoaderComponent />}>
      <LayoutComponent>
        <TestComponent />
      </LayoutComponent>
    </Suspense>
  );
}

export default TestPage;
