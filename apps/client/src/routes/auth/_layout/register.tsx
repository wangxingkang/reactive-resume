import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/_layout/register')({
  component: lazyRouteComponent(() => import('../-views/register')),
});
