import { useState } from 'react';
import { useLocation } from '@tanstack/react-router';

import { ArrowLeftToLine } from 'lucide-react';

import { Button } from '@heroui/button';

import { WorkspaceSwitcher } from './workspace-switcher';
import { SidebarMenuItem } from './sidebar-menu-item';
import { SidebarGroup, SidebarGroupLabel } from './sidebar-group';

import { navItems } from '../mock';

const SIDEBAR_COOKIE_NAME = '_tm_sidebar_state';
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

export function Sidebar() {
  const { pathname } = useLocation();

  const [isOpen, setIsOpen] = useState(true);

  const state = isOpen ? 'expanded' : 'collapsed';

  function toggleSidebar() {
    const openState = !isOpen;

    setIsOpen(openState);

    document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
  }

  return (
    <div data-state={state} className="group peer hidden md:block">
      <div className="relative h-svh w-64 bg-transparent transition-width duration-200 ease-linear group-data-[state=collapsed]:w-[3.25rem]" />

      <div className="fixed inset-y-0 left-0 hidden h-svh w-64 transition-[left,right,width] duration-200 ease-linear group-data-[state=collapsed]:w-[3.25rem] md:flex">
        <div className="flex h-full w-full flex-col">
          <div className="flex items-center justify-between gap-2 p-4 pb-2 group-data-[state=collapsed]:px-2">
            <span className="font-medium text-black text-xl leading-5 group-data-[state=collapsed]:opacity-0">
              timer
            </span>

            <div className="flex items-center gap-2">
              <Button
                variant="light"
                className="h-7 w-7 min-w-7 rounded-lg group-data-[state=collapsed]:opacity-0"
                isIconOnly
                onPress={toggleSidebar}
              >
                <ArrowLeftToLine className="size-4" />
                <span className="sr-only">Toggle Sidebar</span>
              </Button>

              <img
                src="https://github.com/carlosmfreitas2409.png"
                alt="Carlos Freitas"
                className="size-6 rounded-full ring-offset-1 transition-all hover:ring-2 hover:ring-default-foreground/40"
              />
            </div>
          </div>

          <div className="flex shrink-0 px-4 py-2 group-data-[state=collapsed]:px-2">
            <WorkspaceSwitcher />
          </div>

          <nav className="flex min-h-0 flex-1 flex-col gap-1 overflow-auto group-data-[state=collapsed]:overflow-hidden">
            {navItems.map((item) => {
              return (
                <SidebarGroup key={item.name}>
                  <SidebarGroupLabel>{item.name}</SidebarGroupLabel>

                  <ul className="flex w-full min-w-0 flex-col gap-1">
                    {item.items.map((item) => {
                      return (
                        <SidebarMenuItem
                          key={item.label}
                          item={item}
                          isActive={pathname === item.href}
                        />
                      );
                    })}
                  </ul>
                </SidebarGroup>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
