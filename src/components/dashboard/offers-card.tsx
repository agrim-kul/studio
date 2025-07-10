import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const offers = [
    {
        title: "5% Extra Gold on First Purchase",
        code: "GOLDENSTART",
    },
    {
        title: "Zero Making Charges",
        code: "ZEROMAKING",
    },
    {
        title: "Refer & Earn 1g Gold",
        code: "REFER1G",
    }
];

export function OffersCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Special Offers</CardTitle>
        <CardDescription>Exclusive deals for you.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {offers.map((offer, index) => (
            <div key={index}>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="font-semibold">{offer.title}</p>
                        <p className="text-sm text-muted-foreground">Use code: <span className="font-mono text-primary">{offer.code}</span></p>
                    </div>
                    <Button variant="ghost" size="sm">Claim</Button>
                </div>
                {index < offers.length - 1 && <Separator className="mt-4" />}
            </div>
        ))}
      </CardContent>
    </Card>
  );
}
