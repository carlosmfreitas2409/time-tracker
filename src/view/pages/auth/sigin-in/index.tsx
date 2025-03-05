import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Link } from '@tanstack/react-router';

import { ChevronRight, Eye, EyeOff, Lock, Mail } from 'lucide-react';

import { Button } from '@heroui/button';

import { authClient } from '@/app/lib/auth';

import { GlobResMark } from '@/assets/icons/globres-mark';
import { Google } from '@/assets/icons/google';

import { RHFForm, RHFInput, RHFCheckbox } from '@/view/components/rhf';

const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  rememberMe: z.boolean(),
});

type SignInForm = z.infer<typeof signInSchema>;

export function SignInPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const form = useForm<SignInForm>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const { formState, handleSubmit } = form;

  async function handleSignIn(data: SignInForm) {
    await authClient.signIn.email(data);
  }

  return (
    <div className="container relative flex min-h-screen flex-col py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GlobResMark />
          <h2 className="font-bold text-lg">GlobRes</h2>
        </div>

        <Button
          as={Link}
          to="/auth/sign-up"
          color="primary"
          variant="bordered"
          size="sm"
        >
          Sign Up for free
          <ChevronRight className="size-4" />
        </Button>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <div className="flex w-full max-w-sm flex-col gap-6 p-4">
          <div className="space-y-1">
            <h1 className="font-bold text-2xl">Welcome to Tracker</h1>
            <p className="text-default-500 text-sm">
              Sign in your Tracker account to access all your employee services.
            </p>
          </div>

          <div className="flex w-full flex-col gap-2">
            <RHFForm
              methods={form}
              onSubmit={handleSubmit(handleSignIn)}
              className="flex w-full flex-col gap-4"
            >
              <RHFInput
                type="email"
                name="email"
                label="Email"
                labelPlacement="outside"
                placeholder="Enter your email"
                startContent={<Mail className="size-5 text-default-500" />}
                isRequired
              />

              <RHFInput
                type={isPasswordVisible ? 'text' : 'password'}
                name="password"
                label="Password"
                labelPlacement="outside"
                placeholder="Enter your password"
                autoComplete="password"
                startContent={<Lock className="size-5 text-default-500" />}
                endContent={
                  <button
                    type="button"
                    className="text-default-500 focus:outline-none [&>svg]:pointer-events-none [&>svg]:size-4"
                    aria-label="Toggle password visibility"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  >
                    {isPasswordVisible ? <EyeOff /> : <Eye />}
                  </button>
                }
                isRequired
              />

              <div className="flex justify-between">
                <RHFCheckbox name="rememberMe" size="sm">
                  Remember Me
                </RHFCheckbox>

                <a href="/" className="text-primary text-sm underline">
                  Forgot your password?
                </a>
              </div>

              <Button
                type="submit"
                color="primary"
                className="w-full"
                isLoading={formState.isSubmitting}
              >
                Continue
              </Button>
            </RHFForm>

            <div className="my-2 flex w-full flex-shrink items-center justify-center gap-2">
              <div className="grow basis-0 border-b border-dashed" />
              <span className="text-default-500 text-xs uppercase leading-none">
                or
              </span>
              <div className="grow basis-0 border-b border-dashed" />
            </div>

            <Button variant="bordered" className="w-full">
              <Google />
              Continue with Google
            </Button>
          </div>

          <div className="w-full">
            <span className="font-medium text-default-500 text-xs">
              Get started with Tracker.{' '}
              <Link to="/auth/sign-up" className="text-primary underline">
                Sign Up
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
