import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/_layout/login')({
  component: lazyRouteComponent(() => import('../-views/login')),
});
