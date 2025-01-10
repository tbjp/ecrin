"use client";

import { BarChart } from "@/components/BarChart";
import { randomNumber } from "@/lib/randomNumber";

interface DataItem {
  property: string;
  Bookings: number;
}

const chartdata: DataItem[] = [
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
];

export const DashBarChart = () => (
  <BarChart
    className="h-80"
    data={chartdata}
    index="property"
    categories={["Bookings"]}
    xAxisLabel="Property"
    yAxisLabel="Bookings for next 30 days"
    showLegend={false}
  />
);
