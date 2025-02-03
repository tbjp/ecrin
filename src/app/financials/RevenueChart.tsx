"use client";

import { BarChart } from "@/components/BarChart";
import { Card, Title } from "@/components/ui/Card";

const data = [
  { month: "Jan", revenue: 20000 },
  { month: "Feb", revenue: 25000 },
  { month: "Mar", revenue: 22000 },
  { month: "Apr", revenue: 28000 },
  { month: "May", revenue: 30000 },
];

export default function RevenueChart() {
  return (
    <Card className="p-4">
      <Title>Monthly Revenue</Title>
      <BarChart
        data={data}
        index="month"
        categories={["revenue"]}
        colors={["ecrinMoss"]}
      />
    </Card>
  );
}
