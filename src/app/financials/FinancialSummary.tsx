"use client";

import { Card, Title, Text } from "@/components/ui/Card";

export default function FinancialSummary() {
  return (
    <Card className="p-4 space-y-4">
      <Title>Financial Summary</Title>
      <Text>Total Revenue: $1,250,000</Text>
      <Text>Total Expenses: $750,000</Text>
      <Text>Net Profit: $500,000</Text>
    </Card>
  );
}
