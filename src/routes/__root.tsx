import { useEffect } from 'react';

import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import {
  createRootRoute,
  Outlet,
  ScrollRestoration,
  useRouter,
} from '@tanstack/react-router';

import { HeroUIProvider } from '@heroui/system';

import { authClient } from '@/app/lib/auth';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { navigate } = useRouter();

  const { data: session } = authClient.useSession();

  useEffect(() => {
    // if (!session?.user) {
    //   if (!location.pathname.startsWith('/auth')) {
    //     navigate({
    //       to: '/auth/sign-in',
    //       search: { redirect: location.href },
    //     });
    //   }
    // } else {
    //   navigate({
    //     to: '/',
    //   });
    // }
  }, [session, navigate]);

  return (
    <HeroUIProvider className="h-screen">
      <Outlet />

      <TanStackRouterDevtools />
      <ScrollRestoration />
    </HeroUIProvider>
  );
}
