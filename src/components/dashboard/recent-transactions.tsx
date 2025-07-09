import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { transactions } from "@/lib/data";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function RecentTransactions() {
  const recent = transactions.slice(0, 4);

  return (
    <Card className="shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>A summary of your latest transactions.</CardDescription>
        </div>
         <Button asChild variant="ghost" size="sm">
            <Link href="/transactions">View All</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {recent.map((tx) => (
            <li key={tx.id} className="flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                {tx.type === 'Buy' ? (
                  <ArrowDownLeft className="h-5 w-5 text-green-500" />
                ) : (
                  <ArrowUpRight className="h-5 w-5 text-red-500" />
                )}
              </div>
              <div className="ml-4 flex-1">
                <p className="font-medium">{tx.type} Gold</p>
                <p className="text-sm text-muted-foreground">{new Date(tx.date).toLocaleDateString('en-IN', { month: 'long', day: 'numeric' })}</p>
              </div>
              <div className={cn(
                  "font-semibold text-right",
                  tx.type === 'Buy' ? 'text-green-600' : 'text-red-600'
              )}>
                <p>₹{tx.amountINR.toLocaleString('en-IN')}</p>
                <p className="text-xs font-normal text-muted-foreground">{tx.amountGold.toFixed(3)}g</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
