import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/auth/_layout"!
      <Outlet />
    </div>
  )
}
