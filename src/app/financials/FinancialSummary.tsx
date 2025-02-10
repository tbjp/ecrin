"use client";

import { Card, Title, Text } from "@/components/ui/Card";
import { randomNumber } from "@/lib/randomNumber";
import { formatJPY } from "@/lib/utils";

const revenue = randomNumber(10000000, 50000000);
const expenses = randomNumber(1000000, 25000000);
const netProfit = revenue - expenses;

export default function FinancialSummary() {
  return (
    <Card className="p-4 space-y-4">
      <Title>Financial Summary</Title>
      <Text>Total Revenue: {formatJPY(revenue)}</Text>
      <Text>Total Expenses: {formatJPY(expenses)}</Text>
      <Text>Net Profit: {formatJPY(netProfit)}</Text>
    </Card>
  );
}
