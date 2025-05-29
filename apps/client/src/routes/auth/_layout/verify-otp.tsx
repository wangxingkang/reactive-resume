import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/_layout/verify-otp')({
  component: lazyRouteComponent(() => import('../-views/verify-otp')),
});
