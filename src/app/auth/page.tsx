'use client'

import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Logo } from '@/components/logo';
import { useSearchParams, useRouter } from 'next/navigation';
import { Checkbox } from '@/components/ui/checkbox';

function LoginForm() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" required />
      </div>
      <Link href="/dashboard">
        <Button className="w-full">Login</Button>
      </Link>
    </div>
  );
}

function SignupForm() {
  const router = useRouter();
  const [completeKyc, setCompleteKyc] = useState(false);

  const handleSignup = () => {
    if (completeKyc) {
      router.push('/kyc?from=signup');
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" type="text" placeholder="Ananya Sharma" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email-signup">Email</Label>
        <Input id="email-signup" type="email" placeholder="m@example.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password-signup">Password</Label>
        <Input id="password-signup" type="password" required />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="kyc" onCheckedChange={(checked) => setCompleteKyc(!!checked)} />
        <label
          htmlFor="kyc"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          I want to complete my KYC now (optional)
        </label>
      </div>
      <Button className="w-full" onClick={handleSignup}>Create Account</Button>
    </div>
  );
}

export default function AuthenticationPage() {
  const searchParams = useSearchParams();
  const defaultTab = searchParams.get('tab') || 'login';

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Welcome Back!</CardTitle>
                <CardDescription>Enter your credentials to access your account.</CardDescription>
              </CardHeader>
              <CardContent>
                <LoginForm />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle>Create an Account</CardTitle>
                <CardDescription>Join us and start your investment journey today.</CardDescription>
              </CardHeader>
              <CardContent>
                <SignupForm />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}