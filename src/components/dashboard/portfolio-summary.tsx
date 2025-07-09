import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { userProfile } from "@/lib/data";

export function PortfolioSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Portfolio</CardTitle>
        <CardDescription>Your current gold holdings and value.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Total Gold Balance</span>
          <span className="font-medium text-foreground">{userProfile.goldBalance.toFixed(4)}g</span>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Current Value</span>
          <span className="font-semibold text-lg text-primary">
            ₹{userProfile.accountValue.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
