import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/_layout/forgot-password')({
  component: lazyRouteComponent(() => import('../-views/forgot-password')),
});
