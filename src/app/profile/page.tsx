import { AppShell } from "@/components/app-shell";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { userProfile, paymentMethods } from "@/lib/data";
import { Banknote, Landmark, Wallet, ShieldCheck, Pencil } from "lucide-react";

function ProfileDetailsCard() {
    return (
         <Card>
            <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Manage your personal details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue={userProfile.name} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue={userProfile.email} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="memberSince">Member Since</Label>
                    <Input id="memberSince" defaultValue={new Date(userProfile.memberSince).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })} readOnly />
                </div>
                <Button>Update Profile</Button>
            </CardContent>
        </Card>
    )
}

function KycStatusCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>KYC Status</CardTitle>
                <CardDescription>Your account verification status.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
                <ShieldCheck className="h-10 w-10 text-green-500" />
                <div>
                    <p className="font-semibold text-lg">{userProfile.kycStatus}</p>
                    <p className="text-sm text-muted-foreground">Your account is fully verified and secure.</p>
                </div>
            </CardContent>
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
  return (
    <AppShell>
      <div className="w-full">
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold font-headline text-foreground">My Profile</h1>
          <p className="text-muted-foreground">View and manage your account settings.</p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                <ProfileDetailsCard />
            </div>
            <div className="space-y-8">
                <KycStatusCard />
                <PaymentMethodsCard />
            </div>
        </div>
      </div>
    </AppShell>
  );
}
