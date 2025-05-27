import { createFileRoute, Outlet } from '@tanstack/react-router';
import { useLingui } from '@lingui/react/macro';
import logo from '@/assets/backgrounds/login.webp';

export const Route = createFileRoute('/auth/_layout')({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useLingui();

  return (
    <div className="flex h-screen w-screen">
      <div className="relative flex w-full flex-col justify-center gap-y-8 px-12 sm:mx-auto sm:basis-[420px] lg:px-12">
        <Outlet />
      </div>

      <div className="relative hidden lg:block lg:flex-1">
        <img
          className="h-screen w-full object-cover object-center"
          alt="Open books on a table"
          src={logo}
        />

        <div className="absolute bottom-5 right-5 z-10 bg-primary/30 px-4 py-2 text-xs font-medium text-primary-foreground backdrop-blur-sm">
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://unsplash.com/photos/Oaqk7qqNh_c"
          >
            {t`Photograph by Patrick Tomasso`}
          </a>
        </div>
      </div>
    </div>
  )
}
