
'use client'

import { useState, useEffect } from 'react';
import { AppShell } from "@/components/app-shell";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { userProfile as staticUserProfile, paymentMethods } from "@/lib/data";
import { Banknote, Landmark, Wallet, ShieldCheck, Pencil, ShieldAlert, ShieldClose } from "lucide-react";
import type { UserProfile } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { useKycStatus } from '@/hooks/use-kyc-status';

function ProfileDetailsCard({ profile }: { profile: UserProfile }) {
    return (
         <Card>
            <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Manage your personal details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue={profile.name} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue={profile.email} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="memberSince">Member Since</Label>
                    <Input id="memberSince" defaultValue={new Date(profile.memberSince).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })} readOnly />
                </div>
                <Button>Update Profile</Button>
            </CardContent>
        </Card>
    )
}

function KycStatusCard({ kycStatus, onVerify, onUnverify }: { kycStatus: UserProfile['kycStatus'], onVerify: () => void, onUnverify: () => void }) {
    const isVerified = kycStatus === 'Verified';

    return (
        <Card>
            <CardHeader>
                <CardTitle>KYC Status</CardTitle>
                <CardDescription>Your account verification status.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
                {isVerified ? (
                    <ShieldCheck className="h-10 w-10 text-green-500" />
                ) : (
                    <ShieldAlert className="h-10 w-10 text-yellow-500" />
                )}
                <div>
                    <p className={`font-semibold text-lg ${isVerified ? 'text-green-600' : 'text-yellow-600'}`}>
                        {kycStatus}
                    </p>
                    <p className="text-sm text-muted-foreground">
                        {isVerified ? "Your account is fully verified." : "Verification is pending."}
                    </p>
                </div>
            </CardContent>
            <CardFooter>
                {!isVerified ? (
                    <Button variant="secondary" className="w-full" onClick={onVerify}>
                        <ShieldCheck className="mr-2 h-4 w-4" />
                        Verify KYC (for testing)
                    </Button>
                ) : (
                    <Button variant="destructive" className="w-full" onClick={onUnverify}>
                        <ShieldClose className="mr-2 h-4 w-4" />
                        Unverify KYC (for testing)
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}

const iconMap: { [key: string]: React.ReactNode } = {
    'Bank Account': <Landmark className="h-6 w-6 text-muted-foreground" />,
    'UPI': <Banknote className="h-6 w-6 text-muted-foreground" />,
    'Wallet': <Wallet className="h-6 w-6 text-muted-foreground" />,
};

function PaymentMethodsCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Manage your linked payment options.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <ul className="space-y-3">
                    {paymentMethods.map(method => (
                        <li key={method.id} className="flex items-center justify-between rounded-md border p-3">
                            <div className="flex items-center gap-3">
                                {iconMap[method.type]}
                                <div>
                                    <p className="font-semibold text-base sm:text-sm">{method.provider} {method.isPrimary && <Badge variant="outline" className="ml-2 border-green-600 text-green-600">Primary</Badge>}</p>
                                    <p className="text-sm text-muted-foreground">{method.details}</p>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon">
                                <Pencil className="h-4 w-4" />
                            </Button>
                        </li>
                    ))}
                </ul>
                <Button variant="outline">Add New Method</Button>
            </CardContent>
        </Card>
    );
}


export default function ProfilePage() {
    const [userProfileData] = useState<UserProfile>(staticUserProfile);
    const kycStatus = useKycStatus();
    const { toast } = useToast();

    const handleDummyVerify = () => {
        sessionStorage.setItem('kycStatus', 'Verified');
        window.dispatchEvent(new Event('sessionStorageChange'));
        toast({
            title: "KYC Verified (Test Mode)",
            description: "Your account is now verified for this session.",
        });
    }

    const handleDummyUnverify = () => {
        sessionStorage.setItem('kycStatus', 'Pending');
        window.dispatchEvent(new Event('sessionStorageChange'));
        toast({
            title: "KYC Status Reset (Test Mode)",
            description: "Your account status has been reset to 'Pending'.",
            variant: "destructive",
        });
    }

  return (
    <AppShell>
      <div className="w-full">
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold font-headline text-foreground">My Profile</h1>
          <p className="text-muted-foreground">View and manage your account settings.</p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                <ProfileDetailsCard profile={userProfileData} />
            </div>
            <div className="space-y-8">
                <KycStatusCard 
                    kycStatus={kycStatus} 
                    onVerify={handleDummyVerify}
                    onUnverify={handleDummyUnverify} 
                />
                <PaymentMethodsCard />
            </div>
        </div>
      </div>
    </AppShell>
  );
}
