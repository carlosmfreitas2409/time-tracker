import { Outlet } from '@tanstack/react-router';

import { Sidebar } from './sidebar';

export function AppLayout() {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />

      <main className="flex min-h-svh flex-1 bg-sidebar md:pt-2">
        <div className="relative flex min-h-full w-full rounded-tl-2xl border-t border-l bg-background">
          <div className="container flex-1 py-6">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
