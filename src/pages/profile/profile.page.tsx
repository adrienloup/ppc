import { lazy, Suspense } from 'react';
import { fallback } from '@/src/shared/utils/fallback.ts';
import { LoaderComponent } from '@/src/shared/components/loader/loader.component.tsx';
import { ProfileComponent } from '@/src/domains/account/interfaces/profile.component.tsx';
import { DebugComponent } from '@/src/domains/debug/interfaces/debug.component.tsx';

const LayoutComponent = lazy(() =>
  fallback(import('@/src/shared/components/layout/layout.component.tsx'), 1e3)
);

function ProfilePage() {
  return (
    <Suspense fallback={<LoaderComponent />}>
      <LayoutComponent>
        <DebugComponent />
        <ProfileComponent />
      </LayoutComponent>
    </Suspense>
  );
}

export default ProfilePage;
