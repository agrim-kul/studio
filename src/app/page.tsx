import { AppShell } from "@/components/app-shell";
import { PriceCard } from "@/components/dashboard/price-card";
import { TradeForm } from "@/components/dashboard/trade-form";
import { PortfolioSummary } from "@/components/dashboard/portfolio-summary";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="w-full space-y-6">
        <header>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Ananya!</p>
        </header>
        
        <div className="space-y-6">
          <PortfolioSummary />
          <PriceCard />
          <TradeForm />
          <RecentTransactions />
        </div>
      </div>
    </AppShell>
  );
}
