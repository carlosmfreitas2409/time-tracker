import { createFileRoute } from '@tanstack/react-router';

import { SignUpPage } from '@/view/pages/auth/sigin-up';

export const Route = createFileRoute('/auth/sign-up')({
  component: SignUpPage,
});
