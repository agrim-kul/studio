import { AppShell } from "@/components/app-shell";
import { PriceCard } from "@/components/dashboard/price-card";
import { TradeForm } from "@/components/dashboard/trade-form";
import { PortfolioSummary } from "@/components/dashboard/portfolio-summary";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";
import { OffersCard } from "@/components/dashboard/offers-card";

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="w-full space-y-6">
        <header>
          <h1 className="text-3xl font-bold font-headline text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Ananya!</p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <PortfolioSummary />
            <PriceCard />
            <RecentTransactions />
          </div>
          <div className="lg:col-span-1 space-y-6">
             <TradeForm />
             <OffersCard />
          </div>
        </div>
      </div>
    </AppShell>
  );
}
