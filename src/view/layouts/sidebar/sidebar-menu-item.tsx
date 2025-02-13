import { useRef } from 'react';

import { cn } from '@heroui/theme';

import { Button } from '@heroui/button';

import type {
  AnimatedIcon,
  AnimatedIconElement,
} from '@/assets/animated-icons/create-animated-icon';

type Item = {
  icon: AnimatedIcon;
  label: string;
  href: string;
};

interface SidebarMenuItemProps {
  item: Item;
  isActive: boolean;
}

export function SidebarMenuItem({ item, isActive }: SidebarMenuItemProps) {
  const iconRef = useRef<AnimatedIconElement>(null);

  return (
    <li className="relative">
      <Button
        variant="light"
        className={cn(
          'group-data-[state=collapsed]:!p-2.5 !transition-all h-9 w-full min-w-0 justify-start gap-3 rounded-lg px-3 text-foreground data-[hover=true]:bg-default/80',
          isActive &&
            'bg-primary text-primary-foreground data-[hover=true]:bg-primary/80',
        )}
        onMouseEnter={() => iconRef.current?.startAnimation()}
        onMouseLeave={() => iconRef.current?.stopAnimation()}
      >
        <item.icon ref={iconRef} className="size-4 shrink-0" />
        <span>{item.label}</span>
      </Button>
    </li>
  );
}
