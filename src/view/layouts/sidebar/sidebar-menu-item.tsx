import { useRef } from 'react';

import { cn } from '@heroui/theme';

import { Button } from '@heroui/button';
import { Tooltip } from '@heroui/tooltip';

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
  sidebarState: 'collapsed' | 'expanded';
}

export function SidebarMenuItem({
  item,
  isActive,
  sidebarState,
}: SidebarMenuItemProps) {
  const iconRef = useRef<AnimatedIconElement>(null);

  return (
    <li className="relative">
      <Tooltip
        placement="right"
        content={item.label}
        hidden={sidebarState !== 'collapsed'}
        radius="sm"
      >
        <Button
          variant="light"
          className={cn(
            '!transition-all h-9 w-full min-w-0 justify-start gap-3 rounded-lg px-3 text-foreground data-[hover=true]:bg-default/80 group-data-[state=collapsed]:size-9 group-data-[state=collapsed]:p-2.5',
            isActive &&
              'bg-primary text-primary-foreground data-[hover=true]:bg-primary/80',
          )}
          onMouseEnter={() => iconRef.current?.startAnimation()}
          onMouseLeave={() => iconRef.current?.stopAnimation()}
        >
          <item.icon ref={iconRef} className="size-4 shrink-0" />
          <span className="truncate">{item.label}</span>
        </Button>
      </Tooltip>
    </li>
  );
}
