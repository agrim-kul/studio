'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AppShell } from '@/components/app-shell'; 
import { useToast } from '@/hooks/use-toast';

export default function KycPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get('from');
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Here you would typically handle form submission, e.g., API call to submit KYC data.
    // For this simulation, we'll just show a success toast and redirect.

    toast({
      title: "KYC Submitted!",
      description: "Your documents have been submitted for verification.",
    });

    // In a real app, you would update the user's KYC status.
    // We'll simulate this by just navigating away.
    if (from === 'buy') {
      router.push('/dashboard'); // Go back to dashboard to retry buying
    } else {
      router.push('/dashboard'); // Default redirect
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Complete Your KYC</CardTitle>
          <CardDescription>
            {from === 'buy' 
              ? "KYC is required to buy gold. Please complete this mandatory step."
              : "Please provide your details for KYC verification."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="pan">PAN Card Number</Label>
              <Input id="pan" placeholder="ABCDE1234F" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pan-upload">Upload PAN Card</Label>
              <Input id="pan-upload" type="file" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="aadhaar">Aadhaar Card Number</Label>
              <Input id="aadhaar" placeholder="1234 5678 9012" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="aadhaar-upload">Upload Aadhaar Card</Label>
              <Input id="aadhaar-upload" type="file" required />
            </div>
            <Button type="submit" className="w-full">
              Submit for Verification
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
