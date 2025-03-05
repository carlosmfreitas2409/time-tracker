import { useState } from 'react';
import { useLocation } from '@tanstack/react-router';

import { motion } from 'motion/react';

import { PanelLeft } from 'lucide-react';

import { Button } from '@heroui/button';

import { WorkspaceSwitcher } from './workspace-switcher';
import { SidebarMenuItem } from './sidebar-menu-item';
import { SidebarGroup, SidebarGroupLabel } from './sidebar-group';

import { navItems } from '../mock';
import { cn } from '@heroui/theme';
import { GlobResMark } from '@/assets/icons/globres-mark';

const SIDEBAR_COOKIE_NAME = '_tm_sidebar_state';
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

const SIDEBAR_WIDTH = '16rem';
const SIDEBAR_WIDTH_ICON = '3.25rem';

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
    <div
      data-state={state}
      className="group peer hidden md:block"
      style={
        {
          '--sidebar-width': SIDEBAR_WIDTH,
          '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
        } as React.CSSProperties
      }
    >
      <div className="relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear group-data-[state=collapsed]:w-[--sidebar-width-icon]" />

      <div className="fixed inset-y-0 left-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear group-data-[state=collapsed]:w-[--sidebar-width-icon] md:flex">
        <div className="flex h-full w-full flex-col">
          <div
            className={cn(
              'flex px-4 pb-2 md:pt-3.5',
              isOpen
                ? 'flex-row items-center justify-between'
                : 'flex-row items-center justify-between gap-y-4 px-2 md:flex-col md:items-start md:justify-start',
            )}
          >
            <GlobResMark className="size-9" />

            <motion.div
              key={isOpen ? 'header-expanded' : 'header-collapsed'}
              className={cn(
                'flex items-center gap-2',
                isOpen ? 'flex-row' : 'flex-row md:flex-col-reverse',
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Button
                variant="light"
                className="h-9 w-9 min-w-9 rounded-lg"
                isIconOnly
                onPress={toggleSidebar}
              >
                <PanelLeft className="size-4" />
                <span className="sr-only">Toggle Sidebar</span>
              </Button>

              <img
                src="https://github.com/carlosmfreitas2409.png"
                alt="Carlos Freitas"
                className="size-6 rounded-full ring-offset-1 transition-all hover:ring-2 hover:ring-default-300"
              />
            </motion.div>
          </div>

          {/* <div className="flex items-center justify-between p-4 pb-2 group-data-[state=collapsed]:px-3">
            <span className="font-medium text-black text-xl leading-5 transition-[width,opacity] duration-200 ease-linear group-data-[state=collapsed]:w-0 group-data-[state=collapsed]:opacity-0">
              timer
            </span>

            <div className="flex items-center gap-2">
              <Button
                variant="light"
                className="h-7 w-7 min-w-7 rounded-lg"
                isIconOnly
                onPress={toggleSidebar}
              >
                <PanelLeft className="size-4" />
                <span className="sr-only">Toggle Sidebar</span>
              </Button>

              <img
                src="https://github.com/carlosmfreitas2409.png"
                alt="Carlos Freitas"
                className="size-6 rounded-full ring-offset-1 transition-all hover:ring-2 hover:ring-default-300 group-data-[state=collapsed]:opacity-0"
              />
            </div>
          </div> */}

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
                          sidebarState={state}
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
