import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/_layout/verify-email')({
  component: lazyRouteComponent(() => import('../-views/verify-email')),
});
