import {
  Home,
  Clock,
  Users,
  ChartColumnDecreasing,
  FileStack,
} from '@/assets/animated-icons';

export const navItems = [
  {
    name: 'General',
    items: [
      {
        icon: Home,
        label: 'Home',
        href: '/',
      },
      {
        icon: Clock,
        label: 'Time',
        href: '/time',
      },
      {
        icon: ChartColumnDecreasing,
        label: 'Reporting',
        href: '/reporting',
      },
    ],
  },
  {
    name: 'Manage',
    items: [
      {
        icon: FileStack,
        label: 'Projects',
        href: '/projects',
      },
      {
        icon: Users,
        label: 'Members',
        href: '/members',
      },
    ],
  },
];
