import { intervalToDuration } from 'date-fns';

export function formatHumanReadableDuration(seconds: number) {
  const duration = intervalToDuration({ start: 0, end: seconds * 1000 });

  const hours = String(duration.hours || 0).padStart(2, '0');
  const minutes = String(duration.minutes || 0).padStart(2, '0');

  return `${hours}h ${minutes}m`;
}
