// app/financials/page.tsx
"use client";

import { Title, Text } from "@/components/ui/Card";
import RevenueTable from "./RevenueTable";
import FinancialSummary from "./FinancialSummary";
import RevenueChart from "./RevenueChart";
import ExpenseChart from "./ExpenseChart";
import TopPropertiesTable from "./TopPropertiesTable";
import { randomNumber } from "@/lib/randomNumber";

export default function Financials() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-ecrinNavy">
          Financial Overview
        </h1>
        <Text>A summary of revenue, expenses, and profitability.</Text>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column - Summary and Top Properties */}
        <div className="space-y-6 lg:col-span-5">
          <FinancialSummary />
          <TopPropertiesTable properties={properties} />
          <RevenueTable properties={properties} />
        </div>

        {/* Right Column - Charts */}
        <div className="space-y-6 lg:col-span-7">
          <RevenueChart />
          <ExpenseChart />
        </div>
      </div>
    </div>
  );
}

const properties = [
  {
    property: "La Baguette Magique",
    Bookings: randomNumber(10, 24),
  },
  {
    property: "La Forêt",
    Bookings: randomNumber(25, 36),
  },
  {
    property: "Villa Sakura",
    Bookings: randomNumber(140, 190),
  },
  {
    property: "Maison du Pavillon",
    Bookings: randomNumber(191, 250),
  },
  {
    property: "Château Lumière",
    Bookings: randomNumber(50, 100),
  },
  {
    property: "Auberge Mystique",
    Bookings: randomNumber(80, 130),
  },
];
