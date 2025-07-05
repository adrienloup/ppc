import { lazy, Suspense } from 'react';
import { fallback } from '@/src/shared/utils/fallback.ts';
import { LoaderComponent } from '@/src/components/loader/loader.component.tsx';
import { DebugComponent } from '@/src/components/debug/debug.component.tsx';
import { ProfileComponent } from '@/src/components/profile/profile.component.tsx';

const LayoutComponent = lazy(() => fallback(import('@/src/components/layout/layout.component.tsx'), 15e2));

function ProfilePage() {
  console.log('ProfilePage');
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
