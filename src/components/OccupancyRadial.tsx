"use client";
import { ProgressCircle } from "@/components/ProgressCircle";
import { randomNumber } from "@/lib/randomNumber";

const data = [
  {
    name: "Occupancy",
    rate: randomNumber(70, 90),
  },
];

export function OccupancyRadial() {
  return (
    <div className="flex flex-col items-center justify-between gap-4 h-full">
      <div className="flex flex-col items-center justify-center gap-4 h-full">
        <ProgressCircle
          value={data[0].rate}
          radius={80}
          strokeWidth={15}
          variant={"ecrin"}
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="text-3xl font-bold text-gray-900 dark:text-gray-50">
              {data[0].rate}%
            </div>
          </div>
        </ProgressCircle>

        <p className="text-sm">Average occupancy rate for the next 7 days</p>
      </div>
      <div className="text-xl font-medium text-gray-500 dark:text-gray-50">
        Occupancy
      </div>
    </div>
  );
}

export default OccupancyRadial;
