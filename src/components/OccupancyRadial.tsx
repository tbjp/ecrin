"use client";
import { ProgressCircle } from "@/components/ProgressCircle";
import { randomNumber } from "@/lib/randomNumber";

const data = [
  {
    name: "Occupancy",
    rate: randomNumber(70, 90),
    fill: "#FAE27C",
  },
];

export function OccupancyRadial() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <ProgressCircle value={data[0].rate} radius={80} strokeWidth={15}>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="text-3xl font-bold text-gray-900 dark:text-gray-50">
            {data[0].rate}%
          </div>
        </div>
      </ProgressCircle>
      <div className="text-xl font-medium text-gray-500 dark:text-gray-50">
        Occupancy
      </div>
      <p className="text-sm">Average occupancy rate for the next 7 days</p>
    </div>
  );
}

export default OccupancyRadial;
