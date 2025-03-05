import { ChevronsUpDown, Settings, Plus } from 'lucide-react';

import { Button } from '@heroui/button';
import { Divider } from '@heroui/divider';
import { Popover, PopoverContent, PopoverTrigger } from '@heroui/popover';

export function WorkspaceSwitcher() {
  return (
    <Popover placement="right-start">
      <PopoverTrigger>
        <Button
          variant="light"
          className="!transition-all h-auto w-full min-w-0 shrink-0 justify-between p-2 aria-expanded:bg-default/80 data-[hover=true]:bg-default/80 group-data-[state=collapsed]:p-0"
        >
          <div className="flex items-center gap-2">
            <img
              src="https://api.dicebear.com/7.x/initials/svg?backgroundType=gradientLinear&fontFamily=Helvetica&fontSize=40&seed=Carlos%20test"
              alt="CT"
              className="size-8 rounded-full group-data-[state=collapsed]:size-9"
            />

            <div className="flex flex-col items-start">
              <span className="font-medium text-foreground text-sm leading-5">
                My workspace
              </span>
              <span className="text-default-500 text-xs">Free plan</span>
            </div>
          </div>

          <ChevronsUpDown className="size-4" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-64 p-0">
        <div className="w-full p-2">
          <Button variant="light" className="w-full justify-start px-2">
            <Settings className="mx-1.5 size-4" />
            <span className="truncate text-foreground">Workspace settings</span>
          </Button>
        </div>

        <Divider />

        <div className="w-full p-2">
          <span className="px-1 font-medium text-default-500 text-xs">
            Workspaces
          </span>

          <div className="mt-1 flex w-full flex-col gap-1">
            <Button variant="light" className="h-12 w-full justify-start px-2">
              <img
                src="https://api.dicebear.com/7.x/initials/svg?backgroundType=gradientLinear&fontFamily=Helvetica&fontSize=40&seed=Carlos%20test"
                alt="CT"
                className="size-7 rounded-full"
              />

              <div className="flex flex-col items-start overflow-hidden">
                <span className="w-full truncate text-foreground text-sm leading-5">
                  My workspace
                </span>
                <span className="truncate text-xs">Free plan</span>
              </div>
            </Button>

            <Button variant="light" className="w-full justify-start px-2">
              <Plus className="mx-1.5 size-4" />
              <span className="truncate text-foreground">
                Create new workspace
              </span>
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
