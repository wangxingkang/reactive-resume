import { t } from '@lingui/core/macro';
import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/_layout/login')({
  component: lazyRouteComponent(() => import('../-views/login')),
  staticData: {
    title: t`Sign in to your account`,
  }
});
