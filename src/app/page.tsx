import { AppShell } from "@/components/app-shell";
import { PriceCard } from "@/components/dashboard/price-card";
import { TradeForm } from "@/components/dashboard/trade-form";
import { PortfolioSummary } from "@/components/dashboard/portfolio-summary";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="w-full">
        <header className="mb-8">
          <h1 className="text-3xl font-bold font-headline text-gray-900 dark:text-gray-100">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, User!</p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <PriceCard />
            <TradeForm />
          </div>
          <div className="lg:col-span-1 space-y-8">
            <PortfolioSummary />
            <RecentTransactions />
          </div>
        </div>
      </div>
    </AppShell>
  );
}
