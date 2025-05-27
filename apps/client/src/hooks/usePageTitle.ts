import { useRouter, useLocation, type AnyRoute } from '@tanstack/react-router';
import { useTitle } from '@rcuse/core';
import { getPageTitle } from '@/utils/title';

const BASE_URL = import.meta.env.BASE_URL;

export function usePageTitle() {
  const router = useRouter();
  const { pathname } = useLocation();

  let path = `/${pathname.replace(new RegExp(`^${BASE_URL}?`), '')}`;
  if (path.length > 1) {
    path = path.replace(/\/$/, '');
  }

  // @ts-expect-error
  const route = router.routesByPath[path] as AnyRoute;
  const title = route?.options?.staticData?.title;

  useTitle(getPageTitle(title));
}
