'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

export function PriceCard() {
  const [price, setPrice] = useState(6950.75);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setPrice(prevPrice => prevPrice + (Math.random() - 0.5) * 10);
      setLastUpdated(new Date());
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">Live Gold Price (24K)</CardTitle>
        <TrendingUp className="h-4 w-4 text-green-500" />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-primary">
          ₹{price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          <span className="text-base font-normal text-muted-foreground">/gram</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          Last updated: {lastUpdated.toLocaleTimeString()}
        </p>
      </CardContent>
    </Card>
  );
}
