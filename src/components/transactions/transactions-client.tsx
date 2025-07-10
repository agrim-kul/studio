'use client'

import { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { transactions } from "@/lib/data";
import type { Transaction } from "@/lib/types";
import { ScrollArea } from "@/components/ui/scroll-area";

export function TransactionsClient() {
  const [filterType, setFilterType] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredTransactions = useMemo(() => {
    return transactions
      .filter((tx) => {
        if (filterType === "all") return true;
        return tx.type.toLowerCase() === filterType;
      })
      .filter((tx) => {
        const search = searchTerm.toLowerCase();
        if (search === "") return true;
        return (
          tx.id.toLowerCase().includes(search) ||
          tx.amountINR.toString().includes(search) ||
          tx.amountGold.toString().includes(search) ||
          new Date(tx.date).toLocaleDateString('en-IN').includes(search)
        );
      });
  }, [filterType, searchTerm]);

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <Input
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:max-w-xs"
          />
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="buy">Buy</SelectItem>
              <SelectItem value="sell">Sell</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="text-right">Amount (INR)</TableHead>
                <TableHead className="text-right">Amount (Gold)</TableHead>
                <TableHead className="text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((tx: Transaction) => (
                  <TableRow key={tx.id}>
                    <TableCell>
                      {new Date(tx.date).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </TableCell>
                    <TableCell>
                      <span className={`font-semibold ${tx.type === 'Buy' ? 'text-green-600' : 'text-red-600'}`}>
                        {tx.type}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">₹{tx.amountINR.toLocaleString('en-IN')}</TableCell>
                    <TableCell className="text-right">{tx.amountGold.toFixed(4)}g</TableCell>
                    <TableCell className="text-center">
                        <Badge variant={tx.status === 'Completed' ? 'default' : 'secondary'} className={`whitespace-nowrap ${tx.status === 'Completed' ? 'bg-green-100 text-green-800' : tx.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                            {tx.status}
                        </Badge>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="h-24 text-center">
                    No transactions found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
