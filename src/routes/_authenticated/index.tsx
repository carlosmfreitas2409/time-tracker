import { createFileRoute } from '@tanstack/react-router';

import { DashboardPage } from '@/view/pages/dashboard';

export const Route = createFileRoute('/_authenticated/')({
  component: DashboardPage,
});
