import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { createRootRoute, Outlet } from '@tanstack/react-router';

import { HeroUIProvider } from '@heroui/system';

export const Route = createRootRoute({
  component: () => (
    <HeroUIProvider className="h-screen">
      <Outlet />
      <TanStackRouterDevtools />
    </HeroUIProvider>
  ),
});
