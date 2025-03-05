import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { cn } from '@heroui/theme';

import { Link } from '@tanstack/react-router';

import { ChevronRight, Eye, EyeOff, Lock, Mail, User } from 'lucide-react';

import { Button } from '@heroui/button';

import { authClient } from '@/app/lib/auth';

import { GlobResMark } from '@/assets/icons/globres-mark';

import { RHFForm, RHFInput } from '@/view/components/rhf';

const signUpSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

type SignUpForm = z.infer<typeof signUpSchema>;

export function SignUpPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const form = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const { formState, handleSubmit, watch } = form;

  const password = watch('password');

  async function handleSignUp(data: SignUpForm) {
    await authClient.signUp.email(data);
  }

  useEffect(() => {
    let strength = 0;

    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password) || /[$@#&!]/.test(password)) strength++;
    if (password.length >= 8) strength++;

    setPasswordStrength(strength);
  }, [password]);

  return (
    <div className="container relative flex min-h-screen flex-col py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GlobResMark />
          <h2 className="font-bold text-lg">GlobRes</h2>
        </div>

        <Button
          as={Link}
          to="/auth/sign-in"
          color="primary"
          variant="bordered"
          size="sm"
        >
          Sign In
          <ChevronRight className="size-4" />
        </Button>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <div className="flex w-full max-w-sm flex-col gap-6 p-4">
          <div className="space-y-1">
            <h1 className="font-bold text-2xl">Welcome to Tracker</h1>
            <p className="mt-1 text-default-500 text-sm">
              Sign up for free to access all your employee services.
            </p>
          </div>

          <RHFForm
            methods={form}
            onSubmit={handleSubmit(handleSignUp)}
            className="flex w-full flex-col gap-4"
          >
            <RHFInput
              name="name"
              label="Name"
              labelPlacement="outside"
              placeholder="Enter your name"
              autoComplete="name"
              startContent={<User className="size-5 text-default-500" />}
              isRequired
            />

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

            <div className="flex items-center justify-between gap-2">
              {[1, 2, 3, 4].map((indicator) => (
                <div
                  key={indicator}
                  className="relative h-[6px] flex-1 overflow-hidden rounded-lg"
                >
                  <div className={cn('h-full w-full bg-default-100')} />

                  <div
                    className={cn(
                      'absolute inset-0 w-0 transition-[width]',
                      indicator <= passwordStrength && 'w-full',
                      indicator === 1 && 'bg-danger',
                      indicator === 2 && 'bg-warning',
                      indicator === 3 && 'bg-warning/80',
                      indicator === 4 && 'bg-success',
                    )}
                  />
                </div>
              ))}
            </div>

            <Button
              type="submit"
              color="primary"
              className="w-full"
              isLoading={formState.isSubmitting}
            >
              Sign Up
            </Button>
          </RHFForm>

          <div className="w-full">
            <span className="font-medium text-default-500 text-xs">
              Already have an account?{' '}
              <Link to="/auth/sign-in" className="text-primary underline">
                Sign In
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
