import { cn } from '@heroui/theme';

import { eachDayOfInterval, format, startOfWeek, subDays } from 'date-fns';

import { Activity } from 'lucide-react';

import { Tooltip } from '@heroui/tooltip';
import { Card, CardHeader, CardBody } from '@heroui/card';

import { formatHumanReadableDuration } from '@/app/utils/format-human-readable-duration';

const lastDates = eachDayOfInterval({
  start: startOfWeek(subDays(new Date(), 50)),
  end: new Date(),
});

const data = lastDates.map((date) => ({
  date,
  duration: Math.floor(Math.random() * 10800),
}));

const getColor = (duration: number) => {
  if (duration === 0) return 'bg-gray-100 dark:bg-gray-800';
  if (duration <= 3600) return 'bg-green-200 dark:bg-green-900';
  if (duration <= 7200) return 'bg-green-300 dark:bg-green-700';
  if (duration <= 10800) return 'bg-green-400 dark:bg-green-600';
  return 'bg-green-500 dark:bg-green-500';
};

const months = [
  ...new Set(
    lastDates.map((date) => date.toLocaleString('default', { month: 'short' })),
  ),
];

const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export function ActivityGraphCard() {
  return (
    <Card shadow="none" className="border">
      <CardHeader className="border-b">
        <Activity className="mr-2 size-4" />
        <h4 className="font-semibold">Activity Graph</h4>
      </CardHeader>

      <CardBody>
        <div className="inline-block min-w-full">
          <div className="mb-2 grid grid-cols-5 gap-1 pl-5 text-default-500 text-xs">
            {months.map((month, index) => (
              <div
                key={month}
                className={cn('text-center', index !== 0 && 'col-span-2')}
              >
                {month}
              </div>
            ))}
          </div>

          <div className="flex">
            <div className="mr-2 flex flex-col justify-between gap-1 text-default-500 text-xs">
              {daysOfWeek.map((day, idx) => {
                const key = idx;

                return (
                  <div
                    key={key}
                    className="flex h-6 w-3 items-center justify-center"
                  >
                    {idx % 2 ? day : ''}
                  </div>
                );
              })}
            </div>

            <div className="grid flex-1 grid-flow-col grid-cols-8 grid-rows-7 gap-1">
              {data.map((item, idx) => {
                const key = idx;

                const formattedDate = format(item.date, 'dd MMM');
                const formattedDuration = formatHumanReadableDuration(
                  item.duration,
                );

                return (
                  <Tooltip
                    key={key}
                    content={`${formattedDuration} on ${formattedDate}`}
                    placement="bottom"
                    closeDelay={0}
                    disableAnimation
                  >
                    <div
                      className={cn(
                        'h-6 flex-1 rounded-sm',
                        getColor(item.duration),
                      )}
                    />
                  </Tooltip>
                );
              })}
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
