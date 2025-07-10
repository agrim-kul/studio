'use client'

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Banknote, Landmark, Wallet } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { userProfile } from '@/lib/data';

const LIVE_GOLD_PRICE = 9855.00; // per gram

const paymentOptions = [
    { id: 'upi', name: 'UPI', icon: <Banknote className="h-5 w-5" /> },
    { id: 'netbanking', name: 'Net Banking', icon: <Landmark className="h-5 w-5" /> },
    { id: 'wallet', name: 'Wallet', icon: <Wallet className="h-5 w-5" /> },
];

function BuyForm() {
    const { toast } = useToast();
    const router = useRouter();
    const [amountInr, setAmountInr] = useState('100');
    
    const amountGold = useMemo(() => {
        const inr = parseFloat(amountInr);
        if (isNaN(inr) || inr <= 0) return '0.0000';
        return (inr / LIVE_GOLD_PRICE).toFixed(4);
    }, [amountInr]);

    const handleBuy = () => {
        if (userProfile.kycStatus !== 'Verified') {
            router.push('/kyc?from=buy');
            return;
        }

        toast({
            title: "Purchase Processing!",
            description: `Your purchase of ${amountGold}g of gold for ₹${parseFloat(amountInr).toLocaleString('en-IN')} is being processed.`,
        });
        
        // Navigate to confirmation page with details
        router.push(`/purchase-confirmation?amountInr=${amountInr}&amountGold=${amountGold}`);
    }

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="buy-inr">Amount in INR</Label>
                <Input id="buy-inr" type="number" placeholder="e.g. ₹5000" value={amountInr} onChange={(e) => setAmountInr(e.target.value)} />
                 <p className="text-xs text-muted-foreground">Minimum purchase of ₹99.</p>
            </div>
            <div className="text-center text-sm text-muted-foreground">You get approx. <span className="font-bold text-primary">{amountGold}g</span> of gold</div>
             <div className="space-y-2">
                <Label>Select Payment Method</Label>
                <RadioGroup defaultValue="upi" className="grid grid-cols-3 gap-2 sm:gap-4 mt-2">
                    {paymentOptions.map(option => (
                        <div key={option.id}>
                            <RadioGroupItem value={option.id} id={option.id} className="peer sr-only" />
                            <Label htmlFor={option.id} className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 sm:p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary text-xs sm:text-sm">
                                {option.icon}
                                {option.name}
                            </Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>
            <Button size="lg" className="w-full" onClick={handleBuy} disabled={parseFloat(amountInr) < 99}>
                {userProfile.kycStatus !== 'Verified' ? 'Complete KYC to Buy' : 'Buy Gold'}
            </Button>
        </div>
    );
}

function SellForm() {
    const { toast } = useToast();
    const [amountGold, setAmountGold] = useState('1.0');

    const amountInr = useMemo(() => {
        const gold = parseFloat(amountGold);
        if (isNaN(gold) || gold <= 0) return '0.00';
        return (gold * LIVE_GOLD_PRICE).toFixed(2);
    }, [amountGold]);

    const handleSell = () => {
         toast({
            title: "Sale Successful!",
            description: `You have successfully sold ${amountGold}g of gold for ₹${parseFloat(amountInr).toLocaleString('en-IN')}.`,
        });
    }

    return (
         <div className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="sell-gold">Amount in Grams</Label>
                <Input id="sell-gold" type="number" placeholder="e.g., 1.5" value={amountGold} onChange={(e) => setAmountGold(e.target.value)} />
            </div>
            <div className="text-center text-sm text-muted-foreground">You get approx. <span className="font-bold text-primary">₹{amountInr}</span></div>
            <div className="space-y-2">
                <Label>Amount will be credited to:</Label>
                <div className="flex items-center justify-between rounded-md border p-3 mt-2">
                    <div className="flex items-center gap-2">
                        <Landmark className="h-5 w-5 text-muted-foreground" />
                        <div>
                            <p className="font-semibold">HDFC Bank</p>
                            <p className="text-sm text-muted-foreground">**** 1234</p>
                        </div>
                    </div>
                    <span className="text-xs font-semibold text-green-600">Primary</span>
                </div>
            </div>
            <Button size="lg" className="w-full" variant="secondary" onClick={handleSell} disabled={parseFloat(amountGold) <= 0}>
                Sell Gold
            </Button>
        </div>
    );
}

export function TradeForm() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Quick Trade</CardTitle>
                <CardDescription>Buy or sell gold instantly.</CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="buy" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="buy">Buy</TabsTrigger>
                        <TabsTrigger value="sell">Sell</TabsTrigger>
                    </TabsList>
                    <TabsContent value="buy" className="mt-6">
                        <BuyForm />
                    </TabsContent>
                    <TabsContent value="sell" className="mt-6">
                        <SellForm />
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
}
