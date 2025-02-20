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
  <div>
    <BarChart
      className="h-80 pe-8 pt-3"
      data={chartdata}
      index="property"
      categories={["Bookings"]}
      showLegend={false}
    />
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="text-xl font-medium text-gray-500 dark:text-gray-50">
        Lowest and Highest Current Bookings
      </div>
    </div>
  </div>
);
