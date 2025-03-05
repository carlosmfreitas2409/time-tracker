import { forwardRef } from 'react';

import { cn } from '@heroui/theme';

const SidebarGroup = forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative flex w-full min-w-0 flex-col px-4 py-2 group-data-[state=collapsed]:px-2',
          className,
        )}
        {...props}
      />
    );
  },
);

SidebarGroup.displayName = 'SidebarGroup';

const SidebarGroupLabel = forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'flex h-8 shrink-0 items-center font-medium text-default-500 text-xs transition-[margin,opacity] duration-200 ease-linear',
        'group-data-[state=collapsed]:-mt-8 group-data-[state=collapsed]:opacity-0',
        className,
      )}
      {...props}
    />
  );
});

export { SidebarGroup, SidebarGroupLabel };
