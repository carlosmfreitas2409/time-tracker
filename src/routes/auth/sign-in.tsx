import { createFileRoute } from '@tanstack/react-router';

import { SignInPage } from '@/view/pages/auth/sigin-in';

export const Route = createFileRoute('/auth/sign-in')({
  component: SignInPage,
});
