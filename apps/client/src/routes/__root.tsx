import { Outlet, createRootRoute } from '@tanstack/react-router';
import { usePageTitle } from '@/hooks/usePageTitle';
import { Providers } from '../providers';

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  usePageTitle();

  return (
    <Providers>
      <Outlet />
    </Providers>
  )
}
