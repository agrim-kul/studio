import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { userProfile } from "@/lib/data";

function GoldIcon() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
        <path d="M12 7h.01" />
      </svg>
    );
}

export function PortfolioSummary() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>My Portfolio</CardTitle>
        <CardDescription>Your current gold holdings and value.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Total Gold Balance</span>
          <span className="font-bold text-lg">{userProfile.goldBalance.toFixed(4)}g</span>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Current Value</span>
          <span className="font-bold text-lg text-primary">
            ₹{userProfile.accountValue.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
