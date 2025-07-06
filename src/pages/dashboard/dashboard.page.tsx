import { lazy, Suspense } from 'react';
import { fallback } from '@/src/shared/utils/fallback.ts';
import { LoaderComponent } from '@/src/components/common/loader/loader.component.tsx';
import { DebugComponent } from '@/src/components/debug/debug.component.tsx';
import { DashboardComponent } from '@/src/components/dashboard/dashboard.component.tsx';

const LayoutComponent = lazy(() => fallback(import('@/src/components/layout/layout.component.tsx'), 15e2));

function DashboardPage() {
  return (
    <Suspense fallback={<LoaderComponent />}>
      <LayoutComponent>
        <DebugComponent />
        <DashboardComponent />
      </LayoutComponent>
    </Suspense>
  );
}

export default DashboardPage;
