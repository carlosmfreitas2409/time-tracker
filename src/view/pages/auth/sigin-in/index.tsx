import { useState } from 'react';

import { ChevronRight, Eye, EyeOff, Lock, Mail } from 'lucide-react';

import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import { Checkbox } from '@heroui/checkbox';

import { GlobResMark } from '@/assets/icons/globres-mark';

export function SignInPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function toggleVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <div className="container mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GlobResMark />
          <h2 className="font-bold text-lg">GlobRes</h2>
        </div>

        <Button color="primary" variant="bordered" size="sm">
          Sign Up for free
          <ChevronRight className="size-4" />
        </Button>
      </div>

      <div className="flex max-w-xs flex-1 flex-col justify-center">
        <h1 className="font-bold text-2xl">Welcome to GlobRes</h1>

        <p className="mt-1 text-muted-foreground text-sm">
          Sign in your GlobRes account to access all your employee services.
        </p>

        <div className="mt-6 space-y-3">
          <Input
            type="email"
            label="Email"
            placeholder="Enter your email"
            startContent={<Mail className="size-5 text-muted-foreground" />}
          />

          <Input
            type={isPasswordVisible ? 'text' : 'password'}
            label="Password"
            placeholder="Enter your password"
            startContent={<Lock className="size-5 text-muted-foreground" />}
            endContent={
              <button
                type="button"
                className="text-muted-foreground focus:outline-none"
                aria-label="Toggle password visibility"
                onClick={toggleVisibility}
              >
                {isPasswordVisible ? (
                  <EyeOff className="pointer-events-none size-5" />
                ) : (
                  <Eye className="pointer-events-none size-5" />
                )}
              </button>
            }
          />

          <Button color="primary" className="w-full">
            Continue
          </Button>
        </div>

        <div className="mt-3 flex justify-between text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Checkbox size="sm">Remember Me</Checkbox>
          </div>

          <a href="/" className="text-primary underline">
            Forgot your password?
          </a>
        </div>

        <div className="mt-4">
          <span className="font-medium text-muted-foreground text-xs">
            Get started with GlobRes.{' '}
            <a href="/auth/sign-up" className="text-primary underline">
              Sign Up
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
