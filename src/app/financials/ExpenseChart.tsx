// app/financials/ExpenseChart.tsx
"use client";

import { BarChart } from "@/components/BarChart";
import { Card, Title } from "@/components/ui/Card";

const data = [
  { month: "Jan", expenses: 12000 },
  { month: "Feb", expenses: 15000 },
  { month: "Mar", expenses: 13000 },
  { month: "Apr", expenses: 17000 },
  { month: "May", expenses: 16000 },
];

export default function ExpenseChart() {
  return (
    <Card className="p-4">
      <Title className="pb-4">Monthly Expenses</Title>
      <BarChart
        data={data}
        index="month"
        categories={["expenses"]}
        colors={["ecrinNavy"]}
        showLegend={false}
      />
    </Card>
  );
}
