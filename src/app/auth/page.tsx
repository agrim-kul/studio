
import { Suspense } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { AuthenticationForm } from '@/components/auth/authentication-form';

export default function AuthenticationPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/">
            <span className="cursor-pointer">
              <Logo />
            </span>
          </Link>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <AuthenticationForm />
        </Suspense>
      </div>
    </div>
  );
}
