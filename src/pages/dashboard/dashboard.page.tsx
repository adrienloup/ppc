import { lazy, Suspense } from 'react';
import { fallback } from '@/src/shared/utils/fallback.ts';
import { LoaderComponent } from '@/src/shared/components/loader/loader.component.tsx';
import { DebugComponent } from '@/src/domains/debug/interfaces/debug.component.tsx';

const LayoutComponent = lazy(() =>
  fallback(import('@/src/shared/components/layout/layout.component.tsx'), 1e3)
);

function DashboardPage() {
  return (
    <Suspense fallback={<LoaderComponent />}>
      <LayoutComponent>
        <DebugComponent />
        <div>dashboard</div>
      </LayoutComponent>
    </Suspense>
  );
}

export default DashboardPage;
