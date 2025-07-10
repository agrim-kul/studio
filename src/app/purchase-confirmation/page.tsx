'use client';

import { AppShell } from "@/components/app-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useSearchParams, useRouter } from 'next/navigation';
import { CheckCircle, Download, ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function PurchaseConfirmationPage() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const amountInr = parseFloat(searchParams.get('amountInr') || '0');
    const amountGold = parseFloat(searchParams.get('amountGold') || '0');

    const handleDownloadInvoice = () => {
        // In a real app, this would trigger a PDF generation and download
        alert("Downloading GST Invoice...");
    };

    return (
        <AppShell>
            <div className="flex justify-center items-center w-full">
                <Card className="w-full max-w-2xl">
                    <CardHeader className="text-center">
                        <div className="mx-auto bg-green-100 rounded-full h-16 w-16 flex items-center justify-center">
                            <CheckCircle className="h-10 w-10 text-green-600" />
                        </div>
                        <CardTitle className="mt-4 text-2xl font-headline">Purchase Successful!</CardTitle>
                        <CardDescription>
                            Your gold purchase has been completed and added to your portfolio.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Separator />
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="text-muted-foreground">Transaction ID</div>
                            <div className="text-right font-mono">TXN{Date.now()}</div>
                            
                            <div className="text-muted-foreground">Date</div>
                            <div className="text-right font-medium">{new Date().toLocaleString('en-IN')}</div>
                            
                            <div className="text-muted-foreground">Gold Purchased</div>
                            <div className="text-right font-medium">{amountGold.toFixed(4)}g</div>

                            <div className="text-muted-foreground">Amount Paid</div>
                            <div className="text-right font-medium">₹{amountInr.toLocaleString('en-IN')}</div>
                        </div>
                        <Separator />
                    </CardContent>
                    <CardFooter className="flex flex-col sm:flex-row gap-4">
                        <Button variant="outline" className="w-full" onClick={() => router.push('/dashboard')}>
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Dashboard
                        </Button>
                        <Button className="w-full" onClick={handleDownloadInvoice}>
                            <Download className="mr-2 h-4 w-4" />
                            Download GST Invoice
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </AppShell>
    );
}
