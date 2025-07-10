
import { Suspense } from 'react';
import { AppShell } from "@/components/app-shell";
import { ConfirmationContent } from '@/components/purchase-confirmation-client';

export default function PurchaseConfirmationPage() {
    return (
        <AppShell>
            <div className="flex justify-center items-center w-full">
                <Suspense fallback={<div>Loading...</div>}>
                  <ConfirmationContent />
                </Suspense>
            </div>
        </AppShell>
    );
}
