import { useRouter } from '@tanstack/react-router';
import { useTitle } from '@rcuse/core';
import { getPageTitle } from '@/utils/title';

export function usePageTitle() {
  const router = useRouter();
  const title = router.flatRoutes[0]?.options?.staticData?.title;

  useTitle(getPageTitle(title));
}
