import { useState } from 'react';

import { cn } from '@heroui/theme';

import { CircleDollarSign, Clock, TrendingUp } from 'lucide-react';

import { Button } from '@heroui/button';
import { Card, CardBody } from '@heroui/card';

import { Sidebar } from '@/view/layouts/sidebar';

import { EyeToggle } from '@/view/components/eye-toggle';

import { ActivityGraphCard } from './components/activity-graph-card';
import { LastSevenDaysCard } from './components/last-seven-days-card';

export function DashboardPage() {
  const [isTotalBillingVisible, setIsTotalBillingVisible] = useState(false);

  return (
    <div className="flex h-full bg-neutral-100">
      <Sidebar />

      <div className="mt-2 flex-1 rounded-tl-2xl border bg-background">
        <div className="container py-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-2xl">Welcome back, Carlos!</h3>
              <p className="text-default-foreground text-sm">
                Track, manage and forecast your employee time and status.
              </p>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <Button variant="bordered" size="sm">
                Create new task
              </Button>
              <Button variant="bordered" size="sm">
                New tracker
              </Button>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              <Card shadow="none" className="border">
                <CardBody className="flex-row gap-4 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border bg-white">
                    <Clock className="size-5" />
                  </div>

                  <div>
                    <div className="flex h-6 items-center">
                      <span className="block text-sm">Total time</span>
                    </div>
                    <span className="mt-1 block font-semibold text-xl">
                      17h 48m
                    </span>
                  </div>

                  <div className="mt-auto ml-auto flex items-center gap-2 rounded-md border px-2 py-1">
                    <TrendingUp className="size-4 text-success-500" />
                    <span className="font-medium text-sm">2.4%</span>
                  </div>
                </CardBody>
              </Card>

              <Card shadow="none" className="border">
                <CardBody className="flex-row gap-4 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border bg-white">
                    <Clock className="size-5" />
                  </div>

                  <div>
                    <div className="flex h-6 items-center">
                      <span className="block text-sm">Billing time</span>
                    </div>
                    <span className="mt-1 block font-semibold text-xl">
                      17h 03m
                    </span>
                  </div>

                  <div className="mt-auto ml-auto flex items-center gap-2 rounded-md border px-2 py-1">
                    <TrendingUp className="size-4 text-success-500" />
                    <span className="font-medium text-sm">2.4%</span>
                  </div>
                </CardBody>
              </Card>

              <Card
                shadow="none"
                className="border md:col-span-2 xl:col-span-1"
              >
                <CardBody className="flex-row gap-4 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border bg-white">
                    <CircleDollarSign className="size-5" />
                  </div>

                  <div>
                    <div className="flex h-6 items-center">
                      <span className="block text-sm">Total billing</span>
                      <EyeToggle
                        pressed={isTotalBillingVisible}
                        onPressedChange={setIsTotalBillingVisible}
                        className="ml-2 h-6 w-6 min-w-6"
                      />
                    </div>

                    <div className="relative mt-1">
                      <div
                        className={cn(
                          'absolute inset-0 rounded-md bg-default opacity-100 transition-opacity',
                          isTotalBillingVisible && 'opacity-0',
                        )}
                      />

                      <span className="block font-semibold text-xl">
                        $1,380.22
                      </span>
                    </div>
                  </div>

                  <div className="mt-auto ml-auto flex items-center gap-2 rounded-md border px-2 py-1">
                    <TrendingUp className="size-4 text-success-500" />
                    <span className="font-medium text-sm">2.4%</span>
                  </div>
                </CardBody>
              </Card>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <LastSevenDaysCard />
              <ActivityGraphCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
