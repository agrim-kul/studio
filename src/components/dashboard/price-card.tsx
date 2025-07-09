'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

export function PriceCard() {
  const [price, setPrice] = useState(6950.75);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrice(prevPrice => prevPrice + (Math.random() - 0.5) * 10);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">Live Gold Price (24K)</CardTitle>
        <TrendingUp className="h-4 w-4 text-green-500" />
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-headline font-bold text-primary animate-shine">
          ₹{price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          <span className="text-lg font-body font-normal text-muted-foreground">/gram</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          Last updated: {new Date().toLocaleTimeString()}
        </p>
      </CardContent>
    </Card>
  );
}
