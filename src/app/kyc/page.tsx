

'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export default function KycPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get('from');
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    toast({
      title: "KYC Submitted!",
      description: "Your documents have been submitted for verification.",
    });

    if (from === 'buy') {
      router.push('/dashboard'); 
    } else {
      router.push('/dashboard'); 
    }
  };
  
  const handleDummyVerify = () => {
    sessionStorage.setItem('kycStatus', 'Verified');
    // Dispatch a custom event to notify other components of the change
    window.dispatchEvent(new Event('sessionStorageChange'));
    toast({
      title: "KYC Verified (Test Mode)",
      description: "You can now proceed with your transactions.",
    });
    router.push('/dashboard');
  }

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
        <CardFooter className="flex-col gap-4">
            <Button variant="outline" className="w-full" onClick={() => router.back()}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
            </Button>
            <Button variant="secondary" className="w-full" onClick={handleDummyVerify}>
                <ShieldCheck className="mr-2 h-4 w-4" />
                Verify KYC (for testing)
            </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
