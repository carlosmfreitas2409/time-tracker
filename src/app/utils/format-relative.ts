import { formatDistanceToNowStrict, isToday, isYesterday } from 'date-fns';

export function formatRelative(date: Date) {
  if (isToday(date)) {
    return 'Today';
  }

  if (isYesterday(date)) {
    return 'Yesterday';
  }

  return formatDistanceToNowStrict(date, {
    addSuffix: true,
  });
}
