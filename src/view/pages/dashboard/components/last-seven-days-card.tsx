import { eachDayOfInterval, subDays } from 'date-fns';

import { BarChart, Bar } from 'recharts';
import { Calendar } from 'lucide-react';

import { Card, CardHeader, CardBody } from '@heroui/card';

import { formatRelative } from '@/app/utils/format-relative';
import { formatHumanReadableDuration } from '@/app/utils/format-human-readable-duration';

import { type ChartConfig, ChartContainer } from '@/view/components/ui/chart';

const lastDates = eachDayOfInterval({
  start: subDays(new Date(), 6),
  end: new Date(),
});

const data = lastDates
  .map((date) => ({
    date,
    duration: Math.floor(Math.random() * 10800),
    history: Array.from({ length: 7 }, () => Math.floor(Math.random() * 10800)),
  }))
  .sort((a, b) => b.date.getTime() - a.date.getTime());

const lastSevenDaysChartConfig = {
  time: {
    label: 'Time',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export function LastSevenDaysCard() {
  return (
    <Card shadow="none" className="border">
      <CardHeader className="border-b">
        <Calendar className="mr-2 size-4" />
        <h4 className="font-semibold">Last 7 days</h4>
      </CardHeader>

      <CardBody className="divide-y p-0">
        {data.map((item, idx) => {
          const key = idx;

          const chartData = item.history.map((duration) => ({
            time: duration,
          }));

          return (
            <div
              key={key}
              className="@container flex items-center justify-between gap-6 px-3 py-2"
            >
              <span className="w-full max-w-[75px] truncate text-default-500 text-sm">
                {formatRelative(new Date(item.date))}
              </span>

              <div className="@xs:flex hidden flex-1 items-center justify-center">
                <ChartContainer
                  config={lastSevenDaysChartConfig}
                  className="h-6 w-full max-w-20"
                >
                  <BarChart accessibilityLayer data={chartData}>
                    <Bar dataKey="time" fill="#8884d8" />
                  </BarChart>
                </ChartContainer>
              </div>

              <span className="font-medium text-default-500 text-sm">
                {formatHumanReadableDuration(item.duration)}
              </span>
            </div>
          );
        })}
      </CardBody>
    </Card>
  );
}
