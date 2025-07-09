import { AppShell } from "@/components/app-shell";
import { TransactionsClient } from "@/components/transactions/transactions-client";

export default function TransactionsPage() {
  return (
    <AppShell>
      <div className="w-full">
        <header className="mb-8">
          <h1 className="text-3xl font-bold font-headline text-foreground">Transaction History</h1>
          <p className="text-muted-foreground">Review your buying and selling activity.</p>
        </header>
        <TransactionsClient />
      </div>
    </AppShell>
  );
}
