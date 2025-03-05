import { createFileRoute } from '@tanstack/react-router';

import { AppLayout } from '@/view/layouts/app';

export const Route = createFileRoute('/_authenticated')({
  component: AppLayout,
});
